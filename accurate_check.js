const fs = require('fs');
const path = require('path');
const ROOT = process.argv[2] || '.';
const appContent = fs.readFileSync(path.join(ROOT,'app.js'), 'utf-8');
const massesContent = fs.readFileSync(path.join(ROOT,'data','masses-2026.js'), 'utf-8');
const {loadAppApi} = require(path.resolve(__dirname,'..','..','work','check_interlinear_replacements.js'));

function extractBalanced(content, marker, openChar, closeChar) {
  const i = content.indexOf(marker);
  const start = content.indexOf(openChar, i);
  let depth = 0, k = start;
  while (true) {
    if (content[k] === openChar) depth++;
    else if (content[k] === closeChar) { depth--; if (depth === 0) break; }
    k++;
  }
  return content.slice(start, k + 1);
}

// Load the same complete function graph as the live app. This stays reliable
// when one alignment function begins using a new helper.
const {pairedLineSegments,confirmedCorrespondenceSpecs} = loadAppApi();

function normalizeWord(word){
  return String(word ?? '').toLocaleLowerCase('la').replace(/[æǽ]/g,'ae').replace(/[œ]/g,'oe').normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z]/g,'');
}
function correspondenceWordTokens(text) {
  const source = String(text ?? '');
  const marker = source.match(/^(\s*(?:[℣℟]|[PSM])\.\s*)/u);
  const offset = marker?.[1]?.length || 0;
  const body = source.slice(offset);
  const pattern = /[\p{L}\p{M}]+(?:['’][\p{L}\p{M}]+)?|\d+/gu;
  return [...body.matchAll(pattern)].map(m => m[0]);
}
function correspondenceTextKey(text){ return correspondenceWordTokens(text).map(normalizeWord).join(' '); }

const coveredByLatin = new Map();
for (const s of confirmedCorrespondenceSpecs) {
  const lk = correspondenceTextKey(s.latin);
  if (!coveredByLatin.has(lk)) coveredByLatin.set(lk, new Map());
  coveredByLatin.get(lk).set(correspondenceTextKey(s.english), s.english);
}

const i0 = massesContent.indexOf('window.AD_ALTARE_MASS_LIBRARIES["2026"]');
const objText = extractBalanced(massesContent.slice(i0), 'window.AD_ALTARE_MASS_LIBRARIES', '{', '}');
const lib = JSON.parse(objText);

function checkSection(dateKey, secId, verbose) {
  const date = lib.dates[dateKey];
  const sec = (date.sections||[]).find(s => s.id === secId);
  if (!sec) return {status:'MISSING'};
  let total=0, covered=0;
  const uncoveredList = [];
  for (const block of sec.blocks||[]) {
    const segments = pairedLineSegments(block.la, block.en);
    for (const seg of segments) {
      const la = seg.latin.trim(), en = seg.english.trim();
      if (!la || !en) continue;
      if (correspondenceWordTokens(la).length < 3) continue;
      total++;
      const variants = coveredByLatin.get(correspondenceTextKey(la));
      const isCovered = variants && variants.has(correspondenceTextKey(en));
      if (isCovered) covered++;
      else uncoveredList.push({la,en});
    }
  }
  return {status: covered + '/' + total, uncoveredList};
}

module.exports = { checkSection, lib };

if (require.main === module) {
  const octoberKeys = Object.keys(lib.dates).filter(d => d.startsWith('2026-10')).sort();
  for (const d of octoberKeys) {
    const date = lib.dates[d];
    const l = checkSection(d,'lesson');
    const g = checkSection(d,'gradual');
    const ev = checkSection(d,'gospel');
    console.log(d, date.title.slice(0,45), '| Lesson:', l.status, '| Gradual:', g.status, '| Gospel:', ev.status);
  }
}

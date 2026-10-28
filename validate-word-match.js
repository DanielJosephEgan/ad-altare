#!/usr/bin/env node
/**
 * Ad Altare Word Match validator
 * ================================
 * Run this from the latin-mass-app/ folder (or latin-mass-app.Claude/):
 *
 *     node validate-word-match.js
 *
 * It catches three kinds of problems that have each bitten this project before,
 * none of which "node --check" or a casual read-through will catch:
 *
 *   A) WORDING MISMATCHES — a liturgical text (e.g. an Introit reused on
 *      several days) has a completed Word Match entry for ONE phrasing, but a
 *      date/section uses slightly different wording for the same Latin. The app
 *      now fails safely: the English remains plain until that exact variant is
 *      reviewed. These variants are reported as coverage work, not as proof of
 *      an incorrect display.
 *
 *   B) DICTIONARY QUALITY — the auto-generated lexicon (data/latin-lexicon.js)
 *      sometimes merges several unrelated Latin headwords into one entry, so
 *      tapping a word shows a wrong/unrelated definition (the "ego" -> "me"
 *      and "ero" -> "them / horse; steed" bugs). This flags words, among
 *      those actually used in the Mass texts, whose generated dictionary
 *      entry doesn't share a plausible stem with the word itself.
 *
 *   C) STRUCTURAL INTEGRITY of confirmedCorrespondenceSpecs — malformed
 *      "links" entries (holes, wrong shapes) that pass node --check but can
 *      crash or silently misbehave at runtime (the known double-comma/
 *      array-hole pitfall from the runbook).
 *
 * This script is READ-ONLY. It never modifies app.js or the data files.
 * It prints a report and exits non-zero for structural failures or if the app
 * no longer contains its safe plain-English fallback. Categories A and B are
 * advisory coverage/quality queues.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || '.';
const appPath = path.join(ROOT, 'app.js');
const lexPath = path.join(ROOT, 'data', 'latin-lexicon.js');
const overridePath = path.join(ROOT, 'data', 'word-match-overrides.js');
const massesPath = path.join(ROOT, 'data', 'masses-2026.js');

for (const p of [appPath, lexPath, overridePath, massesPath]) {
  if (!fs.existsSync(p)) {
    console.error(`Cannot find ${p}. Run this script with the app folder as an argument, e.g.:\n  node validate-word-match.js /path/to/latin-mass-app`);
    process.exit(2);
  }
}

const appContent = fs.readFileSync(appPath, 'utf-8');
const lexContent = fs.readFileSync(lexPath, 'utf-8');
const overrideContent = fs.readFileSync(overridePath, 'utf-8');
const massesContent = fs.readFileSync(massesPath, 'utf-8');

// ---------- shared helpers (mirrors the real app.js logic) ----------

function normalizeWord(word) {
  return String(word ?? '')
    .toLocaleLowerCase('la')
    .replace(/[æǽ]/g, 'ae')
    .replace(/[œ]/g, 'oe')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z]/g, '');
}
function tokenizeWords(text) {
  // Mirrors the real app's correspondenceWordTokens() pattern exactly
  // (app.js, function correspondenceWordTokens). Earlier versions of this
  // script used a narrower [A-Za-zÀ-ÖØ-öø-ÿ] range, which does NOT include
  // ligatures like œ or accented-ligature letters like ǽ (used throughout
  // the Mass texts, e.g. "sǽcula", "cœlis") and silently split those words
  // into bogus fragments (e.g. "cœlis" -> "c", "œ", "lis"), producing false
  // positives in both checks below. \p{L}\p{M} (any letter + any combining
  // mark) is what the real app uses and is the correct pattern here too.
  return String(text).match(/[\p{L}\p{M}]+/gu) || [];
}
const SPEAKER_MARKER = /^\s*(?:[\u2123\u211f]|[PSM])\.\s*/u;
function stripSpeakerMarker(text) {
  return String(text ?? '').replace(SPEAKER_MARKER, '');
}
function correspondenceTextKey(text) {
  return tokenizeWords(stripSpeakerMarker(text)).map(normalizeWord).join(' ');
}
function extractBalanced(content, marker, openChar, closeChar) {
  const i = content.indexOf(marker);
  if (i === -1) throw new Error(`marker not found: ${marker}`);
  const start = content.indexOf(openChar, i);
  let depth = 0, k = start;
  while (true) {
    if (content[k] === openChar) depth++;
    else if (content[k] === closeChar) { depth--; if (depth === 0) break; }
    k++;
  }
  return content.slice(start, k + 1);
}

// ---------- load everything ----------

const generatedLexicon = JSON.parse(
  lexContent.replace(/^window\.AD_ALTARE_LATIN_LEXICON\s*=\s*/, '').replace(/;\s*$/, '')
);

const vocabularyLexicon = (new Function('return ' + extractBalanced(appContent, 'const vocabularyLexicon = {', '{', '}')))();

const confirmedCorrespondenceSpecs = [
  ...(new Function('return ' + extractBalanced(appContent, 'const confirmedCorrespondenceSpecs = [', '[', ']')))(),
  ...JSON.parse(overrideContent.replace(/^window\.AD_ALTARE_WORD_MATCH_OVERRIDES\s*=\s*/, '').replace(/;\s*$/, ''))
];

// masses-2026.js is a few `window.AD_ALTARE_MASS_LIBRARIES["YEAR"] = {...};` statements.
// Pull out every balanced {...} JSON payload assigned that way and merge them.
const massLibraries = {};
{
  const re = /window\.AD_ALTARE_MASS_LIBRARIES\["(\d+)"\]\s*=\s*\{/g;
  let m;
  while ((m = re.exec(massesContent)) !== null) {
    const year = m[1];
    const objText = extractBalanced(massesContent.slice(m.index), 'window.AD_ALTARE_MASS_LIBRARIES', '{', '}');
    massLibraries[year] = JSON.parse(objText);
  }
}

const vocabularyFormCorrections = new Map([
  ['tua', 'tuus'],
  ['altare', 'altare'],
]);
const vocabularyForms = new Map();
Object.values(vocabularyLexicon).forEach(entry => {
  (entry.forms || []).forEach(form => vocabularyForms.set(normalizeWord(form), entry.key));
});
function vocabularyKeyForWord(word) {
  const normalized = normalizeWord(word);
  return vocabularyFormCorrections.get(normalized) || vocabularyForms.get(normalized) || generatedLexicon.formIndex?.[normalized] || normalized;
}

// ---------- CHECK A: wording mismatches / coverage gaps ----------

// Build: latinKey -> Set(englishKey) that ARE covered, and latinKey -> example english text
const coveredByLatin = new Map();
for (const spec of confirmedCorrespondenceSpecs) {
  const lk = correspondenceTextKey(spec.latin);
  if (!coveredByLatin.has(lk)) coveredByLatin.set(lk, new Map());
  coveredByLatin.get(lk).set(correspondenceTextKey(spec.english), spec.english);
}

function walkMassBlocks(libraries, cb) {
  Object.entries(libraries).forEach(([year, library]) => {
    Object.entries(library.dates || {}).forEach(([date, mass]) => {
      (mass.sections || []).forEach((section, sectionIndex) => {
        (section.blocks || []).forEach((block, blockIndex) => {
          if (typeof block.la !== 'string' || typeof block.en !== 'string') return;
          cb(block.la, block.en, {
            year,
            date,
            massTitle:mass.title || '',
            sectionId:section.id || '',
            sectionTitle:section.title || '',
            sectionIndex,
            blockIndex
          });
        });
      });
    });
  });
}

const mismatches = [];
const gaps = new Map();
const seenPairs = new Set();

walkMassBlocks(massLibraries, (laBlock, enBlock, context) => {
  // Only trust line-by-line pairing when BOTH sides split into the same
  // number of non-blank lines. When counts differ (a rubric/stage-direction
  // inserted in only one language, different line-wrapping, etc.), index-based
  // pairing silently aligns unrelated lines (e.g. "Et cum spiritu tuo" against
  // "Let us pray") and produces false "mismatches" that are really a bug in
  // this script, not in the app. Skip those blocks entirely instead of
  // guessing.
  const laLines = String(laBlock).split('\n').map(s => s.trim()).filter(Boolean);
  const enLines = String(enBlock).split('\n').map(s => s.trim()).filter(Boolean);
  if (laLines.length !== enLines.length) return;
  const n = laLines.length;
  for (let i = 0; i < n; i++) {
    const la = laLines[i];
    const en = enLines[i];
    const laWords = tokenizeWords(la);
    if (laWords.length < 3) continue; // skip short citations like "Ps 77:1"
    const lk = correspondenceTextKey(la);
    const ek = correspondenceTextKey(en);
    const pairKey = lk + '||' + ek;
    if (seenPairs.has(pairKey)) continue;
    seenPairs.add(pairKey);

    const englishVariants = coveredByLatin.get(lk);
    if (!englishVariants) {
      if (!gaps.has(pairKey)) gaps.set(pairKey,{
        latin:la,
        english:en,
        context:{...context,lineIndex:i}
      });
      continue;
    }
    if (!englishVariants.has(ek)) {
      mismatches.push({
        latin: la,
        thisEnglish: en,
        existingEnglish: [...englishVariants.values()],
        context:{...context,lineIndex:i},
      });
    }
  }
});

// ---------- CHECK B: dictionary quality (advisory) ----------

const freq = new Map();
for (const spec of confirmedCorrespondenceSpecs) {
  for (const w of tokenizeWords(spec.latin)) {
    const norm = normalizeWord(w);
    if (norm) freq.set(norm, (freq.get(norm) || 0) + 1);
  }
}
function lcp(a, b) {
  let n = 0;
  while (n < a.length && n < b.length && a[n] === b[n]) n++;
  return n;
}
const dictSuspects = [];
for (const [surface, count] of freq.entries()) {
  const key = vocabularyKeyForWord(surface);
  if (key in vocabularyLexicon) continue; // hand-curated, trusted
  const entry = generatedLexicon.entries[key];
  if (!entry) continue; // coverage gap, not a wrongness bug — not reported here
  const lemmaFirstToken = normalizeWord(String(entry.lemma).split(/[,\s]/)[0] || '');
  if (surface.length >= 3 && lcp(surface, lemmaFirstToken) < 2) {
    dictSuspects.push({ surface, count, key, lemma: entry.lemma, meaning: entry.meaning });
  }
}
dictSuspects.sort((a, b) => b.count - a.count);

// ---------- CHECK C: structural integrity of links ----------

const structuralIssues = [];
confirmedCorrespondenceSpecs.forEach((spec, i) => {
  if (!Array.isArray(spec.links)) {
    structuralIssues.push(`spec #${i} (${spec.latin.slice(0, 40)}...): links is not an array`);
    return;
  }
  spec.links.forEach((link, j) => {
    if (!Array.isArray(link) || link.length < 2) {
      structuralIssues.push(`spec #${i} link #${j}: malformed link shape ${JSON.stringify(link)}`);
      return;
    }
    const [latinIdxOrIdxs, ...englishGroups] = link;
    if (latinIdxOrIdxs === undefined || latinIdxOrIdxs === null) {
      structuralIssues.push(`spec #${i} link #${j}: missing latin index (likely array hole from a bad splice)`);
    }
    englishGroups.forEach((g, gi) => {
      if (!Array.isArray(g)) {
        structuralIssues.push(`spec #${i} link #${j} group #${gi}: english group is not an array`);
      } else if (g.some(v => v === undefined || v === null)) {
        structuralIssues.push(`spec #${i} link #${j} group #${gi}: contains a hole (undefined/null index)`);
      }
    });
  });
});

// ---------- CHECK D: safe unreviewed-line behavior ----------

const safeFallbackIssues = [];
const englishMarkupStart = appContent.indexOf('function englishMarkupLine(');
const englishMarkupEnd = appContent.indexOf('\nfunction englishMarkup(', englishMarkupStart);
const englishMarkupBody = englishMarkupStart >= 0 && englishMarkupEnd > englishMarkupStart
  ? appContent.slice(englishMarkupStart, englishMarkupEnd)
  : '';
if (!englishMarkupBody) {
  safeFallbackIssues.push('Could not locate englishMarkupLine() in app.js.');
} else {
  if (!englishMarkupBody.includes("return escapeHtml(String(text ?? ''));")) {
    safeFallbackIssues.push('Unreviewed English lines do not have the required plain-text fallback.');
  }
  if (englishMarkupBody.includes('activeEnglishEntries(')) {
    safeFallbackIssues.push('Unreviewed English lines still invoke dictionary-based replacement guessing.');
  }
}

// ---------- report ----------

console.log('='.repeat(72));
console.log('Ad Altare Word Match validation report');
console.log('='.repeat(72));

console.log(`\n[A] UNREVIEWED WORDING VARIANTS (same Latin, different English wording than`);
console.log(`    an existing reviewed map — displayed safely as plain English):`);
if (!mismatches.length) {
  console.log('    none found.');
} else {
  mismatches.forEach(m => {
    console.log(`\n  AT:     ${m.context.date} · ${m.context.sectionTitle} · block ${m.context.blockIndex + 1}, line ${m.context.lineIndex + 1}`);
    console.log(`\n  LATIN:  ${m.latin}`);
    console.log(`  THIS EN:     ${m.thisEnglish}`);
    m.existingEnglish.forEach(e => console.log(`  COVERED EN:  ${e}`));
  });
}

console.log(`\n[A2] COVERAGE GAPS (no Word Match entry exists yet for this Latin line —`);
console.log(`     expected for sections not yet worked on; not itself a bug):`);
console.log(`    ${gaps.size} distinct uncovered lines.`);
if (process.argv.includes('--list-gaps') && gaps.size) {
  const bySection = new Map();
  [...gaps.values()].forEach(gap => {
    const key = `${gap.context.sectionId}||${gap.context.sectionTitle}`;
    if (!bySection.has(key)) bySection.set(key,[]);
    bySection.get(key).push(gap);
  });
  [...bySection.entries()]
    .sort((a,b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .forEach(([key,items]) => {
      const [sectionId,sectionTitle] = key.split('||');
      console.log(`\n  SECTION: ${sectionTitle} [${sectionId}] — ${items.length}`);
      items.forEach(item => {
        console.log(`    ${item.context.date} · block ${item.context.blockIndex + 1}, line ${item.context.lineIndex + 1}`);
        console.log(`      LA: ${item.latin}`);
        console.log(`      EN: ${item.english}`);
      });
    });
}

console.log(`\n[B] DICTIONARY QUALITY — ADVISORY (word's generated dictionary entry shares`);
console.log(`    no stem with the word itself; many of these are FALSE POSITIVES from`);
console.log(`    normal Latin irregular verbs/pronouns — review each by hand before fixing):`);
if (!dictSuspects.length) {
  console.log('    none found.');
} else {
  dictSuspects.slice(0, 50).forEach(s => {
    console.log(`    ${s.surface} (x${s.count}) -> key='${s.key}' lemma='${s.lemma}' meaning='${s.meaning}'`);
  });
  if (dictSuspects.length > 50) console.log(`    ... and ${dictSuspects.length - 50} more (lower frequency).`);
}

console.log(`\n[C] STRUCTURAL INTEGRITY of confirmedCorrespondenceSpecs links:`);
if (!structuralIssues.length) {
  console.log('    none found — no array holes or malformed link shapes.');
} else {
  structuralIssues.forEach(s => console.log('    ' + s));
}

console.log(`\n[D] SAFE FALLBACK for English lines without an exact reviewed map:`);
if (!safeFallbackIssues.length) {
  console.log('    passed — unreviewed lines remain plain; the app does not guess.');
} else {
  safeFallbackIssues.forEach(s => console.log('    ' + s));
}

console.log('\n' + '='.repeat(72));
const hardFailures = structuralIssues.length + safeFallbackIssues.length;
console.log(`Summary: ${mismatches.length} safe wording variant(s), ${gaps.size} coverage gap(s, informational), ${dictSuspects.length} dictionary advisory item(s), ${structuralIssues.length} structural issue(s), ${safeFallbackIssues.length} unsafe fallback issue(s).`);
process.exit(hardFailures > 0 ? 1 : 0);

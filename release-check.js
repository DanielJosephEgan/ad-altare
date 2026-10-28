#!/usr/bin/env node
/** Hard release checks for the canonical Ad Altare beta source. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const failures = [];
const pass = message => console.log(`PASS  ${message}`);
const fail = message => { failures.push(message); console.error(`FAIL  ${message}`); };
const read = relative => fs.readFileSync(path.join(ROOT, relative), 'utf8');

const app = read('app.js');
const index = read('index.html');
const worker = read('service-worker.js');
const readme = read('README.md');

const version = app.match(/const APP_VERSION = '([^']+)'/)?.[1];
if (version && index.includes('id="appVersion"') && worker.includes(version.replaceAll('.', '-'))) {
  pass(`version ${version} is visible and cache-versioned`);
} else {
  fail('app version, visible label, and service-worker cache version are not synchronized');
}

if (readme.includes('authoritative working and release source')) pass('canonical source is documented');
else fail('README does not identify this folder as the canonical source');

const scriptSources = [...index.matchAll(/<script\s+src="([^"]+)"/g)].map(match => match[1]);
for (const source of scriptSources) {
  if (!fs.existsSync(path.join(ROOT, source))) fail(`index references missing script: ${source}`);
}
if (!failures.some(item => item.startsWith('index references missing script'))) {
  pass(`${scriptSources.length} index scripts are present`);
}

const sandbox = {window: {}};
vm.createContext(sandbox);
for (const source of scriptSources.filter(source => source.includes('masses-2026-part'))) {
  vm.runInContext(read(source), sandbox, {filename: source});
}
const library = sandbox.window.AD_ALTARE_MASS_LIBRARIES?.['2026'];
const dates = library?.dates || {};
if (Object.keys(dates).length === 365) pass('all 365 dates are installed');
else fail(`expected 365 dates, found ${Object.keys(dates).length}`);

let emptyLatin = 0;
let emptyEnglish = 0;
let malformedBlocks = 0;
for (const mass of Object.values(dates)) {
  for (const section of mass.sections || []) {
    for (const block of section.blocks || []) {
      if (typeof block.la !== 'string' || typeof block.en !== 'string') malformedBlocks += 1;
      else {
        if (!block.la.trim()) emptyLatin += 1;
        if (!block.en.trim()) emptyEnglish += 1;
      }
    }
  }
}
if (!malformedBlocks && !emptyLatin && !emptyEnglish) pass('every Mass block has Latin and English text');
else fail(`Mass blocks: ${malformedBlocks} malformed, ${emptyLatin} empty Latin, ${emptyEnglish} empty English`);

const fallbackStart = app.indexOf('function englishMarkupLine(');
const fallbackEnd = app.indexOf('\nfunction englishMarkup(', fallbackStart);
const fallback = app.slice(fallbackStart, fallbackEnd);
if (fallback.includes("return escapeHtml(String(text ?? ''));" ) && !fallback.includes('activeEnglishEntries(')) {
  pass('unreviewed learning lines fail safely without guessed English matches');
} else {
  fail('unreviewed learning lines can still use guessed English matches');
}

console.log('');
if (failures.length) {
  console.error(`${failures.length} hard release check(s) failed.`);
  process.exit(1);
}
console.log('All hard release checks passed.');

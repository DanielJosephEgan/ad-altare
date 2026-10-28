# Ad Altare

A mobile-first prototype for following the 1962 Roman Mass and learning its Latin in context.

Repository: [github.com/DanielJosephEgan/ad-altare](https://github.com/DanielJosephEgan/ad-altare)

## Current release source

This folder, `outputs/latin-mass-app`, is the authoritative working and release source for Ad Altare.

- Current version: **2026.10.28-beta.4**
- `Ad Altare Standalone.html` is a generated release file. Edit `index.html`, `styles.css`, `app.js`, and the files in `data/`, then rebuild the standalone file.
- The sibling `latin-mass-app.Claude` folder is retained as research history and is not the release source.
- A release is ready only when `node validate-word-match.js`, `node release-check.js`, `node ..\..\work\audit_core_learning.js`, `node ..\..\work\check_interlinear_replacements.js`, and `node ..\..\work\audit_visual_alignment.js` finish successfully, and `work/build_standalone_app.py` rebuilds the standalone file without external local-file references.

## Open it on your computer

Double-click `Open Ad Altare.cmd`. It starts the private local service and opens the app in your regular web browser. Nothing is uploaded, and no internet connection is required after the fonts have loaded once.

You can also open `index.html` directly for a quick preview, though the one-click launcher enables the full offline-app behavior.

## What is working

- The app now reads the computer’s current date on startup
- Full 2026 1962 Roman Missal daily calendar and Mass text library: 365 dates imported
- Imported section titles are shortened into readable missal labels for the sidebar and headers
- A responsive side-by-side Latin/English missal, optimized for phones
- Latin and English are divided into matched bilingual rows so translated phrases remain visually across from one another even when the two languages use different word order
- Missal, Learn, Latin-only, and Latin Progress reading modes
- Tap-to-open word definitions, grammar, pronunciation, and contextual meaning
- Learning/Learned vocabulary states with red/green word highlighting and local flashcard practice
- Beginning, Psalm 42, the Confiteor, and the prayers before ascending the altar have complete, token-by-token reviewed Latin/English correspondence maps
- Font size, low-light reading, screen-wake support, and reading progress
- Local storage for progress and saved vocabulary
- Offline caching when served over HTTPS or localhost
- A substantial June 24 Mass sample (Nativity of St. John the Baptist)

## Imported source

The 2026 daily Mass library was generated from Divinum Officium’s `Sancta Missa` using `Rubrics 1960 - 1960`, which corresponds to the 1960/1962 calendar family used for the traditional Roman Missal. The importer script is saved in the workspace as `work/import_1962_masses.py` so additional years can be regenerated in the same format.

When wording or translation questions arise, the Latin-English material at [extraordinaryform.org/masses.html](https://extraordinaryform.org/masses.html) is the release's comparison authority. Word-level learning links remain separately reviewed because a translated sentence does not by itself identify a safe one-to-one correspondence.

The Latin learning lexicon is generated from William Whitaker’s WORDS plus vocabulary/gloss data from the ENLE Latin app. The generated browser file is `data/latin-lexicon.js`, and the builder script is saved as `work/build_mass_lexicon.py`.

## Next production step

The date selector is intentionally honest: dates outside the installed local Mass library display a calendar-import notice. The current installed library covers the full 2026 civil year. A production release should import a wider year range, add alternate Mass options for days that have more than one Mass, and review section titles/rubrics for a polished missal layout.

The learning dictionary now has a broad Whitaker/ENLE fallback lexicon and a hand-polished layer for common Mass words. English-side highlighting and Latin substitution are intentionally limited to exact, reviewed Latin/English correspondence maps. Unreviewed lines remain plain rather than using dictionary-based guesses.

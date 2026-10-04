# PyBot

PyBot is a local-first, child-friendly learning experience designed to help children discover Python through short, guided, playful activities.

The project began with a simple observation: many programming courses aimed at children still feel long, text-heavy, and overly serious. PyBot is an attempt to create a calmer and more inviting path—one small idea, one experiment, and one encouraging response at a time.

## Product vision

PyBot should help a child learn how to think like a programmer without making the experience feel like a traditional course. It should be clear enough to use independently, warm without becoming overly emotional, and playful without feeling designed for very young children.

The primary learner is a child between 8 and 10 years old. The experience may remain useful up to approximately age 12, but decisions should not drift toward a more serious, text-heavy design merely to appeal to older learners.

## Product principles

1. **One clear step at a time.** Each screen should have one primary learning goal and an obvious next action.
2. **Show before explaining.** Prefer examples, animation, and experimentation over long introductions.
3. **Use short language.** Instructions should be concrete, friendly, and easy to scan.
4. **Treat mistakes as information.** Errors should lead to a useful clue, never punishment or a dead end.
5. **Keep encouragement measured.** PyBot should be supportive and expressive without constant praise or exaggerated emotion.
6. **Preserve the child's work.** Progress belongs to the learner and remains on their device unless they deliberately export it.
7. **Avoid unnecessary complexity.** Every technical feature must directly support learning.

## Audience and content

- Primary age range: 8–10 years old
- Extended age range: up to approximately 12 years old
- Interface and learning languages: English and Spanish
- Default language: English
- Programming language: Python
- Initial use case: a guided tool that María Ángel can use to learn and practice Python
- Course style: short, visual, interactive, and sequential

## Bilingual experience

English is the default language, and the complete interface and course will also be available in Spanish. Language choice is a presentation preference, not a separate course or progress path.

- A visible `EN / ES` control changes language without reloading the page.
- The learner's selection is stored locally on the device.
- The document `lang` attribute changes with the interface language for assistive technology.
- Python keywords and built-in function names remain in English in both versions because that is the real language syntax.
- Explanations, instructions, hints, output examples, and PyBot dialogue are translated.
- Progress identifiers stay language-neutral, allowing a learner to switch languages at any time.
- Both languages must ship together for every completed lesson; one language must never become a reduced version of the other.
- A small shared glossary will keep technical vocabulary accurate and consistent across translations.

## Plain-language and page model

A child should be able to enter the site alone, see where to begin, and know what to press next. Learning content will use many small pages instead of a few long pages.

- One page introduces one idea or asks for one action.
- Each page has one visually dominant primary button.
- Instructions use common words, direct verbs, and concrete examples.
- A heading should normally stay under seven words.
- An instruction should normally stay under two short sentences.
- PyBot speech should normally stay under approximately fifteen words.
- Extra explanation appears only after the learner asks for a hint or opens “Why?”.
- Back and Next controls remain in the same place throughout the course.
- The course index always marks the learner's current mission and the next available step.
- English and Spanish copy follow the same brevity limits; translations should preserve meaning, not mirror sentence structure mechanically.

## PyBot mascot

PyBot is the consistent guide throughout the entire course. The mascot is built from semantic HTML elements and CSS shapes rather than external illustrations, which keeps it lightweight and makes its expressions easy to control.

Initial emotional states:

- **Happy:** welcomes the learner and celebrates meaningful progress.
- **Encouraging:** responds to effort and offers a next step after an unsuccessful attempt.
- **Thinking/confused:** pauses with the learner when an instruction or result needs another look.
- **Celebrating:** marks a completed idea with a larger smile and both arms raised.
- **Surprised:** reacts when a result differs from the learner's prediction without treating it as failure.
- **Curious:** invites the learner to change one thing and observe what happens.

Zone states, each acting out one zone's idea on its lesson cover:

- **Focused** (keyboard): half-closed eyes and both hands on the keys.
- **Welcome** (where Python runs): both arms open next to a Python window.
- **Amazed** (symbols): star eyes for the tiny marks that do big jobs.
- **Proud** (variables): closed smiling eyes while holding a labeled box.
- **Wink** (types and lists): one eye closed beside a stack of different boxes.
- **Counting, thinking, focused** (operators): beside `7 // 2` and `3`, `10 >= 10` and `True`, and `(2+3) * 4` and `20`.
- **Deciding** (conditionals): looks to one side and points at an if/else sign.
- **Counting** (loops): one hand up, counting inside a turning ring.
- **Thinking** (True or false?): thoughtful look beside `3 < 5` and its answer, `True`.
- **Ready** (functions): determined brows beside a machine that turns an input into an output.
- **Curious** (bugs): head tilted beside a magnifying glass and a little bug crawling by. The code page uses **focused** and the detective page **wink**, with the same props.

Additional states should only be introduced when they serve a clear teaching purpose. PyBot's proportions, colors, voice, and motion language must remain consistent across lessons.

Lesson covers should show the full mascot acting out the page's central idea whenever space allows. Concept-specific props—such as a magnifying glass for inspecting syntax—are welcome, but they must support the lesson rather than turn PyBot into a different character.

## Visual language

This section is the working **PyBot Design Guide v0.1**. It should be updated whenever a visual decision proves successful across more than one page. A one-off experiment is not a rule until it has been reviewed in context.

### Brand colors

| Token | Value | Primary use |
|---|---|---|
| Orange | `#FF7A45` | Warmth, action, PyBot's shell, and strong accents |
| Dark orange | `#DB4E1E` | Orange text, small details, and states needing stronger contrast |
| Mid orange | `#FF8D5F` | Decorative circles and medium-strength color fields |
| Blue | `#2764D8` | Primary actions, code-related accents, and active states |
| Dark blue | `#173B82` | Outlines, strong surfaces, and structural contrast |
| Mid blue | `#7199ED` | Decorative circles and secondary visual fields |
| Stage blue | `#8FB0EF` | Large mascot stages, always with a light center halo |
| Yellow | `#FFD84D` | Discovery, emphasis, questions, and small highlights |
| Mid yellow | `#FFE064` | Decorative circles and friendly supporting shapes |
| Ink | `#17304F` | Main text |
| Cream | `#FFFAF1` | Main page background |
| White | `#FFFFFF` | Cards and clean reading surfaces |

The palette should be energetic but not saturated everywhere. Color must never be the only way information is communicated, and text/background combinations must maintain accessible contrast.

### Color intensity rules

- Use full-strength orange, blue, or yellow for buttons, PyBot, small badges, and decisive accents.
- Use the defined mid colors for decorative circles and shapes. Do not make them barely visible with very low opacity.
- Use soft colors only across large reading surfaces where stronger color would compete with text.
- Mascot stages may use a stronger medium blue because they are decorative, not reading surfaces. When the stage and PyBot share blue, keep a light halo behind the mascot so its silhouette stays clear.
- A section should normally have one dominant brand color and one supporting color.
- Cards with the same role must use the same surface intensity and depth. Reserve a fully dark card for a real selected, active, or priority state—not for decoration.
- For short numbered teaching sequences with equal-weight steps, rotate orange, blue, and yellow while keeping the badge shape and outline consistent.
- Avoid unrelated decorative gradients, stripes, or blobs. Every large shape should frame content, separate an area, or help PyBot stand out.
- Keep body text on cream, white, or another tested high-contrast surface.
- Yellow is emphasis, not a default background for long text.

### Typography and layout

- Current font stack: `Trebuchet MS`, `Avenir Next`, `Segoe UI`, then sans-serif.
- Use rounded, highly legible letterforms and avoid decorative display fonts.
- Main lesson titles should be short and visually dominant.
- Body copy should use comfortable line height and short line lengths.
- Interaction targets should be at least approximately 44 pixels high.
- Use generous spacing and an obvious reading order.
- Keep one primary action per learning page.
- Never use long walls of text in the learning experience.

### Surfaces, outlines, and shapes

- Use dark blue outlines when a component needs a playful illustrated quality.
- Use light neutral borders for ordinary cards and content grouping.
- Standard rounded corners range from 16 to 32 pixels; large hero containers may use up to 38 pixels.
- Shadows should be soft and blue-tinted. Offset hard shadows are reserved for important playful elements.
- Circles and partial circles are part of the visual language, but they should use the mid-strength color tokens and remain behind content.
- Familiar-app cards use the same structure as everyday-plan cards: white surfaces, light borders, soft shadows, and one strong color accent in the top border or icon.
- Do not add decoration merely to fill empty space.

### Interaction feedback

- An incorrect choice may shake once, briefly, while a short written hint explains what to reconsider.
- A correct choice may launch a small brand-color confetti burst, complete the missing step, and show written confirmation.
- Motion is supporting feedback only; color, text, and state changes must communicate the same result without animation.
- Do not replay celebration effects when restoring saved progress.
- Respect `prefers-reduced-motion` by removing shakes, confetti, and other nonessential movement.

### PyBot consistency

- PyBot is always built from the same HTML/CSS anatomy and core proportions.
- Orange shell, blue body and outlines, yellow details, and a pale face screen remain consistent.
- Change expression, eyebrows, mouth, pose, and small supporting symbols to communicate a state; do not redesign the mascot per page.
- Tiny concept cards may simplify PyBot's anatomy, but they must preserve the orange head, blue body, dark outline, and yellow details.
- PyBot dialogue should normally stay below approximately fifteen words.
- PyBot should support the page's teaching purpose rather than repeat the heading.

### Learning-page composition

- One page communicates one main idea.
- The first viewport should contain the page question, PyBot's relevant expression, and one short supporting sentence.
- Use familiar examples before technical explanation.
- Reveal secondary detail after the main idea instead of presenting everything at once.
- Mobile layouts stack content first and PyBot second unless the activity itself requires the mascot first.

## Technical architecture

PyBot is intentionally a static web application:

- Plain HTML, CSS, and JavaScript
- Hosted on GitHub Pages
- No server-side application
- No database
- No accounts or authentication
- No multi-user features
- No remote collection of learner data (anonymous page-visit counts only; see Analytics below)

### Local-first progress

All learner progress will be stored in the child's browser. The initial implementation can use `localStorage` for small settings and progress records, with IndexedDB reserved for larger artifacts if they become necessary.

The application will provide:

- A clear progress summary
- A JSON backup export created only when the learner or parent requests it
- A safe import flow with format and version validation
- Confirmation before imported data replaces existing progress
- A documented schema version to support future migrations

The interface must explain that clearing browser data can remove progress and that a backup is needed when moving to another browser or device.

#### Local storage registry

Every browser-storage key must be added to this registry before it is released. Keys stay language-neutral and are included only through an explicit allowlist in the backup file. The optional learner name is the sole personal value in the registry and never leaves the browser unless a backup is explicitly exported.

| Key | Allowed value | Purpose | Include in backup |
|---|---|---|---|
| `pybot.language` | `en` or `es` | Interface language preference | Yes |
| `pybot.audio.enabled` | `true` or `false` | Optional robot ambience preference; defaults to `true` | Yes |
| `pybot.buddy.enabled` | `true` or `false` | Optional preference for the small PyBot companion in the corner; defaults to `true` | Yes |
| `pybot.buddy.position` | Two numbers from 0 to 1, comma-separated (for example `1.000,1.000`) | Where the learner dragged the companion, as fractions of the free screen space; this device only | No |
| `pybot.buddy.greeted` | `true` (session storage, cleared when the tab closes) | Lets the companion say hello once per visit instead of on every page | No |
| `pybot.learner.name` | A trimmed name or nickname of 1–24 characters | Lets PyBot address the learner; stored only in this browser | Yes |
| `pybot.path.current` | `world`, `thinking`, `language`, `keyboard`, `environment`, `symbols`, `variables`, `boxes`, `changingBoxes`, `operatorsMath`, `operatorsCompare`, `operatorsOrder`, `conditionals`, `conditionalsElif`, `conditionalsMatch`, `loopsPatterns`, `loops`, `loopsWhile`, `loopsUntil`, `loopsText`, `loopsNested`, `comparisons`, `comparisonsAnd`, `comparisonsOr`, `comparisonsNot`, `comparisonsIn`, `comparisonsLogic`, `functionsDo`, `functions`, `functionsMethods`, `checkpoint1`, `bugs`, `bugsCode`, `bugsDetective`, `powersInput`, `powersRandom`, `powersDict`, `thinkSplit`, `thinkPlan`, `thinkTest`, `cleanNames`, `cleanComments`, `cleanRepeat`, `checkpoint2`, `projectGuess`, `projectCalculator`, `projectRps`, `projectAdventure`, `projectQuiz`, `projectEightBall`, `turtleMoves`, `turtleShapes`, or `turtleArt` | Highlights the learner's current place across the complete small path | Yes |
| `pybot.path.visited` | Comma-separated step ids from `pybot.path.current` | Remembers which pages the learner has opened, so steps added to the path later show as new and pending | Yes |
| `pybot.path.done` | Comma-separated step ids from `pybot.path.current` (may be empty) | Remembers which steps the learner finished, so a finished step that later gains activities shows **NEW ACTIVITIES** | Yes |
| `pybot.path.known` | Comma-separated step ids from `pybot.path.current` (may be empty) | Remembers which steps were on the path when the learner started, so a step added later shows as new even when it is ahead of the learner | Yes |
| `pybot.selfcheck` | Comma-separated `<step-id>:<rating>` pairs, rating `good`, `okay`, or `review` (may be empty) | The learner's own answer to "How did it go?" at a pit stop; zones rated `review` show **TO REVIEW** on the map | Yes |
| `pybot.activity.<activity-id>` | `complete` or `review` | Marks a completed activity or one that should be reviewed | Yes |
| `pybot.progress.version` | A whole number up to `PROGRESS_VERSION` | The course content version the saved progress was last upgraded to (see **Progress versions**) | No; the file carries `progressVersion` instead |

Registered activity IDs:

- Code in the real world: `world-hunt`, `world-coin`, `world-rover`, `world-vacuum`, `world-song`, `world-nocode`, `world-who`, and `world-big`
- Everyday plans: `water`, `bag`, `hands`, `teeth`, `dressed`, `cereal`, `drawing`, `bedtime`, `reading`, and `photo`; drag-to-order plans: `order-plant`, `order-sandwich`, and `order-gift`
- Programming languages: `language-what`, `language-word`, `language-order`, `language-symbol`, `language-same`, `language-bug`, and `language-error`
- Keyboard: `keyboard-backspace`, `keyboard-undo`, `keyboard-copy`, `keyboard-enter`, `keyboard-shift`, `keyboard-paste`, and `keyboard-fix`
- Environment: `environment-editor`, `environment-engine`, `environment-version`, `environment-stop`, `environment-output`, `environment-browser`, and `environment-fix`
- Symbols: `symbol-text`, `symbol-assign`, `symbol-block`, `symbol-parens`, `symbol-note`, `symbol-join`, and `symbol-fix`
- Memory and variables: `memory-ram`, `variable-name`, `variable-value`, `variable-predict`, `variable-change`, `variable-label`, and `variable-fix`
- Boxes of all kinds: `boxes-text`, `boxes-yesno`, `boxes-list`, `boxes-grid`, `boxes-predict`, `boxes-decimal`, and `boxes-fix`
- Changing boxes: `changing-predict`, `changing-plus`, `changing-short`, `changing-minus`, `changing-times`, `changing-math`, `changing-join`, `changing-space`, `changing-text-numbers`, and `changing-fix`
- Operators (math): `math-everyday`, `math-divide`, `math-floor`, `math-remainder`, `math-even`, `math-power`, `math-power-three`, `math-sign`, `math-predict`, and `math-fix`
- Operators (compare): `sign-everyday`, `sign-at-least`, `sign-at-most`, `sign-greater`, `sign-different`, `sign-math`, `sign-text`, `sign-write`, `sign-predict`, and `sign-fix`
- Operators (order): `order-everyday`, `order-times`, `order-parens`, `order-power`, `order-left`, `order-compare`, `order-shortcut`, `order-pick`, `order-predict`, and `order-fix`
- Conditionals: `conditional-rain`, `conditional-battery`, `conditional-else`, `conditional-skip`, `conditional-after`, `conditional-elif`, `conditional-one`, `conditional-predict`, `conditional-fix`, and `conditional-everyday`
- Conditionals (elif): `elif-everyday`, `elif-meaning`, `elif-light`, `elif-first`, `elif-order`, `elif-none`, `elif-two-ifs`, `elif-many`, `elif-predict`, and `elif-fix`
- Conditionals (match): `match-everyday`, `match-name`, `match-fruit`, `match-rest`, `match-underscore`, `match-or`, `match-one`, `match-same`, `match-predict`, and `match-fix`
- Loops (picture patterns): `pattern-next`, `pattern-core`, `pattern-times`, `pattern-wrong`, `pattern-missing`, `pattern-loop`, `pattern-fix`, and `pattern-fix-big` (tap shapes to fix the row)
- Loops (for): `loop-count`, `loop-action`, `loop-stop`, `loop-zero`, `loop-list`, `loop-once`, `loop-total`, `loop-predict`, and `loop-fix`
- Loops (while): `while-check`, `while-count`, `while-last`, `while-zero`, `while-forever`, `while-choose`, `while-predict`, and `while-fix`
- Loops (repeat until): `until-meaning`, `until-not`, `until-break`, `until-done`, `until-count`, `until-word`, `until-predict`, and `until-fix`
- Loops (loop over words): `letters-everyday`, `letters-each`, `letters-count`, `letters-space`, `letters-find`, `letters-backwards`, `letters-list`, `letters-predict`, and `letters-fix`
- Loops (loops inside loops): `nested-everyday`, `nested-count`, `nested-first`, `nested-order`, `nested-row`, `nested-week`, `nested-word`, `nested-predict`, and `nested-fix`
- True or false: `compare-less`, `compare-equal`, `compare-assign`, `compare-not-equal`, `compare-and`, `compare-or`, `compare-not`, `compare-predict`, `compare-fix`, and `compare-everyday`
- True or false (and): `and-everyday`, `and-both`, `and-one-false`, `and-numbers`, `and-coins`, `and-table`, `and-word`, `and-predict`, and `and-fix`
- True or false (or): `or-everyday`, `or-both-false`, `or-one`, `or-numbers`, `or-pet`, `or-table`, `or-choose`, `or-predict`, and `or-fix`
- True or false (not): `not-everyday`, `not-false`, `not-box`, `not-compare`, `not-twice`, `not-mix`, `not-parens`, `not-predict`, and `not-fix`
- True or false (in): `in-everyday`, `in-list`, `in-missing`, `in-text`, `in-capital`, `in-not-in`, `in-choose`, `in-predict`, and `in-fix`
- True or false (logic challenges): `logic-everyday`, `logic-age`, `logic-order`, `logic-parens`, `logic-pets`, `logic-door`, `logic-same`, `logic-predict`, and `logic-fix`
- Functions, def (no return): `do-everyday`, `do-def`, `do-not-yet`, `do-call`, `do-twice`, `do-param`, `do-inside`, `do-predict`, and `do-fix`
- Functions, return: `function-input`, `function-output`, `function-inside`, `function-predict`, `function-name`, `function-call`, `function-fix`, and `function-everyday`
- Functions, methods: `method-everyday`, `method-dot`, `method-upper`, `method-replace`, `method-append`, `method-count`, `method-belongs`, `method-predict`, and `method-fix`
- Pit stop 1: `checkpoint-backpack`, `checkpoint-light`, `checkpoint-outside`, `checkpoint-countdown`, `checkpoint-stars`, and `checkpoint-battery`
- Bugs in everyday steps: `bug-steps-order`, `bug-steps-missing`, `bug-steps-wrong`, `bug-steps-forever`, `bug-steps-decision`, `bug-steps-fix`, and `bug-steps-square`
- Bugs in code: `bug-predict`, `bug-meaning`, `bug-line`, `bug-clue`, `bug-sneaky`, `bug-text`, `bug-which-fix`, `bug-list`, `bug-fix-loud`, `bug-fix-sneaky`, and `bug-fix-double`
- Detective tools: `detective-trace`, `detective-trace-loop`, `detective-print`, `detective-duck`, `detective-report`, `detective-test`, and `detective-fix`
- Superpowers, input(): `input-predict`, `input-everyday`, `input-wait`, `input-text`, `input-join`, `input-int`, `input-math`, `input-letters`, and `input-fix`
- Superpowers, random: `random-predict`, `random-everyday`, `random-import`, `random-range`, `random-coin`, `random-choice`, `random-same`, `random-loop`, and `random-fix`
- Superpowers, dictionaries: `dict-predict`, `dict-everyday`, `dict-read`, `dict-make`, `dict-change`, `dict-add`, `dict-missing`, `dict-in`, and `dict-fix`
- Think like a programmer, split the problem: `split-predict`, `split-everyday`, `split-why`, `split-first`, `split-which`, `split-missing`, `split-check`, `split-good`, `split-fix-missing`, and `split-fix-order`
- Think like a programmer, plan first: `plan-predict`, `plan-everyday`, `plan-comment`, `plan-work`, `plan-tool-if`, `plan-tool-loop`, `plan-tool-def`, `plan-match`, `plan-order`, `plan-fix-turn`, and `plan-fix-tool`
- Think like a programmer, test step by step: `test-predict`, `test-everyday`, `test-small`, `test-expect`, `test-check`, `test-zero`, `test-empty`, `test-border`, `test-set`, `test-fix-border`, `test-fix-zero`, and `test-fix-check`
- Clean code, good names: `names-predict`, `names-everyday`, `names-best`, `names-style`, `names-number`, `names-space`, `names-case`, `names-verb`, and `names-fix`
- Clean code, comments: `comments-predict`, `comments-everyday`, `comments-skip`, `comments-why`, `comments-stale`, `comments-switch`, `comments-where`, `comments-blank`, and `comments-fix`
- Clean code, don't repeat yourself: `dry-predict`, `dry-everyday`, `dry-loop`, `dry-count`, `dry-tool`, `dry-param`, `dry-onefix`, `dry-why`, and `dry-fix`
- Pit stop 2 (licence exam): `exam-total`, `exam-elif`, `exam-and`, `exam-return`, `exam-colon`, `exam-int`, `exam-dice-range`, `exam-dict`, `exam-plan`, `exam-name`, `exam-greet`, `exam-laps`, `exam-dice`, `exam-pitcrew`, `exam-clean`, and `exam-guess`
- Game projects, guess the number: `guess-predict`, `guess-fix-hint`, `guess-fix-loop`, `guess-fix-count`, `guess-range`, `guess-int`, `guess-stop`, `guess-hint`, `guess-tries`, `guess-start`, and `guess-test`
- Game projects, calculator: `calc-predict`, `calc-fix-numbers`, `calc-fix-times`, `calc-fix-zero`, `calc-glue`, `calc-branch`, `calc-equals`, `calc-zero`, `calc-return`, `calc-unknown`, and `calc-decimal`
- Game projects, rock paper scissors: `rps-predict`, `rps-fix-check`, `rps-fix-rule`, `rps-fix-best`, `rps-choice`, `rps-tie`, `rps-and`, `rps-or`, `rps-lose`, `rps-score`, and `rps-return`
- Game projects, text adventure: `adventure-predict`, `adventure-tunnel`, `adventure-bag`, `adventure-quit`, `adventure-room`, `adventure-append`, `adventure-locked`, `adventure-caps`, `adventure-nested`, `adventure-stop`, and `adventure-count`
- Game projects, quiz game: `quiz-predict`, `quiz-lower`, `quiz-score`, `quiz-end`, `quiz-index`, `quiz-pairs`, `quiz-range`, `quiz-lowercase`, `quiz-capital`, `quiz-points`, and `quiz-message`
- Game projects, magic 8-ball: `ball-predict`, `ball-add`, `ball-return`, `ball-loop`, `ball-choice`, `ball-giveback`, `ball-capital`, `ball-first`, `ball-future`, `ball-same`, and `ball-sure`
- Turtle drawing, moves and turns: `turtle-predict`, `turtle-everyday`, `turtle-start`, `turtle-turn`, `turtle-face`, `turtle-right`, `turtle-penup`, `turtle-back`, `turtle-style`, `turtle-fix-step`, `turtle-fix-road`, and `turtle-fix-flag`
- Turtle drawing, shapes with loops: `shapes-predict`, `shapes-everyday`, `shapes-square`, `shapes-sides`, `shapes-hexagon`, `shapes-star`, `shapes-close`, `shapes-circle`, `shapes-row`, `shapes-end`, `shapes-fix-hexagon`, `shapes-fix-star`, and `shapes-fix-flower`
- Turtle drawing, art with functions: `art-predict`, `art-everyday`, `art-def`, `art-size`, `art-colors`, `art-nofill`, `art-goto`, `art-pen`, `art-bgcolor`, `art-calls`, `art-fix-fill`, `art-fix-sun`, and `art-fix-trees`

Storage rules:

- Store only the learner-chosen display name or nickname; never request a full legal name. It must be editable and removable from the home page.
- Never store typed exercise answers, audio, or other personal data.
- A missing key means the defined default: English, sound on, no saved name, the first foundation page, or not completed.
- Storage failure must never block a lesson; the current page should continue to work.
- Every page that stores learner progress must provide a clearly labeled reset control. Reset requires confirmation and removes only that page's registered progress keys, never language, audio, or another lesson's work.
- Backup export includes a schema version and only the registered keys above.
- Import must validate the schema and every value before replacing local data.
- Removed or renamed keys require a documented migration.

#### Backup file

The home page offers **Save a backup file** and **Load a backup file**. Saving downloads `pybot-backup-YYYY-MM-DD.json`; nothing is sent anywhere. Loading checks the whole file first, asks for confirmation, and then replaces every registered key in this browser, so keys missing from the file are cleared.

```json
{
  "format": "pybot-progress",
  "schemaVersion": 1,
  "progressVersion": 1,
  "exportedAt": "2026-10-03T00:00:00.000Z",
  "progress": {
    "pybot.language": "es",
    "pybot.learner.name": "María",
    "pybot.activity.water": "complete"
  }
}
```

- `format` must be `pybot-progress` and `schemaVersion` must be `1`. A file from a newer schema version is refused with its own message.
- `progressVersion` is the course content version the backup was saved with. A missing value means version 1 (backups from before versions existed). A file from a newer progress version is refused with the same "newer PyBot" message.
- A backup from an older progress version is upgraded before it is checked: every migration after its version runs, then steps and activities the current course no longer has are dropped. The learner sees "updated to the newest PyBot".
- `progress` holds only registered keys with string values allowed by the registry (after the upgrade). One unknown key or invalid value rejects the whole file, and nothing changes.
- Files over 100 KB are rejected.
- `exportedAt` is informational and is not validated.
- The allowlist lives in `backupValidators()` in `script.js` and must change together with the registry above.

#### Progress versions

`PROGRESS_VERSION` in `script.js` names the version of the course content that progress belongs to. It is shown under the backup tools ("Progress version N"), written into every backup as `progressVersion`, and stored in `pybot.progress.version`. [`progress-versions.json`](progress-versions.json) lists every step and activity id of each version, so the `progressVersion` in anyone's backup tells exactly what content it was saved with and what has changed since.

Rule for every pull request:

- If it adds, renames, or removes a step or activity id in `pathSteps`, run `node tools/progress-version.mjs --bump "what changed"`. This raises `PROGRESS_VERSION` by one and records the new content in `progress-versions.json`.
- If it renames or removes an id, also add an entry for the new version in `progressMigrations` in `script.js` (helpers: `renameProgressStep`, `renameProgressActivity`) so learners keep that progress. Ids that are only removed need no migration: their progress is dropped on upgrade.
- Adding ids needs no migration. New steps and activities already show as new and pending (see `pybot.path.known` and `pybot.path.done`).
- Changing the shape of a stored value (not just its ids) needs a migration too.
- Two open pull requests that both bump will conflict on `PROGRESS_VERSION`; the second one to merge bumps again on top of the first.

`node tools/progress-version.mjs` with no arguments checks that `PROGRESS_VERSION`, `progress-versions.json`, and `pathSteps` agree, and warns about ids removed without a migration. The **Progress version** workflow runs it on every pull request.

When the site loads, progress saved in the browser by an older version is upgraded the same way as an old backup.

To help someone whose backup will not load: open the file, read `progressVersion` (missing means 1), and compare that entry in `progress-versions.json` with the latest one. Any id that was renamed without a migration is the cause; add the migration and the backup loads again.

#### Emergency progress reset

Below the backup tools, a collapsed **For adults: erase all progress** section offers an emergency reset. It first asks whether to save a backup file (the same download as **Save a backup file**; if that download fails, nothing is erased), then asks for a final confirmation. The reset clears every registered key except `pybot.language`, `pybot.audio.enabled`, `pybot.buddy.enabled`, and `pybot.learner.name`.

The thinking-page counters divide all ten plans into mutually exclusive states: completed, not tried, and review. The three numbers must always add up to ten. A wrong choice moves that plan to review; a correct choice moves it to completed.

The learning-path page turns the three foundation pages and eight learning zones into a small map. It highlights the saved current page as “Continue here,” labels earlier pages as visited, marks the immediate next page as “Up next,” and keeps the main action linked to the current page. Visiting a lesson updates this marker automatically. When a new zone is added behind a learner's saved place, the map marks it **NEW · NOT DONE** and shows a link to it under the main action. To get this for a future zone, just add it to `pathSteps`; learners who only have older progress (no `pybot.path.visited` yet) need the step flagged `addedLater: true`. A step added after the learner started is also marked new when it is ahead of them, using `pybot.path.known`; the same works for future steps with no flag.

The path is a race track with pit stops. A pit stop (`lessons/11-checkpoint.html`, step `checkpoint1`, after zone 7) has bigger "write real code" challenges that mix the zones before it, checked by output like "Fix PyBot's code" (`.fix-activity`, plus `data-checkpoint-zones`). Then the learner rates each zone with a face (no grades). Zones rated "I want to review" are linked from the page, marked **TO REVIEW** on the map, and the zone page shows a note with an "I reviewed it" button. Zones of challenges still in review get a gentle hint, but the learner decides. To add another pit stop, copy the page, add a step to `pathSteps`, and list its zones in the self-check rows.

Zone 3 "Operators" comes before Conditionals, which already uses its signs. It has three pages shown as a route in its map card: math signs (`lessons/07d-operators-math.html`, step `operatorsMath`; recaps + - * / from Changing boxes and teaches //, %, and **), comparison signs (`lessons/07e-operators-compare.html`, step `operatorsCompare`; everyday words like "at least" into <= and >=, math before comparing, capital letters count), and order of operations (`lessons/07f-operators-order.html`, step `operatorsOrder`; parentheses, **, * / // %, + -, then comparisons, plus shortcuts like *=). The True or False? zone keeps its own comparisons page as the start of and, or, and not.

After the pit stop, zone 8 "Bug hunters" has three pages shown as a route inside its map card, like the loops zone. Page 1 (`lessons/12-bugs.html`, step `bugs`) explains what a defect or bug is (with the 1947 Mark II moth story) and finds bugs in everyday step-by-step plans, like the Thinking in steps page: wrong order, missing step, wrong step or question, and plans that never end. The learner taps the buggy step (`.bug-step-options`), names the kind of bug, or picks the fix. Page 2 (`lessons/12-bugs-code.html`, step `bugsCode`) covers loud bugs (Python stops with an error) and sneaky bugs (wrong result) in real Python: tap-the-buggy-line cards (`.bug-line-options`), reading an error clue, picking the right fix, and three real-code fixes, the last with two bugs. Page 3 (`lessons/12-bugs-detective.html`, step `bugsDetective`) teaches detective tools: trace tables ("be the computer"), spying with print, explaining code out loud, bug reports, and checks that catch a bug.

Zone 9 "PyBot's Superpowers" follows Bug hunters with the missing basics, as a three-page route: `input()` with `int()` (`lessons/13-powers-input.html`, step `powersInput`), `random` with `import`, `randint`, and `choice` (`lessons/13-powers-random.html`, step `powersRandom`), and dictionaries (`lessons/13-powers-dictionaries.html`, step `powersDict`). Python runs in a Web Worker with no keyboard prompt, so `input()` reads prepared answers instead: a runner can have an answers box (`textarea[data-python-answers]`, default text from `data-answers-key`), and a fix activity can show fixed answers (`[data-fix-answers]`). Each `input()` takes the next line and, like a terminal, shows the question and the answer on one line. Running out of answers raises `EOFError`, which PyBot explains. Every run now starts with empty globals, so a fix like a missing `import random` can't pass because of an earlier run.

After Superpowers come four more zones and a second pit stop, each shown as a route in its map card. Zone 10 "Think like a programmer" (`lessons/15-think-*.html`) splits a problem into pieces, plans with `#` comments before coding, and tests step by step with tricky values like 0 and borders. Zone 11 "Clean code" (`lessons/16-clean-*.html`) covers good names, helpful comments, and turning repeated code into loops and functions; its fixes are real bugs caused by messy code. Pit stop 2, the licence exam (`lessons/17-licence-exam.html`, step `checkpoint2`), has theory questions plus real-code challenges for zones 9–11, and its self-check section names its own "all good" message with `data-selfcheck-good-key`. Zone 12 "Game projects" (`lessons/18-project-*.html`) builds six small games (guess the number, calculator, rock paper scissors, a text adventure, a quiz, a magic 8-ball) from a plan of small steps; fixes that would depend on chance fix the random value "to test the game". Zone 13 "Turtle drawing" (`lessons/19-turtle*.html`) draws with moves and turns, shapes from loops, and art from functions.

Turtle drawing works without a desktop window: `pybot-turtle.py` is installed in the worker as `turtle`. It keeps the usual commands (forward, left, penup, color, begin_fill, circle, goto, dot, write, bgcolor...) but only records what the turtle draws, and the page paints it on a canvas (`canvas[data-turtle-canvas]` in the runner). A turtle fix activity has `data-turtle-goal` with a goal drawing and is solved when the learner's drawing leaves the same marks (lines, fills, dots, colors), whatever the order. Make a goal drawing, or check any snippet the way the site runs it, with `python3 tools/run-like-pybot.py file.py [--answers ANSWER ...] [--drawing]`. Fix activities can also take editable answers (`textarea[data-fix-answers-key]`). The worker runs one program at a time, so two quick runs never mix answers or drawings.

Each step in `pathSteps` also lists its activity ids. An opened step with activities left shows **ACTIVITIES LEFT**, and a fully finished one shows **DONE**. When activities are added to a step the learner had finished, the map shows **NEW ACTIVITIES**, links to it under the main action, and the lesson page says new activities are waiting. To get this for future content, just add the new activity id to the step's list (and to the registry below); no flag is needed now that `pybot.path.done` exists. The `activitiesAddedLater` lists only exist for progress saved before that key.

Besides multiple-choice questions, every zone has a **Fix PyBot's code** activity: a short broken snippet the child edits and runs with the real Python runner until the output matches the goal. Mark it up as a `.fix-activity` with `data-fix-expected-key` and a textarea with `data-fix-code-key`; the goal in either language counts as a match. Every zone keeps at least six multiple-choice questions.

### Optional audio environment

Robot ambience is generated locally with the browser's Web Audio API, so the prototype does not download or redistribute music or sound recordings. It uses sparse, low-volume two-tone robot chimes rather than continuous music. Sound is on by default, begins after the browser receives the learner's first interaction, can be changed from the top bar on every page, and must never carry information that is unavailable visually.

### Running Python

The landing-page prototype uses [Pyodide 314.0.3](https://pyodide.org/), pinned to a versioned jsDelivr URL. Pyodide runs CPython in the browser through WebAssembly, so learners can run basic Python without an account, installation, or remote execution server.

Current prototype execution model:

- Pyodide runs inside a module Web Worker so ordinary learner code does not block the main interface.
- Standard output, standard error, and Python exceptions are returned to the page.
- The Stop control terminates the worker; the next run creates a fresh one.
- The runtime downloads only after the learner presses Run. The first run therefore needs a network connection and may take longer while the browser caches it.
- The runner works on GitHub Pages and local HTTP servers. Modern browsers block module workers on `file://` pages, so local runtime testing should use `python -m http.server` or an equivalent static server.
- No additional Python packages are installed automatically in this prototype.
- Common Python errors (missing quotes, brackets, or colons; indentation; unknown names; mixing text and numbers; dividing by zero; `int()` on words) show a short bilingual “PyBot's hint” with the line number. The real Python error stays visible below it, trimmed to the learner's own code. Any other error gets a gentle pointer to the last line of the real error.

Still planned:

- Keep exercise checks separate from learner-facing instructions.

## Legal, privacy, and safety boundaries

- Course explanations, exercises, examples, illustrations, and PyBot dialogue will be original work.
- Third-party code will only be used under a license compatible with the project.
- Required copyright and license notices are preserved in `THIRD_PARTY_NOTICES.md` and summarized beside the live runner.
- External course material will not be copied or lightly rewritten.
- Embedded commercial learning platforms are not part of the current plan.
- The application avoids advertising, behavioral tracking, and unnecessary third-party requests. The one exception is anonymous page-visit analytics, described below.
- Links that leave the learning environment should be deliberate and clearly identified.

### License

PyBot is copyright (c) 2026 Sorey Garcia. Anyone who reuses it must give credit.

- **Code** (HTML, CSS, JavaScript, Python, and tooling): [MIT License](LICENSE). Copies must keep the copyright and permission notice.
- **Course content** (lesson text, exercises, quiz questions, PyBot dialogue, the PyBot character, illustrations, and images): [CC BY 4.0](LICENSE-CONTENT.md). Reuse must credit Sorey Garcia, link to the license, and say what changed.
- Third-party components keep their own licenses, listed in `THIRD_PARTY_NOTICES.md`.

### Analytics

The site uses Google Analytics 4 (web stream "Pybot For Kids") to count anonymous page visits. It is set up in one place, `GA_MEASUREMENT_ID` near the top of the page setup in `script.js`; every page loads that script, and an empty ID turns analytics off.

- Ad storage, ad user data, ad personalization, and Google signals are turned off. GA4 does not log or store IP addresses.
- Only standard page-view data is sent (page address, title, language, device type). The learner name, typed answers, and progress in `localStorage` are never sent.
- Analytics does not run when a page is opened from a local file.
- The home page shows a short note for adults whenever analytics is on.
- Google Analytics sets its own `_ga` cookies. They are not part of the local storage registry and are not included in backups.

This is a product policy and engineering plan, not legal advice. Third-party licenses and terms should be checked again before the first public release.

## First milestone: landing page

The first milestone establishes the visual and interaction direction before course features are built.

Included in the initial landing page:

- Responsive navigation and hero section
- Bilingual product copy, with English as the default
- The orange, blue, and yellow brand palette
- A first HTML/CSS implementation of the PyBot mascot
- Three selectable PyBot expressions
- A simple three-step explanation of the learning loop
- A small real-Python runner for one greeting
- Local-first and no-account messaging
- Keyboard-accessible controls and reduced-motion support

The landing page now includes one small real-Python runner and saves only registered local preferences. It is still a prototype rather than a finished Python lesson or full exercise checker.

## Learning experience concept

A typical lesson should follow a short loop:

1. **Discover:** PyBot presents one concept through a concrete example.
2. **Predict:** the learner chooses or describes what they think will happen.
3. **Try:** the learner changes or completes a small piece of code.
4. **Run:** the result appears immediately and clearly.
5. **Reflect:** PyBot asks one small question or points out the important idea.
6. **Continue:** progress is saved and the next step becomes available.

Lessons should become longer only when observation shows that children can comfortably sustain the additional complexity.

## Core curriculum index

The first course is deliberately small. Its goal is not to turn a child into a programmer or to race through Python. It helps a child feel oriented, recognize a few tools, and understand three core ideas: a remembered value, a choice, and a repeat.

### Foundation 0 — Start Here

This foundation is split into tiny pages before the learner writes Python:

| Page | Goal | Child interaction |
|---|---|---|
| 0.1 **What can code do?** | Programs perform small, exact jobs that work together inside familiar apps. | Short cards show code keeping a game score, finding a map route, remembering a video position, and checking answers in a learning app. |
| 0.2 **Your brain makes tiny plans** | Logical sequencing begins with the small plans children already follow every day. | The child scrolls through ten familiar routines and completes each final step. Correct answers are remembered locally; incorrect choices receive one short hint. A three-part summary shows completed, not tried, and review counts. |
| 0.3 **What is a programming language?** | A programming language is a rule-based way to write instructions that can be run by a computer. | Python, JavaScript, and C# perform the same small greeting job with different rules. Visual cards gently name variables, conditionals, and loops. A reassuring section introduces bugs, debugging, and compiling as normal parts of code. |

The Keyboard Lab must respond to the value produced by the browser's keyboard event rather than assume a physical key position. This supports different keyboard layouts. Browser-reserved combinations should not be included unless they can be practiced safely inside the code editor.

### Six small learning zones

Each zone has short explanation cards, at least three multiple-choice activities, a completed/not-tried/review summary, and a page-only reset control.

The Python zones (2–6) also get a **Run it** block that follows the standard zone shape: the learner predicts the output of a two-line example (a tracked activity), runs the same code in a real Python runner on the page, and then changes one value. Every Python page has it. Zones 3–5 also walk through example code line by line, with a note under each line, and have seven practice questions each. The runner loads `pyodide-worker.mjs` relative to `script.js`, so it works from `lessons/` too.

| Zone | Goal | Child interaction |
|---|---|---|
| 1 **Python basics** (three pages: keyboard, where Python runs, special marks) · **Keyboard moves** | Recognize Enter, Backspace, Shift, and the safe Undo, Copy, and Paste shortcuts. | Choose which key or shortcut helps in three familiar editing situations. The interface names Ctrl and explains that Mac uses Command. |
| 1 · **Where Python runs** | Know the role of the browser, editor, Pyodide runtime, result box, and the Python 3.14 course family. | Point to the part used to type, run, or read code. Version details are stated once and are not treated as something to memorize. |
| 1 · **Python's special marks** | Recognize quotes, parentheses, equals, colon, hash, underscore, brackets, braces, slash, and backslash. | Match frequent marks to their jobs. The remaining marks are explained briefly but explicitly labeled “not needed yet.” |
| 2 **Memory boxes** (three pages: memory boxes, boxes of all kinds, changing boxes) · **Memory boxes** | Distinguish temporary working memory from saved storage and understand a variable as a name for a remembered value. | Identify RAM, the variable name, and the stored value in one-line examples. |
| 2 · **Boxes of all kinds** | See a variable as a labeled box in memory that can keep a whole number, a decimal, text, or yes-or-no, and see lists (vectors) and lists of lists (matrices) as boxes with numbered spaces. | Spot the text box, name the kind of value, count a list's spaces, count a matrix's rows, and read `snacks[0]`. |
| 2 · **Changing boxes** | Change what a box keeps: `score = score + 1` (Python works out the right side first), the short forms `+=` and `-=`, math with boxes (`+`, `-`, `*`, `/`), and joining text with `+` (`"2" + "3"` is `"23"`). | Predict a box after it grows, pick the line that does the same as `coins = coins + 1`, add two boxes, join a greeting, and fix a line that forgets to save the new score. |
| 3 **Choose a path** (three pages: if/else, elif, match) | Each page opens with everyday decisions (games, food, the weather, the day of the week) before the code. **if/else:** a conditional is a yes-or-no question followed by matching paths: how Python checks the question, why only one path runs, how indentation marks the path, and `if` without `else`. **elif:** ask more questions from top to bottom; the first True wins, so order matters, and two separate `if`s are two questions. **match:** what other languages call `switch` is `match` and `case` in Python (3.10+); `case _` catches anything else and `|` joins cases. | Follow small `if`, `else`, `elif` and `match` examples about rain, a battery, a traffic light, medals and robot commands; spot the line that always runs, fix the question order, and turn `else if` and `switch` into Python. |
| 4 **Repeat a pattern** (six pages: picture patterns, for, while, repeat until, loop over words, loops inside loops) | **Picture patterns:** find the core of a row of simple shapes, complete it, and fix it, then say it as a loop (repeat the core 3 times). **for:** one small job repeated a clear number of times: the loop variable changes each turn, `range` starts at 0, a loop can walk through a list, and a loop can keep a count. **while:** repeat while a question is True; something inside must change or the loop never ends. **Repeat until:** Python has no `until` keyword, so write `while not ...` or `while True` with `break`. **Loop over words:** `for letter in word` gives one letter per turn (spaces count too), so a loop can count, find, or reverse letters. **Loops inside loops:** the inside loop runs all its turns on every outside turn (rows and seats, days and meals), which multiplies the turns and draws grids of stars. | Count outputs, find the stopping point, read the first and last values, spot a loop that never ends, choose for or while, read `while not` aloud, see what `break` does, count letters in a word, and count the turns of loops inside loops. |
| 5 **True or false?** (six pages: compare, and, or, not, in, logic challenges) | Each page opens with everyday examples before the code. **Compare:** comparisons (`==`, `!=`, `<`, `>`, `<=`, `>=`) answer `True` or `False`, and `=` is not `==`. **and:** both answers must be `True`. **or:** one `True` is enough, and each side needs its own full question. **not:** flips an answer; mixing `and`, `or`, and `not` with parentheses. **in:** `in` asks if something is inside a list or a text, `not in` asks if it is missing, and capitals matter. **Logic challenges:** detective puzzles that mix comparisons, `and`, `or`, `not`, and `in`; Python's order (parentheses, then comparisons and `in`, then `not`, then `and`, then `or`) and using parentheses to keep long questions clear. The `and`, `or`, and `not` pages each show a truth table. | Answer small comparisons, tell a box from a question, read truth tables, predict real `and`/`or`/`not` runs, search lists and words with `in`, solve detective clues, and fix PyBot's code (`&&`, `x == a or b`, a missing `not`, `==` instead of `in`, missing parentheses). |
| 6 **Boxes that do a job** | See a function first as a named box: parameters go in and `return` sends a result out. Then open the box and see that inside there are only variables, `if`/`else`, and `for`, which the learner already knows. | Name the parameter, predict what a small function returns, and recognize the familiar pieces inside a function. |
| 9 **PyBot's Superpowers** (three pages: input, random, dictionaries) | **input():** PyBot asks and waits; the answer is always text, so `int()` turns digits into a number ("2" + "3" glues to "23"). **random:** `import random` brings a toolbox in; `randint(1, 6)` includes both ends and `choice` picks from a list, so each run can differ. **Dictionaries:** pairs of `key: value` inside `{ }`; read, change, and add by key, check keys with `in`, and a missing key is a `KeyError`. | Predict what a program shows for given answers, spot text vs number, pick the line that rolls a dice or flips a coin, read and change a dictionary, and fix PyBot's code (a missing `int()`, a missing `import random`, a key with the wrong capital letter). |
| 10 **Think like a programmer** (three pages: split, plan, test) | Split a big problem into small pieces, write the plan as `#` comments before the code, and test step by step with tricky values (0, an empty list, the exact border). | Find the missing piece, match plan steps to tools (box, if, loop, function), and fix a border bug found by testing. |
| 11 **Clean code** (three pages: names, comments, don't repeat yourself) | Names that say what a box keeps (`total_score`), comments that explain why, and repeated code turned into a loop or a function. | Pick the clearest name, spot a stale comment, and fix bugs caused by swapped names, an old comment, and a copied chunk that was not updated. |
| 🏁 **Licence exam** (pit stop 2) | Theory questions and real-code challenges that mix zones 9–11 with earlier ones, then a self-check. | Answer quick questions, write bigger programs with input() and random, and rate each zone. |
| 12 **Game projects** (six pages) | Guided mini games that join everything: guess the number, calculator, rock paper scissors, text adventure, quiz, magic 8-ball. Each starts with a plan of small steps. | Predict how a game ends with given answers, then build and repair parts of each game. |
| 13 **Turtle drawing** (three pages: moves, shapes, art) | A turtle draws as it moves: forward and turns, shapes from loops (360 / sides), and scenes from functions with colors and fills. | Predict the shape, then fix wrong angles, missing turns, a missing `penup` or `end_fill`, and a function that is never called. |

The path stops here for now. Classes, files, packages, databases, large projects, and open-ended assignments are outside the current course. They must not be added merely to make the curriculum look more complete.

Keyboard examples must not teach browser-reserved combinations such as Save unless they can be practiced safely without triggering browser behavior. A future keypress lab must respond to the browser event value instead of assuming a physical key position, so different keyboard layouts remain usable.

Examples may name familiar apps in plain text when that helps a child connect an abstract job to something they know. Do not use third-party logos or imitate their visual identity. Never imply affiliation, and never claim that a named app is built entirely with Python. The lesson should describe a small job that code can perform inside that kind of app.

### Lesson rigor rules

- Teach one new concept per mission.
- Use the correct term once, followed immediately by a child-readable explanation.
- Never imply that Python guesses, understands intention, or repairs instructions on its own.
- Ask the learner to predict before pressing Run; prediction reveals understanding better than copying.
- Start from a small working example and ask for one meaningful change.
- Make the result visible in no more than a few seconds.
- Explain why an answer worked, not only that it was correct.
- Translate errors into helpful guidance while keeping the original Python error available.
- Offer hints one at a time, from a gentle observation to a concrete pointer.
- End with a tiny variation that checks whether the child can transfer the idea instead of repeating the same answer.

### Standard zone shape

1. **Story goal:** one sentence describing what PyBot needs.
2. **Observe:** run or inspect a complete two-to-four-line example.
3. **Predict:** choose what will happen before executing it.
4. **Choose or try:** make one small decision or change.
5. **Inspect:** connect the visible result to the choice or line that caused it.
6. **Name the idea:** PyBot summarizes the precise concept in one short sentence.

## Proposed roadmap

### Phase 1 — Visual foundation

- Validate the landing page with María Ángel
- Refine PyBot's appearance, expressions, motion, and voice
- Confirm typography, contrast, spacing, and mobile behavior
- Define reusable buttons, cards, callouts, and progress indicators

### Phase 2 — Learning prototype

- Validate the integrated browser-based Python runtime
- Refine the code editor, output panel, Run, and Stop interactions
- Add child-readable help for common Python errors (first version shipped in the home-page runner)
- Keep the first runnable examples inside the six-zone curriculum boundary

### Phase 3 — First learning path

- Test the nine-page sequence and its language with María Ángel
- Refine exercise feedback without adding new topics
- Verify saved lesson state and progress in different browsers
- Add backup export and import
- Test the complete path with a child before considering any expansion

### Phase 4 — Quality and publication

- Perform accessibility and cross-browser testing
- Review third-party notices and content ownership
- Add offline resilience where practical
- Configure and publish through GitHub Pages
- Create a lightweight feedback process that does not collect child data

## Current project structure

```text
.
|-- index.html   # Landing page content and accessible structure
|-- meet-pybot.html # Dedicated gallery of PyBot's teaching expressions
|-- course.html  # Short bilingual index of the learning path
|-- faq.html     # Easy-to-read questions and answers for learners and grown-ups; script.js adds its link to every page header
|-- lessons/     # Three foundation pages, seven focused learning zones, and a pit stop
|   |-- 01-real-world.html
|   |-- 02-thinking-in-steps.html
|   |-- 03-programming-language.html
|   |-- 04-keyboard.html
|   |-- 05-environment.html
|   |-- 06-symbols.html
|   |-- 07-memory-variables.html
|   |-- 07b-boxes-of-all-kinds.html
|   |-- 07c-changing-boxes.html
|   |-- 08-conditionals.html
|   |-- 08-conditionals-elif.html
|   |-- 08-conditionals-match.html
|   |-- 09-loops-patterns.html
|   |-- 09-loops.html
|   |-- 09-loops-while.html
|   |-- 09-loops-until.html
|   |-- 09-loops-text.html
|   |-- 09-loops-nested.html
|   |-- 09b-true-or-false.html
|   |-- 09b-true-or-false-and.html
|   |-- 09b-true-or-false-or.html
|   |-- 09b-true-or-false-not.html
|   |-- 09b-true-or-false-in.html
|   |-- 09b-true-or-false-challenges.html
|   |-- 10-functions-do.html
|   |-- 10-functions.html
|   |-- 10-functions-methods.html
|   |-- 11-checkpoint.html
|   |-- 12-bugs.html
|   |-- 12-bugs-code.html
|   |-- 12-bugs-detective.html
|   |-- 13-powers-input.html
|   |-- 13-powers-random.html
|   |-- 13-powers-dictionaries.html
|   |-- 15-think-split.html
|   |-- 15-think-plan.html
|   |-- 15-think-test.html
|   |-- 16-clean-names.html
|   |-- 16-clean-comments.html
|   |-- 16-clean-repeat.html
|   |-- 17-licence-exam.html
|   |-- 18-project-guess.html
|   |-- 18-project-calculator.html
|   |-- 18-project-rps.html
|   |-- 18-project-adventure.html
|   |-- 18-project-quiz.html
|   |-- 18-project-8ball.html
|   |-- 19-turtle.html
|   |-- 19-turtle-shapes.html
|   `-- 19-turtle-art.html
|-- pyodide-worker.mjs # Isolated browser worker for the live Python runner
|-- pybot-turtle.py # Recording turtle module the worker installs as turtle
|-- THIRD_PARTY_NOTICES.md # Runtime credits, license, and pinned version
|-- LICENSE      # MIT License for the code
|-- LICENSE-CONTENT.md # CC BY 4.0 for the course content, with a credit line
|-- styles.css   # Brand system, layout, mascot, and responsive styles
|-- script.js    # Shared bilingual UI, progress, audio, activities, and runner controls
`-- README.md    # Product, design, technical, and roadmap plan
```

## Running the current prototype

The site has no build step. Reading lessons and trying interface activities works when `index.html` is opened directly. The real Python runner uses a module Web Worker, so it must be tested through GitHub Pages or a local HTTP server:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Current status

- [x] Product direction documented
- [x] Initial visual language defined
- [x] First PyBot mascot prototype
- [x] Responsive landing page prototype
- [x] English/Spanish interface foundation with English as the default
- [x] Focused seven-zone curriculum: functions, a pit stop, then bug hunting
- [x] Pre-Python foundation covering everyday logic and basic programming context
- [x] Plain-language, short-page content rules
- [x] Three bilingual foundation lessons
- [x] Nine bilingual topic pages with interactive activities
- [x] Page counters, review states, confetti, and page-only reset controls
- [x] Learning-path position saved locally
- [x] Real Python runtime prototype with third-party credits
- [x] Kid-friendly hints for common Python errors, with the real error kept below
- [x] Meet PyBot expression gallery and creator story
- [ ] Visual review with María Ángel
- [x] Backup export and import
- [ ] GitHub Pages publication

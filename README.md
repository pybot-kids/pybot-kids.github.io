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
- No remote collection of learner data

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
| `pybot.learner.name` | A trimmed name or nickname of 1–24 characters | Lets PyBot address the learner; stored only in this browser | Yes |
| `pybot.path.current` | `world`, `thinking`, `language`, `keyboard`, `environment`, `symbols`, `variables`, `conditionals`, or `loops` | Highlights the learner's current place across the complete small path | Yes |
| `pybot.activity.<activity-id>` | `complete` or `review` | Marks a completed activity or one that should be reviewed | Yes |

Registered activity IDs:

- Everyday plans: `water`, `bag`, `hands`, `teeth`, `dressed`, `cereal`, `drawing`, `bedtime`, `reading`, and `photo`
- Keyboard: `keyboard-backspace`, `keyboard-undo`, and `keyboard-copy`
- Environment: `environment-editor`, `environment-engine`, and `environment-version`
- Symbols: `symbol-text`, `symbol-assign`, and `symbol-block`
- Memory and variables: `memory-ram`, `variable-name`, `variable-value`, and `variable-predict`
- Conditionals: `conditional-rain`, `conditional-battery`, `conditional-else`, and `conditional-predict`
- Loops: `loop-count`, `loop-action`, and `loop-stop`

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
  "exportedAt": "2026-10-03T00:00:00.000Z",
  "progress": {
    "pybot.language": "es",
    "pybot.learner.name": "María",
    "pybot.activity.water": "complete"
  }
}
```

- `format` must be `pybot-progress` and `schemaVersion` must be `1`. A file from a newer schema version is refused with its own message.
- `progress` holds only registered keys with string values allowed by the registry. One unknown key or invalid value rejects the whole file, and nothing changes.
- Files over 100 KB are rejected.
- `exportedAt` is informational and is not validated.
- The allowlist lives in `backupValidators()` in `script.js` and must change together with the registry above.

The thinking-page counters divide all ten plans into mutually exclusive states: completed, not tried, and review. The three numbers must always add up to ten. A wrong choice moves that plan to review; a correct choice moves it to completed.

The learning-path page turns the three foundation pages and six learning zones into a small map. It highlights the saved current page as “Continue here,” labels earlier pages as visited, marks the immediate next page as “Up next,” and keeps the main action linked to the current page. Visiting a lesson updates this marker automatically.

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
- The application should avoid analytics, advertising, behavioral tracking, and unnecessary third-party requests.
- Links that leave the learning environment should be deliberate and clearly identified.

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

Each zone has short explanation cards, three multiple-choice activities, a completed/not-tried/review summary, and a page-only reset control.

The Python zones (4–6) also get a **Run it** block that follows the standard zone shape: the learner predicts the output of a two-line example (a tracked activity), runs the same code in a real Python runner on the page, and then changes one value. Zones 4 and 5 have it so far. The runner loads `pyodide-worker.mjs` relative to `script.js`, so it works from `lessons/` too.

| Zone | Goal | Child interaction |
|---|---|---|
| 1 **Keyboard moves** | Recognize Enter, Backspace, Shift, and the safe Undo, Copy, and Paste shortcuts. | Choose which key or shortcut helps in three familiar editing situations. The interface names Ctrl and explains that Mac uses Command. |
| 2 **Where Python runs** | Know the role of the browser, editor, Pyodide runtime, result box, and the Python 3.14 course family. | Point to the part used to type, run, or read code. Version details are stated once and are not treated as something to memorize. |
| 3 **Python's special marks** | Recognize quotes, parentheses, equals, colon, hash, underscore, brackets, braces, slash, and backslash. | Match frequent marks to their jobs. The remaining marks are explained briefly but explicitly labeled “not needed yet.” |
| 4 **Memory boxes** | Distinguish temporary working memory from saved storage and understand a variable as a name for a remembered value. | Identify RAM, the variable name, and the stored value in one-line examples. |
| 5 **Choose a path** | Understand a conditional as a yes-or-no question followed by matching paths. | Follow small `if` and `else` examples about rain and a robot battery. |
| 6 **Repeat a pattern** | Understand a loop as one small job repeated a clear number of times. | Count outputs, identify the repeated action, and find the loop's stopping point. |

The path stops here. `input()`, functions, classes, files, packages, databases, large projects, and open-ended assignments are outside the current course. They must not be added merely to make the curriculum look more complete.

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
|-- lessons/     # Three foundation pages and six focused learning zones
|   |-- 01-real-world.html
|   |-- 02-thinking-in-steps.html
|   |-- 03-programming-language.html
|   |-- 04-keyboard.html
|   |-- 05-environment.html
|   |-- 06-symbols.html
|   |-- 07-memory-variables.html
|   |-- 08-conditionals.html
|   `-- 09-loops.html
|-- pyodide-worker.mjs # Isolated browser worker for the live Python runner
|-- THIRD_PARTY_NOTICES.md # Runtime credits, license, and pinned version
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
- [x] Focused six-zone curriculum that stops after loops
- [x] Pre-Python foundation covering everyday logic and basic programming context
- [x] Plain-language, short-page content rules
- [x] Three bilingual foundation lessons
- [x] Six bilingual topic pages with interactive activities
- [x] Page counters, review states, confetti, and page-only reset controls
- [x] Learning-path position saved locally
- [x] Real Python runtime prototype with third-party credits
- [x] Kid-friendly hints for common Python errors, with the real error kept below
- [x] Meet PyBot expression gallery and creator story
- [ ] Visual review with María Ángel
- [x] Backup export and import
- [ ] GitHub Pages publication

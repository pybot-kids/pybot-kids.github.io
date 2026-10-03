const translations = {
  en: {
    "keyboard.quizEnterTitle": "Start a new line",
    "keyboard.quizEnterScene": "You finished one line of code.",
    "keyboard.quizEnterQuestion": "Which key moves to a new line?",
    "keyboard.quizEnterOption1": "Enter",
    "keyboard.quizEnterOption2": "Backspace",
    "keyboard.quizEnterOption3": "Shift",
    "keyboard.quizShiftTitle": "Make a capital letter",
    "keyboard.quizShiftScene": "You want to type a big P for PyBot.",
    "keyboard.quizShiftQuestion": "Which key do you hold down?",
    "keyboard.quizShiftOption1": "Backspace",
    "keyboard.quizShiftOption2": "Shift",
    "keyboard.quizShiftOption3": "Enter",
    "keyboard.quizPasteTitle": "Paste what you copied",
    "keyboard.quizPasteScene": "You copied a word with Ctrl + C.",
    "keyboard.quizPasteQuestion": "Which key finishes Ctrl + ? to paste it?",
    "keyboard.quizPasteOption1": "Z",
    "keyboard.quizPasteOption2": "C",
    "keyboard.quizPasteOption3": "V",
    "keyboard.fixTask": "PyBot typed too many !!! Use Backspace so Python shows the goal.",
    "keyboard.fixCode": "print(\"Hi, PyBot!!!\")",
    "keyboard.fixExpected": "Hi, PyBot!",
    "environment.quizStopTitle": "Stop a long run",
    "environment.quizStopScene": "Your code keeps running and running.",
    "environment.quizStopQuestion": "Which button helps?",
    "environment.quizStopOption1": "Stop",
    "environment.quizStopOption2": "Run Python",
    "environment.quizStopOption3": "Copy",
    "environment.quizOutputTitle": "Read the result",
    "environment.quizOutputScene": "You pressed Run Python.",
    "environment.quizOutputQuestion": "Where do you see what Python shows?",
    "environment.quizOutputOption1": "The keyboard",
    "environment.quizOutputOption2": "The output area",
    "environment.quizOutputOption3": "The page title",
    "environment.quizBrowserTitle": "Where it all lives",
    "environment.quizBrowserScene": "The editor and Pyodide live inside this web page.",
    "environment.quizBrowserQuestion": "Which program opens web pages?",
    "environment.quizBrowserOption1": "The printer",
    "environment.quizBrowserOption2": "The speaker",
    "environment.quizBrowserOption3": "The browser",
    "environment.fixTask": "PyBot misspelled a command. Fix it in the editor, then run it.",
    "environment.fixCode": "prnt(\"I can run Python!\")",
    "environment.fixExpected": "I can run Python!",
    "symbols.quizParensTitle": "Give print what it needs",
    "symbols.quizParensScene": "print ? \"hello\" ?",
    "symbols.quizParensQuestion": "Which marks hold what print needs?",
    "symbols.quizParensOption1": "Parentheses ( )",
    "symbols.quizParensOption2": "Hash #",
    "symbols.quizParensOption3": "Colon :",
    "symbols.quizNoteTitle": "Write a note",
    "symbols.quizNoteScene": "? this line is for people",
    "symbols.quizNoteQuestion": "Which mark starts a note Python skips?",
    "symbols.quizNoteOption1": "Equals =",
    "symbols.quizNoteOption2": "Hash #",
    "symbols.quizNoteOption3": "Quotes \" \"",
    "symbols.quizJoinTitle": "Join two words",
    "symbols.quizJoinScene": "robot?color = \"orange\"",
    "symbols.quizJoinQuestion": "Which mark joins the two words?",
    "symbols.quizJoinOption1": "Slash /",
    "symbols.quizJoinOption2": "Colon :",
    "symbols.quizJoinOption3": "Underscore _",
    "symbols.fixTask": "A mark is missing. Text needs quotes on both sides.",
    "symbols.fixCode": "print(\"Hello, I am PyBot)",
    "symbols.fixExpected": "Hello, I am PyBot",
    "variables.quizChangeTitle": "Put in something new",
    "variables.quizChangeScene": "stars = 5\nstars = 8\nprint(stars)",
    "variables.quizChangeQuestion": "What will Python show?",
    "variables.quizChangeOption1": "5",
    "variables.quizChangeOption2": "8",
    "variables.quizChangeOption3": "13",
    "variables.quizLabelTitle": "Pick a helpful name",
    "variables.quizLabelScene": "PyBot wants to remember your age.",
    "variables.quizLabelQuestion": "Which name helps the most?",
    "variables.quizLabelOption1": "age",
    "variables.quizLabelOption2": "x",
    "variables.quizLabelOption3": "thing",
    "variables.fixTask": "PyBot misspelled its box's name. Fix it so Python finds the box.",
    "variables.fixCode": "pet = \"cat\"\nprint(pett)",
    "variables.fixExpected": "cat",
    "boxes.quizDecimalTitle": "Find the decimal",
    "boxes.quizDecimalScene": "PyBot measured nine and a half centimeters.",
    "boxes.quizDecimalQuestion": "Which box keeps a decimal number?",
    "boxes.quizDecimalOption1": "size = 9",
    "boxes.quizDecimalOption2": "size = 9.5",
    "boxes.quizDecimalOption3": "size = \"9.5\"",
    "boxes.fixTask": "PyBot wants the grape. Remember: the first space is number 0.",
    "boxes.fixCode": "snacks = [\"apple\", \"cookie\", \"grape\"]\nprint(snacks[3])",
    "boxes.fixExpected": "grape",
    "conditionals.fixTask": "Something is missing at the end of the if line.",
    "conditionals.fixCode": "battery = 20\nif battery < 50\n    print(\"Time to charge!\")",
    "conditionals.fixExpected": "Time to charge!",
    "loops.fixTask": "The step to repeat must be inside the loop. Move it in with spaces.",
    "loops.fixCode": "for step in range(3):\nprint(\"Beep\")",
    "loops.fixExpected": "Beep\nBeep\nBeep",
    "comparisons.fixTask": "PyBot wants to ask a question, not store a value.",
    "comparisons.fixCode": "stars = 3\nif stars = 3:\n    print(\"Three stars!\")",
    "comparisons.fixExpected": "Three stars!",
    "functions.quizNameTitle": "Name the box",
    "functions.quizNameScene": "def triple(n):\n    return n * 3",
    "functions.quizNameQuestion": "What is this box called?",
    "functions.quizNameOption1": "n",
    "functions.quizNameOption2": "triple",
    "functions.quizNameOption3": "return",
    "functions.quizCallTitle": "Send in something new",
    "functions.quizCallScene": "def double(number):\n    return number + number\n\nprint(double(10))",
    "functions.quizCallQuestion": "What will Python show?",
    "functions.quizCallOption1": "10",
    "functions.quizCallOption2": "1010",
    "functions.quizCallOption3": "20",
    "functions.fixTask": "The box forgot its exit door. Make 10 come out.",
    "functions.fixCode": "def double(number):\n    answer = number + number\n\nprint(double(5))",
    "functions.fixExpected": "10",
    "fix.title": "Fix PyBot's code",
    "fix.codeLabel": "PyBot's code",
    "fix.goal": "Goal output",
    "fix.restart": "Start over",
    "fix.success": "You fixed it! The output matches the goal.",
    "fix.hint": "Not yet. Compare your output with the goal, change one thing, and run again.",
    "fix.timeout": "Python took too long, so PyBot stopped it. Check for a loop that never ends.",
    "path.done": "DONE",
    "path.unfinished": "ACTIVITIES LEFT",
    "path.newActivities": "NEW ACTIVITIES",
    "course.newActivities": "New activities in: {name} →",
    "progress.newActivities": "PyBot added new activities here. Find the ones you have not tried yet!",
    "meta.homeTitle": "PyBot — Python, one step at a time",
    "meta.meetTitle": "Meet PyBot — PyBot",
    "meta.courseTitle": "Learning path — PyBot",
    "meta.worldTitle": "What can code do? — PyBot",
    "meta.thinkingTitle": "Your brain makes tiny plans — PyBot",
    "meta.languageTitle": "What is a programming language? — PyBot",
    "meta.homeDescription": "PyBot helps children discover Python through tiny ideas, clear steps, and playful practice.",
    "meta.meetDescription": "Meet PyBot and try the expressions used throughout the course.",
    "meta.courseDescription": "A short foundation and nine small learning zones for children, guided by PyBot.",
    "meta.worldDescription": "See the small jobs code can do in apps children use every day.",
    "meta.thinkingDescription": "A playful lesson about the small plans children already make every day.",
    "meta.languageDescription": "A short, child-friendly explanation of programming languages.",
    "a11y.skip": "Skip to content",
    "a11y.home": "PyBot, home",
    "a11y.backTop": "PyBot, back to top",
    "a11y.mainNav": "Main navigation",
    "a11y.language": "Choose language",
    "a11y.features": "Important features",
    "a11y.moods": "PyBot expressions",
    "a11y.codePreview": "Preview of a Python exercise",
    "a11y.privacy": "Privacy and progress",
    "a11y.missions": "Learning zones",
    "a11y.pybotNote": "A note from PyBot",
    "a11y.lessonNav": "Lesson navigation",
    "audio.on": "Sound on",
    "audio.off": "Sound off",
    "audio.turnOn": "Turn robot sounds on",
    "audio.turnOff": "Turn robot sounds off",
    "support.label": "Support PyBot",
    "support.aria": "Support PyBot on Patreon (opens in a new tab)",
    "progress.savedTitle": "Your work is saved here.",
    "progress.savedText": "Want a fresh start? Clear only this page.",
    "progress.resetPage": "Clear this page's progress",
    "progress.resetConfirm": "Clear every activity on this page? Your language, name, and sound settings will stay the same.",
    "progress.resetDone": "Done. This page is ready to try again.",
    "progress.summaryLabel": "Plan progress",
    "progress.activitySummaryLabel": "Activity progress",
    "progress.completed": "Completed",
    "progress.remaining": "Not tried",
    "progress.review": "Review",
    "name.question": "What would you like me to call you?",
    "name.placeholder": "Name or nickname",
    "name.save": "That's me!",
    "name.privateNote": "Only this browser remembers it.",
    "name.error": "Please type a name or nickname.",
    "name.savedPrefix": "PyBot calls you",
    "name.change": "Change",
    "name.forget": "Forget this name",
    "name.pybotQuestion": "Hi! What should I call you?",
    "name.pybotSaved": "Nice to meet you, {name}! Ready for one tiny idea?",
    "nav.path": "Learning path",
    "nav.meet": "Meet PyBot",
    "hero.eyebrow": "A Python adventure",
    "hero.titleStart": "Python, one small",
    "hero.titleEnd": "step at a time.",
    "hero.intro": "Meet PyBot. Try tiny ideas. See what your code does.",
    "hero.start": "Start the path",
    "hero.meet": "Meet PyBot",
    "trust.accounts": "No accounts",
    "trust.pace": "Your pace",
    "trust.progress": "Progress stays with you",
    "pybot.says": "PYBOT SAYS",
    "mood.prompt": "Try a face",
    "mood.happy": "Happy",
    "mood.encouraging": "You can do it",
    "mood.thinking": "Thinking",
    "mood.celebrating": "Celebrating",
    "mood.surprised": "Surprised",
    "mood.curious": "Curious",
    "mood.happyMessage": "Hello! I am PyBot. Want to try one idea?",
    "mood.happyMessageNamed": "Hello, {name}! Want to try one idea?",
    "mood.happyLabel": "PyBot is happy and waves hello",
    "mood.encouragingMessage": "That was close. Let us try one small hint.",
    "mood.encouragingMessageNamed": "That was close, {name}. Try one small hint.",
    "mood.encouragingLabel": "PyBot gives calm encouragement",
    "mood.thinkingMessage": "Hmm. Let us look at that line together.",
    "mood.thinkingMessageNamed": "Hmm, {name}. Let us look at that line together.",
    "mood.thinkingLabel": "PyBot tilts its head and thinks",
    "mood.celebratingMessage": "You did it! That small step mattered.",
    "mood.celebratingMessageNamed": "You did it, {name}! That small step mattered.",
    "mood.celebratingLabel": "PyBot celebrates with both arms in the air",
    "mood.surprisedMessage": "Oh! That result was different.",
    "mood.surprisedMessageNamed": "Oh, {name}! That result was different.",
    "mood.surprisedLabel": "PyBot opens its eyes and looks surprised",
    "mood.curiousMessage": "What happens if we change one thing?",
    "mood.curiousMessageNamed": "{name}, what happens if we change one thing?",
    "mood.curiousLabel": "PyBot looks to the side with curiosity",
    "mood.focused": "Focused",
    "mood.welcoming": "Welcome",
    "mood.starry": "Amazed",
    "mood.wink": "Wink",
    "mood.proud": "Proud",
    "mood.deciding": "Deciding",
    "mood.counting": "Counting",
    "mood.determined": "Ready",
    "mood.focusedMessage": "One key at a time. I am paying close attention.",
    "mood.focusedMessageNamed": "{name}, one key at a time. I am paying close attention.",
    "mood.focusedLabel": "PyBot looks closely and types with care",
    "mood.welcomingMessage": "Come in! This is a good place to try things.",
    "mood.welcomingMessageNamed": "Come in, {name}! This is a good place to try things.",
    "mood.welcomingLabel": "PyBot opens both arms to welcome you",
    "mood.starryMessage": "Wow! Tiny details can do big things.",
    "mood.starryMessageNamed": "Wow, {name}! Tiny details can do big things.",
    "mood.starryLabel": "PyBot has star eyes and looks amazed",
    "mood.winkMessage": "Psst. I have a little trick to show you.",
    "mood.winkMessageNamed": "Psst, {name}. I have a little trick to show you.",
    "mood.winkLabel": "PyBot winks and raises one hand",
    "mood.proudMessage": "Look what we made, step by step.",
    "mood.proudMessageNamed": "Look what we made, {name}, step by step.",
    "mood.proudLabel": "PyBot smiles proudly with its eyes closed",
    "mood.decidingMessage": "This way or that way? Let us check first.",
    "mood.decidingMessageNamed": "This way or that way, {name}? Let us check first.",
    "mood.decidingLabel": "PyBot looks to one side and points the way",
    "mood.countingMessage": "One, two, three... and again!",
    "mood.countingMessageNamed": "One, two, three, {name}... and again!",
    "mood.countingLabel": "PyBot raises one hand and counts out loud",
    "mood.determinedMessage": "I am ready. Give me a job!",
    "mood.determinedMessageNamed": "I am ready, {name}. Give me a job!",
    "mood.determinedLabel": "PyBot looks determined and ready to work",
    "meet.eyebrow": "YOUR ROBOT GUIDE",
    "meet.title": "Meet PyBot.",
    "meet.intro": "Choose a face. PyBot uses each one to help you learn.",
    "about.eyebrow": "THE PEOPLE BEHIND PYBOT",
    "about.title": "PyBot began with us.",
    "about.sorey": "Hi, I am Sorey García. I work in technology and built PyBot with María Ángel in mind.",
    "about.maria": "She loves science, space, and programming. I wanted a playful path that could guide her one small step at a time, without rushing or overwhelming her.",
    "about.signature": "Made by Sorey. Inspired by María Ángel.",
    "about.profile": "Meet Sorey on LinkedIn",
    "colombia.eyebrow": "WHERE PYBOT COMES FROM",
    "colombia.title": "Made with love from Colombia.",
    "colombia.text": "PyBot was born in Colombia, a land of mountains, music, coffee, and very curious kids. Wherever you are, you are welcome here.",
    "colombia.pybot": "Made with love from Colombia!",
    "colombia.robotLabel": "PyBot smiles and waves a small flag of Colombia",
    "loop.eyebrow": "HOW WE LEARN",
    "loop.titleOne": "See it. Try it.",
    "loop.titleTwo": "Get it.",
    "loop.intro": "One idea on each page. One clear thing to do.",
    "loop.step1Title": "See one idea",
    "loop.step1Text": "PyBot shows a tiny example.",
    "loop.step2Title": "Try the code",
    "loop.step2Text": "Change one part. Then run it.",
    "loop.step3Title": "Say what happened",
    "loop.step3Text": "Spot the line that made it happen.",
    "preview.eyebrow": "YOUR FIRST MISSION",
    "preview.title": "Make PyBot say hello.",
    "preview.text": "Write Python here. Run it. See the answer right away.",
    "preview.noteStrong": "Stuck?",
    "preview.noteText": "PyBot gives one small hint at a time.",
    "preview.tag": "REAL PYTHON",
    "preview.filename": "my_first_program.py",
    "preview.defaultCode": "print(\"Hello, PyBot!\")",
    "preview.editorLabel": "Python code",
    "preview.output": "OUTPUT",
    "preview.ready": "Ready. Change the words, then run.",
    "preview.loading": "Starting Python… The first run can take a little longer.",
    "preview.noOutput": "Python ran! Nothing was printed yet.",
    "preview.error": "Python found a clue:",
    "preview.hintLabel": "PyBot's hint",
    "preview.hintLine": "Line {line}:",
    "hint.quote": "A text is missing its closing quote mark.",
    "hint.neverClosed": "A ( or [ was opened but never closed.",
    "hint.extraClose": "There is a closing ) or ] with no opening partner.",
    "hint.colon": "Lines that start with if, else, or for end with a colon :",
    "hint.equals": "To compare, use ==. One = puts a value in a box.",
    "hint.comma": "Something is missing between two values. Maybe a comma?",
    "hint.indentNeeded": "After a line ending in :, the next line needs spaces at the start.",
    "hint.indentExtra": "This line has extra spaces at the start. Try removing them.",
    "hint.indentMismatch": "The spaces at the start of this line don't line up.",
    "hint.syntax": "Python couldn't read this line. Check quotes, brackets, and colons.",
    "hint.nameSuggest": "Python doesn't know “{name}”. Did you mean “{suggestion}”?",
    "hint.name": "Python doesn't know “{name}” yet. Give it a value first, or add quotes for text.",
    "hint.mixTypes": "Text and numbers can't be added together. Try str() around the number.",
    "hint.rangeText": "range() needs a number, not text in quotes.",
    "hint.type": "A value is the wrong kind for this job. Text or number?",
    "hint.zero": "Nothing can be divided by zero, not even by Python.",
    "hint.intText": "int() can only turn digits, like \"7\", into a number.",
    "hint.generic": "Read the last line below. It names the clue Python found.",
    "preview.stopped": "Stopped. Your code is still here.",
    "preview.serveHint": "The real runner needs GitHub Pages or a local web server. Browsers block it on file:// pages.",
    "preview.run": "Run Python",
    "preview.stop": "Stop",
    "preview.creditSummary": "Who makes Python run here?",
    "preview.creditText": "Pyodide 314.0.3 runs CPython in your browser with WebAssembly.",
    "preview.creditHistory": "Created in 2018 by Michael Droettboom at Mozilla for Iodide; now an independent, community-driven project.",
    "preview.creditLicense": "Open-source under the Mozilla Public License 2.0.",
    "preview.contributors": "All contributors",
    "preview.license": "License",
    "preview.source": "Source code",
    "local.eyebrow": "YOUR WORK IS YOURS",
    "local.title": "No account. Your progress stays here.",
    "local.text": "This browser remembers your work. Ask an adult before clearing its data.",
    "local.analytics": "For grown-ups: PyBot counts anonymous page visits with Google Analytics, with ads and ad personalization turned off. The learner's name, answers, and progress are never sent.",
    "backup.title": "Moving to another browser?",
    "backup.text": "Save a backup file here. Then load it in the other browser.",
    "backup.export": "Save a backup file",
    "backup.import": "Load a backup file",
    "backup.exported": "Backup saved. Keep the file somewhere safe.",
    "backup.confirm": "Replace the progress in this browser with this backup? Finished activities in the backup: {count}.",
    "backup.imported": "Done. Your progress is back.",
    "backup.upgraded": "Done. Your progress is back, updated to the newest PyBot.",
    "backup.versionLabel": "Progress version",
    "backup.cancelled": "Nothing changed.",
    "backup.invalid": "This is not a PyBot backup file. Nothing changed.",
    "backup.newer": "This backup comes from a newer PyBot. Nothing changed.",
    "backup.failed": "This browser could not save the backup. Nothing changed.",
    "reset.title": "For adults: erase all progress",
    "reset.text": "Use this only in an emergency. It erases finished activities and the place on the map in this browser. Language, sound and the name stay.",
    "reset.button": "Erase all progress",
    "reset.askBackup": "Before erasing, do you want to save a backup file of the progress so far?",
    "reset.confirm": "Erase all progress in this browser? This cannot be undone without a backup file.",
    "reset.done": "Progress erased. PyBot starts again from the beginning.",
    "reset.cancelled": "Nothing changed.",
    "reset.failed": "This browser could not erase the progress. Nothing changed.",
    "footer.line": "Small steps. Real Python.",
    "footer.status": "First prototype",
    "course.home": "Home",
    "course.eyebrow": "YOUR FIRST PATH",
    "course.titleStart": "Start with the basics.",
    "course.titleEnd": "Then 6 small zones and a pit stop.",
    "course.intro": "Go slowly. Each zone has one idea and one small activity.",
    "course.rule": "One idea. One clear next step.",
    "course.note": "No rush. One small zone at a time.",
    "course.noteNamed": "No rush, {name}. One small zone at a time.",
    "course.building": "🚧 PyBot is still being built. We add new things every day!",
    "course.start": "Start →",
    "course.continue": "Continue →",
    "course.open": "Open →",
    "path.foundationLabel": "Start here pages",
    "path.world": "Code in your world",
    "path.thinking": "Tiny plans",
    "path.language": "Programming languages",
    "path.current": "CONTINUE HERE",
    "path.visited": "VISITED",
    "path.next": "UP NEXT",
    "path.later": "LATER",
    "path.new": "NEW · NOT DONE",
    "course.newZone": "New zone to visit: {name} →",
    "course.newPage": "New page to visit: {name} →",
    "mission0.concept": "BEFORE PYTHON",
    "mission0.title": "Start Here",
    "mission0.text": "See what code can do. Think in steps. Then learn its rules.",
    "path.basicsLabel": "Python basics pages",
    "path.keyboard": "Keyboard moves",
    "path.environment": "Where Python runs",
    "path.symbols": "Special marks",
    "missionBasics.concept": "KEYS + TOOLS + MARKS",
    "missionBasics.title": "Python Basics",
    "missionBasics.text": "Meet useful keys, the place where Python runs, and its special marks.",
    "mission4.concept": "MEMORY + TYPES + CHANGE",
    "mission4.title": "Memory Boxes",
    "mission4.text": "Keep values in named boxes, meet every kind of box, and change what they keep.",
    "mission5.concept": "CONDITIONALS",
    "mission5.title": "Choose a Path",
    "mission5.text": "Choose a path with if and else, with elif, and with match.",
    "mission6.concept": "LOOPS",
    "mission6.title": "Repeat a Pattern",
    "mission6.text": "Repeat with for, with while, and until something is done.",
    "lesson.progressOne": "START · 1 OF 3",
    "lesson.progressTwo": "START · 2 OF 3",
    "lesson.progressThree": "START · 3 OF 3",
    "lesson.path": "Learning path",
    "lesson.previous": "Previous page",
    "lesson.backPath": "Back to the path",
    "lesson.bigIdea": "BIG IDEA",
    "world.eyebrow": "BEFORE PYTHON",
    "world.title": "What can code do?",
    "world.intro": "Code helps apps do small jobs, very fast.",
    "world.pybot": "You already use code every day.",
    "world.pybotNamed": "{name}, you already use code every day.",
    "world.robotLabel": "PyBot looks curious and asks a question",
    "world.appsEyebrow": "APPS YOU MAY KNOW",
    "world.appsTitle": "Look what code does inside them.",
    "world.examplesLabel": "YOU MAY KNOW",
    "world.examplesNote": "App names are examples only. PyBot is not connected to them.",
    "world.gameExamples": "Roblox · Minecraft",
    "world.gameTitle": "Games",
    "world.gameText": "Moves characters. Saves points. Checks who wins.",
    "world.mapTitle": "Maps",
    "world.mapText": "Compares routes. Shows where to turn.",
    "world.videoTitle": "Videos",
    "world.videoText": "Finds a title. Remembers where you stopped.",
    "world.learnTitle": "Learning",
    "world.learnText": "Checks answers. Counts streaks. Opens the next level.",
    "world.bigTitle": "Big apps are many small jobs.",
    "world.bigText": "We will learn one small job at a time.",
    "world.next": "Your brain makes tiny plans",
    "thinking.eyebrow": "BEFORE PYTHON",
    "thinking.title": "Your brain makes tiny plans.",
    "thinking.intro": "A plan is a few steps in an order that works.",
    "thinking.pybot": "You already do this every day!",
    "thinking.pybotNamed": "{name}, you already do this every day!",
    "thinking.robotLabel": "PyBot follows three steps in order",
    "thinking.confidenceEyebrow": "YOU ALREADY KNOW THIS",
    "thinking.confidenceTitle": "Your brain plans all day.",
    "thinking.confidenceText": "When you get ready, play, or make something, your brain quietly chooses what happens first, next, and last.",
    "thinking.confidenceNote": "Coding uses that same skill. You do not have to know everything at once.",
    "thinking.practiceEyebrow": "YOUR TURN",
    "thinking.practiceTitle": "Finish the plan.",
    "thinking.practiceIntro": "Pick the last step. PyBot will check it.",
    "thinking.waterTitle": "Get a glass of water",
    "thinking.waterStep1": "Take a glass.",
    "thinking.waterStep2": "Put it under the tap.",
    "thinking.waterStep3": "Fill it with water.",
    "thinking.bagTitle": "Pack your school bag",
    "thinking.bagStep1": "Check what you need.",
    "thinking.bagStep2": "Add your notebooks.",
    "thinking.bagStep3": "Add your pencil case.",
    "thinking.missingStep": "Missing step",
    "thinking.question": "What comes next?",
    "thinking.chooseLabel": "Choose the last step",
    "thinking.waterCorrect": "Turn off the tap",
    "thinking.waterWrong1": "Put on your shoes",
    "thinking.waterWrong2": "Open your backpack",
    "thinking.bagCorrect": "Close the bag",
    "thinking.bagWrong1": "Turn on the tap",
    "thinking.bagWrong2": "Brush your teeth",
    "thinking.handsTitle": "Wash your hands",
    "thinking.handsStep1": "Wet your hands.",
    "thinking.handsStep2": "Add soap.",
    "thinking.handsStep3": "Scrub and rinse.",
    "thinking.handsCorrect": "Turn off the tap",
    "thinking.handsWrong1": "Close your backpack",
    "thinking.handsWrong2": "Open a book",
    "thinking.teethTitle": "Brush your teeth",
    "thinking.teethStep1": "Put toothpaste on the brush.",
    "thinking.teethStep2": "Brush your teeth.",
    "thinking.teethStep3": "Rinse the toothbrush.",
    "thinking.teethCorrect": "Put the toothbrush away",
    "thinking.teethWrong1": "Turn on the camera",
    "thinking.teethWrong2": "Pick up a spoon",
    "thinking.dressedTitle": "Get dressed",
    "thinking.dressedStep1": "Put on your shirt.",
    "thinking.dressedStep2": "Put on your pants.",
    "thinking.dressedStep3": "Put on your socks.",
    "thinking.dressedCorrect": "Put on your shoes",
    "thinking.dressedWrong1": "Close a book",
    "thinking.dressedWrong2": "Pour cereal",
    "thinking.cerealTitle": "Make a bowl of cereal",
    "thinking.cerealStep1": "Get a bowl.",
    "thinking.cerealStep2": "Pour in the cereal.",
    "thinking.cerealStep3": "Add milk.",
    "thinking.cerealCorrect": "Get a spoon",
    "thinking.cerealWrong1": "Turn off the light",
    "thinking.cerealWrong2": "Open the camera",
    "thinking.drawingTitle": "Draw a picture",
    "thinking.drawingStep1": "Get a sheet of paper.",
    "thinking.drawingStep2": "Choose your crayons.",
    "thinking.drawingStep3": "Draw your picture.",
    "thinking.drawingCorrect": "Put the crayons away",
    "thinking.drawingWrong1": "Put on your socks",
    "thinking.drawingWrong2": "Fill a glass",
    "thinking.bedtimeTitle": "Get ready for bed",
    "thinking.bedtimeStep1": "Put on your pajamas.",
    "thinking.bedtimeStep2": "Brush your teeth.",
    "thinking.bedtimeStep3": "Get into bed.",
    "thinking.bedtimeCorrect": "Turn off the light",
    "thinking.bedtimeWrong1": "Add milk",
    "thinking.bedtimeWrong2": "Open your backpack",
    "thinking.readingTitle": "Read a book",
    "thinking.readingStep1": "Choose a book.",
    "thinking.readingStep2": "Sit somewhere comfortable.",
    "thinking.readingStep3": "Open the book.",
    "thinking.readingCorrect": "Start reading",
    "thinking.readingWrong1": "Turn on the tap",
    "thinking.readingWrong2": "Put on your shoes",
    "thinking.photoTitle": "Take a photo",
    "thinking.photoStep1": "Open the camera.",
    "thinking.photoStep2": "Point at your subject.",
    "thinking.photoStep3": "Hold the device still.",
    "thinking.photoCorrect": "Tap the photo button",
    "thinking.photoWrong1": "Close your bag",
    "thinking.photoWrong2": "Get a spoon",
    "thinking.success": "Yes! Your last step completes the plan.",
    "thinking.hint": "Try again. Which step makes the plan feel finished?",
    "thinking.waterSuccess": "Yes! Turn off the tap. The plan is complete.",
    "thinking.waterHint": "Almost. What should happen before you walk away?",
    "thinking.bagSuccess": "Yes! Close the bag. Now it is ready.",
    "thinking.bagHint": "Try again. What keeps everything inside?",
    "thinking.algoEyebrow": "A NEW WORD",
    "thinking.algoTitle": "Your plans have a name: algorithms.",
    "thinking.algoIntro": "An algorithm is a list of clear steps, in order, that solves a problem. Every plan you just finished is an algorithm!",
    "thinking.algoRule1Title": "Clear steps",
    "thinking.algoRule1Text": "Each step says exactly what to do. No guessing.",
    "thinking.algoRule2Title": "In order",
    "thinking.algoRule2Text": "First, next, last. If you swap steps, the plan can break.",
    "thinking.algoRule3Title": "It finishes",
    "thinking.algoRule3Text": "It stops when the job is done.",
    "thinking.algoCodeEyebrow": "ALGORITHMS IN CODE",
    "thinking.algoCodeTitle": "Code is an algorithm for a computer.",
    "thinking.algoCodeText": "When you write code, you write the steps. The computer reads them one at a time, from top to bottom, and does exactly what each line says.",
    "thinking.algoCodeNote": "The computer never guesses. If a step is missing or in the wrong place, it will not fix it for you.",
    "thinking.algoListingTitle": "PyBot gets a glass of water",
    "thinking.algoLine1": "take a glass",
    "thinking.algoLine2": "put the glass under the tap",
    "thinking.algoLine3": "open the tap",
    "thinking.algoLine4": "wait until the glass is full",
    "thinking.algoLine5": "close the tap",
    "thinking.algoListingOops": "Swap lines 2 and 3, and PyBot pours water on the floor!",
    "thinking.bigTitle": "Order helps a plan work.",
    "thinking.bigText": "Clear steps in order make an algorithm. Computers follow algorithms one step at a time.",
    "thinking.next": "What is a programming language?",
    "language.eyebrow": "BEFORE PYTHON",
    "language.title": "What is a programming language?",
    "language.intro": "A way to write exact instructions a computer can run.",
    "language.pybot": "I follow the instructions. I do not guess.",
    "language.pybotNamed": "{name}, I follow instructions. I do not guess.",
    "language.robotLabel": "PyBot examines programming symbols with a magnifying glass",
    "language.rulesEyebrow": "THREE SIMPLE RULES",
    "language.rulesTitle": "The details matter.",
    "language.wordTitle": "Use exact words",
    "language.wordText": "works. pritn does not.",
    "language.orderTitle": "Put steps in order",
    "language.orderText": "In our first programs, Python starts at the top.",
    "language.symbolTitle": "Keep the symbols",
    "language.symbolText": "Quotes and parentheses have a job.",
    "language.sameEyebrow": "SAME JOB",
    "language.sameTitle": "Different languages. Same hello.",
    "language.sameText": "Each language has its own rules. We will start with Python.",
    "language.result": "RESULT",
    "language.helloCode": "\"Hello\"",
    "language.helloResult": "Hello",
    "language.conceptsEyebrow": "A PEEK AHEAD",
    "language.conceptsTitle": "Tiny ideas you will meet.",
    "language.conceptsIntro": "No need to learn them now. Just say hello.",
    "language.variableTitle": "Variables",
    "language.variableText": "A box with a name remembers one thing.",
    "language.conditionalTitle": "Conditionals",
    "language.conditionalText": "A question helps code choose a path.",
    "language.loopTitle": "Loops",
    "language.loopText": "Repeat a few steps without writing them again.",
    "language.careEyebrow": "WHEN CODE NEEDS HELP",
    "language.careTitle": "Errors are clues, not failures.",
    "language.careIntro": "Every programmer meets them. We look calmly, one small clue at a time.",
    "language.bugTitle": "A bug",
    "language.bugText": "A tiny mistake makes the code do something unexpected.",
    "language.debugTitle": "Debugging",
    "language.debugText": "We read, test, and fix one small clue at a time.",
    "language.compileTitle": "Compiling",
    "language.compileText": "Some languages translate code before the computer runs it.",
    "language.careNote": "You do not need to fix these today. Just remember: a clue can help.",
    "meta.keyboardTitle": "Keyboard moves — PyBot",
    "meta.environmentTitle": "Where Python runs — PyBot",
    "meta.symbolsTitle": "Python's special marks — PyBot",
    "meta.variablesTitle": "Memory boxes — PyBot",
    "meta.conditionalsTitle": "Choose a path — PyBot",
    "meta.loopsTitle": "Repeat a pattern — PyBot",
    "meta.keyboardDescription": "A child-friendly introduction to useful keyboard keys and shortcuts.",
    "meta.environmentDescription": "A simple tour of the browser, editor, Pyodide, and Python version used by PyBot.",
    "meta.symbolsDescription": "A gentle introduction to the special marks children will see in Python.",
    "meta.variablesDescription": "A child-friendly explanation of computer memory and Python variables.",
    "meta.conditionalsDescription": "A playful first look at Python conditionals.",
    "meta.loopsDescription": "A playful first look at Python loops.",
    "topic.progressKeyboard": "ZONE 1 · 1 OF 3",
    "topic.progressEnvironment": "ZONE 1 · 2 OF 3",
    "topic.progressSymbols": "ZONE 1 · 3 OF 3",
    "topic.progressVariables": "ZONE 2 · 1 OF 3",
    "topic.progressConditionals": "ZONE 3 · 1 OF 3",
    "topic.progressLoops": "ZONE 4 · 1 OF 3",
    "topic.lookEyebrow": "LOOK FIRST",
    "topic.practiceEyebrow": "YOUR TURN",
    "topic.practiceIntro": "Try each tiny question. A wrong answer becomes something to review.",
    "topic.chooseAnswer": "Choose an answer",
    "topic.choosePart": "Which part do you need?",
    "activity.success": "Yes! You found the helpful clue.",
    "activity.hint": "Not yet. Look at the example and try one more time.",
    "keyboard.eyebrow": "KEYBOARD MOVES",
    "keyboard.title": "Keys can work as a team.",
    "keyboard.intro": "A shortcut is two keys doing one small job together.",
    "keyboard.pybot": "Slow hands are okay. Accuracy comes first.",
    "keyboard.robotLabel": "PyBot types carefully on a keyboard",
    "keyboard.pybotNamed": "Slow hands are okay, {name}. Accuracy comes first.",
    "keyboard.overviewTitle": "Meet a few helpful keys.",
    "keyboard.enterTitle": "Enter and Backspace",
    "keyboard.enterText": "Enter says “go” or starts a new line. Backspace erases one mark on the left.",
    "keyboard.shiftTitle": "Shift changes a key",
    "keyboard.shiftText": "Hold Shift with a letter for a capital, or with a number key for another symbol.",
    "keyboard.shortcutTitle": "A shortcut team",
    "keyboard.shortcutText": "Ctrl + Z undoes. Ctrl + C copies. Ctrl + V pastes. On a Mac, use Command.",
    "keyboard.practiceTitle": "Choose the helpful move.",
    "keyboard.quizEraseTitle": "Erase one extra letter",
    "keyboard.quizEraseScene": "You typed: roboot",
    "keyboard.quizQuestion": "Which move helps?",
    "keyboard.backspace": "Backspace",
    "keyboard.enter": "Enter",
    "keyboard.space": "Space",
    "keyboard.quizUndoTitle": "Undo the last change",
    "keyboard.quizCopyTitle": "Copy selected text",
    "keyboard.quizKeyQuestion": "Which key finishes the shortcut?",
    "keyboard.keyV": "V",
    "keyboard.keyZ": "Z",
    "keyboard.keyC": "C",
    "keyboard.bigTitle": "Shortcuts save steps.",
    "keyboard.bigText": "You can always work slowly. Shortcuts are helpers, not a race.",
    "keyboard.next": "Where Python runs",
    "environment.eyebrow": "OUR PYTHON SPACE",
    "environment.title": "Where does Python run?",
    "environment.intro": "Right here in the browser. No big setup and no account.",
    "environment.pybot": "This page is our small Python room.",
    "environment.robotLabel": "PyBot welcomes you next to a Python window",
    "environment.pybotNamed": "{name}, this page is our small Python room.",
    "environment.overviewTitle": "Three parts work together.",
    "environment.browserTitle": "1. The browser",
    "environment.browserText": "Chrome, Edge, Firefox, or Safari opens PyBot. It is the room around our work.",
    "environment.editorTitle": "2. The editor",
    "environment.editorText": "The dark writing box is where you type code. It is like a notebook for Python.",
    "environment.engineTitle": "3. The engine",
    "environment.engineText": "Pyodide 314.0.3 brings Python 3.14 into the browser and runs the code.",
    "environment.flowLabel": "How code runs",
    "environment.flowType": "You type",
    "environment.flowRun": "Pyodide runs Python",
    "environment.flowSee": "You see the result",
    "environment.versionNote": "Our course uses Python 3.14. Small version numbers can change later; the ideas on this path stay the same.",
    "environment.practiceTitle": "Point to the right part.",
    "environment.quizTypeTitle": "Where do you type?",
    "environment.quizTypeScene": "You want to write print(\"Hi!\").",
    "environment.browser": "The browser tab",
    "environment.editor": "The editor",
    "environment.result": "The result box",
    "environment.quizRunTitle": "Who runs the code?",
    "environment.quizRunScene": "You press Run Python.",
    "environment.pyodide": "Pyodide",
    "environment.keyboard": "The keyboard",
    "environment.speaker": "The speaker",
    "environment.quizVersionTitle": "Which Python family?",
    "environment.quizVersionScene": "PyBot tells you the course version.",
    "environment.quizVersionQuestion": "What do we use here?",
    "environment.versionWrong1": "Python 1",
    "environment.versionWrong2": "Java 3.14",
    "environment.versionCorrect": "Python 3.14",
    "environment.bigTitle": "The editor holds words. Python runs them.",
    "environment.bigText": "You only need to know where to type, run, stop, and read the result.",
    "environment.next": "Python's special marks",
    "symbols.eyebrow": "PYTHON'S MARKS",
    "symbols.title": "Tiny marks have jobs.",
    "symbols.intro": "A quote, colon, or bracket is not decoration. It gives Python a clue.",
    "symbols.pybot": "We will meet them slowly. No memorizing today.",
    "symbols.robotLabel": "PyBot looks amazed at Python's tiny marks",
    "symbols.pybotNamed": "We will meet them slowly, {name}. No memorizing today.",
    "symbols.nowEyebrow": "USE THESE SOON",
    "symbols.nowTitle": "Six marks to notice first.",
    "symbols.quotesTitle": "Quotes hold text",
    "symbols.quotesText": "Words for people live between quotes: \"hello\".",
    "symbols.parensTitle": "Parentheses hold what a command needs",
    "symbols.parensText": "print(\"hello\") keeps the message inside them.",
    "symbols.equalsTitle": "One equals stores a value",
    "symbols.equalsText": "color = \"orange\" gives a value a name.",
    "symbols.colonTitle": "A colon opens a block",
    "symbols.colonText": "After if or for, it says: “the steps start here.”",
    "symbols.hashTitle": "A hash starts a note",
    "symbols.hashText": "Python ignores the note. It helps a person remember.",
    "symbols.underscoreTitle": "An underscore joins words",
    "symbols.underscoreText": "robot_color is one clear name without a space.",
    "symbols.laterTitle": "Meet four more. You do not need to use them yet.",
    "symbols.bracketsTitle": "Brackets hold a list",
    "symbols.bracketsText": "A list keeps several items in order: [\"moon\", \"star\"].",
    "symbols.bracesTitle": "Braces hold a collection",
    "symbols.bracesText": "Later, Python can use them for labeled pairs or unique items.",
    "symbols.slashTitle": "A slash can divide",
    "symbols.slashText": "10 / 2 asks Python to divide ten into two parts.",
    "symbols.backslashTitle": "A backslash changes the next mark",
    "symbols.backslashText": "Inside text, \\n means: start a new line.",
    "symbols.laterNote": "Recognizing a mark is enough today. Its full lesson can wait.",
    "symbols.practiceTitle": "Give each mark its job.",
    "symbols.quizTextTitle": "Hold a message",
    "symbols.quizTextQuestion": "What belongs around hello?",
    "symbols.answerQuotes": "Quotes \" \"",
    "symbols.answerBraces": "Braces { }",
    "symbols.answerSlash": "A slash /",
    "symbols.quizAssignTitle": "Give orange a name",
    "symbols.quizAssignQuestion": "Which mark stores the value?",
    "symbols.answerColon": "Colon :",
    "symbols.answerEquals": "Equals =",
    "symbols.answerHash": "Hash #",
    "symbols.quizBlockTitle": "Open a block",
    "symbols.quizBlockQuestion": "Which mark says the next steps belong here?",
    "symbols.answerUnderscore": "Underscore _",
    "symbols.bigTitle": "Every mark has one small job.",
    "symbols.bigText": "You do not need all of them at once. Look only for the mark used in today's idea.",
    "symbols.next": "Memory boxes",
    "variables.eyebrow": "MEMORY + VARIABLES",
    "variables.title": "A computer can remember.",
    "variables.intro": "Memory gives a program a small place to keep what it needs right now.",
    "variables.pybot": "A clear label helps me find a value again.",
    "variables.robotLabel": "PyBot proudly holds a labeled box",
    "variables.pybotNamed": "A clear label helps me find your value again, {name}.",
    "variables.memoryEyebrow": "FIRST: COMPUTER MEMORY",
    "variables.memoryTitle": "Think of a worktable and a drawer.",
    "variables.ramTitle": "Memory is the worktable",
    "variables.ramText": "RAM keeps the things a program is using now. The table can be cleared when the program or device stops.",
    "variables.storageTitle": "Storage is the drawer",
    "variables.storageText": "Files and saved progress can stay for later. They are not the same as the program's working memory.",
    "variables.variableTitle": "A variable is a labeled spot",
    "variables.variableText": "robot_color = \"orange\" puts one value under a useful name.",
    "variables.demoLabel": "A variable in memory",
    "variables.demoText": "Use robot_color later, and Python uses the value orange.",
    "variables.practiceTitle": "Find the name and the value.",
    "variables.quizRamTitle": "The program needs it now",
    "variables.quizRamScene": "PyBot is using a score while a game is open.",
    "variables.quizRamQuestion": "Which place is like the worktable?",
    "variables.ram": "RAM",
    "variables.keyboard": "The keyboard",
    "variables.screen": "The screen",
    "variables.quizNameTitle": "Find the label",
    "variables.quizNameQuestion": "What is the variable's name?",
    "variables.answerFive": "5",
    "variables.answerStars": "stars",
    "variables.answerEquals": "=",
    "variables.quizValueTitle": "Find what it remembers",
    "variables.quizValueQuestion": "What value is stored?",
    "variables.bigTitle": "A variable is a name for a remembered value.",
    "variables.bigText": "The name helps people and Python find the value again.",
    "variables.next": "Boxes of all kinds",
    "topic.runEyebrow": "RUN IT",
    "topic.runIntro": "Guess first. Then run real Python and check.",
    "topic.runReady": "Ready. Press Run Python.",
    "topic.predictTitle": "Guess the result",
    "topic.predictQuestion": "What will Python show?",
    "topic.tryLabel": "Now change one thing:",
    "variables.runTitle": "Help PyBot remember its color.",
    "variables.runCode": "robot_color = \"orange\"\nprint(robot_color)",
    "variables.predictName": "robot_color",
    "variables.predictValue": "orange",
    "variables.predictNothing": "Nothing",
    "thinking.variable-predictSuccess": "Yes! print shows the value the name remembers.",
    "thinking.variable-predictHint": "Not yet. print looks inside the name and shows its value.",
    "variables.tryText": "Put your favorite color between the quotes. Run again.",
    "meta.boxesTitle": "Boxes of all kinds — PyBot",
    "meta.boxesDescription": "A child-friendly picture of variables as labeled boxes in memory that can keep numbers, text, yes-or-no values, lists, and grids.",
    "topic.progressBoxes": "ZONE 2 · 2 OF 3",
    "missionBoxes.concept": "TYPES + LISTS",
    "missionBoxes.title": "Boxes of All Kinds",
    "missionBoxes.text": "Keep numbers, text, yes-or-no, lists, and grids in boxes.",
    "boxes.eyebrow": "TYPES + LISTS",
    "boxes.title": "Every box keeps something.",
    "boxes.intro": "Picture the computer's memory as a huge shelf full of little boxes. A variable is one box with a name label on it.",
    "boxes.pybot": "I put things in labeled boxes so I never lose them.",
    "boxes.robotLabel": "PyBot winks next to a stack of different boxes",
    "boxes.pybotNamed": "{name}, I put things in labeled boxes so I never lose them.",
    "boxes.kindsEyebrow": "WHAT GOES IN A BOX?",
    "boxes.kindsTitle": "A box can keep different kinds of things.",
    "boxes.wholeTitle": "Whole numbers",
    "boxes.wholeText": "age = 9 keeps a number you can count and add.",
    "boxes.decimalTitle": "Decimal numbers",
    "boxes.decimalText": "height = 1.32 keeps a number with a point in it.",
    "boxes.textTitle": "Text",
    "boxes.textText": "name = \"Ana\" keeps letters. Text always goes between quotes.",
    "boxes.yesNoTitle": "Yes or no",
    "boxes.yesNoText": "is_raining = True keeps True or False. Only two choices!",
    "boxes.shelfLabel": "Four labeled boxes in memory",
    "boxes.shelfName": "\"Ana\"",
    "boxes.shelfText": "Four boxes, four labels. Python finds each value by its name.",
    "boxes.changeEyebrow": "A BOX CAN CHANGE",
    "boxes.changeTitle": "Put in something new, and the old thing leaves.",
    "boxes.changeLabel": "A box that changes its value",
    "boxes.changeText": "A box keeps one thing at a time. The newest value wins.",
    "boxes.listEyebrow": "A BOX WITH SPACES INSIDE",
    "boxes.listTitle": "A list keeps many things in order.",
    "boxes.listText": "snacks = [\"apple\", \"cookie\", \"grapes\"] puts three things in one box, each in its own little space.",
    "boxes.listLabel": "A list with three numbered spaces",
    "boxes.snack0": "\"apple\"",
    "boxes.snack1": "\"cookie\"",
    "boxes.snack2": "\"grapes\"",
    "boxes.listNote": "Python starts counting at 0. snacks[0] is the first space.",
    "boxes.vectorLabel": "Fun fact:",
    "boxes.vectorText": "In math, a row of numbers in order, like [3, 1, 4], is called a vector. In Python, we make it with a list.",
    "boxes.gridEyebrow": "A SHELF OF ROWS",
    "boxes.gridTitle": "A matrix has rows and columns.",
    "boxes.gridText": "board = [[1, 2, 3], [4, 5, 6]] is a list of lists: two rows with three spaces each, like an egg carton.",
    "boxes.gridLabel": "A grid with two rows and three columns",
    "boxes.gridNote": "board[1][0] means row 1, then space 0. That is 4.",
    "boxes.runTitle": "Open the snack box.",
    "boxes.runCode": "snacks = [\"apple\", \"cookie\", \"grapes\"]\nprint(snacks[0])",
    "boxes.predictFirst": "apple",
    "boxes.predictSecond": "cookie",
    "boxes.predictNothing": "Nothing",
    "thinking.boxes-predictSuccess": "Yes! Space 0 is the first space in the list.",
    "thinking.boxes-predictHint": "Not yet. Python counts from 0, so snacks[0] is the first snack.",
    "boxes.tryText": "Change 0 to 2. Which snack comes out? Then add your favorite snack to the list.",
    "boxes.practiceTitle": "Look inside the boxes.",
    "boxes.quizTextTitle": "Find the text box",
    "boxes.quizTextScene": "PyBot wrote 9 in three different ways.",
    "boxes.quizTextQuestion": "Which box keeps text?",
    "thinking.boxes-textSuccess": "Yes! The quotes turn 9 into text.",
    "thinking.boxes-textHint": "Look for the quotes. Quotes mean text.",
    "boxes.quizYesNoTitle": "What kind of thing?",
    "boxes.quizYesNoQuestion": "What does this box keep?",
    "boxes.answerText": "Text",
    "boxes.answerNumber": "A number",
    "boxes.answerYesNo": "Yes or no",
    "boxes.quizListTitle": "Count the spaces",
    "boxes.quizListCode": "colors = [\"red\", \"blue\", \"green\"]",
    "boxes.quizListQuestion": "How many spaces does this list have?",
    "boxes.quizGridTitle": "Count the rows",
    "boxes.quizGridQuestion": "How many rows does this matrix have?",
    "thinking.boxes-gridHint": "Each inner [ ] is one row. Count them.",
    "boxes.bigTitle": "A variable is a labeled box in memory.",
    "boxes.bigText": "It can keep a number, some text, a yes or no, or even a whole list.",
    "boxes.next": "Choose a path",
    "boxes.nextChanging": "Changing boxes",
    "meta.changingBoxesTitle": "Changing boxes — PyBot",
    "meta.changingBoxesDescription": "Change what a Python box keeps: add to it, do math with boxes, and join text.",
    "topic.progressChangingBoxes": "ZONE 2 · 3 OF 3",
    "path.boxesLabel": "Memory boxes pages",
    "path.variables": "Memory boxes",
    "path.boxes": "Boxes of all kinds",
    "path.changingBoxes": "Changing boxes",
    "changing.eyebrow": "CHANGE + MATH",
    "changing.title": "A box can change.",
    "changing.intro": "A box can take its own value, change it, and keep the new one. That is how games count points.",
    "changing.pybot": "Every time I find a star, my score box grows by one.",
    "changing.pybotNamed": "{name}, every time I find a star, my score box grows by one.",
    "changing.robotLabel": "PyBot winks next to a score box that grows",
    "changing.growEyebrow": "USE THE OLD VALUE",
    "changing.growTitle": "Read the right side first.",
    "changing.growText": "score = score + 1 looks strange. Python first works out the right side: the old score plus 1. Then it puts the answer back in the same box.",
    "changing.growLabel": "A score box that grows from 3 to 4",
    "changing.growNote": "3 + 1 is 4. Now the box keeps 4.",
    "changing.shortEyebrow": "THE SHORT WAY",
    "changing.shortTitle": "+= adds to the box.",
    "changing.plusTitle": "Add to it",
    "changing.plusText": "score += 1 means the same as score = score + 1.",
    "changing.minusTitle": "Take away",
    "changing.minusText": "lives -= 1 takes one life away from the box.",
    "changing.replaceTitle": "Start again",
    "changing.replaceText": "score = 0 throws the old value away and puts in 0.",
    "changing.mathEyebrow": "MATH WITH BOXES",
    "changing.mathTitle": "Boxes can do math together.",
    "changing.mathText": "apples = 4 and pears = 3. Python opens both boxes and uses the numbers inside.",
    "changing.addTitle": "Add",
    "changing.addText": "apples + pears is 7.",
    "changing.subtractTitle": "Subtract",
    "changing.subtractText": "apples - pears is 1.",
    "changing.multiplyTitle": "Multiply",
    "changing.multiplyText": "apples * 2 is 8. The star means times.",
    "changing.divideTitle": "Divide",
    "changing.divideText": "apples / 2 is 2.0. Dividing always gives a decimal.",
    "changing.joinEyebrow": "JOIN TEXT",
    "changing.joinTitle": "+ glues text together.",
    "changing.joinText": "name = \"Ana\". Then \"Hi \" + name makes \"Hi Ana\". Put a space inside the quotes, or the words stick together.",
    "changing.joinWatchLabel": "Watch out:",
    "changing.joinWatchText": "\"2\" + \"3\" is \"23\", not 5. With quotes, Python glues text. Without quotes, 2 + 3 is 5.",
    "changing.runTitle": "Count PyBot's stars.",
    "changing.runCode": "score = 3\nscore = score + 1\nprint(score)",
    "thinking.changing-predictSuccess": "Yes! Python takes the old 3, adds 1, and keeps 4.",
    "thinking.changing-predictHint": "Not yet. Work out the right side first: 3 + 1.",
    "changing.tryText": "Change + 1 to + 10. Then try the short way: score += 10.",
    "changing.practiceTitle": "Change the boxes.",
    "changing.quizPlusTitle": "Add to the box",
    "changing.quizPlusQuestion": "What will Python show?",
    "thinking.changing-plusSuccess": "Yes! 5 + 2 is 7, and the box keeps 7.",
    "thinking.changing-plusHint": "These are numbers, not text. Add them: 5 + 2.",
    "changing.quizShortTitle": "The short way",
    "changing.quizShortQuestion": "Which line does the same job?",
    "thinking.changing-shortSuccess": "Yes! += adds to what is already in the box.",
    "thinking.changing-shortHint": "Look for += . It means: add to the box.",
    "changing.quizMinusTitle": "Lose a life",
    "changing.quizMinusQuestion": "What will Python show?",
    "thinking.changing-minusSuccess": "Yes! -= takes one away: 3 - 1 is 2.",
    "thinking.changing-minusHint": "-= takes away. Start at 3 and take away 1.",
    "changing.quizTimesTitle": "Triple the steps",
    "changing.quizTimesQuestion": "What will Python show?",
    "thinking.changing-timesSuccess": "Yes! The star means times: 2 * 3 is 6.",
    "thinking.changing-timesHint": "In Python, * means times. What is 2 times 3?",
    "changing.quizMathTitle": "Two boxes, one answer",
    "changing.quizMathQuestion": "What will Python show?",
    "thinking.changing-mathSuccess": "Yes! Python opens both boxes: 4 + 3 is 7.",
    "thinking.changing-mathHint": "Python does not show the names. It uses the numbers inside the boxes.",
    "changing.quizJoinTitle": "Say hello",
    "changing.quizJoinQuestion": "What will Python show?",
    "thinking.changing-joinSuccess": "Yes! + glues the two pieces of text together.",
    "thinking.changing-joinHint": "name has no quotes, so Python opens the box and finds \"Ana\".",
    "changing.quizTextNumbersTitle": "Numbers in quotes",
    "changing.quizTextNumbersQuestion": "What will Python show?",
    "thinking.changing-text-numbersSuccess": "Yes! With quotes they are text, so + glues them: 23.",
    "thinking.changing-text-numbersHint": "Look at the quotes. Quotes mean text, and + glues text.",
    "changing.fixTask": "PyBot found a star, but its score is still 0. Fix the middle line so the box keeps the new score.",
    "changing.fixCode": "score = 0\nscore + 1\nprint(score)",
    "changing.fixExpected": "1",
    "changing.bigTitle": "A box can use its old value to make a new one.",
    "changing.bigText": "score = score + 1 adds one. Next, PyBot uses boxes to make choices.",
    "conditionals.eyebrow": "CONDITIONALS",
    "conditionals.title": "Ask. Then choose.",
    "conditionals.intro": "A conditional lets code choose a path after a yes-or-no question.",
    "conditionals.pybot": "I check the question before I choose.",
    "conditionals.robotLabel": "PyBot points at a sign with two paths",
    "conditionals.pybotNamed": "{name}, I check the question before I choose.",
    "conditionals.overviewTitle": "You already make choices this way.",
    "conditionals.ifTitle": "If asks the question",
    "conditionals.ifText": "“Is it raining?” Python checks whether the answer is true.",
    "conditionals.trueTitle": "The indented step is one path",
    "conditionals.trueText": "If it is raining, the next step can be: take an umbrella.",
    "conditionals.elseTitle": "Else is the other path",
    "conditionals.elseText": "If the answer is no, Python can follow a different step.",
    "conditionals.demoYes": "take umbrella",
    "conditionals.or": "OR",
    "conditionals.demoNo": "wear cap",
    "conditionals.practiceTitle": "Follow the true path.",
    "conditionals.quizRainTitle": "It is raining",
    "conditionals.quizPathQuestion": "Which path runs?",
    "conditionals.umbrella": "Take an umbrella",
    "conditionals.sunglasses": "Wear sunglasses",
    "conditionals.sleep": "Go to sleep",
    "conditionals.quizBatteryTitle": "Battery is low",
    "conditionals.dance": "Start a dance",
    "conditionals.charge": "Find the charger",
    "conditionals.paint": "Paint a star",
    "conditionals.quizElseTitle": "It is not raining",
    "conditionals.quizElseQuestion": "Which path does else choose?",
    "conditionals.cap": "Wear a cap",
    "conditionals.bigTitle": "A conditional is a question with paths.",
    "conditionals.bigText": "Python checks first. Then it follows the matching path.",
    "conditionals.next": "One more question: elif",
    "conditionals.runTitle": "Help PyBot check its battery.",
    "conditionals.runCode": "battery = 20\nif battery < 30:\n    print(\"charge\")\nelse:\n    print(\"play\")",
    "conditionals.predictCharge": "charge",
    "conditionals.predictPlay": "play",
    "conditionals.predictBoth": "charge and play",
    "thinking.conditional-predictSuccess": "Yes! 20 is less than 30, so only the if path runs.",
    "thinking.conditional-predictHint": "Not yet. Is 20 less than 30? Python runs only one path.",
    "conditionals.tryText": "Change 20 to a bigger number, like 80, so the other path runs. Run again.",
    "loops.runTitle": "Help PyBot beep in a pattern.",
    "loops.runCode": "for turn in range(3):\n    print(\"beep\")",
    "loops.predictQuestion": "How many times will PyBot beep?",
    "loops.predictOne": "1 time",
    "loops.predictThree": "3 times",
    "loops.predictFour": "4 times",
    "thinking.loop-predictSuccess": "Yes! range(3) gives three turns, so beep shows 3 times.",
    "thinking.loop-predictHint": "Not yet. range(3) means three turns. Count the turns.",
    "loops.tryText": "Change 3 to another small number, like 5. Run again and count the beeps.",
    "loops.eyebrow": "LOOPS · FOR",
    "loops.title": "Repeat without rewriting.",
    "loops.intro": "A loop repeats one small job and knows when to stop.",
    "loops.pybot": "Repeat, count, stop. That is enough for today.",
    "loops.robotLabel": "PyBot counts while arrows go around in a circle",
    "loops.pybotNamed": "Repeat, count, stop, {name}. That is enough for today.",
    "loops.overviewTitle": "Loops are useful for patterns.",
    "loops.jobTitle": "Choose one small job",
    "loops.jobText": "Blink a light, draw a star, or say “beep.” Keep the repeated job tiny.",
    "loops.countTitle": "Choose how many times",
    "loops.countText": "range(3) gives the loop three turns.",
    "loops.stopTitle": "Then stop",
    "loops.stopText": "A good beginner loop has a clear ending. It does not spin forever.",
    "loops.demoLabel": "A three step loop",
    "loops.done": "done!",
    "loops.practiceTitle": "Count what repeats.",
    "loops.quizCountTitle": "Three turns",
    "loops.quizCountQuestion": "How many beeps appear?",
    "loops.one": "1",
    "loops.three": "3",
    "loops.forever": "Forever",
    "loops.quizActionTitle": "Find the repeated job",
    "loops.quizActionQuestion": "What does the loop repeat?",
    "loops.drawStar": "Show a star",
    "loops.openBrowser": "Open the browser",
    "loops.changeName": "Change a name",
    "loops.quizStopTitle": "Know when it stops",
    "loops.quizStopQuestion": "When is the loop finished?",
    "loops.afterOne": "After one turn",
    "loops.never": "It never stops",
    "loops.afterFour": "After four turns",
    "loops.bigTitle": "A loop repeats a small job a clear number of times.",
    "loops.bigText": "Next: a loop that asks a question before every turn.",
    "meta.functionsTitle": "Boxes that do a job — PyBot",
    "meta.functionsDescription": "A child-friendly first look at Python functions as boxes that take something in and give something back.",
    "topic.progressFunctions": "ZONE 6 OF 6",
    "missionFunctions.concept": "FUNCTIONS",
    "missionFunctions.title": "Boxes That Do a Job",
    "missionFunctions.text": "Send something in, get something out.",
    "loops.next": "while loops",
    "functions.eyebrow": "FUNCTIONS",
    "functions.title": "A box that does a job.",
    "functions.intro": "A function is a little box with a name. You send something in, it works inside, and something comes out.",
    "functions.pybot": "I give my boxes names, so I can use them again and again.",
    "functions.robotLabel": "PyBot is ready next to a machine that turns 2 into 4",
    "functions.pybotNamed": "{name}, I give my boxes names, so I can use them again and again.",
    "functions.outsideEyebrow": "LOOK AT THE BOX",
    "functions.outsideTitle": "Something goes in. Something comes out.",
    "functions.nameTitle": "Give the box a name",
    "functions.nameText": "def double(number): makes a box called double.",
    "functions.inTitle": "Send something in",
    "functions.inText": "What goes between the parentheses is a parameter. double(4) sends 4 into the box.",
    "functions.outTitle": "Get something out",
    "functions.outText": "return is the box's exit door. The result comes out through it.",
    "functions.demoLabel": "4 goes into the double box and 8 comes out",
    "functions.demoIn": "parameter",
    "functions.demoBoxName": "double",
    "functions.demoOut": "return",
    "functions.demoText": "From outside, you only need to know what goes in and what comes out.",
    "functions.insideEyebrow": "OPEN THE BOX",
    "functions.insideTitle": "Inside, there is nothing new.",
    "functions.insideIntro": "Look inside two boxes. Every line is something you already learned.",
    "functions.batteryLine1": "def check_battery(battery):",
    "functions.batteryLine2": "    if battery < 30:",
    "functions.batteryLine3": "        plan = \"charge\"",
    "functions.batteryLine4": "    else:",
    "functions.batteryLine5": "        plan = \"play\"",
    "functions.batteryLine6": "    return plan",
    "functions.beepLine1": "def beep(times):",
    "functions.beepLine2": "    for turn in range(times):",
    "functions.beepLine3": "        print(\"beep\")",
    "functions.beepLine4": "    return \"done\"",
    "functions.tagParameter": "A parameter is a variable box. It gets filled when you use the function.",
    "functions.tagIf": "An if, like in Choose a path.",
    "functions.tagElse": "The other path.",
    "functions.tagVariable": "A variable box, like in Memory boxes.",
    "functions.tagFor": "A loop, like in Repeat a pattern.",
    "functions.tagPrint": "The small job that repeats.",
    "functions.tagReturn": "return sends the result out of the box.",
    "functions.secretLabel": "The secret:",
    "functions.secretText": "A function is just variables and instructions you already know, packed in a box with a name.",
    "functions.runTitle": "Use the double box.",
    "functions.runCode": "def double(number):\n    answer = number + number\n    return answer\n\nprint(double(4))",
    "functions.predictName": "double",
    "functions.tryText": "Change 4 to 10. What comes out of the box now?",
    "thinking.function-predictSuccess": "Yes! 4 goes in, 4 + 4 is 8, and return sends 8 out.",
    "thinking.function-predictHint": "Not yet. 4 goes in as number. What is number + number?",
    "functions.practiceTitle": "In, inside, and out.",
    "functions.quizInTitle": "What goes in?",
    "functions.quizInCode": "def greet(name):",
    "functions.quizInQuestion": "Which word is the parameter?",
    "functions.quizInAnswer": "name",
    "functions.quizInWrong": "greet",
    "functions.quizOutTitle": "What comes out?",
    "functions.quizOutCode": "def add_one(n):\n    return n + 1\n\nadd_one(5)",
    "functions.quizOutQuestion": "What does the box give back?",
    "functions.quizInsideTitle": "Look inside",
    "functions.quizInsideScene": "PyBot opened a function box.",
    "functions.quizInsideQuestion": "What can it find inside?",
    "functions.quizInsideMagic": "Secret magic",
    "functions.quizInsideKnown": "Variables, if, and for",
    "functions.quizInsideEmpty": "Nothing at all",
    "functions.bigTitle": "A function is a named box: in, inside, out.",
    "functions.bigText": "Everything inside the box is something you already know. Next: a pit stop to check your engine!",
    "conditionals.stepsEyebrow": "STEP BY STEP",
    "conditionals.stepsTitle": "How Python decides.",
    "conditionals.stepsIntro": "Follow the code one line at a time, like PyBot does.",
    "conditionals.walkA1": "battery = 20",
    "conditionals.walkA1Tag": "A box keeps the number 20.",
    "conditionals.walkA2": "if battery < 30:",
    "conditionals.walkA2Tag": "Python asks: is 20 less than 30? Yes. The answer is True.",
    "conditionals.walkA3": "    print(\"charge\")",
    "conditionals.walkA3Tag": "True, so this indented line runs.",
    "conditionals.walkA4": "else:",
    "conditionals.walkA4Tag": "Skipped. The answer was already True.",
    "conditionals.walkA5": "    print(\"play\")",
    "conditionals.walkA5Tag": "Skipped too. Only one path runs.",
    "conditionals.walkA6": "print(\"bye\")",
    "conditionals.walkA6Tag": "Not indented, so it always runs at the end.",
    "conditionals.walkB1": "sunny = False",
    "conditionals.walkB1Tag": "A yes-or-no box that keeps False.",
    "conditionals.walkB2": "if sunny:",
    "conditionals.walkB2Tag": "Python asks: is sunny True? No.",
    "conditionals.walkB3": "    print(\"sunglasses\")",
    "conditionals.walkB3Tag": "Skipped. There is no else, so this path just does nothing.",
    "conditionals.walkB4": "print(\"let's go\")",
    "conditionals.walkB4Tag": "Not indented, so it always runs.",
    "conditionals.rulesTitle": "Three rules to remember.",
    "conditionals.ruleIndentTitle": "Indentation shows the path",
    "conditionals.ruleIndentText": "Lines pushed right with 4 spaces belong to the path. Lines on the left run no matter what.",
    "conditionals.ruleColonTitle": "The colon opens the path",
    "conditionals.ruleColonText": "if, elif, and else always end with : right before their path starts.",
    "conditionals.ruleOneTitle": "Only one path runs",
    "conditionals.ruleOneText": "Python never runs two paths of the same if. It picks one, then keeps going.",
    "conditionals.elifEyebrow": "MORE THAN TWO PATHS",
    "conditionals.elifTitle": "elif asks one more question.",
    "conditionals.elifIntro": "Python asks from top to bottom and stops at the first True.",
    "conditionals.walkC1": "temperature = 15",
    "conditionals.walkC1Tag": "A box keeps 15 degrees.",
    "conditionals.walkC2": "if temperature > 25:",
    "conditionals.walkC2Tag": "Is 15 greater than 25? No. Go to the next question.",
    "conditionals.walkC3": "    print(\"shorts\")",
    "conditionals.walkC3Tag": "Skipped.",
    "conditionals.walkC4": "elif temperature > 10:",
    "conditionals.walkC4Tag": "Is 15 greater than 10? Yes!",
    "conditionals.walkC5": "    print(\"jacket\")",
    "conditionals.walkC5Tag": "This path runs.",
    "conditionals.walkC6": "else:",
    "conditionals.walkC6Tag": "Skipped. A path already ran.",
    "conditionals.walkC7": "    print(\"coat\")",
    "conditionals.walkC7Tag": "else runs only when every question was False.",
    "conditionals.quizSkipTitle": "No else here",
    "conditionals.quizSkipCode": "sunny = False\nif sunny:\n    print(\"sunglasses\")",
    "conditionals.quizShowQuestion": "What does Python show?",
    "conditionals.sunglassesWord": "sunglasses",
    "conditionals.nothing": "Nothing",
    "conditionals.error": "An error",
    "conditionals.quizAfterTitle": "The line on the left",
    "conditionals.quizAfterCode": "raining = True\nif raining:\n    print(\"umbrella\")\nprint(\"go out\")",
    "conditionals.quizAfterQuestion": "Which words show?",
    "conditionals.onlyUmbrella": "Only umbrella",
    "conditionals.umbrellaGoOut": "umbrella, then go out",
    "conditionals.onlyGoOut": "Only go out",
    "conditionals.quizElifTitle": "Three paths",
    "conditionals.quizElifCode": "temperature = 30\nif temperature > 25:\n    print(\"shorts\")\nelif temperature > 10:\n    print(\"jacket\")\nelse:\n    print(\"coat\")",
    "conditionals.shorts": "shorts",
    "conditionals.jacket": "jacket",
    "conditionals.coat": "coat",
    "conditionals.quizOneTitle": "How many paths?",
    "conditionals.quizOneScene": "A program has an if and an else. The answer to the question is True.",
    "conditionals.quizOneQuestion": "How many paths run?",
    "conditionals.onePath": "One path",
    "conditionals.twoPaths": "Both paths",
    "conditionals.noPath": "No path",
    "thinking.conditional-skipSuccess": "Yes! sunny is False and there is no else, so nothing shows.",
    "thinking.conditional-skipHint": "Not yet. Is sunny True? If not, is there another path?",
    "thinking.conditional-afterSuccess": "Yes! The if path runs, and the line on the left always runs too.",
    "thinking.conditional-afterHint": "Not yet. Look at the last line. Is it inside the path or on the left?",
    "thinking.conditional-elifSuccess": "Yes! 30 is greater than 25, so the first path runs and Python stops asking.",
    "thinking.conditional-elifHint": "Not yet. Start at the top. Is 30 greater than 25?",
    "thinking.conditional-oneSuccess": "Yes! Python always picks just one path.",
    "thinking.conditional-oneHint": "Not yet. Can Python take two paths at the same time?",
    // Conditionals zone, pages 2 (elif) and 3 (match).
    "conditionals.lifeTitle": "You decide like this every day.",
    "conditionals.lifeIntro": "A decision is a question with paths. Python does the same thing you do.",
    "conditionals.life1Title": "Rain or sun?",
    "conditionals.life1Text": "If it is raining, I play a board game inside. Else, I play soccer outside.",
    "conditionals.life2Title": "Hungry?",
    "conditionals.life2Text": "If I am hungry, I eat an apple. If not, I just keep playing.",
    "conditionals.life3Title": "Homework first",
    "conditionals.life3Text": "If my homework is done, I can play video games. Else, homework first.",
    "conditionals.quizLifeTitle": "Park or movie?",
    "conditionals.quizLifeScene": "Family rule: if it is sunny, we go to the park. Else, we watch a movie. Today it is raining.",
    "conditionals.quizLifeQuestion": "What does the family do?",
    "conditionals.lifeA": "Go to the park",
    "conditionals.lifeB": "Watch a movie",
    "conditionals.lifeC": "Both",
    "thinking.conditional-everydaySuccess": "Yes! It is not sunny, so the else path wins: movie time.",
    "thinking.conditional-everydayHint": "Not yet. Is it sunny today? If not, which path is left?",
    "conditionalsElif.lifeTitle": "More than two choices, every day.",
    "conditionalsElif.lifeIntro": "You ask your favorite first. If it is not there, you ask for the next one.",
    "conditionalsElif.life1Title": "What is for lunch?",
    "conditionalsElif.life1Text": "If there is pizza, I pick pizza. Else if there is pasta, I pick pasta. Else, a sandwich.",
    "conditionalsElif.life2Title": "Which game?",
    "conditionalsElif.life2Text": "If 6 friends come, we play soccer. Else if 2 come, we play tag. Else, I build with blocks.",
    "conditionalsElif.life3Title": "Ice cream flavor",
    "conditionalsElif.life3Text": "If they have chocolate, I take it. Else if they have strawberry, I take that. Else, vanilla.",
    "conditionalsElif.quizLifeTitle": "Lunch menu",
    "conditionalsElif.quizLifeScene": "PyBot's rule: if there is pizza, pizza. Else if there is pasta, pasta. Else, a sandwich. Today there is pasta and sandwiches, but no pizza.",
    "conditionalsElif.quizLifeQuestion": "What does PyBot eat?",
    "conditionalsElif.lifeA": "Pizza",
    "conditionalsElif.lifeB": "Pasta",
    "conditionalsElif.lifeC": "A sandwich",
    "thinking.elif-everydaySuccess": "Yes! No pizza, so the next question wins: pasta. Python stops there.",
    "thinking.elif-everydayHint": "Not yet. Ask in order: pizza? pasta? The first yes wins.",
    "conditionalsMatch.lifeTitle": "One box, many options.",
    "conditionalsMatch.lifeIntro": "Look at one thing, like the day or the button, and pick the option that fits.",
    "conditionalsMatch.life1Title": "What day is it?",
    "conditionalsMatch.life1Text": "Monday: swimming. Wednesday: art class. Saturday: the park. Any other day: play at home.",
    "conditionalsMatch.life2Title": "Roll the die",
    "conditionalsMatch.life2Text": "1: hide and seek. 2: jump rope. 3: draw a monster. Any other number: you choose!",
    "conditionalsMatch.life3Title": "The juice machine",
    "conditionalsMatch.life3Text": "Press A: orange juice. Press B: mango juice. Any other button: water.",
    "conditionalsMatch.quizLifeTitle": "Today's activity",
    "conditionalsMatch.quizLifeScene": "Monday: swimming. Wednesday: art class. Saturday: the park. Any other day: play at home. Today is Friday.",
    "conditionalsMatch.quizLifeQuestion": "What does PyBot do today?",
    "conditionalsMatch.lifeA": "Swimming",
    "conditionalsMatch.lifeB": "Go to the park",
    "conditionalsMatch.lifeC": "Play at home",
    "thinking.match-everydaySuccess": "Yes! Friday has no case of its own, so “any other day” fits, like case _.",
    "thinking.match-everydayHint": "Not yet. Is there an option for Friday? Then which one catches the rest?",
    "topic.lifeEyebrow": "IN REAL LIFE",
    "path.conditionalsLabel": "Conditionals pages",
    "path.conditionalsIf": "if and else: two paths",
    "path.conditionalsElif": "elif: more questions",
    "path.conditionalsMatch": "match: pick a case",
    "topic.progressConditionalsElif": "ZONE 3 · 2 OF 3",
    "topic.progressConditionalsMatch": "ZONE 3 · 3 OF 3",
    "meta.conditionalsElifDescription": "Learn Python elif: ask more than one question and choose among many paths.",
    "conditionalsElif.eyebrow": "CONDITIONALS · ELIF",
    "conditionalsElif.title": "One more question: elif.",
    "conditionalsElif.intro": "elif is short for “else, if”. It asks a new question only when every question above it was False.",
    "conditionalsElif.pybot": "I ask from top to bottom and stop at the first yes.",
    "conditionalsElif.pybotNamed": "{name}, I ask from top to bottom and stop at the first yes.",
    "conditionalsElif.robotLabel": "PyBot stands at a sign with many paths",
    "conditionalsElif.overviewTitle": "A ladder of questions.",
    "conditionalsElif.ifTitle": "if asks first",
    "conditionalsElif.ifText": "The first question always goes with if.",
    "conditionalsElif.elifTitle": "elif asks next",
    "conditionalsElif.elifText": "If the answer above was False, elif asks another question. You can add as many as you need.",
    "conditionalsElif.elseTitle": "else catches the rest",
    "conditionalsElif.elseText": "If every answer was False, the else path runs. It is optional.",
    "conditionalsElif.stepsTitle": "Follow the traffic light.",
    "conditionalsElif.stepsIntro": "PyBot reads one question at a time, from the top.",
    "conditionalsElif.walk1": "light = \"yellow\"",
    "conditionalsElif.walk1Tag": "A box keeps the word yellow.",
    "conditionalsElif.walk2": "if light == \"green\":",
    "conditionalsElif.walk2Tag": "Is it green? No. Go down to the next question.",
    "conditionalsElif.walk3": "    print(\"go\")",
    "conditionalsElif.walk3Tag": "Skipped.",
    "conditionalsElif.walk4": "elif light == \"yellow\":",
    "conditionalsElif.walk4Tag": "Is it yellow? Yes!",
    "conditionalsElif.walk5": "    print(\"slow down\")",
    "conditionalsElif.walk5Tag": "This path runs.",
    "conditionalsElif.walk6": "elif light == \"red\":",
    "conditionalsElif.walk6Tag": "Not even asked. A path already ran.",
    "conditionalsElif.walk7": "    print(\"stop\")",
    "conditionalsElif.walk7Tag": "Skipped.",
    "conditionalsElif.walk8": "else:",
    "conditionalsElif.walk8Tag": "Skipped. else only runs when every answer was False.",
    "conditionalsElif.rulesTitle": "Three rules for elif.",
    "conditionalsElif.ruleFirstTitle": "The first yes wins",
    "conditionalsElif.ruleFirstText": "Python stops at the first True. The questions below it are not asked.",
    "conditionalsElif.ruleOrderTitle": "Order matters",
    "conditionalsElif.ruleOrderText": "Put the hardest question first. score >= 9 goes before score >= 5.",
    "conditionalsElif.ruleIfTitle": "Two ifs are two questions",
    "conditionalsElif.ruleIfText": "With two separate ifs, both can run. With elif, only one path runs.",
    "conditionalsElif.runTitle": "Give PyBot a medal.",
    "conditionalsElif.runCode": "score = 7\nif score >= 9:\n    print(\"gold\")\nelif score >= 5:\n    print(\"silver\")\nelse:\n    print(\"bronze\")",
    "conditionalsElif.predictGold": "gold",
    "conditionalsElif.predictSilver": "silver",
    "conditionalsElif.predictBoth": "gold and silver",
    "conditionalsElif.tryText": "Change 7 to 10, then to 2. Which medal does PyBot get each time?",
    "conditionalsElif.practiceTitle": "Climb the ladder of questions.",
    "conditionalsElif.quizMeaningTitle": "A short word",
    "conditionalsElif.quizMeaningQuestion": "What does elif mean?",
    "conditionalsElif.meaningElseIf": "else, if",
    "conditionalsElif.meaningEnd": "end if",
    "conditionalsElif.meaningEvery": "every line",
    "conditionalsElif.quizLightTitle": "Red light",
    "conditionalsElif.quizLightCode": "light = \"red\"\nif light == \"green\":\n    print(\"go\")\nelif light == \"yellow\":\n    print(\"slow down\")\nelif light == \"red\":\n    print(\"stop\")",
    "conditionalsElif.quizShowQuestion": "What does Python show?",
    "conditionalsElif.go": "go",
    "conditionalsElif.slow": "slow down",
    "conditionalsElif.stop": "stop",
    "conditionalsElif.quizFirstTitle": "Two answers are True",
    "conditionalsElif.quizFirstCode": "n = 15\nif n > 5:\n    print(\"big\")\nelif n > 10:\n    print(\"huge\")",
    "conditionalsElif.big": "big",
    "conditionalsElif.huge": "huge",
    "conditionalsElif.bigHuge": "big, then huge",
    "conditionalsElif.quizOrderTitle": "Fix the order",
    "conditionalsElif.quizOrderScene": "In the code above, PyBot wants 15 to show huge.",
    "conditionalsElif.quizOrderQuestion": "What should PyBot change?",
    "conditionalsElif.orderSwap": "Ask n > 10 first",
    "conditionalsElif.orderElse": "Add an else",
    "conditionalsElif.orderPrint": "Print huge twice",
    "conditionalsElif.quizNoneTitle": "Every answer is False",
    "conditionalsElif.quizNoneCode": "pet = \"fish\"\nif pet == \"dog\":\n    print(\"woof\")\nelif pet == \"cat\":\n    print(\"meow\")",
    "conditionalsElif.woof": "woof",
    "conditionalsElif.nothing": "Nothing",
    "conditionalsElif.error": "An error",
    "conditionalsElif.quizTwoIfTitle": "Two separate ifs",
    "conditionalsElif.quizTwoIfCode": "battery = 90\nif battery > 50:\n    print(\"play\")\nif battery > 80:\n    print(\"dance\")",
    "conditionalsElif.quizWordsQuestion": "Which words show?",
    "conditionalsElif.onlyPlay": "Only play",
    "conditionalsElif.onlyDance": "Only dance",
    "conditionalsElif.playDance": "play, then dance",
    "conditionalsElif.quizManyTitle": "How many elifs?",
    "conditionalsElif.quizManyQuestion": "How many elif lines can one if have?",
    "conditionalsElif.manyOne": "Only one",
    "conditionalsElif.manyAny": "As many as you need",
    "conditionalsElif.manyNone": "None",
    "conditionalsElif.fixTask": "Python does not know else if on one line. Use its short word.",
    "conditionalsElif.fixCode": "light = \"red\"\nif light == \"green\":\n    print(\"go\")\nelse if light == \"red\":\n    print(\"stop\")",
    "conditionalsElif.fixExpected": "stop",
    "conditionalsElif.bigTitle": "elif adds more questions. The first True wins.",
    "conditionalsElif.bigText": "Next: when you compare one box with many values, Python has match.",
    "conditionalsElif.next": "Pick a case with match",
    "thinking.elif-predictSuccess": "Yes! 7 >= 9 is False, 7 >= 5 is True, so silver shows and Python stops.",
    "thinking.elif-predictHint": "Not yet. Ask from the top: is 7 >= 9? Is 7 >= 5?",
    "thinking.elif-meaningSuccess": "Yes! elif = else + if: if not the one above, then ask this.",
    "thinking.elif-meaningHint": "Not yet. Split the word: el... if.",
    "thinking.elif-lightSuccess": "Yes! green? No. yellow? No. red? Yes, so stop.",
    "thinking.elif-lightHint": "Not yet. Check each question from the top. The light is red.",
    "thinking.elif-firstSuccess": "Yes! 15 > 5 is True first, so Python never asks the elif.",
    "thinking.elif-firstHint": "Not yet. Both answers are True, but Python stops at the first one.",
    "thinking.elif-orderSuccess": "Yes! Put the harder question on top, so it gets a chance.",
    "thinking.elif-orderHint": "Not yet. Which question must be asked before the other?",
    "thinking.elif-noneSuccess": "Yes! No question is True and there is no else, so nothing shows.",
    "thinking.elif-noneHint": "Not yet. Is the pet a dog? A cat? Is there an else?",
    "thinking.elif-two-ifsSuccess": "Yes! Two ifs are two separate questions, and both are True.",
    "thinking.elif-two-ifsHint": "Not yet. There is no elif here. Each if asks on its own.",
    "thinking.elif-manySuccess": "Yes! Add an elif for every extra question.",
    "thinking.elif-manyHint": "Not yet. A traffic light needs 3 questions. Can it have them?",
    "meta.conditionalsMatchDescription": "Learn Python match and case, Python's version of switch.",
    "conditionalsMatch.eyebrow": "CONDITIONALS · MATCH",
    "conditionalsMatch.title": "Pick a case with match.",
    "conditionalsMatch.intro": "Many languages have a switch to pick one option from a list. Python calls it match, and each option is a case.",
    "conditionalsMatch.pybot": "I look at one box and jump to the case that fits.",
    "conditionalsMatch.pybotNamed": "{name}, I look at one box and jump to the case that fits.",
    "conditionalsMatch.robotLabel": "PyBot stands next to a match sign and a case sign",
    "conditionalsMatch.overviewTitle": "switch in other languages, match in Python.",
    "conditionalsMatch.matchTitle": "match looks at a box",
    "conditionalsMatch.matchText": "match command: means: let us look at what is inside command.",
    "conditionalsMatch.caseTitle": "case is one option",
    "conditionalsMatch.caseText": "case \"jump\": runs its path when the box holds \"jump\".",
    "conditionalsMatch.restTitle": "case _ catches the rest",
    "conditionalsMatch.restText": "The _ means “anything else”. It works like else.",
    "conditionalsMatch.switchNote": "Heads up: Python has no switch word. Since Python 3.10, it uses match and case.",
    "conditionalsMatch.stepsTitle": "Find the case that fits.",
    "conditionalsMatch.stepsIntro": "PyBot compares the box with each case, from the top.",
    "conditionalsMatch.walk1": "day = \"saturday\"",
    "conditionalsMatch.walk1Tag": "A box keeps the word saturday.",
    "conditionalsMatch.walk2": "match day:",
    "conditionalsMatch.walk2Tag": "Look inside the day box.",
    "conditionalsMatch.walk3": "    case \"friday\":",
    "conditionalsMatch.walk3Tag": "Is it friday? No. Try the next case.",
    "conditionalsMatch.walk4": "        print(\"school\")",
    "conditionalsMatch.walk4Tag": "Skipped.",
    "conditionalsMatch.walk5": "    case \"saturday\":",
    "conditionalsMatch.walk5Tag": "Is it saturday? Yes!",
    "conditionalsMatch.walk6": "        print(\"play\")",
    "conditionalsMatch.walk6Tag": "This path runs.",
    "conditionalsMatch.walk7": "    case _:",
    "conditionalsMatch.walk7Tag": "Skipped. A case already fit.",
    "conditionalsMatch.walk8": "        print(\"rest\")",
    "conditionalsMatch.walk8Tag": "case _ runs only when no other case fits.",
    "conditionalsMatch.rulesTitle": "Three rules for match.",
    "conditionalsMatch.ruleOneTitle": "Only one case runs",
    "conditionalsMatch.ruleOneText": "Python picks the first case that fits, then leaves the match.",
    "conditionalsMatch.ruleRestTitle": "case _ goes last",
    "conditionalsMatch.ruleRestText": "_ fits anything, so the cases below it would never get a turn.",
    "conditionalsMatch.ruleOrTitle": "| means or",
    "conditionalsMatch.ruleOrText": "case \"saturday\" | \"sunday\": fits both days with one path.",
    "conditionalsMatch.runTitle": "Send PyBot a command.",
    "conditionalsMatch.runCode": "command = \"jump\"\nmatch command:\n    case \"walk\":\n        print(\"PyBot walks\")\n    case \"jump\":\n        print(\"PyBot jumps\")\n    case _:\n        print(\"PyBot waits\")",
    "conditionalsMatch.predictWalks": "PyBot walks",
    "conditionalsMatch.predictJumps": "PyBot jumps",
    "conditionalsMatch.predictWaits": "PyBot waits",
    "conditionalsMatch.tryText": "Change \"jump\" to \"walk\", then to \"dance\". Which case fits each time?",
    "conditionalsMatch.practiceTitle": "Find the case.",
    "conditionalsMatch.quizNameTitle": "Python's switch",
    "conditionalsMatch.quizNameQuestion": "Other languages say switch. Which word does Python use?",
    "conditionalsMatch.nameSwitch": "switch",
    "conditionalsMatch.nameMatch": "match",
    "conditionalsMatch.nameChoose": "choose",
    "conditionalsMatch.quizFruitTitle": "Pick the fruit",
    "conditionalsMatch.quizFruitCode": "fruit = \"apple\"\nmatch fruit:\n    case \"banana\":\n        print(\"yellow\")\n    case \"apple\":\n        print(\"red\")\n    case _:\n        print(\"unknown\")",
    "conditionalsMatch.quizShowQuestion": "What does Python show?",
    "conditionalsMatch.yellow": "yellow",
    "conditionalsMatch.red": "red",
    "conditionalsMatch.unknown": "unknown",
    "conditionalsMatch.quizRestTitle": "No case fits",
    "conditionalsMatch.quizRestCode": "animal = \"cow\"\nmatch animal:\n    case \"dog\":\n        print(\"woof\")\n    case \"cat\":\n        print(\"meow\")\n    case _:\n        print(\"hmm\")",
    "conditionalsMatch.woof": "woof",
    "conditionalsMatch.meow": "meow",
    "conditionalsMatch.hmm": "hmm",
    "conditionalsMatch.quizUnderscoreTitle": "The underscore",
    "conditionalsMatch.quizUnderscoreQuestion": "What does case _ mean?",
    "conditionalsMatch.underscoreEmpty": "An empty box",
    "conditionalsMatch.underscoreElse": "Anything else",
    "conditionalsMatch.underscoreStop": "Stop the program",
    "conditionalsMatch.quizOrTitle": "Two days, one path",
    "conditionalsMatch.quizOrCode": "day = \"sunday\"\nmatch day:\n    case \"saturday\" | \"sunday\":\n        print(\"weekend\")\n    case _:\n        print(\"school day\")",
    "conditionalsMatch.weekend": "weekend",
    "conditionalsMatch.schoolDay": "school day",
    "conditionalsMatch.both": "weekend, then school day",
    "conditionalsMatch.quizOneTitle": "How many cases?",
    "conditionalsMatch.quizOneCode": "color = \"red\"\nmatch color:\n    case \"red\":\n        print(\"stop\")\n    case _:\n        print(\"other\")",
    "conditionalsMatch.quizOneQuestion": "_ fits anything, even red. What shows?",
    "conditionalsMatch.stopWord": "stop",
    "conditionalsMatch.otherWord": "other",
    "conditionalsMatch.stopOther": "stop, then other",
    "conditionalsMatch.quizSameTitle": "Same job",
    "conditionalsMatch.quizSameQuestion": "match can do the same job as…",
    "conditionalsMatch.sameElif": "if, elif, and else",
    "conditionalsMatch.sameFor": "a for loop",
    "conditionalsMatch.sameBox": "a list",
    "conditionalsMatch.fixTask": "PyBot used the word from other languages. Change it to Python's word.",
    "conditionalsMatch.fixCode": "pet = \"cat\"\nswitch pet:\n    case \"dog\":\n        print(\"woof\")\n    case \"cat\":\n        print(\"meow\")",
    "conditionalsMatch.fixExpected": "meow",
    "conditionalsMatch.bigTitle": "match picks one case for the value in a box.",
    "conditionalsMatch.bigText": "Other languages call it switch. In Python it is match, with case _ for anything else.",
    "conditionalsMatch.next": "Repeat a pattern",
    "thinking.match-predictSuccess": "Yes! command holds jump, so the jump case runs.",
    "thinking.match-predictHint": "Not yet. What is inside command? Find the case with the same word.",
    "thinking.match-nameSuccess": "Yes! Python says match, and each option is a case.",
    "thinking.match-nameHint": "Not yet. switch is from other languages. Python has its own word.",
    "thinking.match-fruitSuccess": "Yes! The box holds apple, so the apple case runs.",
    "thinking.match-fruitHint": "Not yet. Which case has the same word as the box?",
    "thinking.match-restSuccess": "Yes! No case fits cow, so case _ runs.",
    "thinking.match-restHint": "Not yet. Is there a case for cow? Then which one catches the rest?",
    "thinking.match-underscoreSuccess": "Yes! _ fits anything, like else.",
    "thinking.match-underscoreHint": "Not yet. _ is the last case. When does it run?",
    "thinking.match-orSuccess": "Yes! | means or, so sunday fits the first case.",
    "thinking.match-orHint": "Not yet. Read | as or. Is sunday in the first case?",
    "thinking.match-oneSuccess": "Yes! The first case that fits wins. Only one case runs.",
    "thinking.match-oneHint": "Not yet. Two cases fit, but how many can run?",
    "thinking.match-sameSuccess": "Yes! Each case is like an elif that asks: is the box equal to this?",
    "thinking.match-sameHint": "Not yet. match chooses one path. Which other code chooses a path?",
    "loops.stepsEyebrow": "STEP BY STEP",
    "loops.stepsTitle": "Watch the loop work.",
    "loops.stepsIntro": "A loop has a box that changes on every turn.",
    "loops.walkA1": "for turn in range(3):",
    "loops.walkA1Tag": "turn is a box. range(3) fills it with 0, then 1, then 2.",
    "loops.walkA2": "    print(turn)",
    "loops.walkA2Tag": "The indented line repeats. It shows what is in the box now.",
    "loops.walkA3": "print(\"done\")",
    "loops.walkA3Tag": "Not indented, so it runs once, after the loop ends.",
    "loops.traceLabel": "The loop shows 0, 1 and 2, then done",
    "loops.walkB1": "snacks = [\"apple\", \"pear\", \"grape\"]",
    "loops.walkB1Tag": "A list box, like in Boxes of all kinds. It has 3 spaces.",
    "loops.walkB2": "for snack in snacks:",
    "loops.walkB2Tag": "snack takes each item of the list, one turn at a time.",
    "loops.walkB3": "    print(\"I like\", snack)",
    "loops.walkB3Tag": "Repeats 3 times, once for each item: apple, pear, grape.",
    "loops.rulesTitle": "Three things to know about loops.",
    "loops.ruleZeroTitle": "range starts at 0",
    "loops.ruleZeroText": "Computers start counting at 0. range(3) gives 0, 1, 2. That is still three turns.",
    "loops.ruleBoxTitle": "The loop box changes",
    "loops.ruleBoxText": "The word after for is a box. It gets a new value on every turn.",
    "loops.ruleIndentTitle": "Indented lines repeat",
    "loops.ruleIndentText": "Lines pushed right repeat on every turn. Lines on the left run once.",
    "loops.countEyebrow": "KEEP A COUNT",
    "loops.countWalkTitle": "A loop can add up as it goes.",
    "loops.walkC1": "stars = 0",
    "loops.walkC1Tag": "Start with an empty count: 0 stars.",
    "loops.walkC2": "for turn in range(4):",
    "loops.walkC2Tag": "Four turns.",
    "loops.walkC3": "    stars = stars + 1",
    "loops.walkC3Tag": "Each turn, take what is in the box and add 1: 1, 2, 3, 4.",
    "loops.walkC4": "print(stars)",
    "loops.walkC4Tag": "Runs once at the end and shows 4.",
    "loops.quizZeroTitle": "The first turn",
    "loops.quizZeroCode": "for turn in range(3):\n    print(turn)",
    "loops.quizZeroQuestion": "Which number shows first?",
    "loops.quizListTitle": "One turn per item",
    "loops.quizListCode": "colors = [\"red\", \"blue\"]\nfor color in colors:\n    print(color)",
    "loops.quizListQuestion": "How many turns does the loop take?",
    "loops.quizOnceTitle": "Outside the loop",
    "loops.quizOnceCode": "for turn in range(5):\n    print(\"hop\")\nprint(\"rest\")",
    "loops.quizOnceQuestion": "How many times does the last word show?",
    "loops.quizTotalTitle": "Keep a count",
    "loops.quizTotalCode": "stars = 0\nfor turn in range(3):\n    stars = stars + 2\nprint(stars)",
    "loops.quizShowQuestion": "What does Python show?",
    "path.loopsLabel": "Loops pages",
    "path.loopsFor": "for: count the turns",
    "path.loopsWhile": "while: ask first",
    "path.loopsUntil": "Repeat until",
    "meta.loopsWhileDescription": "Learn Python while loops: repeat while a question is True.",
    "meta.loopsUntilDescription": "Repeat until something is done in Python, with while not and break.",
    "topic.progressLoopsWhile": "ZONE 3 · 2 OF 3",
    "topic.progressLoopsUntil": "ZONE 3 · 3 OF 3",
    "loopsWhile.eyebrow": "LOOPS · WHILE",
    "loopsWhile.title": "Repeat while it is true.",
    "loopsWhile.intro": "A while loop asks a True-or-False question before every turn. True: one more turn. False: stop.",
    "loopsWhile.pybot": "I keep going while the answer is True.",
    "loopsWhile.pybotNamed": "{name}, I keep going while the answer is True.",
    "loopsWhile.robotLabel": "PyBot keeps going while a question mark spins around",
    "loopsWhile.overviewTitle": "while asks before every turn.",
    "loopsWhile.askTitle": "Ask a question",
    "loopsWhile.askText": "while battery > 0: asks, is the battery above 0?",
    "loopsWhile.trueTitle": "True: one more turn",
    "loopsWhile.trueText": "If the answer is True, the indented lines run again.",
    "loopsWhile.falseTitle": "False: stop",
    "loopsWhile.falseText": "If the answer is False, the loop ends and Python goes on.",
    "loopsWhile.demoLabel": "A while loop shows 3, 2 and 1, then asks for a charge",
    "loopsWhile.demoCode": "while battery > 0:",
    "loopsWhile.demoDone": "charge me!",
    "loopsWhile.stepsTitle": "Watch the question change.",
    "loopsWhile.stepsIntro": "Something inside the loop must change, so the answer can become False.",
    "loopsWhile.walk1": "battery = 3",
    "loopsWhile.walk1Tag": "Start with 3 bars of battery.",
    "loopsWhile.walk2": "while battery > 0:",
    "loopsWhile.walk2Tag": "The question. 3 > 0 is True, so a turn starts.",
    "loopsWhile.walk3": "    print(battery)",
    "loopsWhile.walk3Tag": "Shows what is in the box now: 3, then 2, then 1.",
    "loopsWhile.walk4": "    battery = battery - 1",
    "loopsWhile.walk4Tag": "Take 1 away. Without this line the answer stays True forever!",
    "loopsWhile.walk5": "print(\"charge me!\")",
    "loopsWhile.walk5Tag": "Runs once, when 0 > 0 is False and the loop is over.",
    "loopsWhile.rulesTitle": "for or while?",
    "loopsWhile.ruleForTitle": "for: you know how many",
    "loopsWhile.ruleForText": "range(3) gives exactly 3 turns. Use for when you can count the turns first.",
    "loopsWhile.ruleWhileTitle": "while: you know when to stop",
    "loopsWhile.ruleWhileText": "Keep going until the question becomes False, even if you do not know how many turns.",
    "loopsWhile.ruleChangeTitle": "Change the box",
    "loopsWhile.ruleChangeText": "If nothing changes, the loop never ends. If that happens, press Stop.",
    "loopsWhile.runTitle": "Help PyBot walk a few steps.",
    "loopsWhile.runCode": "steps = 0\nwhile steps < 3:\n    print(\"step\")\n    steps = steps + 1",
    "loopsWhile.predictQuestion": "How many times will PyBot say step?",
    "loopsWhile.tryText": "Change 3 to 5. Run again and count the steps.",
    "loopsWhile.practiceTitle": "Ask, repeat, stop.",
    "loopsWhile.quizCheckTitle": "When does it ask?",
    "loopsWhile.quizCheckQuestion": "When does a while loop ask its question?",
    "loopsWhile.beforeEvery": "Before every turn",
    "loopsWhile.onlyOnce": "Only once, at the start",
    "loopsWhile.neverAsks": "It never asks",
    "loopsWhile.quizCountTitle": "Count the turns",
    "loopsWhile.quizCountCode": "n = 0\nwhile n < 4:\n    print(n)\n    n = n + 1",
    "loopsWhile.quizCountQuestion": "How many numbers show?",
    "loopsWhile.quizLastTitle": "The last number",
    "loopsWhile.quizLastCode": "n = 1\nwhile n < 3:\n    print(n)\n    n = n + 1",
    "loopsWhile.quizLastQuestion": "Which is the last number Python shows?",
    "loopsWhile.quizZeroTitle": "Zero turns",
    "loopsWhile.quizZeroCode": "battery = 0\nwhile battery > 0:\n    print(\"go\")\nprint(\"rest\")",
    "loopsWhile.quizZeroQuestion": "How many times does go show?",
    "loopsWhile.quizForeverTitle": "Something is missing",
    "loopsWhile.quizForeverCode": "lap = 1\nwhile lap < 3:\n    print(\"run\")",
    "loopsWhile.quizForeverQuestion": "What happens?",
    "loopsWhile.runTwo": "run shows 2 times",
    "loopsWhile.runThree": "run shows 3 times",
    "loopsWhile.runForever": "It never stops",
    "loopsWhile.quizChooseTitle": "Pick the loop",
    "loopsWhile.quizChooseQuestion": "PyBot must eat cookies until the jar is empty. It does not know how many there are. Which loop fits?",
    "loopsWhile.chooseFor": "for turn in range(3):",
    "loopsWhile.chooseWhile": "while cookies > 0:",
    "loopsWhile.chooseNone": "No loop",
    "loopsWhile.fixTask": "PyBot wants to count 3, 2, 1, but nothing shows. Fix the question in the while line.",
    "loopsWhile.fixCode": "count = 3\nwhile count < 0:\n    print(count)\n    count = count - 1",
    "loopsWhile.fixExpected": "3\n2\n1",
    "loopsWhile.bigTitle": "A while loop repeats as long as its question is True.",
    "loopsWhile.bigText": "Next: Python has no until word, but you can still repeat until something is done.",
    "loopsWhile.next": "Repeat until",
    "thinking.while-predictSuccess": "Yes! steps goes 0, 1, 2. At 3, 3 < 3 is False, so step shows 3 times.",
    "thinking.while-predictHint": "Not yet. Follow the box: 0, 1, 2, 3. When is steps < 3 False?",
    "thinking.while-checkSuccess": "Yes! while asks before every turn, even the first one.",
    "thinking.while-checkHint": "Not yet. The question must be asked again, or the loop could not stop.",
    "thinking.while-countSuccess": "Yes! It shows 0, 1, 2 and 3. That is 4 numbers.",
    "thinking.while-countHint": "Not yet. Write down n on every turn: 0, 1, 2... when is n < 4 False?",
    "thinking.while-lastSuccess": "Yes! When n is 3, 3 < 3 is False, so the loop stops before showing 3.",
    "thinking.while-lastHint": "Not yet. The question is asked before print. What happens when n is 3?",
    "thinking.while-zeroSuccess": "Yes! 0 > 0 is False from the start, so the loop takes zero turns.",
    "thinking.while-zeroHint": "Not yet. Ask the question first: is 0 > 0?",
    "thinking.while-foreverSuccess": "Yes! lap never changes, so lap < 3 stays True forever.",
    "thinking.while-foreverHint": "Not yet. Look inside the loop. Does lap ever change?",
    "thinking.while-chooseSuccess": "Yes! You do not know how many cookies, but you know when to stop: when there are none left.",
    "thinking.while-chooseHint": "Not yet. You do not know how many turns. Which loop stops on a question?",
    "loopsUntil.eyebrow": "LOOPS · REPEAT UNTIL",
    "loopsUntil.title": "Repeat until it is done.",
    "loopsUntil.intro": "Some languages, like Scratch, have a repeat until block. Python has no until word. Here are two ways to do it anyway.",
    "loopsUntil.pybot": "No until in Python? No problem. I know two tricks.",
    "loopsUntil.pybotNamed": "No until in Python, {name}? No problem. I know two tricks.",
    "loopsUntil.robotLabel": "PyBot winks next to a glass that fills up",
    "loopsUntil.overviewTitle": "until is while turned around.",
    "loopsUntil.stopTitle": "until: stop when it is True",
    "loopsUntil.stopText": "Repeat until the glass is full means: keep pouring while it is not full yet.",
    "loopsUntil.notTitle": "not flips the answer",
    "loopsUntil.notText": "not True is False. not False is True.",
    "loopsUntil.pythonTitle": "Python has no until",
    "loopsUntil.pythonText": "There is no until word in Python. Write while not, or while True with break.",
    "loopsUntil.demoLabel": "A loop pours three times, then the glass is full",
    "loopsUntil.demoCode": "while not full:",
    "loopsUntil.demoStep": "pour",
    "loopsUntil.demoDone": "full!",
    "loopsUntil.wayOneEyebrow": "WAY 1",
    "loopsUntil.wayOneTitle": "while not: repeat until a box is True.",
    "loopsUntil.wayOneIntro": "Read while not full as repeat until full.",
    "loopsUntil.notWalk1": "full = False",
    "loopsUntil.notWalk1Tag": "A yes-or-no box. The glass is not full yet.",
    "loopsUntil.notWalk2": "cups = 0",
    "loopsUntil.notWalk2Tag": "No cups poured yet.",
    "loopsUntil.notWalk3": "while not full:",
    "loopsUntil.notWalk3Tag": "Repeat until full. not False is True, so a turn starts.",
    "loopsUntil.notWalk4": "    cups = cups + 1",
    "loopsUntil.notWalk4Tag": "Pour one more cup.",
    "loopsUntil.notWalk5": "    print(\"pour\", cups)",
    "loopsUntil.notWalk5Tag": "Shows pour 1, pour 2, pour 3.",
    "loopsUntil.notWalk6": "    if cups > 2:",
    "loopsUntil.notWalk6Tag": "After the third cup, the glass is full...",
    "loopsUntil.notWalk7": "        full = True",
    "loopsUntil.notWalk7Tag": "...so the box changes. not True is False, and the loop stops.",
    "loopsUntil.walkEnd": "print(\"full!\")",
    "loopsUntil.walkEndTag": "Runs once, after the loop.",
    "loopsUntil.wayTwoEyebrow": "WAY 2",
    "loopsUntil.wayTwoTitle": "while True with break: stop from inside.",
    "loopsUntil.wayTwoIntro": "The loop would run forever, so you add a door out: break.",
    "loopsUntil.breakWalk1": "cups = 0",
    "loopsUntil.breakWalk1Tag": "No cups poured yet.",
    "loopsUntil.breakWalk2": "while True:",
    "loopsUntil.breakWalk2Tag": "True is always True, so on its own this loop never stops.",
    "loopsUntil.breakWalk3": "    cups = cups + 1",
    "loopsUntil.breakWalk3Tag": "Pour one more cup.",
    "loopsUntil.breakWalk4": "    print(\"pour\", cups)",
    "loopsUntil.breakWalk4Tag": "Shows pour 1, pour 2, pour 3.",
    "loopsUntil.breakWalk5": "    if cups > 2:",
    "loopsUntil.breakWalk5Tag": "Is the glass full now?",
    "loopsUntil.breakWalk6": "        break",
    "loopsUntil.breakWalk6Tag": "break means: leave the loop now. Python jumps to the first line after it.",
    "loopsUntil.rulesTitle": "Three things to know about repeat until.",
    "loopsUntil.ruleUntilTitle": "The job runs first",
    "loopsUntil.ruleUntilText": "With while True and break, the job runs at least once, then PyBot checks.",
    "loopsUntil.ruleNotTitle": "while not = until",
    "loopsUntil.ruleNotText": "while not done means repeat until done is True.",
    "loopsUntil.ruleBreakTitle": "break leaves the loop",
    "loopsUntil.ruleBreakText": "Use break inside a loop, usually inside an if.",
    "loopsUntil.runTitle": "Help PyBot jump until it is tired.",
    "loopsUntil.runCode": "jumps = 0\nwhile True:\n    jumps = jumps + 1\n    print(\"jump\")\n    if jumps > 3:\n        break",
    "loopsUntil.predictQuestion": "How many times will PyBot jump?",
    "loopsUntil.predictForever": "Forever",
    "loopsUntil.tryText": "Change 3 to 5. Run again and count the jumps.",
    "loopsUntil.practiceTitle": "Repeat until it is done.",
    "loopsUntil.quizMeaningTitle": "Read it out loud",
    "loopsUntil.quizMeaningQuestion": "What does this line mean?",
    "loopsUntil.meaningUntil": "Repeat until done is True",
    "loopsUntil.meaningOnce": "Repeat only once",
    "loopsUntil.meaningNever": "Never repeat",
    "loopsUntil.quizNotTitle": "Flip it",
    "loopsUntil.quizNotQuestion": "What is not False?",
    "loopsUntil.quizBreakTitle": "What break does",
    "loopsUntil.quizBreakCode": "while True:\n    print(\"hi\")\n    break\nprint(\"bye\")",
    "loopsUntil.quizBreakQuestion": "How many times does hi show?",
    "loopsUntil.quizDoneTitle": "Already done",
    "loopsUntil.quizDoneCode": "done = True\nwhile not done:\n    print(\"work\")\nprint(\"rest\")",
    "loopsUntil.quizDoneQuestion": "How many times does work show?",
    "loopsUntil.quizCountTitle": "Until there are enough",
    "loopsUntil.quizCountCode": "stars = 0\nwhile not stars > 2:\n    stars = stars + 1\nprint(stars)",
    "loopsUntil.quizCountQuestion": "What does Python show?",
    "loopsUntil.quizWordTitle": "Python's loop words",
    "loopsUntil.quizWordQuestion": "Which word is NOT a Python word?",
    "loopsUntil.fixTask": "PyBot stops after one cup, but the glass holds 3. Fix the question in the if line.",
    "loopsUntil.fixCode": "cups = 0\nwhile True:\n    cups = cups + 1\n    print(\"pour\", cups)\n    if cups > 0:\n        break\nprint(\"full!\")",
    "loopsUntil.fixExpected": "pour 1\npour 2\npour 3\nfull!",
    "loopsUntil.bigTitle": "To repeat until, write while not, or while True with break.",
    "loopsUntil.bigText": "Next, you will learn to ask sharper questions with True and False.",
    "loops.nextComparisons": "True or false?",
    "thinking.until-predictSuccess": "Yes! jumps becomes 1, 2, 3, 4. At 4, 4 > 3 is True, so break stops the loop.",
    "thinking.until-predictHint": "Not yet. The jump shows before the check. Count jumps: 1, 2, 3, 4...",
    "thinking.until-meaningSuccess": "Yes! while not done keeps going until done becomes True.",
    "thinking.until-meaningHint": "Not yet. Read it as: repeat while it is not done.",
    "thinking.until-notSuccess": "Yes! not flips False into True.",
    "thinking.until-notHint": "Not yet. not turns the answer around.",
    "thinking.until-breakSuccess": "Yes! break leaves the loop on the first turn, so hi shows once.",
    "thinking.until-breakHint": "Not yet. What does break do right after the first hi?",
    "thinking.until-doneSuccess": "Yes! done is already True, so not done is False and the loop takes zero turns.",
    "thinking.until-doneHint": "Not yet. done is True. What is not True?",
    "thinking.until-countSuccess": "Yes! stars goes 1, 2, 3. At 3, 3 > 2 is True, so the loop stops.",
    "thinking.until-countHint": "Not yet. The loop stops when stars > 2 becomes True. Count up from 0.",
    "thinking.until-wordSuccess": "Yes! Python has for and while, but no until.",
    "thinking.until-wordHint": "Not yet. You already used two of these words in Python loops.",
    "loopsUntil.quizMeaningCode": "while not done:",
    "thinking.loop-zeroSuccess": "Yes! range starts counting at 0.",
    "thinking.loop-zeroHint": "Not yet. Remember: computers start counting at 0.",
    "thinking.loop-listSuccess": "Yes! The list has 2 items, so the loop takes 2 turns.",
    "thinking.loop-listHint": "Not yet. Count the items in the list.",
    "thinking.loop-onceSuccess": "Yes! The last line is on the left, so it runs once, after the loop.",
    "thinking.loop-onceHint": "Not yet. Is the last line indented? Only indented lines repeat.",
    "thinking.loop-totalSuccess": "Yes! 0 + 2 + 2 + 2 is 6.",
    "thinking.loop-totalHint": "Not yet. Three turns, and each turn adds 2. Start at 0.",
    "meta.comparisonsTitle": "True or false? — PyBot",
    "meta.comparisonsDescription": "A child-friendly look at Python comparisons and True or False conditions with and, or, and not.",
    "missionComparisons.concept": "COMPARISONS",
    "missionComparisons.title": "True or False?",
    "missionComparisons.text": "Compare values and join questions with and, or, not.",
    "comparisons.eyebrow": "COMPARISONS",
    "comparisons.title": "True or false?",
    "comparisons.intro": "Every if asks a question. The answer is always True or False. Here you learn to write those questions.",
    "comparisons.pybot": "I compare two things. Then I know: True or False.",
    "comparisons.robotLabel": "PyBot thinks next to 3 < 5 and the answer True",
    "comparisons.pybotNamed": "{name}, I compare two things. Then I know: True or False.",
    "comparisons.overviewTitle": "A question with only two answers.",
    "comparisons.boolTitle": "True or False",
    "comparisons.boolText": "A Python question has only two answers: True or False. They start with a capital letter, like the yes-or-no box.",
    "comparisons.compareTitle": "Compare two values",
    "comparisons.compareText": "3 < 5 asks: is 3 less than 5? Python answers True.",
    "comparisons.equalsTitle": "One = or two?",
    "comparisons.equalsText": "One = puts a value in a box. Two == ask if two values are the same.",
    "comparisons.signsEyebrow": "THE COMPARISON SIGNS",
    "comparisons.signsTitle": "Six ways to compare.",
    "comparisons.colSign": "Sign",
    "comparisons.colMeaning": "It asks",
    "comparisons.colExample": "Example",
    "comparisons.colAnswer": "Answer",
    "comparisons.signEqual": "Are they the same?",
    "comparisons.signNotEqual": "Are they different?",
    "comparisons.exampleNotEqual": "\"cat\" != \"dog\"",
    "comparisons.signLess": "Is the left one smaller?",
    "comparisons.signGreater": "Is the left one bigger?",
    "comparisons.signLessEqual": "Smaller, or the same?",
    "comparisons.signGreaterEqual": "Bigger, or the same?",
    "comparisons.mouthLabel": "A trick:",
    "comparisons.mouthText": "< and > are like a hungry mouth. The open side always faces the bigger number.",
    "comparisons.joinEyebrow": "JOIN QUESTIONS",
    "comparisons.joinTitle": "and, or, not.",
    "comparisons.joinIntro": "Sometimes one question is not enough. These three words help.",
    "comparisons.andTitle": "and: both must be True",
    "comparisons.andText": "sunny and warm is True only when sunny is True and warm is True.",
    "comparisons.orTitle": "or: one is enough",
    "comparisons.orText": "cake or ice_cream is True when at least one of them is True.",
    "comparisons.notTitle": "not: flip the answer",
    "comparisons.notText": "not True is False. not False is True.",
    "comparisons.walkA1": "has_ticket = True",
    "comparisons.walkA1Tag": "A yes-or-no box that keeps True.",
    "comparisons.walkA2": "is_tall = False",
    "comparisons.walkA2Tag": "Another one that keeps False.",
    "comparisons.walkA3": "print(has_ticket and is_tall)",
    "comparisons.walkA3Tag": "and needs both. One is False, so it shows False.",
    "comparisons.walkA4": "print(has_ticket or is_tall)",
    "comparisons.walkA4Tag": "or needs just one. has_ticket is True, so it shows True.",
    "comparisons.walkA5": "print(not is_tall)",
    "comparisons.walkA5Tag": "not flips False into True.",
    "comparisons.walkB1": "age = 9",
    "comparisons.walkB1Tag": "A box keeps the number 9.",
    "comparisons.walkB2": "if age >= 8 and age <= 10:",
    "comparisons.walkB2Tag": "Is 9 >= 8? True. Is 9 <= 10? True. Both are True, so and gives True.",
    "comparisons.walkB3": "    print(\"PyBot is for you!\")",
    "comparisons.walkB3Tag": "The answer was True, so this path runs.",
    "comparisons.runTitle": "Can PyBot play outside?",
    "comparisons.runCode": "battery = 50\nsunny = True\nif battery > 30 and sunny:\n    print(\"play outside\")\nelse:\n    print(\"stay inside\")",
    "comparisons.predictOutside": "play outside",
    "comparisons.predictInside": "stay inside",
    "comparisons.predictBoth": "play outside and stay inside",
    "thinking.compare-predictSuccess": "Yes! 50 > 30 is True and sunny is True. Both are True, so and gives True.",
    "thinking.compare-predictHint": "Not yet. Is 50 greater than 30? Is sunny True? and needs both.",
    "comparisons.tryText": "Change True to False. Which path runs now? Then try battery = 10.",
    "comparisons.practiceTitle": "True or False?",
    "comparisons.answerQuestion": "What does Python answer?",
    "comparisons.quizLessTitle": "Smaller or bigger?",
    "comparisons.quizEqualTitle": "The same?",
    "comparisons.quizAssignTitle": "Box or question?",
    "comparisons.quizAssignScene": "score = 10\nscore == 10",
    "comparisons.quizAssignQuestion": "Which line asks a question?",
    "comparisons.quizAssignBox": "score = 10",
    "comparisons.quizAssignAsk": "score == 10",
    "comparisons.quizAssignBoth": "Both lines",
    "comparisons.quizNotEqualTitle": "Different?",
    "comparisons.quizNotEqualCode": "\"cat\" != \"dog\"",
    "comparisons.quizAndTitle": "Both needed",
    "comparisons.quizAndCode": "has_ticket = True\nis_tall = False\nhas_ticket and is_tall",
    "comparisons.quizOrTitle": "One is enough",
    "comparisons.quizOrCode": "raining = False\nsnowing = True\nraining or snowing",
    "comparisons.quizNotTitle": "Flip it",
    "comparisons.maybe": "Maybe",
    "thinking.compare-lessSuccess": "Yes! 3 is less than 5, so the answer is True.",
    "thinking.compare-lessHint": "Not yet. A comparison answers True or False. Is 3 less than 5?",
    "thinking.compare-equalSuccess": "Yes! 7 and 8 are not the same, so == answers False.",
    "thinking.compare-equalHint": "Not yet. == asks a question. Are 7 and 8 the same?",
    "thinking.compare-assignSuccess": "Yes! Two == ask. One = puts a value in the box.",
    "thinking.compare-assignHint": "Not yet. One = fills a box. How many = does a question have?",
    "thinking.compare-not-equalSuccess": "Yes! The two words are different, so != answers True.",
    "thinking.compare-not-equalHint": "Not yet. != asks: are they different?",
    "thinking.compare-andSuccess": "Yes! and needs both, and one is False.",
    "thinking.compare-andHint": "Not yet. and is True only when both are True.",
    "thinking.compare-orSuccess": "Yes! or needs just one True, and snowing is True.",
    "thinking.compare-orHint": "Not yet. or is True when at least one is True.",
    "thinking.compare-notSuccess": "Yes! not flips True into False.",
    "thinking.compare-notHint": "Not yet. not flips the answer. What is the opposite of True?",
    "comparisons.bigTitle": "A comparison is a question with a True or False answer.",
    "comparisons.bigText": "if uses that answer to choose a path. Next, you will pack it all inside a box with a name.",
    "comparisons.next": "Boxes that do a job",
    "topic.progressComparisons": "ZONE 5 OF 6",
    "language.bigTitle": "A language gives code its rules.",
    "language.bigText": "Next, we will learn the keys used to write those rules.",
    "meta.checkpoint1Title": "Pit stop 1 — PyBot",
    "meta.checkpoint1Description": "A pit stop on the PyBot path: bigger real Python challenges about the zones so far, then a quick check of how it went.",
    "topic.progressCheckpoint1": "PIT STOP 1",
    "missionCheckpoint1.concept": "PIT STOP · ZONES 2–6",
    "missionCheckpoint1.title": "Check the Engine",
    "missionCheckpoint1.text": "Bigger challenges with real Python. Then tell PyBot how it went.",
    "functions.next": "Pit stop",
    "path.review": "TO REVIEW",
    "checkpoint.eyebrow": "PIT STOP",
    "checkpoint.title": "Pit stop! Let's check the engine.",
    "checkpoint.intro": "You have come a long way on the track. These challenges are bigger and mix the zones you visited. Then you tell PyBot how it went.",
    "checkpoint.pybot": "Race cars stop to check their engines. Now it is our turn!",
    "checkpoint.pybotNamed": "Race cars stop to check their engines. Now it is our turn, {name}!",
    "checkpoint.robotLabel": "PyBot stands proudly next to a checkered race flag",
    "checkpoint.howEyebrow": "HOW IT WORKS",
    "checkpoint.howTitle": "Three laps.",
    "checkpoint.lap1Title": "Read the mission",
    "checkpoint.lap1Text": "Lines that start with # are PyBot's notes. They say what to build.",
    "checkpoint.lap2Title": "Write real code",
    "checkpoint.lap2Text": "Finish the code, run it, and compare your output with the goal.",
    "checkpoint.lap3Title": "Tell PyBot how it went",
    "checkpoint.lap3Text": "There are no grades. If something felt hard, PyBot shows you where to review.",
    "checkpoint.challengesEyebrow": "CHALLENGES",
    "checkpoint.challengesTitle": "Bigger code, same ideas.",
    "checkpoint.challengesIntro": "Take them in any order. Stuck? Open the zone under the challenge and come back.",
    "checkpoint.zonesLabel": "Stuck? Review:",
    "checkpoint.codeLabel": "Your code",
    "checkpoint.backpackTitle": "Pack PyBot's backpack",
    "checkpoint.backpackTask": "Follow the two comments. Then run it.",
    "checkpoint.backpackCode": "name = \"PyBot\"\nsnacks = [\"apple\", \"cookie\", \"grape\"]\n\n# 1. Make a box called energy that keeps 7.\n# 2. Print name, then energy, then the last snack.\nprint(name)",
    "checkpoint.backpackExpected": "PyBot\n7\ngrape",
    "thinking.checkpoint-backpackSuccess": "Great packing! Boxes and lists work together.",
    "thinking.checkpoint-backpackHint": "Not yet. Is energy a box with 7? The last snack is in space 2, because counting starts at 0.",
    "checkpoint.lightTitle": "Build a traffic light",
    "checkpoint.lightTask": "Use if, elif, and else. When it works, try light = \"red\".",
    "checkpoint.lightCode": "light = \"yellow\"\n\n# Print \"go\" if light is \"green\".\n# Print \"wait\" if light is \"yellow\".\n# Otherwise, print \"stop\".",
    "checkpoint.lightExpected": "wait",
    "thinking.checkpoint-lightSuccess": "Your traffic light works! Change the color and run it again.",
    "thinking.checkpoint-lightHint": "Not yet. Ask with == (two equals signs) and end the if, elif, and else lines with a colon.",
    "checkpoint.outsideTitle": "Outside or inside?",
    "checkpoint.outsideTask": "Join two questions in one if.",
    "checkpoint.outsideCode": "sunny = True\nbattery = 60\n\n# PyBot goes outside only if it is sunny\n# and battery is greater than 50.\n# Print \"outside\" or \"inside\".",
    "checkpoint.outsideExpected": "outside",
    "thinking.checkpoint-outsideSuccess": "Yes! and needs both answers to be True.",
    "thinking.checkpoint-outsideHint": "Not yet. Put both questions in one if and join them with and.",
    "checkpoint.countdownTitle": "Countdown to launch",
    "checkpoint.countdownTask": "A loop for the numbers. One more line after it.",
    "checkpoint.countdownCode": "countdown = [3, 2, 1]\n\n# Print each number in countdown with a for loop.\n# After the loop, print \"Go!\"",
    "checkpoint.countdownExpected": "3\n2\n1\nGo!",
    "thinking.checkpoint-countdownSuccess": "Launch! The loop ran once for each number.",
    "thinking.checkpoint-countdownHint": "Not yet. Print the number inside the loop, with spaces. Print \"Go!\" after it, with no spaces.",
    "checkpoint.starsTitle": "Count the big scores",
    "checkpoint.starsTask": "A loop with an if inside. This one is bigger!",
    "checkpoint.starsCode": "scores = [4, 9, 2, 7, 10]\nbig = 0\n\n# Look at each score with a for loop.\n# If the score is greater than 5, add 1 to big.\n\nprint(big)",
    "checkpoint.starsExpected": "3",
    "thinking.checkpoint-starsSuccess": "You counted 3 big scores: 9, 7, and 10.",
    "thinking.checkpoint-starsHint": "Not yet. Put an if inside the loop. To add 1, write big = big + 1.",
    "checkpoint.batteryTitle": "A box that decides",
    "checkpoint.batteryTask": "Fill the box with if and else. Every path needs a return.",
    "checkpoint.batteryCode": "def check_battery(battery):\n    # Return \"charge\" if battery is less than 30.\n    # Otherwise, return \"play\".\n    return \"?\"\n\nprint(check_battery(20))\nprint(check_battery(80))",
    "checkpoint.batteryExpected": "charge\nplay",
    "thinking.checkpoint-batterySuccess": "Your box decides by itself! Variables, if, and return, all together.",
    "thinking.checkpoint-batteryHint": "Not yet. Inside the box, use if and else, and return a word on each path.",
    "checkpoint.feelEyebrow": "HOW DID IT GO?",
    "checkpoint.feelTitle": "Tell PyBot the truth.",
    "checkpoint.feelIntro": "No grades here. For each zone, pick the face that fits you best.",
    "checkpoint.rateLabel": "How did {name} go?",
    "checkpoint.rateGood": "I've got it",
    "checkpoint.rateOkay": "Almost",
    "checkpoint.rateReview": "I want to review",
    "checkpoint.noticed": "PyBot saw a challenge here that is still tricky.",
    "checkpoint.resultReview": "Good choice! Reviewing is how racers get faster. These zones are marked TO REVIEW on your path:",
    "checkpoint.resultGood": "Great race! Your engine is ready. The next part of the track is being built.",
    "checkpoint.resultPending": "Pick a face for every zone.",
    "checkpoint.goTo": "Go to {name} →",
    "checkpoint.bigTitle": "Going back is part of the race.",
    "checkpoint.bigText": "Good programmers review often. Every time you come back to a zone, it gets easier.",
    "review.note": "At the pit stop you chose to review this zone. Take your time.",
    "review.done": "I reviewed it ✓",
  },
  es: {
    "keyboard.quizEnterTitle": "Empieza una línea nueva",
    "keyboard.quizEnterScene": "Terminaste una línea de código.",
    "keyboard.quizEnterQuestion": "¿Qué tecla pasa a una línea nueva?",
    "keyboard.quizEnterOption1": "Enter",
    "keyboard.quizEnterOption2": "Backspace",
    "keyboard.quizEnterOption3": "Shift",
    "keyboard.quizShiftTitle": "Escribe una mayúscula",
    "keyboard.quizShiftScene": "Quieres escribir una P grande para PyBot.",
    "keyboard.quizShiftQuestion": "¿Qué tecla mantienes presionada?",
    "keyboard.quizShiftOption1": "Backspace",
    "keyboard.quizShiftOption2": "Shift",
    "keyboard.quizShiftOption3": "Enter",
    "keyboard.quizPasteTitle": "Pega lo que copiaste",
    "keyboard.quizPasteScene": "Copiaste una palabra con Ctrl + C.",
    "keyboard.quizPasteQuestion": "¿Qué tecla completa Ctrl + ? para pegarla?",
    "keyboard.quizPasteOption1": "Z",
    "keyboard.quizPasteOption2": "C",
    "keyboard.quizPasteOption3": "V",
    "keyboard.fixTask": "PyBot escribió demasiados !!! Usa Backspace para que Python muestre lo esperado.",
    "keyboard.fixCode": "print(\"¡Hola, PyBot!!!\")",
    "keyboard.fixExpected": "¡Hola, PyBot!",
    "environment.quizStopTitle": "Detén algo que no termina",
    "environment.quizStopScene": "Tu código sigue y sigue funcionando.",
    "environment.quizStopQuestion": "¿Qué botón ayuda?",
    "environment.quizStopOption1": "Detener",
    "environment.quizStopOption2": "Ejecutar Python",
    "environment.quizStopOption3": "Copiar",
    "environment.quizOutputTitle": "Lee el resultado",
    "environment.quizOutputScene": "Presionaste Ejecutar Python.",
    "environment.quizOutputQuestion": "¿Dónde ves lo que muestra Python?",
    "environment.quizOutputOption1": "El teclado",
    "environment.quizOutputOption2": "La zona de resultado",
    "environment.quizOutputOption3": "El título de la página",
    "environment.quizBrowserTitle": "Dónde vive todo",
    "environment.quizBrowserScene": "El editor y Pyodide viven dentro de esta página web.",
    "environment.quizBrowserQuestion": "¿Qué programa abre páginas web?",
    "environment.quizBrowserOption1": "La impresora",
    "environment.quizBrowserOption2": "El parlante",
    "environment.quizBrowserOption3": "El navegador",
    "environment.fixTask": "PyBot escribió mal una orden. Arréglala en el editor y ejecútala.",
    "environment.fixCode": "prnt(\"¡Puedo ejecutar Python!\")",
    "environment.fixExpected": "¡Puedo ejecutar Python!",
    "symbols.quizParensTitle": "Dale a print lo que necesita",
    "symbols.quizParensScene": "print ? \"hola\" ?",
    "symbols.quizParensQuestion": "¿Qué marcas guardan lo que necesita print?",
    "symbols.quizParensOption1": "Paréntesis ( )",
    "symbols.quizParensOption2": "Numeral #",
    "symbols.quizParensOption3": "Dos puntos :",
    "symbols.quizNoteTitle": "Escribe una nota",
    "symbols.quizNoteScene": "? esta línea es para personas",
    "symbols.quizNoteQuestion": "¿Qué marca comienza una nota que Python salta?",
    "symbols.quizNoteOption1": "Igual =",
    "symbols.quizNoteOption2": "Numeral #",
    "symbols.quizNoteOption3": "Comillas \" \"",
    "symbols.quizJoinTitle": "Une dos palabras",
    "symbols.quizJoinScene": "color?robot = \"naranja\"",
    "symbols.quizJoinQuestion": "¿Qué marca une las dos palabras?",
    "symbols.quizJoinOption1": "Barra /",
    "symbols.quizJoinOption2": "Dos puntos :",
    "symbols.quizJoinOption3": "Guion bajo _",
    "symbols.fixTask": "Falta una marca. El texto necesita comillas a los dos lados.",
    "symbols.fixCode": "print(\"Hola, soy PyBot)",
    "symbols.fixExpected": "Hola, soy PyBot",
    "variables.quizChangeTitle": "Guarda algo nuevo",
    "variables.quizChangeScene": "estrellas = 5\nestrellas = 8\nprint(estrellas)",
    "variables.quizChangeQuestion": "¿Qué mostrará Python?",
    "variables.quizChangeOption1": "5",
    "variables.quizChangeOption2": "8",
    "variables.quizChangeOption3": "13",
    "variables.quizLabelTitle": "Elige un nombre útil",
    "variables.quizLabelScene": "PyBot quiere recordar tu edad.",
    "variables.quizLabelQuestion": "¿Qué nombre ayuda más?",
    "variables.quizLabelOption1": "edad",
    "variables.quizLabelOption2": "x",
    "variables.quizLabelOption3": "cosa",
    "variables.fixTask": "PyBot escribió mal el nombre de su cajita. Arréglalo para que Python la encuentre.",
    "variables.fixCode": "mascota = \"gato\"\nprint(mascotaa)",
    "variables.fixExpected": "gato",
    "boxes.quizDecimalTitle": "Encuentra el decimal",
    "boxes.quizDecimalScene": "PyBot midió nueve centímetros y medio.",
    "boxes.quizDecimalQuestion": "¿Qué cajita guarda un número con decimales?",
    "boxes.quizDecimalOption1": "medida = 9",
    "boxes.quizDecimalOption2": "medida = 9.5",
    "boxes.quizDecimalOption3": "medida = \"9.5\"",
    "boxes.fixTask": "PyBot quiere la uva. Recuerda: el primer espacio es el número 0.",
    "boxes.fixCode": "meriendas = [\"manzana\", \"galleta\", \"uva\"]\nprint(meriendas[3])",
    "boxes.fixExpected": "uva",
    "conditionals.fixTask": "Algo falta al final de la línea del if.",
    "conditionals.fixCode": "bateria = 20\nif bateria < 50\n    print(\"¡Hora de cargar!\")",
    "conditionals.fixExpected": "¡Hora de cargar!",
    "loops.fixTask": "El paso que se repite debe estar dentro del ciclo. Muévelo con espacios.",
    "loops.fixCode": "for paso in range(3):\nprint(\"Bip\")",
    "loops.fixExpected": "Bip\nBip\nBip",
    "comparisons.fixTask": "PyBot quiere hacer una pregunta, no guardar un valor.",
    "comparisons.fixCode": "estrellas = 3\nif estrellas = 3:\n    print(\"¡Tres estrellas!\")",
    "comparisons.fixExpected": "¡Tres estrellas!",
    "functions.quizNameTitle": "Nombra la caja",
    "functions.quizNameScene": "def triple(n):\n    return n * 3",
    "functions.quizNameQuestion": "¿Cómo se llama esta caja?",
    "functions.quizNameOption1": "n",
    "functions.quizNameOption2": "triple",
    "functions.quizNameOption3": "return",
    "functions.quizCallTitle": "Envía algo nuevo",
    "functions.quizCallScene": "def doble(numero):\n    return numero + numero\n\nprint(doble(10))",
    "functions.quizCallQuestion": "¿Qué mostrará Python?",
    "functions.quizCallOption1": "10",
    "functions.quizCallOption2": "1010",
    "functions.quizCallOption3": "20",
    "functions.fixTask": "La caja olvidó su puerta de salida. Haz que salga 10.",
    "functions.fixCode": "def doble(numero):\n    respuesta = numero + numero\n\nprint(doble(5))",
    "functions.fixExpected": "10",
    "fix.title": "Arregla el código de PyBot",
    "fix.codeLabel": "Código de PyBot",
    "fix.goal": "Resultado esperado",
    "fix.restart": "Empezar de nuevo",
    "fix.success": "¡Lo arreglaste! El resultado es igual al esperado.",
    "fix.hint": "Todavía no. Compara tu resultado con el esperado, cambia una cosa y ejecuta otra vez.",
    "fix.timeout": "Python tardó demasiado y PyBot lo detuvo. Revisa si hay un ciclo que nunca termina.",
    "path.done": "COMPLETADA",
    "path.unfinished": "FALTAN ACTIVIDADES",
    "path.newActivities": "ACTIVIDADES NUEVAS",
    "course.newActivities": "Actividades nuevas en: {name} →",
    "progress.newActivities": "PyBot agregó actividades nuevas aquí. ¡Busca las que todavía no has intentado!",
    "meta.homeTitle": "PyBot — Python, un paso a la vez",
    "meta.meetTitle": "Conoce a PyBot — PyBot",
    "meta.courseTitle": "Ruta de aprendizaje — PyBot",
    "meta.worldTitle": "¿Qué puede hacer el código? — PyBot",
    "meta.thinkingTitle": "Tu cerebro hace pequeños planes — PyBot",
    "meta.languageTitle": "¿Qué es un lenguaje de programación? — PyBot",
    "meta.homeDescription": "PyBot ayuda a los niños a descubrir Python con ideas pequeñas, pasos claros y práctica divertida.",
    "meta.meetDescription": "Conoce a PyBot y prueba los gestos que usa durante el curso.",
    "meta.courseDescription": "Una base corta y nueve pequeñas zonas de aprendizaje para niños, guiadas por PyBot.",
    "meta.worldDescription": "Mira los pequeños trabajos que hace el código en aplicaciones que los niños usan cada día.",
    "meta.thinkingDescription": "Una lección divertida sobre los pequeños planes que los niños ya hacen cada día.",
    "meta.languageDescription": "Una explicación corta y sencilla de los lenguajes de programación.",
    "a11y.skip": "Saltar al contenido",
    "a11y.home": "PyBot, inicio",
    "a11y.backTop": "PyBot, volver arriba",
    "a11y.mainNav": "Navegación principal",
    "a11y.language": "Elegir idioma",
    "a11y.features": "Características importantes",
    "a11y.moods": "Gestos de PyBot",
    "a11y.codePreview": "Vista previa de un ejercicio de Python",
    "a11y.privacy": "Privacidad y progreso",
    "a11y.missions": "Zonas de aprendizaje",
    "a11y.pybotNote": "Una nota de PyBot",
    "a11y.lessonNav": "Navegación de la lección",
    "audio.on": "Sonido activo",
    "audio.off": "Sonido apagado",
    "audio.turnOn": "Activar sonidos robóticos",
    "audio.turnOff": "Apagar sonidos robóticos",
    "support.label": "Apoya a PyBot",
    "support.aria": "Apoya a PyBot en Patreon (se abre en una pestaña nueva)",
    "progress.savedTitle": "Tu trabajo está guardado aquí.",
    "progress.savedText": "¿Quieres empezar de nuevo? Borra solo el avance de esta página.",
    "progress.resetPage": "Borrar avance de esta página",
    "progress.resetConfirm": "¿Borrar todas las actividades de esta página? Tu idioma, nombre y sonido no cambiarán.",
    "progress.resetDone": "Listo. Esta página está preparada para intentarla otra vez.",
    "progress.summaryLabel": "Avance de los planes",
    "progress.activitySummaryLabel": "Avance de las actividades",
    "progress.completed": "Completadas",
    "progress.remaining": "Faltan",
    "progress.review": "Por revisar",
    "name.question": "¿Cómo te gustaría que te llamara?",
    "name.placeholder": "Nombre o apodo",
    "name.save": "¡Así me llamo!",
    "name.privateNote": "Solo este navegador lo recordará.",
    "name.error": "Escribe un nombre o un apodo.",
    "name.savedPrefix": "PyBot te llama",
    "name.change": "Cambiar",
    "name.forget": "Olvidar este nombre",
    "name.pybotQuestion": "¡Hola! ¿Cómo te gustaría que te llamara?",
    "name.pybotSaved": "¡Mucho gusto, {name}! ¿Probamos una idea pequeña?",
    "nav.path": "Ruta de aprendizaje",
    "nav.meet": "Conoce a PyBot",
    "hero.eyebrow": "Una aventura con Python",
    "hero.titleStart": "Python, un paso",
    "hero.titleEnd": "pequeño a la vez.",
    "hero.intro": "Conoce a PyBot. Prueba ideas pequeñas. Mira qué hace tu código.",
    "hero.start": "Empieza la ruta",
    "hero.meet": "Conoce a PyBot",
    "trust.accounts": "Sin cuentas",
    "trust.pace": "A tu ritmo",
    "trust.progress": "Tu avance se queda contigo",
    "pybot.says": "PYBOT DICE",
    "mood.prompt": "Prueba un gesto",
    "mood.happy": "Feliz",
    "mood.encouraging": "Tú puedes",
    "mood.thinking": "Pensando",
    "mood.celebrating": "Celebrando",
    "mood.surprised": "Sorprendido",
    "mood.curious": "Curioso",
    "mood.happyMessage": "¡Hola! Soy PyBot. ¿Probamos una idea?",
    "mood.happyMessageNamed": "¡Hola, {name}! ¿Probamos una idea?",
    "mood.happyLabel": "PyBot está feliz y saluda con una mano",
    "mood.encouragingMessage": "Estuviste cerca. Probemos una pista pequeña.",
    "mood.encouragingMessageNamed": "Estuviste cerca, {name}. Probemos una pista pequeña.",
    "mood.encouragingLabel": "PyBot anima con calma",
    "mood.thinkingMessage": "Mmm. Miremos esa línea juntos.",
    "mood.thinkingMessageNamed": "Mmm, {name}. Miremos esa línea juntos.",
    "mood.thinkingLabel": "PyBot inclina la cabeza y piensa",
    "mood.celebratingMessage": "¡Lo lograste! Ese pequeño paso fue importante.",
    "mood.celebratingMessageNamed": "¡Lo lograste, {name}! Ese paso fue importante.",
    "mood.celebratingLabel": "PyBot celebra con los dos brazos arriba",
    "mood.surprisedMessage": "¡Oh! Ese resultado fue diferente.",
    "mood.surprisedMessageNamed": "¡Oh, {name}! Ese resultado fue diferente.",
    "mood.surprisedLabel": "PyBot abre los ojos y se muestra sorprendido",
    "mood.curiousMessage": "¿Qué pasa si cambiamos una cosa?",
    "mood.curiousMessageNamed": "{name}, ¿qué pasa si cambiamos una cosa?",
    "mood.curiousLabel": "PyBot mira hacia un lado con curiosidad",
    "mood.focused": "Concentrado",
    "mood.welcoming": "Bienvenida",
    "mood.starry": "Asombrado",
    "mood.wink": "Guiño",
    "mood.proud": "Orgulloso",
    "mood.deciding": "Decidiendo",
    "mood.counting": "Contando",
    "mood.determined": "Listo",
    "mood.focusedMessage": "Una tecla a la vez. Estoy muy atento.",
    "mood.focusedMessageNamed": "{name}, una tecla a la vez. Estoy muy atento.",
    "mood.focusedLabel": "PyBot mira con atención y escribe con cuidado",
    "mood.welcomingMessage": "¡Pasa! Este es un buen lugar para probar cosas.",
    "mood.welcomingMessageNamed": "¡Pasa, {name}! Este es un buen lugar para probar cosas.",
    "mood.welcomingLabel": "PyBot abre los brazos para darte la bienvenida",
    "mood.starryMessage": "¡Guau! Los detalles pequeños pueden hacer cosas grandes.",
    "mood.starryMessageNamed": "¡Guau, {name}! Los detalles pequeños pueden hacer cosas grandes.",
    "mood.starryLabel": "PyBot tiene ojos de estrella y se ve asombrado",
    "mood.winkMessage": "Psst. Tengo un truquito para mostrarte.",
    "mood.winkMessageNamed": "Psst, {name}. Tengo un truquito para mostrarte.",
    "mood.winkLabel": "PyBot guiña un ojo y levanta una mano",
    "mood.proudMessage": "Mira lo que hicimos, paso a paso.",
    "mood.proudMessageNamed": "Mira lo que hicimos, {name}, paso a paso.",
    "mood.proudLabel": "PyBot sonríe con orgullo y los ojos cerrados",
    "mood.decidingMessage": "¿Por aquí o por allá? Primero revisemos.",
    "mood.decidingMessageNamed": "¿Por aquí o por allá, {name}? Primero revisemos.",
    "mood.decidingLabel": "PyBot mira a un lado y señala el camino",
    "mood.countingMessage": "Uno, dos, tres... ¡y otra vez!",
    "mood.countingMessageNamed": "Uno, dos, tres, {name}... ¡y otra vez!",
    "mood.countingLabel": "PyBot levanta una mano y cuenta en voz alta",
    "mood.determinedMessage": "Estoy listo. ¡Dame un trabajo!",
    "mood.determinedMessageNamed": "Estoy listo, {name}. ¡Dame un trabajo!",
    "mood.determinedLabel": "PyBot se ve decidido y listo para trabajar",
    "meet.eyebrow": "TU GUÍA ROBOT",
    "meet.title": "Conoce a PyBot.",
    "meet.intro": "Elige un gesto. PyBot usa cada uno para ayudarte a aprender.",
    "about.eyebrow": "LAS PERSONAS DETRÁS DE PYBOT",
    "about.title": "PyBot comenzó con nosotras.",
    "about.sorey": "Hola, soy Sorey García. Trabajo en tecnología y construí PyBot pensando en María Ángel.",
    "about.maria": "A ella le encantan la ciencia, el espacio y la programación. Quise crear un camino divertido que la guiara paso a paso, sin prisa y sin abrumarla.",
    "about.signature": "Hecho por Sorey. Inspirado por María Ángel.",
    "about.profile": "Conoce a Sorey en LinkedIn",
    "colombia.eyebrow": "DE DÓNDE VIENE PYBOT",
    "colombia.title": "Hecho con amor desde Colombia.",
    "colombia.text": "PyBot nació en Colombia, una tierra de montañas, música, café y niñas y niños muy curiosos. Estés donde estés, aquí siempre hay un lugar para ti.",
    "colombia.pybot": "¡Hecho con amor desde Colombia!",
    "colombia.robotLabel": "PyBot sonríe y ondea una banderita de Colombia",
    "loop.eyebrow": "ASÍ APRENDEMOS",
    "loop.titleOne": "Mira. Prueba.",
    "loop.titleTwo": "Entiende.",
    "loop.intro": "Una idea en cada página. Una acción clara.",
    "loop.step1Title": "Mira una idea",
    "loop.step1Text": "PyBot muestra un ejemplo pequeño.",
    "loop.step2Title": "Prueba el código",
    "loop.step2Text": "Cambia una parte. Luego ejecútalo.",
    "loop.step3Title": "Di qué pasó",
    "loop.step3Text": "Encuentra la línea que causó el resultado.",
    "preview.eyebrow": "TU PRIMERA MISIÓN",
    "preview.title": "Haz que PyBot diga hola.",
    "preview.text": "Escribe Python. Ejecútalo. Mira la respuesta.",
    "preview.noteStrong": "¿Te atascaste?",
    "preview.noteText": "PyBot da una pista pequeña cada vez.",
    "preview.tag": "PYTHON REAL",
    "preview.filename": "mi_primer_programa.py",
    "preview.defaultCode": "print(\"¡Hola, PyBot!\")",
    "preview.editorLabel": "Código Python",
    "preview.output": "RESULTADO",
    "preview.ready": "Listo. Cambia las palabras y ejecútalo.",
    "preview.loading": "Iniciando Python… La primera vez puede tardar un poco más.",
    "preview.noOutput": "¡Python terminó! Todavía no imprimiste nada.",
    "preview.error": "Python encontró una pista:",
    "preview.hintLabel": "Pista de PyBot",
    "preview.hintLine": "Línea {line}:",
    "hint.quote": "A un texto le falta la comilla de cierre.",
    "hint.neverClosed": "Se abrió un ( o un [ que nunca se cerró.",
    "hint.extraClose": "Hay un ) o un ] de cierre sin pareja de apertura.",
    "hint.colon": "Las líneas que empiezan con if, else o for terminan con dos puntos :",
    "hint.equals": "Para comparar, usa ==. Un solo = guarda un valor en una caja.",
    "hint.comma": "Falta algo entre dos valores. ¿Quizás una coma?",
    "hint.indentNeeded": "Después de una línea que termina en :, la siguiente necesita espacios al inicio.",
    "hint.indentExtra": "Esta línea tiene espacios de más al inicio. Prueba quitarlos.",
    "hint.indentMismatch": "Los espacios al inicio de esta línea no están alineados.",
    "hint.syntax": "Python no pudo leer esta línea. Revisa comillas, paréntesis y dos puntos.",
    "hint.nameSuggest": "Python no conoce «{name}». ¿Querías decir «{suggestion}»?",
    "hint.name": "Python todavía no conoce «{name}». Dale un valor primero o ponle comillas si es texto.",
    "hint.mixTypes": "No se pueden sumar texto y números. Prueba poner str() alrededor del número.",
    "hint.rangeText": "range() necesita un número, no un texto entre comillas.",
    "hint.type": "Un valor no es del tipo correcto aquí. ¿Es texto o número?",
    "hint.zero": "Nada se puede dividir entre cero, ni siquiera en Python.",
    "hint.intText": "int() solo convierte dígitos, como \"7\", en un número.",
    "hint.generic": "Lee la última línea de abajo. Ahí está la pista que encontró Python.",
    "preview.stopped": "Detenido. Tu código sigue aquí.",
    "preview.serveHint": "El ejecutor real necesita GitHub Pages o un servidor web local. Los navegadores lo bloquean en páginas file://.",
    "preview.run": "Ejecutar Python",
    "preview.stop": "Detener",
    "preview.creditSummary": "¿Quién hace funcionar Python aquí?",
    "preview.creditText": "Pyodide 314.0.3 ejecuta CPython en tu navegador con WebAssembly.",
    "preview.creditHistory": "Creado en 2018 por Michael Droettboom en Mozilla para Iodide; hoy es un proyecto independiente dirigido por su comunidad.",
    "preview.creditLicense": "Código abierto bajo la Licencia Pública de Mozilla 2.0.",
    "preview.contributors": "Todos los contribuidores",
    "preview.license": "Licencia",
    "preview.source": "Código fuente",
    "local.eyebrow": "TU TRABAJO ES TUYO",
    "local.title": "Sin cuenta. Tu avance se queda aquí.",
    "local.text": "Este navegador recuerda tu trabajo. Pregunta a un adulto antes de borrar sus datos.",
    "local.analytics": "Para adultos: PyBot cuenta visitas anónimas a las páginas con Google Analytics, sin anuncios ni personalización de anuncios. El nombre, las respuestas y el avance de quien aprende nunca se envían.",
    "backup.title": "¿Cambias de navegador?",
    "backup.text": "Guarda aquí una copia. Luego cárgala en el otro navegador.",
    "backup.export": "Guardar una copia",
    "backup.import": "Cargar una copia",
    "backup.exported": "Copia guardada. Guarda el archivo en un lugar seguro.",
    "backup.confirm": "¿Cambiar el avance de este navegador por esta copia? Actividades terminadas en la copia: {count}.",
    "backup.imported": "Listo. Tu avance está de vuelta.",
    "backup.upgraded": "Listo. Tu avance está de vuelta, actualizado al PyBot más nuevo.",
    "backup.versionLabel": "Versión del avance",
    "backup.cancelled": "No cambió nada.",
    "backup.invalid": "Este archivo no es una copia de PyBot. No cambió nada.",
    "backup.newer": "Esta copia viene de un PyBot más nuevo. No cambió nada.",
    "backup.failed": "Este navegador no pudo guardar la copia. No cambió nada.",
    "reset.title": "Para adultos: borrar todo el avance",
    "reset.text": "Úsalo solo en una emergencia. Borra las actividades terminadas y el lugar en el mapa de este navegador. El idioma, el sonido y el nombre se quedan.",
    "reset.button": "Borrar todo el avance",
    "reset.askBackup": "Antes de borrar, ¿quieres guardar una copia del avance que llevas?",
    "reset.confirm": "¿Borrar todo el avance de este navegador? No se puede deshacer sin una copia.",
    "reset.done": "Avance borrado. PyBot empieza otra vez desde el principio.",
    "reset.cancelled": "No cambió nada.",
    "reset.failed": "Este navegador no pudo borrar el avance. No cambió nada.",
    "footer.line": "Pasos pequeños. Python de verdad.",
    "footer.status": "Primer prototipo",
    "course.home": "Inicio",
    "course.eyebrow": "TU PRIMERA RUTA",
    "course.titleStart": "Empieza por lo básico.",
    "course.titleEnd": "Luego 6 zonas pequeñas y una parada en boxes.",
    "course.intro": "Ve con calma. Cada zona tiene una idea y una actividad pequeña.",
    "course.rule": "Una idea. Un siguiente paso claro.",
    "course.note": "Sin afán. Una zona pequeña a la vez.",
    "course.noteNamed": "Sin afán, {name}. Una zona pequeña a la vez.",
    "course.building": "🚧 PyBot está en construcción. ¡Cada día agregamos cosas nuevas!",
    "course.start": "Empezar →",
    "course.continue": "Continuar →",
    "course.open": "Abrir →",
    "path.foundationLabel": "Páginas para comenzar",
    "path.world": "Código en tu mundo",
    "path.thinking": "Planes pequeños",
    "path.language": "Lenguajes de programación",
    "path.current": "CONTINÚA AQUÍ",
    "path.visited": "VISITADA",
    "path.next": "SIGUE",
    "path.later": "MÁS ADELANTE",
    "path.new": "NUEVA · PENDIENTE",
    "course.newZone": "Zona nueva por visitar: {name} →",
    "course.newPage": "Página nueva por visitar: {name} →",
    "mission0.concept": "ANTES DE PYTHON",
    "mission0.title": "Empieza aquí",
    "mission0.text": "Mira qué hace el código. Piensa en pasos. Luego aprende sus reglas.",
    "path.basicsLabel": "Páginas de bases de Python",
    "path.keyboard": "Movimientos del teclado",
    "path.environment": "Dónde funciona Python",
    "path.symbols": "Marcas especiales",
    "missionBasics.concept": "TECLAS + HERRAMIENTAS + MARCAS",
    "missionBasics.title": "Bases de Python",
    "missionBasics.text": "Conoce teclas útiles, el lugar donde funciona Python y sus marcas especiales.",
    "mission4.concept": "MEMORIA + TIPOS + CAMBIOS",
    "mission4.title": "Cajas de memoria",
    "mission4.text": "Guarda valores en cajas con nombre, conoce cajas de todo tipo y cambia lo que guardan.",
    "mission5.concept": "CONDICIONALES",
    "mission5.title": "Elige un camino",
    "mission5.text": "Elige un camino con if y else, con elif y con match.",
    "mission6.concept": "BUCLES",
    "mission6.title": "Repite un patrón",
    "mission6.text": "Repite con for, con while y hasta que algo esté listo.",
    "lesson.progressOne": "INICIO · 1 DE 3",
    "lesson.progressTwo": "INICIO · 2 DE 3",
    "lesson.progressThree": "INICIO · 3 DE 3",
    "lesson.path": "Ruta de aprendizaje",
    "lesson.previous": "Página anterior",
    "lesson.backPath": "Volver a la ruta",
    "lesson.bigIdea": "IDEA CLAVE",
    "world.eyebrow": "ANTES DE PYTHON",
    "world.title": "¿Qué puede hacer el código?",
    "world.intro": "El código ayuda a las apps con tareas pequeñas y rápidas.",
    "world.pybot": "Ya usas código todos los días.",
    "world.pybotNamed": "{name}, ya usas código todos los días.",
    "world.robotLabel": "PyBot mira con curiosidad y hace una pregunta",
    "world.appsEyebrow": "APPS QUE TAL VEZ CONOCES",
    "world.appsTitle": "Mira lo que hace el código dentro de ellas.",
    "world.examplesLabel": "TAL VEZ CONOCES",
    "world.examplesNote": "Los nombres son solo ejemplos. PyBot no está conectado con estas apps.",
    "world.gameExamples": "Roblox · Minecraft",
    "world.gameTitle": "Juegos",
    "world.gameText": "Mueve personajes. Guarda puntos. Revisa quién gana.",
    "world.mapTitle": "Mapas",
    "world.mapText": "Compara rutas. Muestra dónde girar.",
    "world.videoTitle": "Videos",
    "world.videoText": "Busca un título. Recuerda dónde paraste.",
    "world.learnTitle": "Aprender",
    "world.learnText": "Revisa respuestas. Cuenta rachas. Abre el siguiente nivel.",
    "world.bigTitle": "Las apps grandes juntan tareas pequeñas.",
    "world.bigText": "Aprenderemos una tarea pequeña a la vez.",
    "world.next": "Tu cerebro hace pequeños planes",
    "thinking.eyebrow": "ANTES DE PYTHON",
    "thinking.title": "Tu cerebro hace pequeños planes.",
    "thinking.intro": "Un plan son varios pasos en un orden que funciona.",
    "thinking.pybot": "¡Ya haces esto todos los días!",
    "thinking.pybotNamed": "{name}, ¡ya haces esto todos los días!",
    "thinking.robotLabel": "PyBot sigue tres pasos en orden",
    "thinking.confidenceEyebrow": "ESTO YA LO SABES",
    "thinking.confidenceTitle": "Tu cerebro hace planes todo el día.",
    "thinking.confidenceText": "Cuando te alistas, juegas o creas algo, tu cerebro elige en silencio qué pasa primero, después y al final.",
    "thinking.confidenceNote": "Programar usa esa misma habilidad. No tienes que saberlo todo de una vez.",
    "thinking.practiceEyebrow": "TU TURNO",
    "thinking.practiceTitle": "Completa el plan.",
    "thinking.practiceIntro": "Elige el último paso. PyBot lo revisará.",
    "thinking.waterTitle": "Sirve un vaso de agua",
    "thinking.waterStep1": "Toma un vaso.",
    "thinking.waterStep2": "Ponlo bajo la llave.",
    "thinking.waterStep3": "Llénalo con agua.",
    "thinking.bagTitle": "Prepara tu mochila",
    "thinking.bagStep1": "Revisa qué necesitas.",
    "thinking.bagStep2": "Guarda tus cuadernos.",
    "thinking.bagStep3": "Guarda tu cartuchera.",
    "thinking.missingStep": "Paso faltante",
    "thinking.question": "¿Qué sigue?",
    "thinking.chooseLabel": "Elige el último paso",
    "thinking.waterCorrect": "Cierra la llave",
    "thinking.waterWrong1": "Ponte los zapatos",
    "thinking.waterWrong2": "Abre tu mochila",
    "thinking.bagCorrect": "Cierra la mochila",
    "thinking.bagWrong1": "Abre la llave",
    "thinking.bagWrong2": "Cepíllate los dientes",
    "thinking.handsTitle": "Lávate las manos",
    "thinking.handsStep1": "Mójate las manos.",
    "thinking.handsStep2": "Usa jabón.",
    "thinking.handsStep3": "Frótalas y enjuágalas.",
    "thinking.handsCorrect": "Cierra la llave",
    "thinking.handsWrong1": "Cierra tu mochila",
    "thinking.handsWrong2": "Abre un libro",
    "thinking.teethTitle": "Cepíllate los dientes",
    "thinking.teethStep1": "Pon crema en el cepillo.",
    "thinking.teethStep2": "Cepíllate los dientes.",
    "thinking.teethStep3": "Enjuaga el cepillo.",
    "thinking.teethCorrect": "Guarda el cepillo",
    "thinking.teethWrong1": "Abre la cámara",
    "thinking.teethWrong2": "Toma una cuchara",
    "thinking.dressedTitle": "Vístete",
    "thinking.dressedStep1": "Ponte la camiseta.",
    "thinking.dressedStep2": "Ponte el pantalón.",
    "thinking.dressedStep3": "Ponte las medias.",
    "thinking.dressedCorrect": "Ponte los zapatos",
    "thinking.dressedWrong1": "Cierra un libro",
    "thinking.dressedWrong2": "Sirve cereal",
    "thinking.cerealTitle": "Prepara un tazón de cereal",
    "thinking.cerealStep1": "Toma un tazón.",
    "thinking.cerealStep2": "Sirve el cereal.",
    "thinking.cerealStep3": "Agrega leche.",
    "thinking.cerealCorrect": "Toma una cuchara",
    "thinking.cerealWrong1": "Apaga la luz",
    "thinking.cerealWrong2": "Abre la cámara",
    "thinking.drawingTitle": "Haz un dibujo",
    "thinking.drawingStep1": "Toma una hoja de papel.",
    "thinking.drawingStep2": "Elige tus colores.",
    "thinking.drawingStep3": "Haz tu dibujo.",
    "thinking.drawingCorrect": "Guarda los colores",
    "thinking.drawingWrong1": "Ponte las medias",
    "thinking.drawingWrong2": "Llena un vaso",
    "thinking.bedtimeTitle": "Prepárate para dormir",
    "thinking.bedtimeStep1": "Ponte la pijama.",
    "thinking.bedtimeStep2": "Cepíllate los dientes.",
    "thinking.bedtimeStep3": "Métete en la cama.",
    "thinking.bedtimeCorrect": "Apaga la luz",
    "thinking.bedtimeWrong1": "Agrega leche",
    "thinking.bedtimeWrong2": "Abre tu mochila",
    "thinking.readingTitle": "Lee un libro",
    "thinking.readingStep1": "Elige un libro.",
    "thinking.readingStep2": "Siéntate en un lugar cómodo.",
    "thinking.readingStep3": "Abre el libro.",
    "thinking.readingCorrect": "Empieza a leer",
    "thinking.readingWrong1": "Abre la llave",
    "thinking.readingWrong2": "Ponte los zapatos",
    "thinking.photoTitle": "Toma una foto",
    "thinking.photoStep1": "Abre la cámara.",
    "thinking.photoStep2": "Apunta hacia lo que quieres fotografiar.",
    "thinking.photoStep3": "Sostén el dispositivo sin moverlo.",
    "thinking.photoCorrect": "Toca el botón de foto",
    "thinking.photoWrong1": "Cierra tu mochila",
    "thinking.photoWrong2": "Toma una cuchara",
    "thinking.success": "¡Sí! Tu último paso completa el plan.",
    "thinking.hint": "Inténtalo otra vez. ¿Qué paso hace que el plan quede terminado?",
    "thinking.waterSuccess": "¡Sí! Cierra la llave. El plan está completo.",
    "thinking.waterHint": "Casi. ¿Qué debe pasar antes de que te alejes?",
    "thinking.bagSuccess": "¡Sí! Cierra la mochila. Ya está lista.",
    "thinking.bagHint": "Inténtalo otra vez. ¿Qué mantiene todo adentro?",
    "thinking.algoEyebrow": "UNA PALABRA NUEVA",
    "thinking.algoTitle": "Tus planes tienen nombre: algoritmos.",
    "thinking.algoIntro": "Un algoritmo es una lista de pasos claros, en orden, que resuelve un problema. ¡Cada plan que acabas de terminar es un algoritmo!",
    "thinking.algoRule1Title": "Pasos claros",
    "thinking.algoRule1Text": "Cada paso dice exactamente qué hacer. Sin adivinar.",
    "thinking.algoRule2Title": "En orden",
    "thinking.algoRule2Text": "Primero, después, al final. Si cambias los pasos de lugar, el plan se puede dañar.",
    "thinking.algoRule3Title": "Termina",
    "thinking.algoRule3Text": "Se detiene cuando el trabajo está hecho.",
    "thinking.algoCodeEyebrow": "ALGORITMOS EN EL CÓDIGO",
    "thinking.algoCodeTitle": "El código es un algoritmo para una computadora.",
    "thinking.algoCodeText": "Cuando escribes código, tú escribes los pasos. La computadora los lee uno por uno, de arriba hacia abajo, y hace exactamente lo que dice cada línea.",
    "thinking.algoCodeNote": "La computadora nunca adivina. Si falta un paso o está en el lugar equivocado, no lo va a arreglar por ti.",
    "thinking.algoListingTitle": "PyBot se sirve un vaso de agua",
    "thinking.algoLine1": "toma un vaso",
    "thinking.algoLine2": "pon el vaso debajo de la llave",
    "thinking.algoLine3": "abre la llave",
    "thinking.algoLine4": "espera hasta que el vaso esté lleno",
    "thinking.algoLine5": "cierra la llave",
    "thinking.algoListingOops": "¡Cambia las líneas 2 y 3, y PyBot riega el agua en el piso!",
    "thinking.bigTitle": "El orden ayuda a que un plan funcione.",
    "thinking.bigText": "Pasos claros en orden forman un algoritmo. Las computadoras siguen algoritmos paso a paso.",
    "thinking.next": "¿Qué es un lenguaje de programación?",
    "language.eyebrow": "ANTES DE PYTHON",
    "language.title": "¿Qué es un lenguaje de programación?",
    "language.intro": "Una forma de escribir instrucciones exactas que un computador puede ejecutar.",
    "language.pybot": "Sigo las instrucciones. No adivino.",
    "language.pybotNamed": "{name}, sigo instrucciones. No adivino.",
    "language.robotLabel": "PyBot examina símbolos de programación con una lupa",
    "language.rulesEyebrow": "TRES REGLAS SENCILLAS",
    "language.rulesTitle": "Los detalles importan.",
    "language.wordTitle": "Usa palabras exactas",
    "language.wordText": "funciona. pritn no funciona.",
    "language.orderTitle": "Ordena los pasos",
    "language.orderText": "En nuestros primeros programas, Python empieza arriba.",
    "language.symbolTitle": "Conserva los símbolos",
    "language.symbolText": "Las comillas y los paréntesis tienen una tarea.",
    "language.sameEyebrow": "MISMA TAREA",
    "language.sameTitle": "Lenguajes distintos. El mismo saludo.",
    "language.sameText": "Cada lenguaje tiene sus reglas. Empezaremos con Python.",
    "language.result": "RESULTADO",
    "language.helloCode": "\"Hola\"",
    "language.helloResult": "Hola",
    "language.conceptsEyebrow": "UN VISTAZO A LO QUE VIENE",
    "language.conceptsTitle": "Pequeñas ideas que conocerás.",
    "language.conceptsIntro": "No tienes que aprenderlas ahora. Solo salúdalas.",
    "language.variableTitle": "Variables",
    "language.variableText": "Una caja con nombre recuerda una cosa.",
    "language.conditionalTitle": "Condicionales",
    "language.conditionalText": "Una pregunta ayuda al código a elegir un camino.",
    "language.loopTitle": "Bucles (loops)",
    "language.loopText": "Repiten varios pasos sin escribirlos otra vez.",
    "language.careEyebrow": "CUANDO EL CÓDIGO NECESITA AYUDA",
    "language.careTitle": "Los errores son pistas, no fracasos.",
    "language.careIntro": "Todos los programadores los encuentran. Miramos con calma, una pista pequeña a la vez.",
    "language.bugTitle": "Un bug",
    "language.bugText": "Un pequeño error hace que el código haga algo inesperado.",
    "language.debugTitle": "Depurar",
    "language.debugText": "Leemos, probamos y corregimos una pista pequeña a la vez.",
    "language.compileTitle": "Compilar",
    "language.compileText": "Algunos lenguajes traducen el código antes de que la computadora lo ejecute.",
    "language.careNote": "No tienes que corregirlos hoy. Solo recuerda: una pista puede ayudar.",
    "meta.keyboardTitle": "Movimientos del teclado — PyBot",
    "meta.environmentTitle": "Dónde funciona Python — PyBot",
    "meta.symbolsTitle": "Las marcas especiales de Python — PyBot",
    "meta.variablesTitle": "Cajas de memoria — PyBot",
    "meta.conditionalsTitle": "Elige un camino — PyBot",
    "meta.loopsTitle": "Repite un patrón — PyBot",
    "meta.keyboardDescription": "Una introducción sencilla para niños a teclas y atajos útiles.",
    "meta.environmentDescription": "Un recorrido simple por el navegador, editor, Pyodide y la versión de Python que usa PyBot.",
    "meta.symbolsDescription": "Una introducción tranquila a las marcas especiales que los niños verán en Python.",
    "meta.variablesDescription": "Una explicación para niños sobre la memoria del computador y las variables de Python.",
    "meta.conditionalsDescription": "Un primer vistazo divertido a los condicionales de Python.",
    "meta.loopsDescription": "Un primer vistazo divertido a los bucles de Python.",
    "topic.progressKeyboard": "ZONA 1 · 1 DE 3",
    "topic.progressEnvironment": "ZONA 1 · 2 DE 3",
    "topic.progressSymbols": "ZONA 1 · 3 DE 3",
    "topic.progressVariables": "ZONA 2 · 1 DE 3",
    "topic.progressConditionals": "ZONA 3 · 1 DE 3",
    "topic.progressLoops": "ZONA 4 · 1 DE 3",
    "topic.lookEyebrow": "MIRA PRIMERO",
    "topic.practiceEyebrow": "TU TURNO",
    "topic.practiceIntro": "Prueba cada pregunta pequeña. Una respuesta incorrecta se convierte en algo para revisar.",
    "topic.chooseAnswer": "Elige una respuesta",
    "topic.choosePart": "¿Qué parte necesitas?",
    "activity.success": "¡Sí! Encontraste la pista útil.",
    "activity.hint": "Todavía no. Mira el ejemplo e inténtalo una vez más.",
    "keyboard.eyebrow": "MOVIMIENTOS DEL TECLADO",
    "keyboard.title": "Las teclas trabajan en equipo.",
    "keyboard.intro": "Un atajo son dos teclas que hacen juntas una tarea pequeña.",
    "keyboard.pybot": "Ir despacio está bien. Primero viene la precisión.",
    "keyboard.robotLabel": "PyBot escribe con cuidado en un teclado",
    "keyboard.pybotNamed": "Ir despacio está bien, {name}. Primero viene la precisión.",
    "keyboard.overviewTitle": "Conoce algunas teclas útiles.",
    "keyboard.enterTitle": "Enter y Backspace",
    "keyboard.enterText": "Enter dice “continúa” o abre una línea nueva. Backspace borra una marca a la izquierda.",
    "keyboard.shiftTitle": "Shift cambia una tecla",
    "keyboard.shiftText": "Sostén Shift con una letra para una mayúscula o con un número para obtener otro símbolo.",
    "keyboard.shortcutTitle": "Un equipo de atajo",
    "keyboard.shortcutText": "Ctrl + Z deshace. Ctrl + C copia. Ctrl + V pega. En Mac se usa Command.",
    "keyboard.practiceTitle": "Elige el movimiento útil.",
    "keyboard.quizEraseTitle": "Borra una letra de más",
    "keyboard.quizEraseScene": "Escribiste: roboot",
    "keyboard.quizQuestion": "¿Qué movimiento ayuda?",
    "keyboard.backspace": "Backspace",
    "keyboard.enter": "Enter",
    "keyboard.space": "Espacio",
    "keyboard.quizUndoTitle": "Deshaz el último cambio",
    "keyboard.quizCopyTitle": "Copia el texto seleccionado",
    "keyboard.quizKeyQuestion": "¿Qué tecla completa el atajo?",
    "keyboard.keyV": "V",
    "keyboard.keyZ": "Z",
    "keyboard.keyC": "C",
    "keyboard.bigTitle": "Los atajos ahorran pasos.",
    "keyboard.bigText": "Siempre puedes trabajar despacio. Los atajos ayudan; no son una carrera.",
    "keyboard.next": "Dónde funciona Python",
    "environment.eyebrow": "NUESTRO ESPACIO DE PYTHON",
    "environment.title": "¿Dónde funciona Python?",
    "environment.intro": "Aquí mismo, en el navegador. Sin instalaciones grandes y sin una cuenta.",
    "environment.pybot": "Esta página es nuestro pequeño salón de Python.",
    "environment.robotLabel": "PyBot te da la bienvenida junto a una ventana de Python",
    "environment.pybotNamed": "{name}, esta página es nuestro pequeño salón de Python.",
    "environment.overviewTitle": "Tres partes trabajan juntas.",
    "environment.browserTitle": "1. El navegador",
    "environment.browserText": "Chrome, Edge, Firefox o Safari abre PyBot. Es el salón alrededor de nuestro trabajo.",
    "environment.editorTitle": "2. El editor",
    "environment.editorText": "La caja oscura es donde escribes código. Es como un cuaderno para Python.",
    "environment.engineTitle": "3. El motor",
    "environment.engineText": "Pyodide 314.0.3 trae Python 3.14 al navegador y ejecuta el código.",
    "environment.flowLabel": "Cómo se ejecuta el código",
    "environment.flowType": "Tú escribes",
    "environment.flowRun": "Pyodide ejecuta Python",
    "environment.flowSee": "Tú ves el resultado",
    "environment.versionNote": "Nuestro curso usa Python 3.14. Los números pequeños de versión pueden cambiar después; las ideas de esta ruta siguen iguales.",
    "environment.practiceTitle": "Señala la parte correcta.",
    "environment.quizTypeTitle": "¿Dónde escribes?",
    "environment.quizTypeScene": "Quieres escribir print(\"¡Hola!\").",
    "environment.browser": "La pestaña del navegador",
    "environment.editor": "El editor",
    "environment.result": "La caja del resultado",
    "environment.quizRunTitle": "¿Quién ejecuta el código?",
    "environment.quizRunScene": "Presionas Ejecutar Python.",
    "environment.pyodide": "Pyodide",
    "environment.keyboard": "El teclado",
    "environment.speaker": "El parlante",
    "environment.quizVersionTitle": "¿Qué familia de Python?",
    "environment.quizVersionScene": "PyBot te dice la versión del curso.",
    "environment.quizVersionQuestion": "¿Qué usamos aquí?",
    "environment.versionWrong1": "Python 1",
    "environment.versionWrong2": "Java 3.14",
    "environment.versionCorrect": "Python 3.14",
    "environment.bigTitle": "El editor guarda palabras. Python las ejecuta.",
    "environment.bigText": "Solo necesitas saber dónde escribir, ejecutar, detener y leer el resultado.",
    "environment.next": "Las marcas especiales de Python",
    "symbols.eyebrow": "LAS MARCAS DE PYTHON",
    "symbols.title": "Las marcas pequeñas tienen tareas.",
    "symbols.intro": "Una comilla, dos puntos o un corchete no es decoración. Le da una pista a Python.",
    "symbols.pybot": "Las conoceremos despacio. Hoy no hay que memorizarlas.",
    "symbols.robotLabel": "PyBot mira asombrado las pequeñas marcas de Python",
    "symbols.pybotNamed": "Las conoceremos despacio, {name}. Hoy no hay que memorizarlas.",
    "symbols.nowEyebrow": "USARÁS ESTAS PRONTO",
    "symbols.nowTitle": "Seis marcas para mirar primero.",
    "symbols.quotesTitle": "Las comillas guardan texto",
    "symbols.quotesText": "Las palabras para personas viven entre comillas: \"hola\".",
    "symbols.parensTitle": "Los paréntesis guardan lo que necesita una orden",
    "symbols.parensText": "print(\"hola\") mantiene el mensaje dentro de ellos.",
    "symbols.equalsTitle": "Un igual guarda un valor",
    "symbols.equalsText": "color = \"naranja\" le da un nombre a un valor.",
    "symbols.colonTitle": "Los dos puntos abren un bloque",
    "symbols.colonText": "Después de if o for dicen: “los pasos comienzan aquí”.",
    "symbols.hashTitle": "Un numeral comienza una nota",
    "symbols.hashText": "Python ignora la nota. Ayuda a una persona a recordar.",
    "symbols.underscoreTitle": "Un guion bajo une palabras",
    "symbols.underscoreText": "robot_color es un nombre claro sin espacios.",
    "symbols.laterTitle": "Conoce cuatro más. Todavía no necesitas usarlos.",
    "symbols.bracketsTitle": "Los corchetes guardan una lista",
    "symbols.bracketsText": "Una lista mantiene varios elementos en orden: [\"luna\", \"estrella\"].",
    "symbols.bracesTitle": "Las llaves guardan una colección",
    "symbols.bracesText": "Después, Python puede usarlas para pares con etiquetas o elementos únicos.",
    "symbols.slashTitle": "Una barra puede dividir",
    "symbols.slashText": "10 / 2 le pide a Python dividir diez en dos partes.",
    "symbols.backslashTitle": "Una barra invertida cambia la siguiente marca",
    "symbols.backslashText": "Dentro de un texto, \\n significa: comienza una línea nueva.",
    "symbols.laterNote": "Reconocer una marca es suficiente por hoy. Su lección completa puede esperar.",
    "symbols.practiceTitle": "Dale a cada marca su tarea.",
    "symbols.quizTextTitle": "Guarda un mensaje",
    "symbols.quizTextQuestion": "¿Qué debe rodear a hola?",
    "symbols.answerQuotes": "Comillas \" \"",
    "symbols.answerBraces": "Llaves { }",
    "symbols.answerSlash": "Una barra /",
    "symbols.quizAssignTitle": "Dale un nombre a naranja",
    "symbols.quizAssignQuestion": "¿Qué marca guarda el valor?",
    "symbols.answerColon": "Dos puntos :",
    "symbols.answerEquals": "Igual =",
    "symbols.answerHash": "Numeral #",
    "symbols.quizBlockTitle": "Abre un bloque",
    "symbols.quizBlockQuestion": "¿Qué marca dice que los siguientes pasos van aquí?",
    "symbols.answerUnderscore": "Guion bajo _",
    "symbols.bigTitle": "Cada marca tiene una tarea pequeña.",
    "symbols.bigText": "No las necesitas todas a la vez. Mira solo la marca usada en la idea de hoy.",
    "symbols.next": "Cajas de memoria",
    "variables.eyebrow": "MEMORIA + VARIABLES",
    "variables.title": "Una computadora puede recordar.",
    "variables.intro": "La memoria le da a un programa un lugar pequeño para guardar lo que necesita ahora.",
    "variables.pybot": "Una etiqueta clara me ayuda a encontrar un valor otra vez.",
    "variables.robotLabel": "PyBot sostiene con orgullo una caja con etiqueta",
    "variables.pybotNamed": "Una etiqueta clara me ayuda a encontrar tu valor otra vez, {name}.",
    "variables.memoryEyebrow": "PRIMERO: LA MEMORIA DEL COMPUTADOR",
    "variables.memoryTitle": "Imagina una mesa de trabajo y un cajón.",
    "variables.ramTitle": "La memoria es la mesa de trabajo",
    "variables.ramText": "La RAM guarda las cosas que un programa usa ahora. La mesa puede limpiarse cuando el programa o el dispositivo se detiene.",
    "variables.storageTitle": "El almacenamiento es el cajón",
    "variables.storageText": "Los archivos y el avance guardado pueden quedarse para después. No son lo mismo que la memoria de trabajo.",
    "variables.variableTitle": "Una variable es un lugar con etiqueta",
    "variables.variableText": "robot_color = \"orange\" guarda un valor bajo un nombre útil.",
    "variables.demoLabel": "Una variable en la memoria",
    "variables.demoText": "Usa robot_color después y Python usa el valor orange.",
    "variables.practiceTitle": "Encuentra el nombre y el valor.",
    "variables.quizRamTitle": "El programa lo necesita ahora",
    "variables.quizRamScene": "PyBot usa un puntaje mientras un juego está abierto.",
    "variables.quizRamQuestion": "¿Qué lugar se parece a la mesa de trabajo?",
    "variables.ram": "RAM",
    "variables.keyboard": "El teclado",
    "variables.screen": "La pantalla",
    "variables.quizNameTitle": "Encuentra la etiqueta",
    "variables.quizNameQuestion": "¿Cuál es el nombre de la variable?",
    "variables.answerFive": "5",
    "variables.answerStars": "stars",
    "variables.answerEquals": "=",
    "variables.quizValueTitle": "Encuentra lo que recuerda",
    "variables.quizValueQuestion": "¿Qué valor está guardado?",
    "variables.bigTitle": "Una variable es un nombre para un valor recordado.",
    "variables.bigText": "El nombre ayuda a las personas y a Python a encontrar el valor otra vez.",
    "variables.next": "Cajas de todo tipo",
    "topic.runEyebrow": "EJECÚTALO",
    "topic.runIntro": "Primero adivina. Luego ejecuta Python real y comprueba.",
    "topic.runReady": "Listo. Pulsa Ejecutar Python.",
    "topic.predictTitle": "Adivina el resultado",
    "topic.predictQuestion": "¿Qué mostrará Python?",
    "topic.tryLabel": "Ahora cambia una cosa:",
    "variables.runTitle": "Ayuda a PyBot a recordar su color.",
    "variables.runCode": "robot_color = \"naranja\"\nprint(robot_color)",
    "variables.predictName": "robot_color",
    "variables.predictValue": "naranja",
    "variables.predictNothing": "Nada",
    "thinking.variable-predictSuccess": "¡Sí! print muestra el valor que recuerda el nombre.",
    "thinking.variable-predictHint": "Todavía no. print mira dentro del nombre y muestra su valor.",
    "variables.tryText": "Pon tu color favorito entre las comillas. Ejecútalo otra vez.",
    "meta.boxesTitle": "Cajas de todo tipo — PyBot",
    "meta.boxesDescription": "Una explicación para niños de las variables como cajitas con etiqueta en la memoria que guardan números, texto, sí o no, listas y cuadrículas.",
    "topic.progressBoxes": "ZONA 2 · 2 DE 3",
    "missionBoxes.concept": "TIPOS + LISTAS",
    "missionBoxes.title": "Cajas de todo tipo",
    "missionBoxes.text": "Guarda números, texto, sí o no, listas y cuadrículas en cajitas.",
    "boxes.eyebrow": "TIPOS + LISTAS",
    "boxes.title": "Cada cajita guarda algo.",
    "boxes.intro": "Imagina la memoria del computador como un estante gigante lleno de cajitas. Una variable es una cajita con una etiqueta que dice su nombre.",
    "boxes.pybot": "Guardo las cosas en cajitas con etiqueta para no perderlas nunca.",
    "boxes.robotLabel": "PyBot guiña un ojo junto a una pila de cajas distintas",
    "boxes.pybotNamed": "{name}, guardo las cosas en cajitas con etiqueta para no perderlas nunca.",
    "boxes.kindsEyebrow": "¿QUÉ VA EN UNA CAJITA?",
    "boxes.kindsTitle": "Una cajita puede guardar cosas de distintos tipos.",
    "boxes.wholeTitle": "Números enteros",
    "boxes.wholeText": "age = 9 guarda un número que puedes contar y sumar.",
    "boxes.decimalTitle": "Números con decimales",
    "boxes.decimalText": "height = 1.32 guarda un número con un punto.",
    "boxes.textTitle": "Texto",
    "boxes.textText": "name = \"Ana\" guarda letras. El texto siempre va entre comillas.",
    "boxes.yesNoTitle": "Sí o no",
    "boxes.yesNoText": "is_raining = True guarda True (verdadero) o False (falso). ¡Solo dos opciones!",
    "boxes.shelfLabel": "Cuatro cajitas con etiqueta en la memoria",
    "boxes.shelfName": "\"Ana\"",
    "boxes.shelfText": "Cuatro cajitas, cuatro etiquetas. Python encuentra cada valor por su nombre.",
    "boxes.changeEyebrow": "UNA CAJITA PUEDE CAMBIAR",
    "boxes.changeTitle": "Si guardas algo nuevo, lo viejo se va.",
    "boxes.changeLabel": "Una cajita que cambia su valor",
    "boxes.changeText": "Una cajita guarda una cosa a la vez. Gana el valor más nuevo.",
    "boxes.listEyebrow": "UNA CAJITA CON ESPACIOS",
    "boxes.listTitle": "Una lista guarda muchas cosas en orden.",
    "boxes.listText": "snacks = [\"manzana\", \"galleta\", \"uvas\"] pone tres cosas en una sola cajita, cada una en su propio espacio.",
    "boxes.listLabel": "Una lista con tres espacios numerados",
    "boxes.snack0": "\"manzana\"",
    "boxes.snack1": "\"galleta\"",
    "boxes.snack2": "\"uvas\"",
    "boxes.listNote": "Python empieza a contar desde 0. snacks[0] es el primer espacio.",
    "boxes.vectorLabel": "Dato curioso:",
    "boxes.vectorText": "En matemáticas, una fila de números en orden, como [3, 1, 4], se llama vector. En Python lo hacemos con una lista.",
    "boxes.gridEyebrow": "UN ESTANTE CON FILAS",
    "boxes.gridTitle": "Una matriz tiene filas y columnas.",
    "boxes.gridText": "board = [[1, 2, 3], [4, 5, 6]] es una lista de listas: dos filas con tres espacios cada una, como una cubeta de huevos.",
    "boxes.gridLabel": "Una cuadrícula con dos filas y tres columnas",
    "boxes.gridNote": "board[1][0] quiere decir fila 1, luego espacio 0. Eso es 4.",
    "boxes.runTitle": "Abre la cajita de meriendas.",
    "boxes.runCode": "snacks = [\"manzana\", \"galleta\", \"uvas\"]\nprint(snacks[0])",
    "boxes.predictFirst": "manzana",
    "boxes.predictSecond": "galleta",
    "boxes.predictNothing": "Nada",
    "thinking.boxes-predictSuccess": "¡Sí! El espacio 0 es el primero de la lista.",
    "thinking.boxes-predictHint": "Todavía no. Python cuenta desde 0, así que snacks[0] es la primera merienda.",
    "boxes.tryText": "Cambia el 0 por 2. ¿Qué merienda sale? Luego agrega tu merienda favorita a la lista.",
    "boxes.practiceTitle": "Mira dentro de las cajitas.",
    "boxes.quizTextTitle": "Encuentra la cajita de texto",
    "boxes.quizTextScene": "PyBot escribió el 9 de tres formas distintas.",
    "boxes.quizTextQuestion": "¿Cuál cajita guarda texto?",
    "thinking.boxes-textSuccess": "¡Sí! Las comillas convierten el 9 en texto.",
    "thinking.boxes-textHint": "Busca las comillas. Comillas quiere decir texto.",
    "boxes.quizYesNoTitle": "¿Qué tipo de cosa es?",
    "boxes.quizYesNoQuestion": "¿Qué guarda esta cajita?",
    "boxes.answerText": "Texto",
    "boxes.answerNumber": "Un número",
    "boxes.answerYesNo": "Sí o no",
    "boxes.quizListTitle": "Cuenta los espacios",
    "boxes.quizListCode": "colors = [\"rojo\", \"azul\", \"verde\"]",
    "boxes.quizListQuestion": "¿Cuántos espacios tiene esta lista?",
    "boxes.quizGridTitle": "Cuenta las filas",
    "boxes.quizGridQuestion": "¿Cuántas filas tiene esta matriz?",
    "thinking.boxes-gridHint": "Cada [ ] de adentro es una fila. Cuéntalas.",
    "boxes.bigTitle": "Una variable es una cajita con etiqueta en la memoria.",
    "boxes.bigText": "Puede guardar un número, un texto, un sí o no, o hasta una lista completa.",
    "boxes.next": "Elige un camino",
    "boxes.nextChanging": "Cajas que cambian",
    "meta.changingBoxesTitle": "Cajas que cambian — PyBot",
    "meta.changingBoxesDescription": "Cambia lo que guarda una caja de Python: súmale, haz cuentas con cajas y une texto.",
    "topic.progressChangingBoxes": "ZONA 2 · 3 DE 3",
    "path.boxesLabel": "Páginas de cajas de memoria",
    "path.variables": "Cajas de memoria",
    "path.boxes": "Cajas de todo tipo",
    "path.changingBoxes": "Cajas que cambian",
    "changing.eyebrow": "CAMBIOS + CUENTAS",
    "changing.title": "Una caja puede cambiar.",
    "changing.intro": "Una caja puede tomar su propio valor, cambiarlo y guardar el nuevo. Así cuentan puntos los juegos.",
    "changing.pybot": "Cada vez que encuentro una estrella, mi caja de puntos crece en uno.",
    "changing.pybotNamed": "{name}, cada vez que encuentro una estrella, mi caja de puntos crece en uno.",
    "changing.robotLabel": "PyBot guiña el ojo junto a una caja de puntos que crece",
    "changing.growEyebrow": "USA EL VALOR VIEJO",
    "changing.growTitle": "Lee primero el lado derecho.",
    "changing.growText": "score = score + 1 se ve raro. Python primero resuelve el lado derecho: los puntos viejos más 1. Luego guarda la respuesta en la misma caja.",
    "changing.growLabel": "Una caja de puntos que crece de 3 a 4",
    "changing.growNote": "3 + 1 es 4. Ahora la caja guarda 4.",
    "changing.shortEyebrow": "EL CAMINO CORTO",
    "changing.shortTitle": "+= le suma a la caja.",
    "changing.plusTitle": "Súmale",
    "changing.plusText": "score += 1 es lo mismo que score = score + 1.",
    "changing.minusTitle": "Quítale",
    "changing.minusText": "lives -= 1 le quita una vida a la caja.",
    "changing.replaceTitle": "Empieza de nuevo",
    "changing.replaceText": "score = 0 bota el valor viejo y guarda 0.",
    "changing.mathEyebrow": "CUENTAS CON CAJAS",
    "changing.mathTitle": "Las cajas pueden hacer cuentas juntas.",
    "changing.mathText": "apples = 4 y pears = 3. Python abre las dos cajas y usa los números de adentro.",
    "changing.addTitle": "Sumar",
    "changing.addText": "apples + pears es 7.",
    "changing.subtractTitle": "Restar",
    "changing.subtractText": "apples - pears es 1.",
    "changing.multiplyTitle": "Multiplicar",
    "changing.multiplyText": "apples * 2 es 8. La estrellita quiere decir por.",
    "changing.divideTitle": "Dividir",
    "changing.divideText": "apples / 2 es 2.0. Dividir siempre da un decimal.",
    "changing.joinEyebrow": "UNE TEXTO",
    "changing.joinTitle": "+ pega texto.",
    "changing.joinText": "name = \"Ana\". Entonces \"Hola \" + name da \"Hola Ana\". Pon un espacio dentro de las comillas, o las palabras quedan pegadas.",
    "changing.joinWatchLabel": "Cuidado:",
    "changing.joinWatchText": "\"2\" + \"3\" es \"23\", no 5. Con comillas, Python pega texto. Sin comillas, 2 + 3 es 5.",
    "changing.runTitle": "Cuenta las estrellas de PyBot.",
    "changing.runCode": "score = 3\nscore = score + 1\nprint(score)",
    "thinking.changing-predictSuccess": "¡Sí! Python toma el 3 viejo, le suma 1 y guarda 4.",
    "thinking.changing-predictHint": "Todavía no. Resuelve primero el lado derecho: 3 + 1.",
    "changing.tryText": "Cambia + 1 por + 10. Luego prueba el camino corto: score += 10.",
    "changing.practiceTitle": "Cambia las cajas.",
    "changing.quizPlusTitle": "Súmale a la caja",
    "changing.quizPlusQuestion": "¿Qué mostrará Python?",
    "thinking.changing-plusSuccess": "¡Sí! 5 + 2 es 7, y la caja guarda 7.",
    "thinking.changing-plusHint": "Son números, no texto. Súmalos: 5 + 2.",
    "changing.quizShortTitle": "El camino corto",
    "changing.quizShortQuestion": "¿Qué línea hace lo mismo?",
    "thinking.changing-shortSuccess": "¡Sí! += le suma a lo que ya está en la caja.",
    "thinking.changing-shortHint": "Busca += . Quiere decir: súmale a la caja.",
    "changing.quizMinusTitle": "Pierde una vida",
    "changing.quizMinusQuestion": "¿Qué mostrará Python?",
    "thinking.changing-minusSuccess": "¡Sí! -= quita uno: 3 - 1 es 2.",
    "thinking.changing-minusHint": "-= quita. Empieza en 3 y quítale 1.",
    "changing.quizTimesTitle": "El triple de pasos",
    "changing.quizTimesQuestion": "¿Qué mostrará Python?",
    "thinking.changing-timesSuccess": "¡Sí! La estrellita quiere decir por: 2 * 3 es 6.",
    "thinking.changing-timesHint": "En Python, * quiere decir por. ¿Cuánto es 2 por 3?",
    "changing.quizMathTitle": "Dos cajas, una respuesta",
    "changing.quizMathQuestion": "¿Qué mostrará Python?",
    "thinking.changing-mathSuccess": "¡Sí! Python abre las dos cajas: 4 + 3 es 7.",
    "thinking.changing-mathHint": "Python no muestra los nombres. Usa los números que hay dentro de las cajas.",
    "changing.quizJoinTitle": "Saluda",
    "changing.quizJoinQuestion": "¿Qué mostrará Python?",
    "thinking.changing-joinSuccess": "¡Sí! + pega los dos pedazos de texto.",
    "thinking.changing-joinHint": "name no tiene comillas, así que Python abre la caja y encuentra \"Ana\".",
    "changing.quizTextNumbersTitle": "Números con comillas",
    "changing.quizTextNumbersQuestion": "¿Qué mostrará Python?",
    "thinking.changing-text-numbersSuccess": "¡Sí! Con comillas son texto, así que + los pega: 23.",
    "thinking.changing-text-numbersHint": "Mira las comillas. Comillas quiere decir texto, y + pega texto.",
    "changing.fixTask": "PyBot encontró una estrella, pero sus puntos siguen en 0. Arregla la línea del medio para que la caja guarde los puntos nuevos.",
    "changing.fixCode": "score = 0\nscore + 1\nprint(score)",
    "changing.fixExpected": "1",
    "changing.bigTitle": "Una caja puede usar su valor viejo para hacer uno nuevo.",
    "changing.bigText": "score = score + 1 suma uno. Ahora, PyBot usa cajas para tomar decisiones.",
    "conditionals.eyebrow": "CONDICIONALES",
    "conditionals.title": "Pregunta. Luego elige.",
    "conditionals.intro": "Un condicional permite que el código elija un camino después de una pregunta de sí o no.",
    "conditionals.pybot": "Reviso la pregunta antes de elegir.",
    "conditionals.robotLabel": "PyBot señala un letrero con dos caminos",
    "conditionals.pybotNamed": "{name}, reviso la pregunta antes de elegir.",
    "conditionals.overviewTitle": "Ya eliges así todos los días.",
    "conditionals.ifTitle": "If hace la pregunta",
    "conditionals.ifText": "“¿Está lloviendo?” Python revisa si la respuesta es verdadera.",
    "conditionals.trueTitle": "El paso con sangría es un camino",
    "conditionals.trueText": "Si llueve, el siguiente paso puede ser: llevar un paraguas.",
    "conditionals.elseTitle": "Else es el otro camino",
    "conditionals.elseText": "Si la respuesta es no, Python puede seguir un paso diferente.",
    "conditionals.demoYes": "llevar paraguas",
    "conditionals.or": "O",
    "conditionals.demoNo": "usar gorra",
    "conditionals.practiceTitle": "Sigue el camino verdadero.",
    "conditionals.quizRainTitle": "Está lloviendo",
    "conditionals.quizPathQuestion": "¿Qué camino se ejecuta?",
    "conditionals.umbrella": "Llevar un paraguas",
    "conditionals.sunglasses": "Usar gafas de sol",
    "conditionals.sleep": "Ir a dormir",
    "conditionals.quizBatteryTitle": "La batería está baja",
    "conditionals.dance": "Comenzar un baile",
    "conditionals.charge": "Buscar el cargador",
    "conditionals.paint": "Pintar una estrella",
    "conditionals.quizElseTitle": "No está lloviendo",
    "conditionals.quizElseQuestion": "¿Qué camino elige else?",
    "conditionals.cap": "Usar una gorra",
    "conditionals.bigTitle": "Un condicional es una pregunta con caminos.",
    "conditionals.bigText": "Python revisa primero. Luego sigue el camino que corresponde.",
    "conditionals.next": "Una pregunta más: elif",
    "conditionals.runTitle": "Ayuda a PyBot a revisar su batería.",
    "conditionals.runCode": "bateria = 20\nif bateria < 30:\n    print(\"cargar\")\nelse:\n    print(\"jugar\")",
    "conditionals.predictCharge": "cargar",
    "conditionals.predictPlay": "jugar",
    "conditionals.predictBoth": "cargar y jugar",
    "thinking.conditional-predictSuccess": "¡Sí! 20 es menor que 30, así que solo corre el camino del if.",
    "thinking.conditional-predictHint": "Todavía no. ¿20 es menor que 30? Python corre solo un camino.",
    "conditionals.tryText": "Cambia 20 por un número más grande, como 80, para que corra el otro camino. Ejecútalo otra vez.",
    "loops.runTitle": "Ayuda a PyBot a pitar en un patrón.",
    "loops.runCode": "for vuelta in range(3):\n    print(\"bip\")",
    "loops.predictQuestion": "¿Cuántas veces pitará PyBot?",
    "loops.predictOne": "1 vez",
    "loops.predictThree": "3 veces",
    "loops.predictFour": "4 veces",
    "thinking.loop-predictSuccess": "¡Sí! range(3) da tres vueltas, así que bip aparece 3 veces.",
    "thinking.loop-predictHint": "Todavía no. range(3) significa tres vueltas. Cuenta las vueltas.",
    "loops.tryText": "Cambia 3 por otro número pequeño, como 5. Ejecútalo otra vez y cuenta los bips.",
    "loops.eyebrow": "BUCLES · FOR",
    "loops.title": "Repite sin volver a escribir.",
    "loops.intro": "Un bucle repite una tarea pequeña y sabe cuándo detenerse.",
    "loops.pybot": "Repite, cuenta y detente. Eso basta por hoy.",
    "loops.robotLabel": "PyBot cuenta mientras unas flechas dan vueltas",
    "loops.pybotNamed": "Repite, cuenta y detente, {name}. Eso basta por hoy.",
    "loops.overviewTitle": "Los bucles sirven para patrones.",
    "loops.jobTitle": "Elige una tarea pequeña",
    "loops.jobText": "Enciende una luz, dibuja una estrella o di “bip”. Mantén pequeña la tarea repetida.",
    "loops.countTitle": "Elige cuántas veces",
    "loops.countText": "range(3) le da al bucle tres turnos.",
    "loops.stopTitle": "Luego detente",
    "loops.stopText": "Un buen bucle inicial tiene un final claro. No gira para siempre.",
    "loops.demoLabel": "Un bucle de tres pasos",
    "loops.done": "¡listo!",
    "loops.practiceTitle": "Cuenta lo que se repite.",
    "loops.quizCountTitle": "Tres turnos",
    "loops.quizCountQuestion": "¿Cuántos bips aparecen?",
    "loops.one": "1",
    "loops.three": "3",
    "loops.forever": "Para siempre",
    "loops.quizActionTitle": "Encuentra la tarea repetida",
    "loops.quizActionQuestion": "¿Qué repite el bucle?",
    "loops.drawStar": "Mostrar una estrella",
    "loops.openBrowser": "Abrir el navegador",
    "loops.changeName": "Cambiar un nombre",
    "loops.quizStopTitle": "Sabe cuándo se detiene",
    "loops.quizStopQuestion": "¿Cuándo termina el bucle?",
    "loops.afterOne": "Después de un turno",
    "loops.never": "Nunca se detiene",
    "loops.afterFour": "Después de cuatro turnos",
    "loops.bigTitle": "Un bucle repite una tarea pequeña una cantidad clara de veces.",
    "loops.bigText": "Ahora: un bucle que hace una pregunta antes de cada vuelta.",
    "meta.functionsTitle": "Cajas que hacen un trabajo — PyBot",
    "meta.functionsDescription": "Un primer vistazo para niños a las funciones de Python como cajas que reciben algo y devuelven algo.",
    "topic.progressFunctions": "ZONA 6 DE 6",
    "missionFunctions.concept": "FUNCIONES",
    "missionFunctions.title": "Cajas que Hacen un Trabajo",
    "missionFunctions.text": "Envía algo adentro y recibe algo afuera.",
    "loops.next": "Bucles while",
    "functions.eyebrow": "FUNCIONES",
    "functions.title": "Una caja que hace un trabajo.",
    "functions.intro": "Una función es una cajita con nombre. Le envías algo, trabaja por dentro y sale algo.",
    "functions.pybot": "Les pongo nombre a mis cajas para usarlas una y otra vez.",
    "functions.robotLabel": "PyBot está listo junto a una máquina que convierte 2 en 4",
    "functions.pybotNamed": "{name}, les pongo nombre a mis cajas para usarlas una y otra vez.",
    "functions.outsideEyebrow": "MIRA LA CAJA",
    "functions.outsideTitle": "Algo entra. Algo sale.",
    "functions.nameTitle": "Ponle nombre a la caja",
    "functions.nameText": "def doble(numero): crea una caja llamada doble.",
    "functions.inTitle": "Envía algo adentro",
    "functions.inText": "Lo que va entre los paréntesis es un parámetro. doble(4) envía 4 a la caja.",
    "functions.outTitle": "Recibe algo afuera",
    "functions.outText": "return es la puerta de salida de la caja. El resultado sale por ahí.",
    "functions.demoLabel": "El 4 entra a la caja doble y sale 8",
    "functions.demoIn": "parámetro",
    "functions.demoBoxName": "doble",
    "functions.demoOut": "return",
    "functions.demoText": "Desde afuera, solo necesitas saber qué entra y qué sale.",
    "functions.insideEyebrow": "ABRE LA CAJA",
    "functions.insideTitle": "Por dentro no hay nada nuevo.",
    "functions.insideIntro": "Mira dentro de dos cajas. Cada línea es algo que ya aprendiste.",
    "functions.batteryLine1": "def revisar_bateria(bateria):",
    "functions.batteryLine2": "    if bateria < 30:",
    "functions.batteryLine3": "        plan = \"cargar\"",
    "functions.batteryLine4": "    else:",
    "functions.batteryLine5": "        plan = \"jugar\"",
    "functions.batteryLine6": "    return plan",
    "functions.beepLine1": "def pitar(veces):",
    "functions.beepLine2": "    for vuelta in range(veces):",
    "functions.beepLine3": "        print(\"bip\")",
    "functions.beepLine4": "    return \"listo\"",
    "functions.tagParameter": "Un parámetro es una caja de variable. Se llena cuando usas la función.",
    "functions.tagIf": "Un if, como en Elige un camino.",
    "functions.tagElse": "El otro camino.",
    "functions.tagVariable": "Una caja de variable, como en Cajas de memoria.",
    "functions.tagFor": "Un bucle, como en Repite un patrón.",
    "functions.tagPrint": "La tarea pequeña que se repite.",
    "functions.tagReturn": "return saca el resultado de la caja.",
    "functions.secretLabel": "El secreto:",
    "functions.secretText": "Una función solo tiene variables e instrucciones que ya conoces, guardadas en una caja con nombre.",
    "functions.runTitle": "Usa la caja doble.",
    "functions.runCode": "def doble(numero):\n    respuesta = numero + numero\n    return respuesta\n\nprint(doble(4))",
    "functions.predictName": "doble",
    "functions.tryText": "Cambia 4 por 10. ¿Qué sale de la caja ahora?",
    "thinking.function-predictSuccess": "¡Sí! Entra 4, 4 + 4 es 8, y return saca el 8.",
    "thinking.function-predictHint": "Todavía no. El 4 entra como numero. ¿Cuánto es numero + numero?",
    "functions.practiceTitle": "Entra, adentro y sale.",
    "functions.quizInTitle": "¿Qué entra?",
    "functions.quizInCode": "def saludar(nombre):",
    "functions.quizInQuestion": "¿Qué palabra es el parámetro?",
    "functions.quizInAnswer": "nombre",
    "functions.quizInWrong": "saludar",
    "functions.quizOutTitle": "¿Qué sale?",
    "functions.quizOutCode": "def sumar_uno(n):\n    return n + 1\n\nsumar_uno(5)",
    "functions.quizOutQuestion": "¿Qué devuelve la caja?",
    "functions.quizInsideTitle": "Mira adentro",
    "functions.quizInsideScene": "PyBot abrió una caja de función.",
    "functions.quizInsideQuestion": "¿Qué puede encontrar adentro?",
    "functions.quizInsideMagic": "Magia secreta",
    "functions.quizInsideKnown": "Variables, if y for",
    "functions.quizInsideEmpty": "Nada de nada",
    "functions.bigTitle": "Una función es una caja con nombre: entra, trabaja, sale.",
    "functions.bigText": "Todo lo que hay dentro de la caja ya lo conoces. Sigue: ¡una parada en boxes para revisar tu motor!",
    "conditionals.stepsEyebrow": "PASO A PASO",
    "conditionals.stepsTitle": "Cómo decide Python.",
    "conditionals.stepsIntro": "Sigue el código una línea a la vez, como lo hace PyBot.",
    "conditionals.walkA1": "bateria = 20",
    "conditionals.walkA1Tag": "Una caja guarda el número 20.",
    "conditionals.walkA2": "if bateria < 30:",
    "conditionals.walkA2Tag": "Python pregunta: ¿20 es menor que 30? Sí. La respuesta es True.",
    "conditionals.walkA3": "    print(\"cargar\")",
    "conditionals.walkA3Tag": "Es True, así que esta línea con sangría corre.",
    "conditionals.walkA4": "else:",
    "conditionals.walkA4Tag": "Se salta. La respuesta ya fue True.",
    "conditionals.walkA5": "    print(\"jugar\")",
    "conditionals.walkA5Tag": "También se salta. Solo corre un camino.",
    "conditionals.walkA6": "print(\"chao\")",
    "conditionals.walkA6Tag": "No tiene sangría, así que siempre corre al final.",
    "conditionals.walkB1": "soleado = False",
    "conditionals.walkB1Tag": "Una caja de sí o no que guarda False.",
    "conditionals.walkB2": "if soleado:",
    "conditionals.walkB2Tag": "Python pregunta: ¿soleado es True? No.",
    "conditionals.walkB3": "    print(\"gafas de sol\")",
    "conditionals.walkB3Tag": "Se salta. No hay else, así que este camino no hace nada.",
    "conditionals.walkB4": "print(\"vamos\")",
    "conditionals.walkB4Tag": "No tiene sangría, así que siempre corre.",
    "conditionals.rulesTitle": "Tres reglas para recordar.",
    "conditionals.ruleIndentTitle": "La sangría muestra el camino",
    "conditionals.ruleIndentText": "Las líneas corridas a la derecha con 4 espacios son del camino. Las de la izquierda corren pase lo que pase.",
    "conditionals.ruleColonTitle": "Los dos puntos abren el camino",
    "conditionals.ruleColonText": "if, elif y else siempre terminan con : justo antes de que empiece su camino.",
    "conditionals.ruleOneTitle": "Solo corre un camino",
    "conditionals.ruleOneText": "Python nunca corre dos caminos del mismo if. Elige uno y sigue adelante.",
    "conditionals.elifEyebrow": "MÁS DE DOS CAMINOS",
    "conditionals.elifTitle": "elif hace otra pregunta.",
    "conditionals.elifIntro": "Python pregunta de arriba hacia abajo y se detiene en el primer True.",
    "conditionals.walkC1": "temperatura = 15",
    "conditionals.walkC1Tag": "Una caja guarda 15 grados.",
    "conditionals.walkC2": "if temperatura > 25:",
    "conditionals.walkC2Tag": "¿15 es mayor que 25? No. Pasa a la siguiente pregunta.",
    "conditionals.walkC3": "    print(\"pantalón corto\")",
    "conditionals.walkC3Tag": "Se salta.",
    "conditionals.walkC4": "elif temperatura > 10:",
    "conditionals.walkC4Tag": "¿15 es mayor que 10? ¡Sí!",
    "conditionals.walkC5": "    print(\"chaqueta\")",
    "conditionals.walkC5Tag": "Este camino corre.",
    "conditionals.walkC6": "else:",
    "conditionals.walkC6Tag": "Se salta. Ya corrió un camino.",
    "conditionals.walkC7": "    print(\"abrigo\")",
    "conditionals.walkC7Tag": "else corre solo cuando todas las preguntas fueron False.",
    "conditionals.quizSkipTitle": "Aquí no hay else",
    "conditionals.quizSkipCode": "soleado = False\nif soleado:\n    print(\"gafas de sol\")",
    "conditionals.quizShowQuestion": "¿Qué muestra Python?",
    "conditionals.sunglassesWord": "gafas de sol",
    "conditionals.nothing": "Nada",
    "conditionals.error": "Un error",
    "conditionals.quizAfterTitle": "La línea de la izquierda",
    "conditionals.quizAfterCode": "lloviendo = True\nif lloviendo:\n    print(\"paraguas\")\nprint(\"salir\")",
    "conditionals.quizAfterQuestion": "¿Qué palabras aparecen?",
    "conditionals.onlyUmbrella": "Solo paraguas",
    "conditionals.umbrellaGoOut": "paraguas, luego salir",
    "conditionals.onlyGoOut": "Solo salir",
    "conditionals.quizElifTitle": "Tres caminos",
    "conditionals.quizElifCode": "temperatura = 30\nif temperatura > 25:\n    print(\"pantalón corto\")\nelif temperatura > 10:\n    print(\"chaqueta\")\nelse:\n    print(\"abrigo\")",
    "conditionals.shorts": "pantalón corto",
    "conditionals.jacket": "chaqueta",
    "conditionals.coat": "abrigo",
    "conditionals.quizOneTitle": "¿Cuántos caminos?",
    "conditionals.quizOneScene": "Un programa tiene un if y un else. La respuesta a la pregunta es True.",
    "conditionals.quizOneQuestion": "¿Cuántos caminos corren?",
    "conditionals.onePath": "Un camino",
    "conditionals.twoPaths": "Los dos caminos",
    "conditionals.noPath": "Ningún camino",
    "thinking.conditional-skipSuccess": "¡Sí! soleado es False y no hay else, así que no aparece nada.",
    "thinking.conditional-skipHint": "Todavía no. ¿soleado es True? Si no, ¿hay otro camino?",
    "thinking.conditional-afterSuccess": "¡Sí! Corre el camino del if, y la línea de la izquierda también corre siempre.",
    "thinking.conditional-afterHint": "Todavía no. Mira la última línea. ¿Está dentro del camino o a la izquierda?",
    "thinking.conditional-elifSuccess": "¡Sí! 30 es mayor que 25, así que corre el primer camino y Python deja de preguntar.",
    "thinking.conditional-elifHint": "Todavía no. Empieza arriba. ¿30 es mayor que 25?",
    "thinking.conditional-oneSuccess": "¡Sí! Python siempre elige un solo camino.",
    "thinking.conditional-oneHint": "Todavía no. ¿Puede Python tomar dos caminos a la vez?",
    // Zona de condicionales, páginas 2 (elif) y 3 (match).
    "conditionals.lifeTitle": "Tú decides así todos los días.",
    "conditionals.lifeIntro": "Una decisión es una pregunta con caminos. Python hace lo mismo que tú.",
    "conditionals.life1Title": "¿Lluvia o sol?",
    "conditionals.life1Text": "Si está lloviendo, juego un juego de mesa adentro. Si no, juego fútbol afuera.",
    "conditionals.life2Title": "¿Tienes hambre?",
    "conditionals.life2Text": "Si tengo hambre, me como una manzana. Si no, sigo jugando.",
    "conditionals.life3Title": "Primero la tarea",
    "conditionals.life3Text": "Si terminé la tarea, puedo jugar videojuegos. Si no, primero la tarea.",
    "conditionals.quizLifeTitle": "¿Parque o película?",
    "conditionals.quizLifeScene": "Regla de la familia: si hay sol, vamos al parque. Si no, vemos una película. Hoy está lloviendo.",
    "conditionals.quizLifeQuestion": "¿Qué hace la familia?",
    "conditionals.lifeA": "Ir al parque",
    "conditionals.lifeB": "Ver una película",
    "conditionals.lifeC": "Las dos cosas",
    "thinking.conditional-everydaySuccess": "¡Sí! No hay sol, así que gana el camino del si no: hora de película.",
    "thinking.conditional-everydayHint": "Todavía no. ¿Hay sol hoy? Si no, ¿qué camino queda?",
    "conditionalsElif.lifeTitle": "Más de dos opciones, todos los días.",
    "conditionalsElif.lifeIntro": "Preguntas primero por tu favorito. Si no está, preguntas por el siguiente.",
    "conditionalsElif.life1Title": "¿Qué hay de almuerzo?",
    "conditionalsElif.life1Text": "Si hay pizza, elijo pizza. Si no, si hay pasta, elijo pasta. Si no, un sándwich.",
    "conditionalsElif.life2Title": "¿Qué juego?",
    "conditionalsElif.life2Text": "Si vienen 6 amigos, jugamos fútbol. Si no, si vienen 2, jugamos a la lleva. Si no, armo con bloques.",
    "conditionalsElif.life3Title": "Sabor de helado",
    "conditionalsElif.life3Text": "Si tienen chocolate, lo pido. Si no, si tienen fresa, pido fresa. Si no, vainilla.",
    "conditionalsElif.quizLifeTitle": "Menú del almuerzo",
    "conditionalsElif.quizLifeScene": "Regla de PyBot: si hay pizza, pizza. Si no, si hay pasta, pasta. Si no, un sándwich. Hoy hay pasta y sándwiches, pero no pizza.",
    "conditionalsElif.quizLifeQuestion": "¿Qué come PyBot?",
    "conditionalsElif.lifeA": "Pizza",
    "conditionalsElif.lifeB": "Pasta",
    "conditionalsElif.lifeC": "Un sándwich",
    "thinking.elif-everydaySuccess": "¡Sí! No hay pizza, así que gana la siguiente pregunta: pasta. Ahí se detiene.",
    "thinking.elif-everydayHint": "Todavía no. Pregunta en orden: ¿pizza? ¿pasta? Gana el primer sí.",
    "conditionalsMatch.lifeTitle": "Una caja, muchas opciones.",
    "conditionalsMatch.lifeIntro": "Mira una sola cosa, como el día o el botón, y elige la opción que encaja.",
    "conditionalsMatch.life1Title": "¿Qué día es?",
    "conditionalsMatch.life1Text": "Lunes: natación. Miércoles: clase de arte. Sábado: el parque. Cualquier otro día: jugar en casa.",
    "conditionalsMatch.life2Title": "Lanza el dado",
    "conditionalsMatch.life2Text": "1: escondidas. 2: saltar la cuerda. 3: dibujar un monstruo. Otro número: ¡tú eliges!",
    "conditionalsMatch.life3Title": "La máquina de jugos",
    "conditionalsMatch.life3Text": "Botón A: jugo de naranja. Botón B: jugo de mango. Cualquier otro botón: agua.",
    "conditionalsMatch.quizLifeTitle": "La actividad de hoy",
    "conditionalsMatch.quizLifeScene": "Lunes: natación. Miércoles: clase de arte. Sábado: el parque. Cualquier otro día: jugar en casa. Hoy es viernes.",
    "conditionalsMatch.quizLifeQuestion": "¿Qué hace PyBot hoy?",
    "conditionalsMatch.lifeA": "Natación",
    "conditionalsMatch.lifeB": "Ir al parque",
    "conditionalsMatch.lifeC": "Jugar en casa",
    "thinking.match-everydaySuccess": "¡Sí! Viernes no tiene su propio caso, así que encaja “cualquier otro día”, como case _.",
    "thinking.match-everydayHint": "Todavía no. ¿Hay una opción para viernes? Entonces, ¿cuál atrapa lo demás?",
    "topic.lifeEyebrow": "EN LA VIDA REAL",
    "path.conditionalsLabel": "Páginas de condicionales",
    "path.conditionalsIf": "if y else: dos caminos",
    "path.conditionalsElif": "elif: más preguntas",
    "path.conditionalsMatch": "match: elige un caso",
    "topic.progressConditionalsElif": "ZONA 3 · 2 DE 3",
    "topic.progressConditionalsMatch": "ZONA 3 · 3 DE 3",
    "meta.conditionalsElifDescription": "Aprende elif en Python: haz más de una pregunta y elige entre muchos caminos.",
    "conditionalsElif.eyebrow": "CONDICIONALES · ELIF",
    "conditionalsElif.title": "Una pregunta más: elif.",
    "conditionalsElif.intro": "elif es la forma corta de “else, if” (si no, si). Hace una nueva pregunta solo cuando todas las preguntas de arriba fueron False.",
    "conditionalsElif.pybot": "Pregunto de arriba hacia abajo y me detengo en el primer sí.",
    "conditionalsElif.pybotNamed": "{name}, pregunto de arriba hacia abajo y me detengo en el primer sí.",
    "conditionalsElif.robotLabel": "PyBot está junto a un letrero con muchos caminos",
    "conditionalsElif.overviewTitle": "Una escalera de preguntas.",
    "conditionalsElif.ifTitle": "if pregunta primero",
    "conditionalsElif.ifText": "La primera pregunta siempre va con if.",
    "conditionalsElif.elifTitle": "elif pregunta después",
    "conditionalsElif.elifText": "Si la respuesta de arriba fue False, elif hace otra pregunta. Puedes poner todos los que necesites.",
    "conditionalsElif.elseTitle": "else atrapa lo demás",
    "conditionalsElif.elseText": "Si todas las respuestas fueron False, corre el camino del else. Es opcional.",
    "conditionalsElif.stepsTitle": "Sigue el semáforo.",
    "conditionalsElif.stepsIntro": "PyBot lee una pregunta a la vez, desde arriba.",
    "conditionalsElif.walk1": "luz = \"amarillo\"",
    "conditionalsElif.walk1Tag": "Una caja guarda la palabra amarillo.",
    "conditionalsElif.walk2": "if luz == \"verde\":",
    "conditionalsElif.walk2Tag": "¿Es verde? No. Baja a la siguiente pregunta.",
    "conditionalsElif.walk3": "    print(\"avanza\")",
    "conditionalsElif.walk3Tag": "Se salta.",
    "conditionalsElif.walk4": "elif luz == \"amarillo\":",
    "conditionalsElif.walk4Tag": "¿Es amarillo? ¡Sí!",
    "conditionalsElif.walk5": "    print(\"despacio\")",
    "conditionalsElif.walk5Tag": "Este camino corre.",
    "conditionalsElif.walk6": "elif luz == \"rojo\":",
    "conditionalsElif.walk6Tag": "Ni siquiera se pregunta. Ya corrió un camino.",
    "conditionalsElif.walk7": "    print(\"para\")",
    "conditionalsElif.walk7Tag": "Se salta.",
    "conditionalsElif.walk8": "else:",
    "conditionalsElif.walk8Tag": "Se salta. else solo corre cuando todas las respuestas fueron False.",
    "conditionalsElif.rulesTitle": "Tres reglas de elif.",
    "conditionalsElif.ruleFirstTitle": "Gana el primer sí",
    "conditionalsElif.ruleFirstText": "Python se detiene en el primer True. Las preguntas de abajo ya no se hacen.",
    "conditionalsElif.ruleOrderTitle": "El orden importa",
    "conditionalsElif.ruleOrderText": "Pon primero la pregunta más difícil. puntos >= 9 va antes que puntos >= 5.",
    "conditionalsElif.ruleIfTitle": "Dos if son dos preguntas",
    "conditionalsElif.ruleIfText": "Con dos if separados, pueden correr los dos. Con elif, solo corre un camino.",
    "conditionalsElif.runTitle": "Dale una medalla a PyBot.",
    "conditionalsElif.runCode": "puntos = 7\nif puntos >= 9:\n    print(\"oro\")\nelif puntos >= 5:\n    print(\"plata\")\nelse:\n    print(\"bronce\")",
    "conditionalsElif.predictGold": "oro",
    "conditionalsElif.predictSilver": "plata",
    "conditionalsElif.predictBoth": "oro y plata",
    "conditionalsElif.tryText": "Cambia 7 por 10, y luego por 2. ¿Qué medalla gana PyBot cada vez?",
    "conditionalsElif.practiceTitle": "Sube la escalera de preguntas.",
    "conditionalsElif.quizMeaningTitle": "Una palabra corta",
    "conditionalsElif.quizMeaningQuestion": "¿Qué significa elif?",
    "conditionalsElif.meaningElseIf": "else, if (si no, si)",
    "conditionalsElif.meaningEnd": "end if (fin del if)",
    "conditionalsElif.meaningEvery": "every line (cada línea)",
    "conditionalsElif.quizLightTitle": "Luz roja",
    "conditionalsElif.quizLightCode": "luz = \"rojo\"\nif luz == \"verde\":\n    print(\"avanza\")\nelif luz == \"amarillo\":\n    print(\"despacio\")\nelif luz == \"rojo\":\n    print(\"para\")",
    "conditionalsElif.quizShowQuestion": "¿Qué muestra Python?",
    "conditionalsElif.go": "avanza",
    "conditionalsElif.slow": "despacio",
    "conditionalsElif.stop": "para",
    "conditionalsElif.quizFirstTitle": "Dos respuestas son True",
    "conditionalsElif.quizFirstCode": "n = 15\nif n > 5:\n    print(\"grande\")\nelif n > 10:\n    print(\"enorme\")",
    "conditionalsElif.big": "grande",
    "conditionalsElif.huge": "enorme",
    "conditionalsElif.bigHuge": "grande, luego enorme",
    "conditionalsElif.quizOrderTitle": "Arregla el orden",
    "conditionalsElif.quizOrderScene": "En el código de arriba, PyBot quiere que 15 muestre enorme.",
    "conditionalsElif.quizOrderQuestion": "¿Qué debe cambiar PyBot?",
    "conditionalsElif.orderSwap": "Preguntar n > 10 primero",
    "conditionalsElif.orderElse": "Agregar un else",
    "conditionalsElif.orderPrint": "Mostrar enorme dos veces",
    "conditionalsElif.quizNoneTitle": "Todas las respuestas son False",
    "conditionalsElif.quizNoneCode": "mascota = \"pez\"\nif mascota == \"perro\":\n    print(\"guau\")\nelif mascota == \"gato\":\n    print(\"miau\")",
    "conditionalsElif.woof": "guau",
    "conditionalsElif.nothing": "Nada",
    "conditionalsElif.error": "Un error",
    "conditionalsElif.quizTwoIfTitle": "Dos if separados",
    "conditionalsElif.quizTwoIfCode": "bateria = 90\nif bateria > 50:\n    print(\"jugar\")\nif bateria > 80:\n    print(\"bailar\")",
    "conditionalsElif.quizWordsQuestion": "¿Qué palabras aparecen?",
    "conditionalsElif.onlyPlay": "Solo jugar",
    "conditionalsElif.onlyDance": "Solo bailar",
    "conditionalsElif.playDance": "jugar, luego bailar",
    "conditionalsElif.quizManyTitle": "¿Cuántos elif?",
    "conditionalsElif.quizManyQuestion": "¿Cuántas líneas elif puede tener un if?",
    "conditionalsElif.manyOne": "Solo uno",
    "conditionalsElif.manyAny": "Todos los que necesites",
    "conditionalsElif.manyNone": "Ninguno",
    "conditionalsElif.fixTask": "Python no entiende else if en una línea. Usa su palabra corta.",
    "conditionalsElif.fixCode": "luz = \"rojo\"\nif luz == \"verde\":\n    print(\"avanza\")\nelse if luz == \"rojo\":\n    print(\"para\")",
    "conditionalsElif.fixExpected": "para",
    "conditionalsElif.bigTitle": "elif agrega más preguntas. Gana el primer True.",
    "conditionalsElif.bigText": "Ahora: cuando comparas una caja con muchos valores, Python tiene match.",
    "conditionalsElif.next": "Elige un caso con match",
    "thinking.elif-predictSuccess": "¡Sí! 7 >= 9 es False, 7 >= 5 es True, así que aparece plata y Python se detiene.",
    "thinking.elif-predictHint": "Todavía no. Pregunta desde arriba: ¿7 >= 9? ¿7 >= 5?",
    "thinking.elif-meaningSuccess": "¡Sí! elif = else + if: si no fue el de arriba, pregunta esto.",
    "thinking.elif-meaningHint": "Todavía no. Separa la palabra: el... if.",
    "thinking.elif-lightSuccess": "¡Sí! ¿verde? No. ¿amarillo? No. ¿rojo? Sí, así que para.",
    "thinking.elif-lightHint": "Todavía no. Revisa cada pregunta desde arriba. La luz es rojo.",
    "thinking.elif-firstSuccess": "¡Sí! 15 > 5 es True primero, así que Python nunca pregunta el elif.",
    "thinking.elif-firstHint": "Todavía no. Las dos respuestas son True, pero Python se detiene en la primera.",
    "thinking.elif-orderSuccess": "¡Sí! Pon arriba la pregunta más difícil, para que tenga su oportunidad.",
    "thinking.elif-orderHint": "Todavía no. ¿Qué pregunta debe hacerse antes que la otra?",
    "thinking.elif-noneSuccess": "¡Sí! Ninguna pregunta es True y no hay else, así que no aparece nada.",
    "thinking.elif-noneHint": "Todavía no. ¿La mascota es perro? ¿Gato? ¿Hay un else?",
    "thinking.elif-two-ifsSuccess": "¡Sí! Dos if son dos preguntas separadas, y las dos son True.",
    "thinking.elif-two-ifsHint": "Todavía no. Aquí no hay elif. Cada if pregunta por su cuenta.",
    "thinking.elif-manySuccess": "¡Sí! Agrega un elif por cada pregunta extra.",
    "thinking.elif-manyHint": "Todavía no. Un semáforo necesita 3 preguntas. ¿Puede tenerlas?",
    "meta.conditionalsMatchDescription": "Aprende match y case de Python, la versión de Python del switch.",
    "conditionalsMatch.eyebrow": "CONDICIONALES · MATCH",
    "conditionalsMatch.title": "Elige un caso con match.",
    "conditionalsMatch.intro": "Muchos lenguajes tienen un switch para elegir una opción de una lista. Python lo llama match, y cada opción es un case (caso).",
    "conditionalsMatch.pybot": "Miro una caja y salto al caso que encaja.",
    "conditionalsMatch.pybotNamed": "{name}, miro una caja y salto al caso que encaja.",
    "conditionalsMatch.robotLabel": "PyBot está junto a un letrero de match y otro de case",
    "conditionalsMatch.overviewTitle": "switch en otros lenguajes, match en Python.",
    "conditionalsMatch.matchTitle": "match mira una caja",
    "conditionalsMatch.matchText": "match comando: significa: miremos qué hay dentro de comando.",
    "conditionalsMatch.caseTitle": "case es una opción",
    "conditionalsMatch.caseText": "case \"saltar\": corre su camino cuando la caja guarda \"saltar\".",
    "conditionalsMatch.restTitle": "case _ atrapa lo demás",
    "conditionalsMatch.restText": "El _ significa “cualquier otra cosa”. Funciona como else.",
    "conditionalsMatch.switchNote": "Ojo: Python no tiene la palabra switch. Desde Python 3.10 usa match y case.",
    "conditionalsMatch.stepsTitle": "Encuentra el caso que encaja.",
    "conditionalsMatch.stepsIntro": "PyBot compara la caja con cada caso, desde arriba.",
    "conditionalsMatch.walk1": "dia = \"sabado\"",
    "conditionalsMatch.walk1Tag": "Una caja guarda la palabra sabado.",
    "conditionalsMatch.walk2": "match dia:",
    "conditionalsMatch.walk2Tag": "Mira dentro de la caja dia.",
    "conditionalsMatch.walk3": "    case \"viernes\":",
    "conditionalsMatch.walk3Tag": "¿Es viernes? No. Prueba el siguiente caso.",
    "conditionalsMatch.walk4": "        print(\"colegio\")",
    "conditionalsMatch.walk4Tag": "Se salta.",
    "conditionalsMatch.walk5": "    case \"sabado\":",
    "conditionalsMatch.walk5Tag": "¿Es sabado? ¡Sí!",
    "conditionalsMatch.walk6": "        print(\"jugar\")",
    "conditionalsMatch.walk6Tag": "Este camino corre.",
    "conditionalsMatch.walk7": "    case _:",
    "conditionalsMatch.walk7Tag": "Se salta. Ya encajó un caso.",
    "conditionalsMatch.walk8": "        print(\"descansar\")",
    "conditionalsMatch.walk8Tag": "case _ corre solo cuando ningún otro caso encaja.",
    "conditionalsMatch.rulesTitle": "Tres reglas de match.",
    "conditionalsMatch.ruleOneTitle": "Solo corre un caso",
    "conditionalsMatch.ruleOneText": "Python elige el primer caso que encaja y luego sale del match.",
    "conditionalsMatch.ruleRestTitle": "case _ va al final",
    "conditionalsMatch.ruleRestText": "_ encaja con todo, así que los casos de abajo nunca tendrían turno.",
    "conditionalsMatch.ruleOrTitle": "| significa o",
    "conditionalsMatch.ruleOrText": "case \"sabado\" | \"domingo\": encaja con los dos días en un solo camino.",
    "conditionalsMatch.runTitle": "Envíale una orden a PyBot.",
    "conditionalsMatch.runCode": "orden = \"saltar\"\nmatch orden:\n    case \"caminar\":\n        print(\"PyBot camina\")\n    case \"saltar\":\n        print(\"PyBot salta\")\n    case _:\n        print(\"PyBot espera\")",
    "conditionalsMatch.predictWalks": "PyBot camina",
    "conditionalsMatch.predictJumps": "PyBot salta",
    "conditionalsMatch.predictWaits": "PyBot espera",
    "conditionalsMatch.tryText": "Cambia \"saltar\" por \"caminar\", y luego por \"bailar\". ¿Qué caso encaja cada vez?",
    "conditionalsMatch.practiceTitle": "Encuentra el caso.",
    "conditionalsMatch.quizNameTitle": "El switch de Python",
    "conditionalsMatch.quizNameQuestion": "Otros lenguajes dicen switch. ¿Qué palabra usa Python?",
    "conditionalsMatch.nameSwitch": "switch",
    "conditionalsMatch.nameMatch": "match",
    "conditionalsMatch.nameChoose": "choose",
    "conditionalsMatch.quizFruitTitle": "Elige la fruta",
    "conditionalsMatch.quizFruitCode": "fruta = \"manzana\"\nmatch fruta:\n    case \"banano\":\n        print(\"amarillo\")\n    case \"manzana\":\n        print(\"rojo\")\n    case _:\n        print(\"no sé\")",
    "conditionalsMatch.quizShowQuestion": "¿Qué muestra Python?",
    "conditionalsMatch.yellow": "amarillo",
    "conditionalsMatch.red": "rojo",
    "conditionalsMatch.unknown": "no sé",
    "conditionalsMatch.quizRestTitle": "Ningún caso encaja",
    "conditionalsMatch.quizRestCode": "animal = \"vaca\"\nmatch animal:\n    case \"perro\":\n        print(\"guau\")\n    case \"gato\":\n        print(\"miau\")\n    case _:\n        print(\"mmm\")",
    "conditionalsMatch.woof": "guau",
    "conditionalsMatch.meow": "miau",
    "conditionalsMatch.hmm": "mmm",
    "conditionalsMatch.quizUnderscoreTitle": "El guion bajo",
    "conditionalsMatch.quizUnderscoreQuestion": "¿Qué significa case _?",
    "conditionalsMatch.underscoreEmpty": "Una caja vacía",
    "conditionalsMatch.underscoreElse": "Cualquier otra cosa",
    "conditionalsMatch.underscoreStop": "Detener el programa",
    "conditionalsMatch.quizOrTitle": "Dos días, un camino",
    "conditionalsMatch.quizOrCode": "dia = \"domingo\"\nmatch dia:\n    case \"sabado\" | \"domingo\":\n        print(\"fin de semana\")\n    case _:\n        print(\"día de colegio\")",
    "conditionalsMatch.weekend": "fin de semana",
    "conditionalsMatch.schoolDay": "día de colegio",
    "conditionalsMatch.both": "fin de semana, luego día de colegio",
    "conditionalsMatch.quizOneTitle": "¿Cuántos casos?",
    "conditionalsMatch.quizOneCode": "color = \"rojo\"\nmatch color:\n    case \"rojo\":\n        print(\"para\")\n    case _:\n        print(\"otro\")",
    "conditionalsMatch.quizOneQuestion": "_ encaja con todo, hasta con rojo. ¿Qué aparece?",
    "conditionalsMatch.stopWord": "para",
    "conditionalsMatch.otherWord": "otro",
    "conditionalsMatch.stopOther": "para, luego otro",
    "conditionalsMatch.quizSameTitle": "El mismo trabajo",
    "conditionalsMatch.quizSameQuestion": "match puede hacer el mismo trabajo que…",
    "conditionalsMatch.sameElif": "if, elif y else",
    "conditionalsMatch.sameFor": "un bucle for",
    "conditionalsMatch.sameBox": "una lista",
    "conditionalsMatch.fixTask": "PyBot usó la palabra de otros lenguajes. Cámbiala por la palabra de Python.",
    "conditionalsMatch.fixCode": "mascota = \"gato\"\nswitch mascota:\n    case \"perro\":\n        print(\"guau\")\n    case \"gato\":\n        print(\"miau\")",
    "conditionalsMatch.fixExpected": "miau",
    "conditionalsMatch.bigTitle": "match elige un caso según el valor de una caja.",
    "conditionalsMatch.bigText": "Otros lenguajes lo llaman switch. En Python es match, con case _ para cualquier otra cosa.",
    "conditionalsMatch.next": "Repite un patrón",
    "thinking.match-predictSuccess": "¡Sí! orden guarda saltar, así que corre el caso saltar.",
    "thinking.match-predictHint": "Todavía no. ¿Qué hay dentro de orden? Busca el caso con la misma palabra.",
    "thinking.match-nameSuccess": "¡Sí! Python dice match, y cada opción es un case.",
    "thinking.match-nameHint": "Todavía no. switch es de otros lenguajes. Python tiene su propia palabra.",
    "thinking.match-fruitSuccess": "¡Sí! La caja guarda manzana, así que corre el caso manzana.",
    "thinking.match-fruitHint": "Todavía no. ¿Qué caso tiene la misma palabra que la caja?",
    "thinking.match-restSuccess": "¡Sí! Ningún caso encaja con vaca, así que corre case _.",
    "thinking.match-restHint": "Todavía no. ¿Hay un caso para vaca? Entonces, ¿cuál atrapa lo demás?",
    "thinking.match-underscoreSuccess": "¡Sí! _ encaja con todo, como else.",
    "thinking.match-underscoreHint": "Todavía no. _ es el último caso. ¿Cuándo corre?",
    "thinking.match-orSuccess": "¡Sí! | significa o, así que domingo encaja en el primer caso.",
    "thinking.match-orHint": "Todavía no. Lee | como o. ¿Está domingo en el primer caso?",
    "thinking.match-oneSuccess": "¡Sí! Gana el primer caso que encaja. Solo corre un caso.",
    "thinking.match-oneHint": "Todavía no. Encajan dos casos, pero ¿cuántos pueden correr?",
    "thinking.match-sameSuccess": "¡Sí! Cada case es como un elif que pregunta: ¿la caja es igual a esto?",
    "thinking.match-sameHint": "Todavía no. match elige un camino. ¿Qué otro código elige un camino?",
    "loops.stepsEyebrow": "PASO A PASO",
    "loops.stepsTitle": "Mira cómo trabaja el bucle.",
    "loops.stepsIntro": "Un bucle tiene una caja que cambia en cada vuelta.",
    "loops.walkA1": "for vuelta in range(3):",
    "loops.walkA1Tag": "vuelta es una caja. range(3) la llena con 0, luego 1, luego 2.",
    "loops.walkA2": "    print(vuelta)",
    "loops.walkA2Tag": "La línea con sangría se repite. Muestra lo que hay en la caja ahora.",
    "loops.walkA3": "print(\"listo\")",
    "loops.walkA3Tag": "No tiene sangría, así que corre una vez, cuando el bucle termina.",
    "loops.traceLabel": "El bucle muestra 0, 1 y 2, y luego listo",
    "loops.walkB1": "meriendas = [\"manzana\", \"pera\", \"uva\"]",
    "loops.walkB1Tag": "Una caja de lista, como en Cajas de todo tipo. Tiene 3 espacios.",
    "loops.walkB2": "for merienda in meriendas:",
    "loops.walkB2Tag": "merienda toma cada elemento de la lista, una vuelta a la vez.",
    "loops.walkB3": "    print(\"Me gusta\", merienda)",
    "loops.walkB3Tag": "Se repite 3 veces, una por cada elemento: manzana, pera, uva.",
    "loops.rulesTitle": "Tres cosas que saber de los bucles.",
    "loops.ruleZeroTitle": "range empieza en 0",
    "loops.ruleZeroText": "Los computadores empiezan a contar en 0. range(3) da 0, 1, 2. Siguen siendo tres vueltas.",
    "loops.ruleBoxTitle": "La caja del bucle cambia",
    "loops.ruleBoxText": "La palabra después de for es una caja. Recibe un valor nuevo en cada vuelta.",
    "loops.ruleIndentTitle": "Las líneas con sangría se repiten",
    "loops.ruleIndentText": "Las líneas corridas a la derecha se repiten en cada vuelta. Las de la izquierda corren una vez.",
    "loops.countEyebrow": "LLEVA LA CUENTA",
    "loops.countWalkTitle": "Un bucle puede ir sumando.",
    "loops.walkC1": "estrellas = 0",
    "loops.walkC1Tag": "Empieza con la cuenta vacía: 0 estrellas.",
    "loops.walkC2": "for vuelta in range(4):",
    "loops.walkC2Tag": "Cuatro vueltas.",
    "loops.walkC3": "    estrellas = estrellas + 1",
    "loops.walkC3Tag": "En cada vuelta, toma lo que hay en la caja y súmale 1: 1, 2, 3, 4.",
    "loops.walkC4": "print(estrellas)",
    "loops.walkC4Tag": "Corre una vez al final y muestra 4.",
    "loops.quizZeroTitle": "La primera vuelta",
    "loops.quizZeroCode": "for vuelta in range(3):\n    print(vuelta)",
    "loops.quizZeroQuestion": "¿Qué número aparece primero?",
    "loops.quizListTitle": "Una vuelta por elemento",
    "loops.quizListCode": "colores = [\"rojo\", \"azul\"]\nfor color in colores:\n    print(color)",
    "loops.quizListQuestion": "¿Cuántas vueltas da el bucle?",
    "loops.quizOnceTitle": "Fuera del bucle",
    "loops.quizOnceCode": "for vuelta in range(5):\n    print(\"salta\")\nprint(\"descansa\")",
    "loops.quizOnceQuestion": "¿Cuántas veces aparece la última palabra?",
    "loops.quizTotalTitle": "Lleva la cuenta",
    "loops.quizTotalCode": "estrellas = 0\nfor vuelta in range(3):\n    estrellas = estrellas + 2\nprint(estrellas)",
    "loops.quizShowQuestion": "¿Qué muestra Python?",
    "path.loopsLabel": "Páginas de bucles",
    "path.loopsFor": "for: cuenta las vueltas",
    "path.loopsWhile": "while: pregunta primero",
    "path.loopsUntil": "Repetir hasta que",
    "meta.loopsWhileDescription": "Aprende los bucles while de Python: repite mientras una pregunta sea True.",
    "meta.loopsUntilDescription": "Repite hasta que algo termine en Python, con while not y break.",
    "topic.progressLoopsWhile": "ZONA 3 · 2 DE 3",
    "topic.progressLoopsUntil": "ZONA 3 · 3 DE 3",
    "loopsWhile.eyebrow": "BUCLES · WHILE",
    "loopsWhile.title": "Repite mientras sea verdad.",
    "loopsWhile.intro": "Un bucle while hace una pregunta de True o False antes de cada vuelta. True: una vuelta más. False: se detiene.",
    "loopsWhile.pybot": "Sigo mientras la respuesta sea True.",
    "loopsWhile.pybotNamed": "{name}, sigo mientras la respuesta sea True.",
    "loopsWhile.robotLabel": "PyBot sigue adelante mientras un signo de pregunta da vueltas",
    "loopsWhile.overviewTitle": "while pregunta antes de cada vuelta.",
    "loopsWhile.askTitle": "Haz una pregunta",
    "loopsWhile.askText": "while bateria > 0: pregunta, ¿la batería está por encima de 0?",
    "loopsWhile.trueTitle": "True: una vuelta más",
    "loopsWhile.trueText": "Si la respuesta es True, las líneas con sangría corren otra vez.",
    "loopsWhile.falseTitle": "False: se detiene",
    "loopsWhile.falseText": "Si la respuesta es False, el bucle termina y Python sigue.",
    "loopsWhile.demoLabel": "Un bucle while muestra 3, 2 y 1, y luego pide carga",
    "loopsWhile.demoCode": "while bateria > 0:",
    "loopsWhile.demoDone": "¡cárgame!",
    "loopsWhile.stepsTitle": "Mira cómo cambia la pregunta.",
    "loopsWhile.stepsIntro": "Algo dentro del bucle debe cambiar, para que la respuesta pueda volverse False.",
    "loopsWhile.walk1": "bateria = 3",
    "loopsWhile.walk1Tag": "Empieza con 3 rayitas de batería.",
    "loopsWhile.walk2": "while bateria > 0:",
    "loopsWhile.walk2Tag": "La pregunta. 3 > 0 es True, así que empieza una vuelta.",
    "loopsWhile.walk3": "    print(bateria)",
    "loopsWhile.walk3Tag": "Muestra lo que hay en la caja ahora: 3, luego 2, luego 1.",
    "loopsWhile.walk4": "    bateria = bateria - 1",
    "loopsWhile.walk4Tag": "Quita 1. ¡Sin esta línea la respuesta sigue siendo True para siempre!",
    "loopsWhile.walk5": "print(\"¡cárgame!\")",
    "loopsWhile.walk5Tag": "Corre una vez, cuando 0 > 0 es False y el bucle terminó.",
    "loopsWhile.rulesTitle": "¿for o while?",
    "loopsWhile.ruleForTitle": "for: sabes cuántas",
    "loopsWhile.ruleForText": "range(3) da exactamente 3 vueltas. Usa for cuando puedes contar las vueltas antes.",
    "loopsWhile.ruleWhileTitle": "while: sabes cuándo parar",
    "loopsWhile.ruleWhileText": "Sigue hasta que la pregunta se vuelva False, aunque no sepas cuántas vueltas.",
    "loopsWhile.ruleChangeTitle": "Cambia la caja",
    "loopsWhile.ruleChangeText": "Si nada cambia, el bucle nunca termina. Si pasa, presiona Detener.",
    "loopsWhile.runTitle": "Ayuda a PyBot a dar unos pasos.",
    "loopsWhile.runCode": "pasos = 0\nwhile pasos < 3:\n    print(\"paso\")\n    pasos = pasos + 1",
    "loopsWhile.predictQuestion": "¿Cuántas veces dirá PyBot paso?",
    "loopsWhile.tryText": "Cambia 3 por 5. Ejecútalo otra vez y cuenta los pasos.",
    "loopsWhile.practiceTitle": "Pregunta, repite, detente.",
    "loopsWhile.quizCheckTitle": "¿Cuándo pregunta?",
    "loopsWhile.quizCheckQuestion": "¿Cuándo hace su pregunta un bucle while?",
    "loopsWhile.beforeEvery": "Antes de cada vuelta",
    "loopsWhile.onlyOnce": "Solo una vez, al inicio",
    "loopsWhile.neverAsks": "Nunca pregunta",
    "loopsWhile.quizCountTitle": "Cuenta las vueltas",
    "loopsWhile.quizCountCode": "n = 0\nwhile n < 4:\n    print(n)\n    n = n + 1",
    "loopsWhile.quizCountQuestion": "¿Cuántos números aparecen?",
    "loopsWhile.quizLastTitle": "El último número",
    "loopsWhile.quizLastCode": "n = 1\nwhile n < 3:\n    print(n)\n    n = n + 1",
    "loopsWhile.quizLastQuestion": "¿Cuál es el último número que muestra Python?",
    "loopsWhile.quizZeroTitle": "Cero vueltas",
    "loopsWhile.quizZeroCode": "bateria = 0\nwhile bateria > 0:\n    print(\"vamos\")\nprint(\"descansa\")",
    "loopsWhile.quizZeroQuestion": "¿Cuántas veces aparece vamos?",
    "loopsWhile.quizForeverTitle": "Algo falta",
    "loopsWhile.quizForeverCode": "vuelta = 1\nwhile vuelta < 3:\n    print(\"corre\")",
    "loopsWhile.quizForeverQuestion": "¿Qué pasa?",
    "loopsWhile.runTwo": "corre aparece 2 veces",
    "loopsWhile.runThree": "corre aparece 3 veces",
    "loopsWhile.runForever": "Nunca se detiene",
    "loopsWhile.quizChooseTitle": "Elige el bucle",
    "loopsWhile.quizChooseQuestion": "PyBot debe comer galletas hasta que el frasco quede vacío. No sabe cuántas hay. ¿Qué bucle sirve?",
    "loopsWhile.chooseFor": "for vuelta in range(3):",
    "loopsWhile.chooseWhile": "while galletas > 0:",
    "loopsWhile.chooseNone": "Ningún bucle",
    "loopsWhile.fixTask": "PyBot quiere contar 3, 2, 1, pero no aparece nada. Arregla la pregunta de la línea while.",
    "loopsWhile.fixCode": "cuenta = 3\nwhile cuenta < 0:\n    print(cuenta)\n    cuenta = cuenta - 1",
    "loopsWhile.fixExpected": "3\n2\n1",
    "loopsWhile.bigTitle": "Un bucle while repite mientras su pregunta sea True.",
    "loopsWhile.bigText": "Ahora: Python no tiene la palabra until (hasta que), pero igual puedes repetir hasta que algo termine.",
    "loopsWhile.next": "Repetir hasta que",
    "thinking.while-predictSuccess": "¡Sí! pasos va 0, 1, 2. En 3, 3 < 3 es False, así que paso aparece 3 veces.",
    "thinking.while-predictHint": "Todavía no. Sigue la caja: 0, 1, 2, 3. ¿Cuándo es False pasos < 3?",
    "thinking.while-checkSuccess": "¡Sí! while pregunta antes de cada vuelta, incluso la primera.",
    "thinking.while-checkHint": "Todavía no. La pregunta se repite; si no, el bucle no podría parar.",
    "thinking.while-countSuccess": "¡Sí! Muestra 0, 1, 2 y 3. Son 4 números.",
    "thinking.while-countHint": "Todavía no. Anota n en cada vuelta: 0, 1, 2... ¿cuándo es False n < 4?",
    "thinking.while-lastSuccess": "¡Sí! Cuando n es 3, 3 < 3 es False, así que el bucle para antes de mostrar 3.",
    "thinking.while-lastHint": "Todavía no. La pregunta va antes de print. ¿Qué pasa cuando n es 3?",
    "thinking.while-zeroSuccess": "¡Sí! 0 > 0 es False desde el inicio, así que el bucle da cero vueltas.",
    "thinking.while-zeroHint": "Todavía no. Primero haz la pregunta: ¿0 > 0?",
    "thinking.while-foreverSuccess": "¡Sí! vuelta nunca cambia, así que vuelta < 3 sigue True para siempre.",
    "thinking.while-foreverHint": "Todavía no. Mira dentro del bucle. ¿Cambia vuelta alguna vez?",
    "thinking.while-chooseSuccess": "¡Sí! No sabes cuántas galletas hay, pero sabes cuándo parar: cuando no queden.",
    "thinking.while-chooseHint": "Todavía no. No sabes cuántas vueltas. ¿Qué bucle se detiene con una pregunta?",
    "loopsUntil.eyebrow": "BUCLES · REPETIR HASTA QUE",
    "loopsUntil.title": "Repite hasta que esté listo.",
    "loopsUntil.intro": "Algunos lenguajes, como Scratch, tienen un bloque repetir hasta que. Python no tiene la palabra until (hasta que). Aquí hay dos formas de hacerlo igual.",
    "loopsUntil.pybot": "¿Python no tiene until? No hay problema. Conozco dos trucos.",
    "loopsUntil.pybotNamed": "¿Python no tiene until, {name}? No hay problema. Conozco dos trucos.",
    "loopsUntil.robotLabel": "PyBot guiña un ojo junto a un vaso que se llena",
    "loopsUntil.overviewTitle": "until es while al revés.",
    "loopsUntil.stopTitle": "until: para cuando sea True",
    "loopsUntil.stopText": "Repetir hasta que el vaso esté lleno significa: sigue sirviendo mientras no esté lleno.",
    "loopsUntil.notTitle": "not voltea la respuesta",
    "loopsUntil.notText": "not True es False. not False es True.",
    "loopsUntil.pythonTitle": "Python no tiene until",
    "loopsUntil.pythonText": "En Python no existe la palabra until. Escribe while not, o while True con break.",
    "loopsUntil.demoLabel": "Un bucle sirve tres veces y luego el vaso está lleno",
    "loopsUntil.demoCode": "while not lleno:",
    "loopsUntil.demoStep": "sirve",
    "loopsUntil.demoDone": "¡lleno!",
    "loopsUntil.wayOneEyebrow": "FORMA 1",
    "loopsUntil.wayOneTitle": "while not: repite hasta que una caja sea True.",
    "loopsUntil.wayOneIntro": "Lee while not lleno como repetir hasta que esté lleno.",
    "loopsUntil.notWalk1": "lleno = False",
    "loopsUntil.notWalk1Tag": "Una caja de sí o no. El vaso todavía no está lleno.",
    "loopsUntil.notWalk2": "vasos = 0",
    "loopsUntil.notWalk2Tag": "Todavía no se ha servido nada.",
    "loopsUntil.notWalk3": "while not lleno:",
    "loopsUntil.notWalk3Tag": "Repite hasta que esté lleno. not False es True, así que empieza una vuelta.",
    "loopsUntil.notWalk4": "    vasos = vasos + 1",
    "loopsUntil.notWalk4Tag": "Sirve una vez más.",
    "loopsUntil.notWalk5": "    print(\"sirve\", vasos)",
    "loopsUntil.notWalk5Tag": "Muestra sirve 1, sirve 2, sirve 3.",
    "loopsUntil.notWalk6": "    if vasos > 2:",
    "loopsUntil.notWalk6Tag": "Después de la tercera vez, el vaso está lleno...",
    "loopsUntil.notWalk7": "        lleno = True",
    "loopsUntil.notWalk7Tag": "...así que la caja cambia. not True es False y el bucle se detiene.",
    "loopsUntil.walkEnd": "print(\"¡lleno!\")",
    "loopsUntil.walkEndTag": "Corre una vez, después del bucle.",
    "loopsUntil.wayTwoEyebrow": "FORMA 2",
    "loopsUntil.wayTwoTitle": "while True con break: sal desde adentro.",
    "loopsUntil.wayTwoIntro": "El bucle correría para siempre, así que le pones una puerta de salida: break.",
    "loopsUntil.breakWalk1": "vasos = 0",
    "loopsUntil.breakWalk1Tag": "Todavía no se ha servido nada.",
    "loopsUntil.breakWalk2": "while True:",
    "loopsUntil.breakWalk2Tag": "True siempre es True, así que solo, este bucle nunca para.",
    "loopsUntil.breakWalk3": "    vasos = vasos + 1",
    "loopsUntil.breakWalk3Tag": "Sirve una vez más.",
    "loopsUntil.breakWalk4": "    print(\"sirve\", vasos)",
    "loopsUntil.breakWalk4Tag": "Muestra sirve 1, sirve 2, sirve 3.",
    "loopsUntil.breakWalk5": "    if vasos > 2:",
    "loopsUntil.breakWalk5Tag": "¿Ya está lleno el vaso?",
    "loopsUntil.breakWalk6": "        break",
    "loopsUntil.breakWalk6Tag": "break significa: sal del bucle ya. Python salta a la primera línea después.",
    "loopsUntil.rulesTitle": "Tres cosas que saber de repetir hasta que.",
    "loopsUntil.ruleUntilTitle": "La tarea va primero",
    "loopsUntil.ruleUntilText": "Con while True y break, la tarea corre al menos una vez y luego PyBot revisa.",
    "loopsUntil.ruleNotTitle": "while not = hasta que",
    "loopsUntil.ruleNotText": "while not listo significa repetir hasta que listo sea True.",
    "loopsUntil.ruleBreakTitle": "break sale del bucle",
    "loopsUntil.ruleBreakText": "Usa break dentro de un bucle, casi siempre dentro de un if.",
    "loopsUntil.runTitle": "Ayuda a PyBot a saltar hasta que se canse.",
    "loopsUntil.runCode": "saltos = 0\nwhile True:\n    saltos = saltos + 1\n    print(\"salta\")\n    if saltos > 3:\n        break",
    "loopsUntil.predictQuestion": "¿Cuántas veces saltará PyBot?",
    "loopsUntil.predictForever": "Para siempre",
    "loopsUntil.tryText": "Cambia 3 por 5. Ejecútalo otra vez y cuenta los saltos.",
    "loopsUntil.practiceTitle": "Repite hasta que esté listo.",
    "loopsUntil.quizMeaningTitle": "Léelo en voz alta",
    "loopsUntil.quizMeaningQuestion": "¿Qué significa esta línea?",
    "loopsUntil.meaningUntil": "Repetir hasta que listo sea True",
    "loopsUntil.meaningOnce": "Repetir solo una vez",
    "loopsUntil.meaningNever": "No repetir nunca",
    "loopsUntil.quizNotTitle": "Voltéalo",
    "loopsUntil.quizNotQuestion": "¿Qué es not False?",
    "loopsUntil.quizBreakTitle": "Lo que hace break",
    "loopsUntil.quizBreakCode": "while True:\n    print(\"hola\")\n    break\nprint(\"chao\")",
    "loopsUntil.quizBreakQuestion": "¿Cuántas veces aparece hola?",
    "loopsUntil.quizDoneTitle": "Ya está listo",
    "loopsUntil.quizDoneCode": "listo = True\nwhile not listo:\n    print(\"trabaja\")\nprint(\"descansa\")",
    "loopsUntil.quizDoneQuestion": "¿Cuántas veces aparece trabaja?",
    "loopsUntil.quizCountTitle": "Hasta que haya suficientes",
    "loopsUntil.quizCountCode": "estrellas = 0\nwhile not estrellas > 2:\n    estrellas = estrellas + 1\nprint(estrellas)",
    "loopsUntil.quizCountQuestion": "¿Qué muestra Python?",
    "loopsUntil.quizWordTitle": "Las palabras de los bucles",
    "loopsUntil.quizWordQuestion": "¿Cuál NO es una palabra de Python?",
    "loopsUntil.fixTask": "PyBot para después de servir una vez, pero el vaso necesita 3. Arregla la pregunta de la línea if.",
    "loopsUntil.fixCode": "vasos = 0\nwhile True:\n    vasos = vasos + 1\n    print(\"sirve\", vasos)\n    if vasos > 0:\n        break\nprint(\"¡lleno!\")",
    "loopsUntil.fixExpected": "sirve 1\nsirve 2\nsirve 3\n¡lleno!",
    "loopsUntil.bigTitle": "Para repetir hasta que, escribe while not, o while True con break.",
    "loopsUntil.bigText": "Ahora vas a aprender a hacer preguntas más precisas con True y False.",
    "loops.nextComparisons": "¿Verdadero o falso?",
    "thinking.until-predictSuccess": "¡Sí! saltos va 1, 2, 3, 4. En 4, 4 > 3 es True, así que break detiene el bucle.",
    "thinking.until-predictHint": "Todavía no. El salto aparece antes de revisar. Cuenta: 1, 2, 3, 4...",
    "thinking.until-meaningSuccess": "¡Sí! while not listo sigue hasta que listo se vuelve True.",
    "thinking.until-meaningHint": "Todavía no. Léelo así: repite mientras no esté listo.",
    "thinking.until-notSuccess": "¡Sí! not voltea False y lo vuelve True.",
    "thinking.until-notHint": "Todavía no. not voltea la respuesta.",
    "thinking.until-breakSuccess": "¡Sí! break sale del bucle en la primera vuelta, así que hola aparece una vez.",
    "thinking.until-breakHint": "Todavía no. ¿Qué hace break justo después del primer hola?",
    "thinking.until-doneSuccess": "¡Sí! listo ya es True, así que not listo es False y el bucle da cero vueltas.",
    "thinking.until-doneHint": "Todavía no. listo es True. ¿Qué es not True?",
    "thinking.until-countSuccess": "¡Sí! estrellas va 1, 2, 3. En 3, 3 > 2 es True, así que el bucle para.",
    "thinking.until-countHint": "Todavía no. El bucle para cuando estrellas > 2 se vuelve True. Cuenta desde 0.",
    "thinking.until-wordSuccess": "¡Sí! Python tiene for y while, pero no until.",
    "thinking.until-wordHint": "Todavía no. Ya usaste dos de estas palabras en bucles de Python.",
    "loopsUntil.quizMeaningCode": "while not listo:",
    "thinking.loop-zeroSuccess": "¡Sí! range empieza a contar en 0.",
    "thinking.loop-zeroHint": "Todavía no. Recuerda: los computadores empiezan a contar en 0.",
    "thinking.loop-listSuccess": "¡Sí! La lista tiene 2 elementos, así que el bucle da 2 vueltas.",
    "thinking.loop-listHint": "Todavía no. Cuenta los elementos de la lista.",
    "thinking.loop-onceSuccess": "¡Sí! La última línea está a la izquierda, así que corre una vez, después del bucle.",
    "thinking.loop-onceHint": "Todavía no. ¿La última línea tiene sangría? Solo se repiten las líneas con sangría.",
    "thinking.loop-totalSuccess": "¡Sí! 0 + 2 + 2 + 2 es 6.",
    "thinking.loop-totalHint": "Todavía no. Tres vueltas, y cada vuelta suma 2. Empieza en 0.",
    "meta.comparisonsTitle": "¿Verdadero o falso? — PyBot",
    "meta.comparisonsDescription": "Una explicación para niños de las comparaciones de Python y las condiciones True o False con and, or y not.",
    "missionComparisons.concept": "COMPARACIONES",
    "missionComparisons.title": "¿Verdadero o Falso?",
    "missionComparisons.text": "Compara valores y une preguntas con and, or y not.",
    "comparisons.eyebrow": "COMPARACIONES",
    "comparisons.title": "¿Verdadero o falso?",
    "comparisons.intro": "Cada if hace una pregunta. La respuesta siempre es True o False. Aquí aprendes a escribir esas preguntas.",
    "comparisons.pybot": "Comparo dos cosas. Así sé: True o False.",
    "comparisons.robotLabel": "PyBot piensa junto a 3 < 5 y la respuesta True",
    "comparisons.pybotNamed": "{name}, comparo dos cosas. Así sé: True o False.",
    "comparisons.overviewTitle": "Una pregunta con solo dos respuestas.",
    "comparisons.boolTitle": "True o False",
    "comparisons.boolText": "Una pregunta de Python solo tiene dos respuestas: True o False. Empiezan con mayúscula, como la caja de sí o no.",
    "comparisons.compareTitle": "Compara dos valores",
    "comparisons.compareText": "3 < 5 pregunta: ¿3 es menor que 5? Python responde True.",
    "comparisons.equalsTitle": "¿Un = o dos?",
    "comparisons.equalsText": "Un = guarda un valor en una caja. Dos == preguntan si dos valores son iguales.",
    "comparisons.signsEyebrow": "LOS SIGNOS PARA COMPARAR",
    "comparisons.signsTitle": "Seis formas de comparar.",
    "comparisons.colSign": "Signo",
    "comparisons.colMeaning": "Pregunta",
    "comparisons.colExample": "Ejemplo",
    "comparisons.colAnswer": "Respuesta",
    "comparisons.signEqual": "¿Son iguales?",
    "comparisons.signNotEqual": "¿Son diferentes?",
    "comparisons.exampleNotEqual": "\"gato\" != \"perro\"",
    "comparisons.signLess": "¿El de la izquierda es menor?",
    "comparisons.signGreater": "¿El de la izquierda es mayor?",
    "comparisons.signLessEqual": "¿Menor, o igual?",
    "comparisons.signGreaterEqual": "¿Mayor, o igual?",
    "comparisons.mouthLabel": "Un truco:",
    "comparisons.mouthText": "< y > son como una boca con hambre. El lado abierto siempre mira al número más grande.",
    "comparisons.joinEyebrow": "UNE PREGUNTAS",
    "comparisons.joinTitle": "and, or, not.",
    "comparisons.joinIntro": "A veces una pregunta no basta. Estas tres palabras ayudan.",
    "comparisons.andTitle": "and: las dos deben ser True",
    "comparisons.andText": "soleado and calido es True solo cuando soleado es True y calido es True.",
    "comparisons.orTitle": "or: con una basta",
    "comparisons.orText": "torta or helado es True cuando al menos una de las dos es True.",
    "comparisons.notTitle": "not: voltea la respuesta",
    "comparisons.notText": "not True es False. not False es True.",
    "comparisons.walkA1": "tiene_boleto = True",
    "comparisons.walkA1Tag": "Una caja de sí o no que guarda True.",
    "comparisons.walkA2": "es_alto = False",
    "comparisons.walkA2Tag": "Otra que guarda False.",
    "comparisons.walkA3": "print(tiene_boleto and es_alto)",
    "comparisons.walkA3Tag": "and necesita las dos. Una es False, así que muestra False.",
    "comparisons.walkA4": "print(tiene_boleto or es_alto)",
    "comparisons.walkA4Tag": "or necesita solo una. tiene_boleto es True, así que muestra True.",
    "comparisons.walkA5": "print(not es_alto)",
    "comparisons.walkA5Tag": "not voltea False en True.",
    "comparisons.walkB1": "edad = 9",
    "comparisons.walkB1Tag": "Una caja guarda el número 9.",
    "comparisons.walkB2": "if edad >= 8 and edad <= 10:",
    "comparisons.walkB2Tag": "¿9 >= 8? True. ¿9 <= 10? True. Las dos son True, así que and da True.",
    "comparisons.walkB3": "    print(\"¡PyBot es para ti!\")",
    "comparisons.walkB3Tag": "La respuesta fue True, así que este camino corre.",
    "comparisons.runTitle": "¿PyBot puede jugar afuera?",
    "comparisons.runCode": "bateria = 50\nsoleado = True\nif bateria > 30 and soleado:\n    print(\"jugar afuera\")\nelse:\n    print(\"quedarse adentro\")",
    "comparisons.predictOutside": "jugar afuera",
    "comparisons.predictInside": "quedarse adentro",
    "comparisons.predictBoth": "jugar afuera y quedarse adentro",
    "thinking.compare-predictSuccess": "¡Sí! 50 > 30 es True y soleado es True. Las dos son True, así que and da True.",
    "thinking.compare-predictHint": "Todavía no. ¿50 es mayor que 30? ¿soleado es True? and necesita las dos.",
    "comparisons.tryText": "Cambia True por False. ¿Qué camino corre ahora? Luego prueba bateria = 10.",
    "comparisons.practiceTitle": "¿True o False?",
    "comparisons.answerQuestion": "¿Qué responde Python?",
    "comparisons.quizLessTitle": "¿Menor o mayor?",
    "comparisons.quizEqualTitle": "¿Iguales?",
    "comparisons.quizAssignTitle": "¿Caja o pregunta?",
    "comparisons.quizAssignScene": "puntos = 10\npuntos == 10",
    "comparisons.quizAssignQuestion": "¿Qué línea hace una pregunta?",
    "comparisons.quizAssignBox": "puntos = 10",
    "comparisons.quizAssignAsk": "puntos == 10",
    "comparisons.quizAssignBoth": "Las dos líneas",
    "comparisons.quizNotEqualTitle": "¿Diferentes?",
    "comparisons.quizNotEqualCode": "\"gato\" != \"perro\"",
    "comparisons.quizAndTitle": "Se necesitan las dos",
    "comparisons.quizAndCode": "tiene_boleto = True\nes_alto = False\ntiene_boleto and es_alto",
    "comparisons.quizOrTitle": "Con una basta",
    "comparisons.quizOrCode": "lloviendo = False\nnevando = True\nlloviendo or nevando",
    "comparisons.quizNotTitle": "Voltéala",
    "comparisons.maybe": "Quizás",
    "thinking.compare-lessSuccess": "¡Sí! 3 es menor que 5, así que la respuesta es True.",
    "thinking.compare-lessHint": "Todavía no. Una comparación responde True o False. ¿3 es menor que 5?",
    "thinking.compare-equalSuccess": "¡Sí! 7 y 8 no son iguales, así que == responde False.",
    "thinking.compare-equalHint": "Todavía no. == hace una pregunta. ¿7 y 8 son iguales?",
    "thinking.compare-assignSuccess": "¡Sí! Dos == preguntan. Un = guarda un valor en la caja.",
    "thinking.compare-assignHint": "Todavía no. Un = llena una caja. ¿Cuántos = tiene una pregunta?",
    "thinking.compare-not-equalSuccess": "¡Sí! Las dos palabras son diferentes, así que != responde True.",
    "thinking.compare-not-equalHint": "Todavía no. != pregunta: ¿son diferentes?",
    "thinking.compare-andSuccess": "¡Sí! and necesita las dos, y una es False.",
    "thinking.compare-andHint": "Todavía no. and es True solo cuando las dos son True.",
    "thinking.compare-orSuccess": "¡Sí! or necesita solo un True, y nevando es True.",
    "thinking.compare-orHint": "Todavía no. or es True cuando al menos una es True.",
    "thinking.compare-notSuccess": "¡Sí! not voltea True en False.",
    "thinking.compare-notHint": "Todavía no. not voltea la respuesta. ¿Qué es lo contrario de True?",
    "comparisons.bigTitle": "Una comparación es una pregunta con respuesta True o False.",
    "comparisons.bigText": "if usa esa respuesta para elegir un camino. Ahora vas a guardar todo dentro de una caja con nombre.",
    "comparisons.next": "Cajas que hacen un trabajo",
    "topic.progressComparisons": "ZONA 5 DE 6",
    "language.bigTitle": "Un lenguaje le da reglas al código.",
    "language.bigText": "Ahora aprenderemos las teclas usadas para escribir esas reglas.",
    "meta.checkpoint1Title": "Parada en boxes 1 — PyBot",
    "meta.checkpoint1Description": "Una parada en boxes en la ruta de PyBot: retos más grandes con Python real sobre las zonas vistas y luego una pregunta sobre cómo te fue.",
    "topic.progressCheckpoint1": "PARADA EN BOXES 1",
    "missionCheckpoint1.concept": "PARADA EN BOXES · ZONAS 2–6",
    "missionCheckpoint1.title": "Revisa el Motor",
    "missionCheckpoint1.text": "Retos más grandes con Python real. Luego cuéntale a PyBot cómo te fue.",
    "functions.next": "Parada en boxes",
    "path.review": "PARA REPASAR",
    "checkpoint.eyebrow": "PARADA EN BOXES",
    "checkpoint.title": "¡Parada en boxes! Revisemos el motor.",
    "checkpoint.intro": "Has avanzado mucho en la pista. Estos retos son más grandes y mezclan las zonas que visitaste. Luego le cuentas a PyBot cómo te fue.",
    "checkpoint.pybot": "Los carros de carreras paran para revisar el motor. ¡Ahora nos toca a nosotros!",
    "checkpoint.pybotNamed": "Los carros de carreras paran para revisar el motor. ¡Ahora nos toca a nosotros, {name}!",
    "checkpoint.robotLabel": "PyBot está orgulloso junto a una bandera de cuadros de carreras",
    "checkpoint.howEyebrow": "CÓMO FUNCIONA",
    "checkpoint.howTitle": "Tres vueltas.",
    "checkpoint.lap1Title": "Lee la misión",
    "checkpoint.lap1Text": "Las líneas que empiezan con # son notas de PyBot. Dicen qué construir.",
    "checkpoint.lap2Title": "Escribe código real",
    "checkpoint.lap2Text": "Termina el código, ejecútalo y compara tu resultado con el esperado.",
    "checkpoint.lap3Title": "Cuéntale a PyBot cómo te fue",
    "checkpoint.lap3Text": "No hay notas. Si algo te pareció difícil, PyBot te muestra dónde repasar.",
    "checkpoint.challengesEyebrow": "RETOS",
    "checkpoint.challengesTitle": "Código más grande, las mismas ideas.",
    "checkpoint.challengesIntro": "Hazlos en el orden que quieras. ¿Te trabaste? Abre la zona que aparece bajo el reto y vuelve.",
    "checkpoint.zonesLabel": "¿Te trabaste? Repasa:",
    "checkpoint.codeLabel": "Tu código",
    "checkpoint.backpackTitle": "Empaca la mochila de PyBot",
    "checkpoint.backpackTask": "Sigue los dos comentarios. Luego ejecútalo.",
    "checkpoint.backpackCode": "nombre = \"PyBot\"\nmeriendas = [\"manzana\", \"galleta\", \"uva\"]\n\n# 1. Crea una caja llamada energia que guarde 7.\n# 2. Muestra nombre, luego energia, luego la última merienda.\nprint(nombre)",
    "checkpoint.backpackExpected": "PyBot\n7\nuva",
    "thinking.checkpoint-backpackSuccess": "¡Muy bien empacado! Las cajas y las listas trabajan juntas.",
    "thinking.checkpoint-backpackHint": "Todavía no. ¿energia es una caja con 7? La última merienda está en el espacio 2, porque se cuenta desde 0.",
    "checkpoint.lightTitle": "Construye un semáforo",
    "checkpoint.lightTask": "Usa if, elif y else. Cuando funcione, prueba semaforo = \"rojo\".",
    "checkpoint.lightCode": "semaforo = \"amarillo\"\n\n# Muestra \"sigue\" si semaforo es \"verde\".\n# Muestra \"espera\" si semaforo es \"amarillo\".\n# Si no, muestra \"para\".",
    "checkpoint.lightExpected": "espera",
    "thinking.checkpoint-lightSuccess": "¡Tu semáforo funciona! Cambia el color y ejecútalo otra vez.",
    "thinking.checkpoint-lightHint": "Todavía no. Pregunta con == (dos signos igual) y termina las líneas if, elif y else con dos puntos.",
    "checkpoint.outsideTitle": "¿Afuera o adentro?",
    "checkpoint.outsideTask": "Une dos preguntas en un solo if.",
    "checkpoint.outsideCode": "soleado = True\nbateria = 60\n\n# PyBot sale solo si está soleado\n# y bateria es mayor que 50.\n# Muestra \"afuera\" o \"adentro\".",
    "checkpoint.outsideExpected": "afuera",
    "thinking.checkpoint-outsideSuccess": "¡Sí! and necesita que las dos respuestas sean True.",
    "thinking.checkpoint-outsideHint": "Todavía no. Pon las dos preguntas en un solo if y únelas con and.",
    "checkpoint.countdownTitle": "Cuenta regresiva",
    "checkpoint.countdownTask": "Un ciclo para los números. Una línea más después.",
    "checkpoint.countdownCode": "cuenta = [3, 2, 1]\n\n# Muestra cada número de cuenta con un ciclo for.\n# Después del ciclo, muestra \"¡Ya!\"",
    "checkpoint.countdownExpected": "3\n2\n1\n¡Ya!",
    "thinking.checkpoint-countdownSuccess": "¡Despegue! El ciclo corrió una vez por cada número.",
    "thinking.checkpoint-countdownHint": "Todavía no. Muestra el número dentro del ciclo, con espacios. Muestra \"¡Ya!\" después, sin espacios.",
    "checkpoint.starsTitle": "Cuenta los puntajes grandes",
    "checkpoint.starsTask": "Un ciclo con un if adentro. ¡Este es más grande!",
    "checkpoint.starsCode": "puntos = [4, 9, 2, 7, 10]\ngrandes = 0\n\n# Mira cada puntaje con un ciclo for.\n# Si el puntaje es mayor que 5, suma 1 a grandes.\n\nprint(grandes)",
    "checkpoint.starsExpected": "3",
    "thinking.checkpoint-starsSuccess": "Contaste 3 puntajes grandes: 9, 7 y 10.",
    "thinking.checkpoint-starsHint": "Todavía no. Pon un if dentro del ciclo. Para sumar 1, escribe grandes = grandes + 1.",
    "checkpoint.batteryTitle": "Una caja que decide",
    "checkpoint.batteryTask": "Llena la caja con if y else. Cada camino necesita un return.",
    "checkpoint.batteryCode": "def revisar_bateria(bateria):\n    # Devuelve \"cargar\" si bateria es menor que 30.\n    # Si no, devuelve \"jugar\".\n    return \"?\"\n\nprint(revisar_bateria(20))\nprint(revisar_bateria(80))",
    "checkpoint.batteryExpected": "cargar\njugar",
    "thinking.checkpoint-batterySuccess": "¡Tu caja decide sola! Variables, if y return, todo junto.",
    "thinking.checkpoint-batteryHint": "Todavía no. Dentro de la caja usa if y else, y devuelve una palabra en cada camino.",
    "checkpoint.feelEyebrow": "¿CÓMO TE FUE?",
    "checkpoint.feelTitle": "Cuéntale la verdad a PyBot.",
    "checkpoint.feelIntro": "Aquí no hay notas. Para cada zona, elige la cara que mejor te queda.",
    "checkpoint.rateLabel": "¿Cómo te fue en {name}?",
    "checkpoint.rateGood": "Lo tengo",
    "checkpoint.rateOkay": "Casi",
    "checkpoint.rateReview": "Quiero repasar",
    "checkpoint.noticed": "PyBot vio un reto de aquí que todavía está difícil.",
    "checkpoint.resultReview": "¡Buena decisión! Repasando es como los pilotos se vuelven más rápidos. Estas zonas quedan marcadas PARA REPASAR en tu ruta:",
    "checkpoint.resultGood": "¡Gran carrera! Tu motor está listo. La siguiente parte de la pista está en construcción.",
    "checkpoint.resultPending": "Elige una cara para cada zona.",
    "checkpoint.goTo": "Ir a {name} →",
    "checkpoint.bigTitle": "Volver atrás también es parte de la carrera.",
    "checkpoint.bigText": "Los buenos programadores repasan seguido. Cada vez que vuelves a una zona, se vuelve más fácil.",
    "review.note": "En la parada en boxes elegiste repasar esta zona. Tómate tu tiempo.",
    "review.done": "Ya la repasé ✓",
  },
};

const moodKeys = {
  happy: {
    message: "mood.happyMessage",
    namedMessage: "mood.happyMessageNamed",
    label: "mood.happyLabel",
  },
  encouraging: {
    message: "mood.encouragingMessage",
    namedMessage: "mood.encouragingMessageNamed",
    label: "mood.encouragingLabel",
  },
  thinking: {
    message: "mood.thinkingMessage",
    namedMessage: "mood.thinkingMessageNamed",
    label: "mood.thinkingLabel",
  },
  celebrating: {
    message: "mood.celebratingMessage",
    namedMessage: "mood.celebratingMessageNamed",
    label: "mood.celebratingLabel",
  },
  surprised: {
    message: "mood.surprisedMessage",
    namedMessage: "mood.surprisedMessageNamed",
    label: "mood.surprisedLabel",
  },
  curious: {
    message: "mood.curiousMessage",
    namedMessage: "mood.curiousMessageNamed",
    label: "mood.curiousLabel",
  },
  focused: {
    message: "mood.focusedMessage",
    namedMessage: "mood.focusedMessageNamed",
    label: "mood.focusedLabel",
  },
  welcoming: {
    message: "mood.welcomingMessage",
    namedMessage: "mood.welcomingMessageNamed",
    label: "mood.welcomingLabel",
  },
  starry: {
    message: "mood.starryMessage",
    namedMessage: "mood.starryMessageNamed",
    label: "mood.starryLabel",
  },
  wink: {
    message: "mood.winkMessage",
    namedMessage: "mood.winkMessageNamed",
    label: "mood.winkLabel",
  },
  proud: {
    message: "mood.proudMessage",
    namedMessage: "mood.proudMessageNamed",
    label: "mood.proudLabel",
  },
  deciding: {
    message: "mood.decidingMessage",
    namedMessage: "mood.decidingMessageNamed",
    label: "mood.decidingLabel",
  },
  counting: {
    message: "mood.countingMessage",
    namedMessage: "mood.countingMessageNamed",
    label: "mood.countingLabel",
  },
  determined: {
    message: "mood.determinedMessage",
    namedMessage: "mood.determinedMessageNamed",
    label: "mood.determinedLabel",
  },
};

const languageButtons = document.querySelectorAll(".language-button");
const moodButtons = document.querySelectorAll(".mood-button");
const pybotWrap = document.querySelector(".pybot-wrap");
const pybot = document.querySelector(".pybot");
const message = document.querySelector("#pybot-message p");
const stepActivities = document.querySelectorAll(".step-activity");
const activityResetButtons = document.querySelectorAll("[data-reset-activities]");
const planProgressSummary = document.querySelector(".plan-progress-summary");
const learnerNamePanel = document.querySelector("[data-name-panel]");
const learnerNameForm = document.querySelector("[data-name-form]");
const learnerNameInput = document.querySelector("#learner-name");
const learnerNameSaved = document.querySelector("[data-name-saved]");
const learnerNameEdit = document.querySelector("[data-name-edit]");
const learnerNameForget = document.querySelector("[data-name-forget]");
// Google Analytics 4 measurement ID (looks like "G-XXXXXXXXXX"). Every page loads
// this script, so this is the only place to set it. Leave it empty to turn analytics off.
const GA_MEASUREMENT_ID = "G-H0PLZHW8CE";

// Counts anonymous page visits only. Ads, Google signals, and ad personalization stay off,
// and nothing the learner types or saves (name, answers, progress) is sent.
function startAnalytics() {
  if (!GA_MEASUREMENT_ID || !/^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)) return;
  if (!/^https?:$/.test(window.location.protocol)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  window.gtag("set", { allow_google_signals: false, allow_ad_personalization_signals: false });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  document.querySelectorAll("[data-analytics-note]").forEach((note) => {
    note.hidden = false;
  });
  const tag = document.createElement("script");
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.append(tag);
}

// Lesson pages live one folder deeper, so resolve the worker next to this script.
const scriptBaseUrl = document.currentScript?.src || window.location.href;
const pythonRunner = document.querySelector("[data-python-runner]");
const pythonEditor = document.querySelector("[data-python-editor]");
const pythonOutput = document.querySelector("[data-python-output]");
const pythonHint = document.querySelector("[data-python-hint]");
const pythonRunButton = document.querySelector("[data-python-run]");
const pythonStopButton = document.querySelector("[data-python-stop]");
const backupExportButton = document.querySelector("[data-backup-export]");
const backupImportButton = document.querySelector("[data-backup-import]");
const backupImportInput = document.querySelector("[data-backup-file]");
const backupStatus = document.querySelector("[data-backup-status]");
const progressVersionLabel = document.querySelector("[data-progress-version]");
const progressResetButton = document.querySelector("[data-progress-reset]");
const resetStatus = document.querySelector("[data-reset-status]");
let currentLanguage = "en";
let soundToggle = null;
let audioEnabled = false;
let learnerName = "";
let robotAudioContext = null;
let ambientSoundTimer = null;
let pythonWorker = null;
let pythonRunId = 0;
let lastPythonError = null;
let fixRunId = 0;
const fixRuns = new Map();
// Generous, because the first run also downloads Python.
const FIX_RUN_TIMEOUT_MS = 60_000;

const AUDIO_PREFERENCE_KEY = "pybot.audio.enabled";
const LEARNER_NAME_KEY = "pybot.learner.name";
const PATH_CURRENT_KEY = "pybot.path.current";
const PATH_VISITED_KEY = "pybot.path.visited";
const PATH_DONE_KEY = "pybot.path.done";
const PATH_KNOWN_KEY = "pybot.path.known";
const SELF_CHECK_KEY = "pybot.selfcheck";
const PATH_LIST_KEYS = [PATH_VISITED_KEY, PATH_DONE_KEY, PATH_KNOWN_KEY];
const SELF_CHECK_RATINGS = ["good", "okay", "review"];
const BACKUP_FORMAT = "pybot-progress";
const BACKUP_SCHEMA_VERSION = 1;
// The version of the course content that saved progress belongs to. Bump it in
// every PR that adds, renames, or removes a step or activity id
// (`node tools/progress-version.mjs --bump`), and add a migration below when an
// id is renamed or removed. Backups carry it, so support can tell where an old
// backup stopped and upgrade it to the current course.
const PROGRESS_VERSION = 3;
const PROGRESS_VERSION_KEY = "pybot.progress.version";
const BACKUP_MAX_BYTES = 100_000;
// Preferences and the name survive an emergency progress reset.
const RESET_KEPT_KEYS = ["pybot.language", "pybot.audio.enabled", LEARNER_NAME_KEY];
// Each step lists its activities. To add content later, add the activity id
// here: learners who had finished the step see it as unfinished again.
// `activitiesAddedLater` only matters for progress saved before PATH_DONE_KEY existed.
const pathSteps = [
  { id: "world", page: "world", href: "lessons/01-real-world.html", activities: [] },
  {
    id: "thinking", page: "thinking", href: "lessons/02-thinking-in-steps.html",
    activities: ["water", "bag", "hands", "teeth", "dressed", "cereal", "drawing", "bedtime", "reading", "photo"],
  },
  { id: "language", page: "language", href: "lessons/03-programming-language.html", activities: [] },
  {
    id: "keyboard", page: "keyboard", href: "lessons/04-keyboard.html",
    activities: ["keyboard-backspace", "keyboard-undo", "keyboard-copy"],
    activitiesAddedLater: ["keyboard-enter", "keyboard-shift", "keyboard-paste", "keyboard-fix"],
  },
  {
    id: "environment", page: "environment", href: "lessons/05-environment.html",
    activities: ["environment-editor", "environment-engine", "environment-version"],
    activitiesAddedLater: ["environment-stop", "environment-output", "environment-browser", "environment-fix"],
  },
  {
    id: "symbols", page: "symbols", href: "lessons/06-symbols.html",
    activities: ["symbol-text", "symbol-assign", "symbol-block"],
    activitiesAddedLater: ["symbol-parens", "symbol-note", "symbol-join", "symbol-fix"],
  },
  {
    id: "variables", page: "variables", href: "lessons/07-memory-variables.html",
    activities: ["memory-ram", "variable-name", "variable-value", "variable-predict"],
    activitiesAddedLater: ["variable-change", "variable-label", "variable-fix"],
  },
  {
    id: "boxes", page: "boxes", href: "lessons/07b-boxes-of-all-kinds.html",
    activities: ["boxes-text", "boxes-yesno", "boxes-list", "boxes-grid", "boxes-predict"],
    activitiesAddedLater: ["boxes-decimal", "boxes-fix"],
  },
  // Memory boxes, Boxes of all kinds and Changing boxes form one zone on the map.
  {
    id: "changingBoxes", page: "changingBoxes", href: "lessons/07c-changing-boxes.html", addedLater: true,
    activities: [
      "changing-predict", "changing-plus", "changing-short", "changing-minus",
      "changing-times", "changing-math", "changing-join", "changing-text-numbers", "changing-fix",
    ],
  },
  {
    id: "conditionals", page: "conditionals", href: "lessons/08-conditionals.html",
    activities: [
      "conditional-rain", "conditional-battery", "conditional-else", "conditional-predict",
      "conditional-skip", "conditional-after", "conditional-elif", "conditional-one",
    ],
    activitiesAddedLater: ["conditional-fix", "conditional-everyday"],
  },
  // Conditionals is split into three pages (if/else, elif, match), like the loops route.
  {
    id: "conditionalsElif", page: "conditionalsElif", href: "lessons/08-conditionals-elif.html", addedLater: true,
    activities: [
      "elif-everyday", "elif-meaning", "elif-light", "elif-first", "elif-order",
      "elif-none", "elif-two-ifs", "elif-many", "elif-predict", "elif-fix",
    ],
  },
  {
    id: "conditionalsMatch", page: "conditionalsMatch", href: "lessons/08-conditionals-match.html", addedLater: true,
    activities: [
      "match-everyday", "match-name", "match-fruit", "match-rest", "match-underscore",
      "match-or", "match-one", "match-same", "match-predict", "match-fix",
    ],
  },
  {
    id: "loops", page: "loops", href: "lessons/09-loops.html",
    activities: ["loop-count", "loop-action", "loop-stop", "loop-predict", "loop-zero", "loop-list", "loop-once", "loop-total"],
    activitiesAddedLater: ["loop-fix"],
  },
  // Loops is split into three pages (for, while, repeat until), like the Start Here route.
  {
    id: "loopsWhile", page: "loopsWhile", href: "lessons/09-loops-while.html", addedLater: true,
    activities: [
      "while-check", "while-count", "while-last", "while-zero",
      "while-forever", "while-choose", "while-predict", "while-fix",
    ],
  },
  {
    id: "loopsUntil", page: "loopsUntil", href: "lessons/09-loops-until.html", addedLater: true,
    activities: [
      "until-meaning", "until-not", "until-break", "until-done",
      "until-count", "until-word", "until-predict", "until-fix",
    ],
  },
  {
    id: "comparisons", page: "comparisons", href: "lessons/09b-true-or-false.html", addedLater: true,
    activities: [
      "compare-less", "compare-equal", "compare-assign", "compare-not-equal",
      "compare-and", "compare-or", "compare-not", "compare-predict",
    ],
    activitiesAddedLater: ["compare-fix"],
  },
  {
    id: "functions", page: "functions", href: "lessons/10-functions.html",
    activities: ["function-input", "function-output", "function-inside", "function-predict"],
    activitiesAddedLater: ["function-name", "function-call", "function-fix"],
  },
  // A pit stop: bigger challenges that mix the zones before it, then a self-check.
  {
    id: "checkpoint1", page: "checkpoint1", href: "lessons/11-checkpoint.html", addedLater: true,
    activities: [
      "checkpoint-backpack", "checkpoint-light", "checkpoint-outside",
      "checkpoint-countdown", "checkpoint-stars", "checkpoint-battery",
    ],
  },
];
const stepActivityIds = (step) => [...step.activities, ...(step.activitiesAddedLater ?? [])];
const activityIds = pathSteps.flatMap(stepActivityIds);

// Upgrades saved progress, as { storageKey: value }, from the version before to
// the given PROGRESS_VERSION. Adding ids needs no migration: the map already
// shows new steps and activities as pending. Renaming or removing one does, e.g.
//   2: (progress) => renameProgressActivity(progress, "loop-count", "loop-times"),
const progressMigrations = {};
upgradeStoredProgress();

function textFor(key) {
  return translations[currentLanguage][key] ?? translations.en[key] ?? key;
}

function textWithName(key) {
  return textFor(key).replaceAll("{name}", learnerName);
}

function normalizeLearnerName(value) {
  return value.replace(/[\u0000-\u001f\u007f]/g, "").trim().replace(/\s+/g, " ").slice(0, 24);
}

function storedLearnerName() {
  try {
    return normalizeLearnerName(localStorage.getItem(LEARNER_NAME_KEY) ?? "");
  } catch {
    return "";
  }
}

// Steps the learner has opened. A step added to the path after the learner
// moved past its place is missing from this list, so the map can mark it as new.
function visitedPathSteps() {
  try {
    const stored = localStorage.getItem(PATH_VISITED_KEY);
    if (stored !== null) {
      return stored.split(",").filter((id) => pathSteps.some((step) => step.id === id));
    }

    // Older progress only saved the current step. Treat the steps before it as
    // visited, except steps that were added to the path after that progress existed.
    const currentIndex = pathSteps.findIndex((step) => step.id === localStorage.getItem(PATH_CURRENT_KEY));
    return pathSteps.slice(0, Math.max(currentIndex, 0)).filter((step) => !step.addedLater).map((step) => step.id);
  } catch {
    return [];
  }
}

// Steps that were on the path when this learner started. A step added later is
// missing here, so the map marks it as new even when it is ahead of the learner.
function knownPathSteps() {
  try {
    const stored = localStorage.getItem(PATH_KNOWN_KEY);
    if (stored !== null) {
      return stored.split(",").filter((id) => pathSteps.some((step) => step.id === id));
    }
  } catch {
    return pathSteps.map((step) => step.id);
  }

  // No list yet: a new learner knows the whole path. A learner with older
  // progress has not seen the steps that were added after it.
  return hasStoredCurrentPathStep()
    ? pathSteps.filter((step) => !step.addedLater).map((step) => step.id)
    : pathSteps.map((step) => step.id);
}

function saveKnownPathSteps() {
  try {
    if (localStorage.getItem(PATH_KNOWN_KEY) === null) {
      localStorage.setItem(PATH_KNOWN_KEY, knownPathSteps().join(","));
    }
  } catch {
    // Without storage every step simply counts as known.
  }
}

// What the learner said about each zone at a pit stop, as { stepId: rating }.
function storedSelfCheck() {
  const ratings = {};
  try {
    (localStorage.getItem(SELF_CHECK_KEY) ?? "").split(",").forEach((pair) => {
      const [id, rating] = pair.split(":");
      if (pathSteps.some((step) => step.id === id) && SELF_CHECK_RATINGS.includes(rating)) {
        ratings[id] = rating;
      }
    });
  } catch {
    // No saved answers.
  }
  return ratings;
}

function saveSelfCheck(ratings) {
  try {
    localStorage.setItem(
      SELF_CHECK_KEY,
      pathSteps.filter((step) => ratings[step.id]).map((step) => `${step.id}:${ratings[step.id]}`).join(","),
    );
  } catch {
    // The answers still work for the current page.
  }
}

function storedActivityState(activityId) {
  try {
    return localStorage.getItem(activityStorageKey(activityId));
  } catch {
    return null;
  }
}

function isStepFinished(step) {
  const ids = stepActivityIds(step);
  return ids.length > 0 && ids.every((id) => storedActivityState(id) === "complete");
}

// Steps the learner has finished at some point. A finished step that now has
// activities left gained new content, so the map and the page can say so.
function doneSteps() {
  try {
    const stored = localStorage.getItem(PATH_DONE_KEY);
    if (stored !== null) {
      return stored.split(",").filter((id) => pathSteps.some((step) => step.id === id));
    }
  } catch {
    return [];
  }

  // Progress saved before this list existed: a step counts as done when every
  // activity it had back then is complete.
  return pathSteps
    .filter((step) => step.activities.length > 0 && step.activities.every((id) => storedActivityState(id) === "complete"))
    .map((step) => step.id);
}

function saveDoneSteps() {
  const done = new Set(doneSteps());
  pathSteps.filter(isStepFinished).forEach((step) => done.add(step.id));
  try {
    localStorage.setItem(PATH_DONE_KEY, pathSteps.filter((step) => done.has(step.id)).map((step) => step.id).join(","));
  } catch {
    // The map still shows finished steps; only the "new activities" marker will not persist.
  }
}

function forgetDoneStep(page) {
  const step = pathSteps.find((candidate) => candidate.page === page);
  if (!step) {
    return;
  }
  try {
    localStorage.setItem(PATH_DONE_KEY, doneSteps().filter((id) => id !== step.id).join(","));
  } catch {
    // Nothing else to clear when browser storage is unavailable.
  }
}

function saveCurrentPathStep() {
  const page = document.body.dataset.page;
  const currentStep = pathSteps.find((step) => step.page === page);

  if (!currentStep) {
    return;
  }

  try {
    const visited = new Set(visitedPathSteps());
    visited.add(currentStep.id);
    localStorage.setItem(PATH_VISITED_KEY, pathSteps.filter((step) => visited.has(step.id)).map((step) => step.id).join(","));
    localStorage.setItem(PATH_CURRENT_KEY, currentStep.id);
  } catch {
    // Returning to the path still works; only the marker will not persist.
  }
}

function storedCurrentPathStep() {
  try {
    const storedStep = localStorage.getItem(PATH_CURRENT_KEY);
    return pathSteps.some((step) => step.id === storedStep) ? storedStep : pathSteps[0].id;
  } catch {
    return pathSteps[0].id;
  }
}

function hasStoredCurrentPathStep() {
  try {
    return pathSteps.some((step) => step.id === localStorage.getItem(PATH_CURRENT_KEY));
  } catch {
    return false;
  }
}

function updateCoursePath() {
  const continueLink = document.querySelector("[data-path-continue]");

  if (!continueLink) {
    return;
  }

  const currentId = storedCurrentPathStep();
  const currentIndex = pathSteps.findIndex((step) => step.id === currentId);
  const currentStep = pathSteps[currentIndex] ?? pathSteps[0];
  const visited = visitedPathSteps();
  const known = knownPathSteps();
  const done = doneSteps();
  const selfCheck = storedSelfCheck();
  // A step behind the learner's place that was never opened is new to them.
  // An opened step with activities left is unfinished; if it was finished
  // before, it gained new activities.
  const stepState = (id) => {
    const index = pathSteps.findIndex((step) => step.id === id);
    const step = pathSteps[index];
    const isCurrent = id === currentStep.id;
    const wasOpened = !isCurrent && visited.includes(id);
    const isUnfinished = wasOpened && stepActivityIds(step).length > 0 && !isStepFinished(step);
    const hasNewActivities = isUnfinished && done.includes(id);
    const isVisited = wasOpened && !isUnfinished;
    const isNew = !isCurrent && !wasOpened && (index < currentIndex || !known.includes(id));
    const toReview = selfCheck[id] === "review";
    const statusKey = isCurrent ? "path.current"
      : toReview ? "path.review"
      : hasNewActivities ? "path.newActivities"
      : isUnfinished ? "path.unfinished"
      : isVisited ? (stepActivityIds(step).length > 0 ? "path.done" : "path.visited")
      : isNew ? "path.new"
      : index === currentIndex + 1 ? "path.next" : "path.later";
    return { isCurrent, isVisited, isNew: isNew || isUnfinished, toReview, hasNewActivities, statusKey };
  };

  // The first new page or zone on the map, for the "something new" link.
  let firstNew = null;
  let firstNewKey = "course.newZone";

  // Route links: the Start Here pages and the pages inside a zone with subtopics.
  document.querySelectorAll("[data-path-step]").forEach((link) => {
    const { isCurrent, isVisited, isNew, toReview, hasNewActivities, statusKey } = stepState(link.dataset.pathStep);
    const status = link.querySelector("[data-path-status]");

    link.classList.toggle("is-current", isCurrent);
    link.classList.toggle("is-visited", isVisited);
    link.classList.toggle("is-new", isNew);
    link.classList.toggle("is-review", toReview);
    if (isCurrent) {
      link.setAttribute("aria-current", "step");
    } else {
      link.removeAttribute("aria-current");
    }
    if ((statusKey === "path.new" || hasNewActivities) && !firstNew) {
      firstNew = { href: link.getAttribute("href"), name: link.querySelector("b").textContent };
      firstNewKey = hasNewActivities ? "course.newActivities" : "course.newPage";
    }
    if (status) {
      status.textContent = textFor(statusKey);
    }
  });

  document.querySelectorAll("[data-course-step]").forEach((card) => {
    const { isCurrent, isVisited, isNew, toReview, hasNewActivities, statusKey } = stepState(card.dataset.courseStep);
    const status = card.querySelector("[data-course-status]");

    card.classList.toggle("is-current", isCurrent);
    card.classList.toggle("is-review", toReview);
    card.classList.toggle("is-visited", isVisited);
    card.classList.toggle("is-new", isNew);
    if ((statusKey === "path.new" || hasNewActivities) && !firstNew) {
      firstNew = { href: card.querySelector(".mission-start").getAttribute("href"), name: card.querySelector("h2").textContent };
      firstNewKey = hasNewActivities ? "course.newActivities" : "course.newZone";
    }
    if (status) {
      status.textContent = textFor(statusKey);
    }
  });

  const newLink = document.querySelector("[data-path-new]");
  if (newLink) {
    newLink.hidden = !firstNew;
    if (firstNew) {
      newLink.href = firstNew.href;
      newLink.textContent = textFor(firstNewKey).replace("{name}", firstNew.name);
    }
  }

  continueLink.href = currentStep.href;
  continueLink.dataset.i18n = currentIndex === 0 && !hasStoredCurrentPathStep()
    ? "course.start"
    : "course.continue";
  continueLink.textContent = textFor(continueLink.dataset.i18n);
}

function setPythonOutput(key, detail = "") {
  lastPythonError = null;
  if (pythonHint) {
    pythonHint.hidden = true;
  }
  if (!pythonOutput) {
    return;
  }

  if (detail) {
    pythonOutput.removeAttribute("data-i18n");
    pythonOutput.textContent = `${textFor(key)}\n${detail}`;
    return;
  }

  pythonOutput.dataset.i18n = key;
  pythonOutput.textContent = textFor(key);
}

// Each rule turns one common Python error into a short child-facing hint.
// The real error is always shown below the hint.
const pythonHintRules = [
  { type: "SyntaxError", pattern: /unterminated (triple-quoted )?string/, key: "hint.quote" },
  { type: "SyntaxError", pattern: /was never closed/, key: "hint.neverClosed" },
  { type: "SyntaxError", pattern: /unmatched '[)\]}]'|closing parenthesis/, key: "hint.extraClose" },
  { type: "SyntaxError", pattern: /expected ':'/, key: "hint.colon" },
  { type: "SyntaxError", pattern: /Maybe you meant '=='|cannot assign to/, key: "hint.equals" },
  { type: "SyntaxError", pattern: /forgot a comma/, key: "hint.comma" },
  { type: "IndentationError", pattern: /expected an indented block/, key: "hint.indentNeeded" },
  { type: "IndentationError", pattern: /unexpected indent/, key: "hint.indentExtra" },
  { type: "IndentationError", pattern: /./, key: "hint.indentMismatch" },
  { type: "TabError", pattern: /./, key: "hint.indentMismatch" },
  { type: "SyntaxError", pattern: /./, key: "hint.syntax" },
  { type: "NameError", pattern: /Did you mean: '[^']+'/, key: "hint.nameSuggest" },
  { type: "NameError", pattern: /./, key: "hint.name" },
  { type: "TypeError", pattern: /concatenate str|for \+: '(int|float)' and 'str'/, key: "hint.mixTypes" },
  { type: "TypeError", pattern: /'str' object cannot be interpreted as an integer/, key: "hint.rangeText" },
  { type: "TypeError", pattern: /./, key: "hint.type" },
  { type: "ZeroDivisionError", pattern: /./, key: "hint.zero" },
  { type: "ValueError", pattern: /invalid literal for int\(\)/, key: "hint.intText" },
];

function pythonErrorHint(errorType, error) {
  const lastLine = error.trim().split("\n").at(-1) ?? "";
  const type = errorType || lastLine.match(/^(\w+(?:Error|Exception)):/)?.[1] || "";
  const rule = pythonHintRules.find((candidate) => candidate.type === type && candidate.pattern.test(lastLine));
  const lineNumbers = [...error.matchAll(/File "<exec>", line (\d+)/g)];
  const values = {
    name: lastLine.match(/name '([^']+)' is not defined/)?.[1] ?? "",
    suggestion: lastLine.match(/Did you mean: '([^']+)'/)?.[1] ?? "",
  };
  let text = textFor(rule?.key ?? "hint.generic").replace(/\{(name|suggestion)\}/g, (_, key) => values[key]);

  if (lineNumbers.length > 0) {
    const line = lineNumbers.at(-1)[1];
    text = `${textFor("preview.hintLine").replace("{line}", line)} ${text}`;
  }

  return text;
}

function showPythonError(errorType, error, output) {
  const details = [output, error].filter(Boolean).join("\n").trim();
  setPythonOutput("preview.error", details);
  lastPythonError = { errorType, error, output };

  if (pythonHint && error) {
    pythonHint.querySelector("[data-python-hint-text]").textContent = pythonErrorHint(errorType, error);
    pythonHint.hidden = false;
  }
}

function setPythonRunning(isRunning) {
  pythonRunner?.classList.toggle("is-running", isRunning);
  if (pythonRunButton) {
    pythonRunButton.disabled = isRunning;
  }
  if (pythonStopButton) {
    pythonStopButton.disabled = !isRunning;
  }
}

function stopPythonWorker(messageKey = "preview.stopped") {
  pythonRunId += 1;
  pythonWorker?.terminate();
  pythonWorker = null;
  endFixRuns({ type: "stopped" });
  setPythonRunning(false);
  setPythonOutput(messageKey);
}

function createPythonWorker() {
  const worker = new Worker(new URL("pyodide-worker.mjs", scriptBaseUrl), { type: "module" });

  worker.addEventListener("message", (event) => {
    const fixRun = fixRuns.get(event.data.id);
    if (fixRun) {
      fixRuns.delete(event.data.id);
      fixRun(event.data);
      return;
    }

    if (event.data.id !== pythonRunId) {
      return;
    }

    setPythonRunning(false);
    if (event.data.type === "complete") {
      const output = event.data.output.trim();
      if (output) {
        pythonOutput?.removeAttribute("data-i18n");
        if (pythonOutput) {
          pythonOutput.textContent = output;
        }
      } else {
        setPythonOutput("preview.noOutput");
      }
      playRobotChime();
      return;
    }

    showPythonError(event.data.errorType, event.data.error, event.data.output);
  });

  worker.addEventListener("error", (event) => {
    endFixRuns({ type: "error", error: event.message || textFor("preview.serveHint") });
    setPythonRunning(false);
    setPythonOutput("preview.error", event.message || textFor("preview.serveHint"));
    worker.terminate();
    if (pythonWorker === worker) {
      pythonWorker = null;
    }
  });

  return worker;
}

function renderPersonalizedMessages() {
  document.querySelectorAll("[data-pybot-message]").forEach((element) => {
    const baseKey = element.dataset.pybotMessage;
    const namedKey = `${baseKey}Named`;
    element.textContent = learnerName && translations[currentLanguage][namedKey]
      ? textWithName(namedKey)
      : textFor(baseKey);
  });
}

function updateLearnerNamePanel(showForm = !learnerName) {
  if (!learnerNamePanel || !learnerNameForm || !learnerNameSaved || !learnerNameInput) {
    return;
  }

  learnerNameForm.hidden = !showForm;
  learnerNameSaved.hidden = showForm;
  learnerNameForget.hidden = !learnerName;
  learnerNameInput.value = learnerName;
  learnerNameForm.classList.remove("is-invalid");
  const error = learnerNameForm.querySelector(".learner-name-error");
  if (error) {
    error.hidden = true;
  }

  learnerNamePanel.querySelectorAll("[data-learner-name]").forEach((element) => {
    element.textContent = learnerName;
  });
  learnerNamePanel.dataset.ready = "true";

  if (message && document.body.dataset.page === "home") {
    message.textContent = learnerName && !showForm
      ? textWithName("name.pybotSaved")
      : textFor("name.pybotQuestion");
  }
}

function storedAudioPreference() {
  try {
    const storedValue = localStorage.getItem(AUDIO_PREFERENCE_KEY);
    return storedValue === null ? true : storedValue === "true";
  } catch {
    return true;
  }
}

function createSoundToggle() {
  const tools = document.querySelector(".lesson-header-tools, .site-nav");
  if (!tools) {
    return null;
  }

  const button = document.createElement("button");
  button.className = "sound-toggle";
  button.type = "button";
  button.innerHTML = '<span class="sound-toggle-icon" aria-hidden="true">♪</span><span class="sound-toggle-label"></span>';

  const languageSwitch = tools.querySelector(".language-switch");
  tools.insertBefore(button, languageSwitch);
  button.addEventListener("click", () => setAudioEnabled(!audioEnabled));
  return button;
}

// Adds the Patreon link to the shared header, so every page shows it.
function createSupportLink() {
  const tools = document.querySelector(".lesson-header-tools, .site-nav");
  if (!tools) {
    return;
  }

  const link = document.createElement("a");
  link.className = "support-link";
  link.href = "https://www.patreon.com/pybot";
  link.target = "_blank";
  link.rel = "noopener";
  link.dataset.i18nAriaLabel = "support.aria";
  link.innerHTML = '<span class="support-link-icon" aria-hidden="true">♥</span><span class="support-link-label" data-i18n="support.label"></span>';
  tools.insertBefore(link, tools.querySelector(".sound-toggle, .language-switch"));
}

function updateAudioButton() {
  if (!soundToggle) {
    return;
  }

  const label = soundToggle.querySelector(".sound-toggle-label");
  soundToggle.classList.toggle("is-on", audioEnabled);
  soundToggle.setAttribute("aria-pressed", String(audioEnabled));
  soundToggle.setAttribute("aria-label", textFor(audioEnabled ? "audio.turnOff" : "audio.turnOn"));
  if (label) {
    label.textContent = textFor(audioEnabled ? "audio.on" : "audio.off");
  }
}

function ensureAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  if (!robotAudioContext) {
    robotAudioContext = new AudioContextClass();
  }
  return robotAudioContext;
}

function addRobotTone(context, frequency, start, duration, type = "sine") {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.16, start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.018, start + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playRobotChime() {
  if (!audioEnabled) {
    return;
  }

  const context = ensureAudioContext();
  if (!context || context.state !== "running") {
    return;
  }

  const now = context.currentTime;
  const base = [330, 392, 440][Math.floor(Math.random() * 3)];
  addRobotTone(context, base, now, 0.13, "square");
  addRobotTone(context, base * 1.5, now + 0.14, 0.11, "sine");
}

function playRobotButtonClick() {
  if (!audioEnabled) {
    return;
  }

  const context = ensureAudioContext();
  if (!context || context.state !== "running") {
    return;
  }

  addRobotTone(context, 620, context.currentTime, 0.055, "square");
}

function scheduleAmbientSound() {
  window.clearTimeout(ambientSoundTimer);
  if (!audioEnabled) {
    return;
  }

  const delay = 8000 + Math.random() * 6000;
  ambientSoundTimer = window.setTimeout(() => {
    playRobotChime();
    scheduleAmbientSound();
  }, delay);
}

async function startRobotAudio(playNow = false) {
  if (!audioEnabled) {
    return;
  }

  const context = ensureAudioContext();
  if (!context) {
    return;
  }

  try {
    await context.resume();
  } catch {
    return;
  }

  if (playNow) {
    playRobotChime();
  }
  scheduleAmbientSound();
}

function stopRobotAudio() {
  window.clearTimeout(ambientSoundTimer);
  ambientSoundTimer = null;
  if (robotAudioContext?.state === "running") {
    robotAudioContext.suspend().catch(() => {});
  }
}

function setAudioEnabled(enabled) {
  audioEnabled = enabled;
  try {
    localStorage.setItem(AUDIO_PREFERENCE_KEY, String(enabled));
  } catch {
    // The sound control still works for the current page.
  }

  updateAudioButton();
  if (enabled) {
    startRobotAudio(true);
  } else {
    stopRobotAudio();
  }
}

function armStoredAudioPreference() {
  if (!audioEnabled) {
    return;
  }

  const resume = () => {
    document.removeEventListener("pointerdown", resume);
    document.removeEventListener("keydown", resume);
    startRobotAudio();
  };

  document.addEventListener("pointerdown", resume, { once: true });
  document.addEventListener("keydown", resume, { once: true });
}

document.addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) {
    return;
  }
  const control = event.target.closest("button, a.button, a.nav-pill");
  if (control && !control.classList.contains("sound-toggle")) {
    playRobotButtonClick();
  }
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearTimeout(ambientSoundTimer);
    return;
  }
  if (audioEnabled) {
    startRobotAudio();
  }
});

function currentMood() {
  return pybotWrap?.dataset.mood ?? "happy";
}

function setMood(mood) {
  const keys = moodKeys[mood];

  if (!keys || !pybotWrap || !pybot || !message) {
    return;
  }

  pybotWrap.dataset.mood = mood;
  pybot.setAttribute("aria-label", textFor(keys.label));
  message.textContent = learnerName ? textWithName(keys.namedMessage) : textFor(keys.message);

  moodButtons.forEach((button) => {
    const isActive = button.dataset.mood === mood;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function setLanguage(language, persist = true) {
  if (!translations[language]) {
    language = "en";
  }

  currentLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = textFor(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", textFor(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    element.setAttribute("content", textFor(element.dataset.i18nContent));
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", textFor(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll(".activity-options").forEach((element) => {
    element.setAttribute("role", "group");
    if (!element.dataset.i18nAriaLabel) {
      element.setAttribute("aria-label", textFor("topic.chooseAnswer"));
    }
  });

  document.querySelectorAll("[data-fix-code-key]").forEach((editor) => {
    if (editor.dataset.edited !== "true") {
      editor.value = textFor(editor.dataset.fixCodeKey);
    }
  });

  if (pythonEditor && pythonEditor.dataset.edited !== "true") {
    pythonEditor.value = textFor(pythonEditor.dataset.codeKey || "preview.defaultCode");
  }

  const page = document.body.dataset.page || "home";
  document.title = textFor(`meta.${page}Title`);

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  updateAudioButton();

  if (lastPythonError) {
    const { errorType, error, output } = lastPythonError;
    showPythonError(errorType, error, output);
  }

  setMood(currentMood());
  renderPersonalizedMessages();
  updateLearnerNamePanel(
    learnerNameForm
      ? !learnerName || (learnerNamePanel?.dataset.ready === "true" && !learnerNameForm.hidden)
      : false,
  );
  updateCoursePath();
  renderSelfCheck();
  renderReviewNote();

  if (persist) {
    try {
      localStorage.setItem("pybot.language", language);
    } catch {
      // The language still changes when browser storage is unavailable.
    }
  }
}

function storedLanguage() {
  try {
    const language = localStorage.getItem("pybot.language");
    return translations[language] ? language : "en";
  } catch {
    return "en";
  }
}

function activityStorageKey(activityId) {
  return `pybot.activity.${activityId}`;
}

// The backup allowlist mirrors the storage registry in README.md.
function backupValidators() {
  const validators = {
    "pybot.language": (value) => Boolean(translations[value]),
    "pybot.audio.enabled": (value) => value === "true" || value === "false",
    [LEARNER_NAME_KEY]: (value) => value.length > 0 && normalizeLearnerName(value) === value,
    [PATH_CURRENT_KEY]: (value) => pathSteps.some((step) => step.id === value),
    [PATH_VISITED_KEY]: (value) => value.split(",").every((id) => pathSteps.some((step) => step.id === id)),
    [PATH_DONE_KEY]: (value) => value === "" || value.split(",").every((id) => pathSteps.some((step) => step.id === id)),
    [PATH_KNOWN_KEY]: (value) => value === "" || value.split(",").every((id) => pathSteps.some((step) => step.id === id)),
    [SELF_CHECK_KEY]: (value) => value === "" || value.split(",").every((pair) => {
      const [id, rating] = pair.split(":");
      return pathSteps.some((step) => step.id === id) && SELF_CHECK_RATINGS.includes(rating);
    }),
  };

  activityIds.forEach((activityId) => {
    validators[activityStorageKey(activityId)] = (value) => value === "complete" || value === "review";
  });

  return validators;
}

function renameProgressStep(progress, from, to) {
  const rename = (id) => (id === from ? to : id);
  if (progress[PATH_CURRENT_KEY] === from) {
    progress[PATH_CURRENT_KEY] = to;
  }
  PATH_LIST_KEYS.filter((key) => typeof progress[key] === "string").forEach((key) => {
    progress[key] = progress[key].split(",").map(rename).join(",");
  });
  if (typeof progress[SELF_CHECK_KEY] === "string") {
    progress[SELF_CHECK_KEY] = progress[SELF_CHECK_KEY]
      .split(",")
      .map((pair) => pair.split(":"))
      .map(([id, rating]) => `${rename(id)}:${rating}`)
      .join(",");
  }
}

function renameProgressActivity(progress, from, to) {
  const fromKey = activityStorageKey(from);
  if (Object.hasOwn(progress, fromKey)) {
    progress[activityStorageKey(to)] ??= progress[fromKey];
    delete progress[fromKey];
  }
}

// Runs every migration after `fromVersion`, then drops steps and activities the
// current course no longer has, so progress from any older version still loads.
function upgradeProgress(progress, fromVersion) {
  const upgraded = { ...progress };
  if (fromVersion >= PROGRESS_VERSION) {
    return upgraded;
  }

  for (let version = fromVersion + 1; version <= PROGRESS_VERSION; version += 1) {
    progressMigrations[version]?.(upgraded);
  }

  const isStep = (id) => pathSteps.some((step) => step.id === id);
  const keepIds = (key, isKept) => {
    if (typeof upgraded[key] === "string") {
      upgraded[key] = upgraded[key].split(",").filter(isKept).join(",");
    }
  };
  PATH_LIST_KEYS.forEach((key) => keepIds(key, isStep));
  keepIds(SELF_CHECK_KEY, (pair) => isStep(pair.split(":")[0]));
  if (upgraded[PATH_VISITED_KEY] === "") {
    delete upgraded[PATH_VISITED_KEY];
  }
  if (Object.hasOwn(upgraded, PATH_CURRENT_KEY) && !isStep(upgraded[PATH_CURRENT_KEY])) {
    delete upgraded[PATH_CURRENT_KEY];
  }
  Object.keys(upgraded)
    .filter((key) => key.startsWith(activityStorageKey("")) && !activityIds.includes(key.slice(activityStorageKey("").length)))
    .forEach((key) => delete upgraded[key]);

  return upgraded;
}

// Brings the progress in this browser up to PROGRESS_VERSION after the course changes.
// Progress saved before versions existed counts as version 1.
function upgradeStoredProgress() {
  try {
    const stored = Number.parseInt(localStorage.getItem(PROGRESS_VERSION_KEY) ?? "1", 10);
    const fromVersion = Number.isInteger(stored) && stored > 0 ? stored : 1;
    if (fromVersion > PROGRESS_VERSION) {
      return;
    }

    if (fromVersion < PROGRESS_VERSION) {
      const progress = {};
      for (let index = 0; index < localStorage.length; index += 1) {
        const key = localStorage.key(index);
        if (key?.startsWith("pybot.") && key !== PROGRESS_VERSION_KEY) {
          progress[key] = localStorage.getItem(key);
        }
      }

      const upgraded = upgradeProgress(progress, fromVersion);
      Object.keys(progress).filter((key) => !Object.hasOwn(upgraded, key)).forEach((key) => localStorage.removeItem(key));
      Object.entries(upgraded).forEach(([key, value]) => localStorage.setItem(key, value));
    }

    localStorage.setItem(PROGRESS_VERSION_KEY, String(PROGRESS_VERSION));
  } catch {
    // Storage failure must never block a lesson.
  }
}

function createBackup() {
  const progress = {};

  Object.entries(backupValidators()).forEach(([key, isValid]) => {
    const value = localStorage.getItem(key);
    if (value !== null && isValid(value)) {
      progress[key] = value;
    }
  });

  return {
    format: BACKUP_FORMAT,
    schemaVersion: BACKUP_SCHEMA_VERSION,
    progressVersion: PROGRESS_VERSION,
    exportedAt: new Date().toISOString(),
    progress,
  };
}

// Returns the validated progress entries, or an error key when the file must be rejected.
function readBackup(text) {
  let backup;
  try {
    backup = JSON.parse(text);
  } catch {
    return { error: "backup.invalid" };
  }

  if (!backup || typeof backup !== "object" || backup.format !== BACKUP_FORMAT) {
    return { error: "backup.invalid" };
  }

  // Backups saved before progress versions existed belong to version 1.
  const progressVersion = backup.progressVersion ?? 1;
  if (
    (Number.isInteger(backup.schemaVersion) && backup.schemaVersion > BACKUP_SCHEMA_VERSION) ||
    (Number.isInteger(progressVersion) && progressVersion > PROGRESS_VERSION)
  ) {
    return { error: "backup.newer" };
  }

  const { progress } = backup;
  if (
    backup.schemaVersion !== BACKUP_SCHEMA_VERSION ||
    !Number.isInteger(progressVersion) ||
    progressVersion < 1 ||
    !progress ||
    typeof progress !== "object" ||
    Array.isArray(progress) ||
    !Object.values(progress).every((value) => typeof value === "string")
  ) {
    return { error: "backup.invalid" };
  }

  const validators = backupValidators();
  const entries = Object.entries(upgradeProgress(progress, progressVersion));
  const allValid = entries.every(([key, value]) => Object.hasOwn(validators, key) && validators[key](value));

  return allValid ? { entries, upgraded: progressVersion < PROGRESS_VERSION } : { error: "backup.invalid" };
}

function replaceProgress(entries) {
  const previous = Object.keys(backupValidators()).map((key) => [key, localStorage.getItem(key)]);

  try {
    previous.forEach(([key]) => localStorage.removeItem(key));
    entries.forEach(([key, value]) => localStorage.setItem(key, value));
  } catch (error) {
    previous.forEach(([key, value]) => {
      try {
        if (value === null) {
          localStorage.removeItem(key);
        } else {
          localStorage.setItem(key, value);
        }
      } catch {
        // Restoring the earlier progress is best effort.
      }
    });
    throw error;
  }
}

function setBackupStatus(key, element = backupStatus) {
  if (!element) {
    return;
  }

  element.dataset.i18n = key;
  element.textContent = textFor(key);
}

// Returns false when the browser could not build the backup file.
function downloadBackup() {
  let backup;
  try {
    backup = createBackup();
  } catch {
    return false;
  }

  const file = new Blob([`${JSON.stringify(backup, null, 2)}\n`], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = `pybot-backup-${backup.exportedAt.slice(0, 10)}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  return true;
}

// Keeps the preferences and the name, and drops every other registered key.
function progressAfterReset() {
  return RESET_KEPT_KEYS.map((key) => [key, localStorage.getItem(key)]).filter(([, value]) => value !== null);
}

function updatePlanProgressSummary() {
  if (!planProgressSummary) {
    return;
  }

  const completed = Array.from(stepActivities).filter((activity) => activity.classList.contains("is-complete")).length;
  const review = Array.from(stepActivities).filter(
    (activity) => !activity.classList.contains("is-complete") && activity.classList.contains("needs-review"),
  ).length;
  const remaining = stepActivities.length - completed - review;

  planProgressSummary.querySelector("[data-progress-complete]").textContent = String(completed);
  planProgressSummary.querySelector("[data-progress-remaining]").textContent = String(remaining);
  planProgressSummary.querySelector("[data-progress-review]").textContent = String(review);
  updateNewActivitiesNote();
  renderSelfCheck();
}

// On a page the learner had finished, say that new activities are waiting.
function updateNewActivitiesNote() {
  const step = pathSteps.find((candidate) => candidate.page === document.body.dataset.page);
  const showNote = Boolean(step) && doneSteps().includes(step.id) && !isStepFinished(step);
  let note = document.querySelector("[data-new-activities-note]");

  if (!showNote) {
    note?.remove();
    return;
  }

  if (!note) {
    note = document.createElement("p");
    note.className = "new-activities-note";
    note.dataset.newActivitiesNote = "";
    note.dataset.i18n = "progress.newActivities";
    note.setAttribute("role", "status");
    planProgressSummary.before(note);
  }
  note.textContent = textFor("progress.newActivities");
}

// Pit stop self-check: the learner rates each zone. Zones rated "review" are
// linked here and marked TO REVIEW on the path map. Zones of challenges that
// are still in review get a gentle note, but the learner decides.
function renderSelfCheck() {
  const section = document.querySelector("[data-selfcheck]");
  if (!section) {
    return;
  }

  const ratings = storedSelfCheck();
  const tricky = new Set();
  document.querySelectorAll("[data-checkpoint-zones]").forEach((challenge) => {
    if (challenge.classList.contains("needs-review") && !challenge.classList.contains("is-complete")) {
      challenge.dataset.checkpointZones.split(",").forEach((id) => tricky.add(id));
    }
  });

  const rows = [...section.querySelectorAll("[data-selfcheck-zone]")];
  rows.forEach((row) => {
    const id = row.dataset.selfcheckZone;
    const group = row.querySelector(".selfcheck-options");
    row.querySelector("[data-selfcheck-noticed]").hidden = !tricky.has(id);
    group.setAttribute("aria-label", textFor("checkpoint.rateLabel").replace("{name}", textFor(group.dataset.selfcheckLabel)));
    row.querySelectorAll("[data-rating]").forEach((button) => {
      button.setAttribute("aria-pressed", String(ratings[id] === button.dataset.rating));
    });
  });

  const answered = rows.filter((row) => ratings[row.dataset.selfcheckZone]);
  const toReview = answered.filter((row) => ratings[row.dataset.selfcheckZone] === "review");
  const result = section.querySelector("[data-selfcheck-result]");
  const links = result.querySelector("[data-selfcheck-links]");
  result.hidden = answered.length === 0;
  result.classList.toggle("is-review", toReview.length > 0);
  result.querySelector("[data-selfcheck-message]").textContent = textFor(
    toReview.length > 0 ? "checkpoint.resultReview"
      : answered.length === rows.length ? "checkpoint.resultGood"
      : "checkpoint.resultPending",
  );
  links.replaceChildren(...toReview.map((row) => {
    const zoneLink = row.querySelector(".selfcheck-zone a");
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = zoneLink.getAttribute("href");
    link.textContent = textFor("checkpoint.goTo").replace("{name}", zoneLink.textContent);
    item.append(link);
    return item;
  }));
}

document.querySelector("[data-selfcheck]")?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) {
    return;
  }
  const ratings = storedSelfCheck();
  ratings[button.closest("[data-selfcheck-zone]").dataset.selfcheckZone] = button.dataset.rating;
  saveSelfCheck(ratings);
  renderSelfCheck();
});

// On a zone the learner chose to review at a pit stop, say so and let them
// mark it as reviewed.
function renderReviewNote() {
  const step = pathSteps.find((candidate) => candidate.page === document.body.dataset.page);
  const showNote = Boolean(step) && storedSelfCheck()[step.id] === "review";
  let note = document.querySelector("[data-review-note]");

  if (!showNote) {
    note?.remove();
    return;
  }

  if (!note) {
    note = document.createElement("div");
    note.className = "review-note";
    note.dataset.reviewNote = "";
    note.setAttribute("role", "status");
    note.append(document.createElement("p"), document.createElement("button"));
    note.querySelector("button").type = "button";
    note.querySelector("button").addEventListener("click", () => {
      const ratings = storedSelfCheck();
      ratings[step.id] = "okay";
      saveSelfCheck(ratings);
      playRobotChime();
      renderReviewNote();
    });
    document.querySelector(".lesson-main .lesson-back")?.after(note);
  }
  note.querySelector("p").textContent = textFor("review.note");
  note.querySelector("button").textContent = textFor("review.done");
}

function showActivityFeedback(activity, result) {
  const activityId = activity.dataset.activityId;
  const feedback = activity.querySelector(".activity-feedback");
  const specificKey = `thinking.${activityId}${result === "success" ? "Success" : "Hint"}`;
  const genericPrefix = activity.classList.contains("fix-activity")
    ? "fix"
    : document.body.dataset.page === "thinking" ? "thinking" : "activity";
  const genericKey = `${genericPrefix}.${result === "success" ? "success" : "hint"}`;
  const key = translations[currentLanguage][specificKey] ? specificKey : genericKey;

  if (!feedback) {
    return;
  }

  feedback.dataset.i18n = key;
  feedback.textContent = textFor(key);
}

function launchAnswerConfetti(activity) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  activity.querySelector(".answer-confetti")?.remove();

  const burst = document.createElement("span");
  const colors = ["#ff7a45", "#2764d8", "#ffd84d", "#7199ed", "#ff8d5f"];
  burst.className = "answer-confetti";
  burst.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 30; index += 1) {
    const piece = document.createElement("i");
    const direction = Math.random() < 0.5 ? -1 : 1;
    const distance = 45 + Math.random() * 230;
    piece.className = "confetti-piece";
    piece.style.setProperty("--confetti-x", `${direction * distance}px`);
    piece.style.setProperty("--confetti-rise", `${-75 - Math.random() * 150}px`);
    piece.style.setProperty("--confetti-fall", `${55 + Math.random() * 165}px`);
    piece.style.setProperty("--confetti-rotate", `${360 + Math.random() * 720}deg`);
    piece.style.setProperty("--confetti-delay", `${Math.random() * 110}ms`);
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--confetti-width", `${6 + Math.random() * 7}px`);
    piece.style.setProperty("--confetti-height", `${8 + Math.random() * 9}px`);
    burst.appendChild(piece);
  }

  activity.appendChild(burst);
  window.setTimeout(() => burst.remove(), 1400);
}

function completeActivity(activity, correctButton, persist = true) {
  const buttons = activity.querySelectorAll(".activity-options button");
  const missingStep = activity.querySelector(".missing-step p");

  activity.classList.add("is-complete");
  activity.classList.remove("needs-review");
  buttons.forEach((button) => {
    const isCorrect = button === correctButton;
    button.classList.toggle("is-correct", isCorrect);
    button.classList.remove("is-wrong");
    button.setAttribute("aria-pressed", String(isCorrect));
    button.disabled = true;
  });

  if (missingStep && correctButton?.dataset.i18n) {
    missingStep.dataset.i18n = correctButton.dataset.i18n;
    missingStep.textContent = textFor(correctButton.dataset.i18n);
  }

  showActivityFeedback(activity, "success");

  if (persist) {
    launchAnswerConfetti(activity);
    try {
      localStorage.setItem(activityStorageKey(activity.dataset.activityId), "complete");
    } catch {
      // The activity still works when browser storage is unavailable.
    }
    saveDoneSteps();
  }

  updatePlanProgressSummary();
}

stepActivities.forEach((activity) => {
  const buttons = activity.querySelectorAll(".activity-options button");

  buttons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      if (button.dataset.correct === "true") {
        completeActivity(activity, button);
        return;
      }

      buttons.forEach((option) => option.classList.remove("is-wrong"));
      void button.offsetWidth;
      button.classList.add("is-wrong");
      activity.classList.add("needs-review");
      showActivityFeedback(activity, "hint");
      try {
        localStorage.setItem(activityStorageKey(activity.dataset.activityId), "review");
      } catch {
        // The review counter still works for the current page.
      }
      updatePlanProgressSummary();
    });
  });
});

// "Fix PyBot's code": the learner edits a broken snippet and runs it until the
// output matches the goal. Runs share the page's Python worker; their ids are
// negative so they never clash with the main runner's ids.
function endFixRuns(result) {
  const pending = [...fixRuns.values()];
  fixRuns.clear();
  pending.forEach((finish) => finish(result));
}

function runFixCode(code) {
  return new Promise((resolve) => {
    fixRunId -= 1;
    const id = fixRunId;
    const timer = window.setTimeout(() => {
      // A loop that never ends: restart the worker so Python is usable again.
      fixRuns.delete(id);
      stopPythonWorker();
      resolve({ type: "timeout" });
    }, FIX_RUN_TIMEOUT_MS);
    fixRuns.set(id, (result) => {
      window.clearTimeout(timer);
      resolve(result);
    });
    pythonWorker ??= createPythonWorker();
    pythonWorker.postMessage({ id, code });
  });
}

// Compare outputs line by line, ignoring spaces at the ends of lines.
function normalizedOutput(text) {
  return text.replace(/\r\n/g, "\n").split("\n").map((line) => line.trimEnd()).join("\n").trim();
}

function fixGoalMatches(activity, output) {
  const key = activity.dataset.fixExpectedKey;
  // Accept either language's goal, so switching language after editing still works.
  return Object.values(translations).some((texts) => texts[key] && normalizedOutput(texts[key]) === normalizedOutput(output));
}

function resetFixActivity(activity) {
  const editor = activity.querySelector("[data-fix-code-key]");
  if (!editor) {
    return;
  }
  editor.value = textFor(editor.dataset.fixCodeKey);
  delete editor.dataset.edited;
  activity.querySelector("[data-fix-output]").textContent = "";
}

document.querySelectorAll(".fix-activity").forEach((activity) => {
  const editor = activity.querySelector("[data-fix-code-key]");
  const output = activity.querySelector("[data-fix-output]");
  const runButton = activity.querySelector("[data-fix-run]");

  editor.addEventListener("input", () => {
    editor.dataset.edited = "true";
  });

  activity.querySelector("[data-fix-restart]").addEventListener("click", () => resetFixActivity(activity));

  runButton.addEventListener("click", async () => {
    if (window.location.protocol === "file:") {
      output.textContent = textFor("preview.serveHint");
      return;
    }

    runButton.disabled = true;
    output.textContent = textFor("preview.loading");
    let result;
    try {
      result = await runFixCode(editor.value);
    } catch (error) {
      result = { type: "error", error: error instanceof Error ? error.message : String(error) };
      pythonWorker = null;
    }
    runButton.disabled = false;

    if (result.type === "stopped" || result.type === "timeout") {
      output.textContent = textFor(result.type === "timeout" ? "fix.timeout" : "preview.stopped");
      return;
    }

    if (result.type === "error") {
      const details = [result.output, result.error].filter(Boolean).join("\n").trim();
      output.textContent = `${pythonErrorHint(result.errorType, result.error ?? "")}\n\n${details}`;
    } else {
      output.textContent = result.output.trim() || textFor("preview.noOutput");
      if (fixGoalMatches(activity, result.output)) {
        playRobotChime();
        completeActivity(activity, null);
        return;
      }
    }

    if (!activity.classList.contains("is-complete")) {
      activity.classList.add("needs-review");
      showActivityFeedback(activity, "hint");
      try {
        localStorage.setItem(activityStorageKey(activity.dataset.activityId), "review");
      } catch {
        // The review counter still works for the current page.
      }
      updatePlanProgressSummary();
    }
  });
});

function restoreStepActivities() {
  stepActivities.forEach((activity) => {
    let storedState;
    try {
      storedState = localStorage.getItem(activityStorageKey(activity.dataset.activityId));
    } catch {
      return;
    }

    if (storedState === "complete") {
      const correctButton = activity.querySelector('[data-correct="true"]');
      if (correctButton || activity.classList.contains("fix-activity")) {
        completeActivity(activity, correctButton, false);
      }
    } else if (storedState === "review") {
      activity.classList.add("needs-review");
      showActivityFeedback(activity, "hint");
    }
  });

  updatePlanProgressSummary();
}

function resetStepActivity(activity) {
  const buttons = activity.querySelectorAll(".activity-options button");
  const missingStep = activity.querySelector(".missing-step p");
  const feedback = activity.querySelector(".activity-feedback");

  activity.classList.remove("is-complete", "needs-review");
  activity.querySelector(".answer-confetti")?.remove();
  resetFixActivity(activity);
  buttons.forEach((button) => {
    button.disabled = false;
    button.classList.remove("is-correct", "is-wrong");
    button.setAttribute("aria-pressed", "false");
  });

  if (missingStep) {
    missingStep.removeAttribute("data-i18n");
    missingStep.textContent = "?";
  }

  if (feedback) {
    feedback.removeAttribute("data-i18n");
    feedback.textContent = "";
  }

  try {
    localStorage.removeItem(activityStorageKey(activity.dataset.activityId));
  } catch {
    // The visible page still resets when browser storage is unavailable.
  }
}

activityResetButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!window.confirm(textFor("progress.resetConfirm"))) {
      return;
    }

    stepActivities.forEach(resetStepActivity);
    forgetDoneStep(document.body.dataset.page);
    updatePlanProgressSummary();
    const status = button.closest(".page-progress-tools")?.querySelector(".progress-reset-status");
    if (status) {
      status.dataset.i18n = "progress.resetDone";
      status.textContent = textFor("progress.resetDone");
    }
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

moodButtons.forEach((button) => {
  button.addEventListener("click", () => setMood(button.dataset.mood));
});

learnerNameForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nextName = normalizeLearnerName(learnerNameInput?.value ?? "");
  const error = learnerNameForm.querySelector(".learner-name-error");

  if (!nextName) {
    learnerNameForm.classList.add("is-invalid");
    if (error) {
      error.hidden = false;
    }
    learnerNameInput?.focus();
    return;
  }

  learnerName = nextName;
  try {
    localStorage.setItem(LEARNER_NAME_KEY, learnerName);
  } catch {
    // The chosen name still works for the current page.
  }

  setMood(currentMood());
  renderPersonalizedMessages();
  updateLearnerNamePanel(false);
  learnerNameEdit?.focus();
  playRobotChime();
});

learnerNameEdit?.addEventListener("click", () => {
  updateLearnerNamePanel(true);
  learnerNameInput?.focus();
  learnerNameInput?.select();
});

learnerNameForget?.addEventListener("click", () => {
  learnerName = "";
  try {
    localStorage.removeItem(LEARNER_NAME_KEY);
  } catch {
    // The name is still forgotten for the current page.
  }

  setMood(currentMood());
  renderPersonalizedMessages();
  updateLearnerNamePanel(true);
  learnerNameInput?.focus();
});

backupExportButton?.addEventListener("click", () => {
  setBackupStatus(downloadBackup() ? "backup.exported" : "backup.failed");
});

progressResetButton?.addEventListener("click", () => {
  if (window.confirm(textFor("reset.askBackup")) && !downloadBackup()) {
    setBackupStatus("backup.failed", resetStatus);
    return;
  }

  if (!window.confirm(textFor("reset.confirm"))) {
    setBackupStatus("reset.cancelled", resetStatus);
    return;
  }

  try {
    replaceProgress(progressAfterReset());
  } catch {
    setBackupStatus("reset.failed", resetStatus);
    return;
  }

  setLanguage(storedLanguage(), false);
  setBackupStatus("reset.done", resetStatus);
});

if (progressVersionLabel) {
  progressVersionLabel.textContent = String(PROGRESS_VERSION);
}

backupImportButton?.addEventListener("click", () => backupImportInput?.click());

backupImportInput?.addEventListener("change", async () => {
  const file = backupImportInput.files?.[0];
  backupImportInput.value = "";
  if (!file) {
    return;
  }

  const result = file.size > BACKUP_MAX_BYTES ? { error: "backup.invalid" } : readBackup(await file.text());
  if (result.error) {
    setBackupStatus(result.error);
    return;
  }

  const finished = result.entries.filter(([, value]) => value === "complete").length;
  if (!window.confirm(textFor("backup.confirm").replaceAll("{count}", String(finished)))) {
    setBackupStatus("backup.cancelled");
    return;
  }

  try {
    replaceProgress(result.entries);
  } catch {
    setBackupStatus("backup.failed");
    return;
  }

  const nextAudio = storedAudioPreference();
  learnerName = storedLearnerName();
  setLanguage(storedLanguage(), false);
  updateLearnerNamePanel(!learnerName);
  if (nextAudio !== audioEnabled) {
    setAudioEnabled(nextAudio);
  }
  setBackupStatus(result.upgraded ? "backup.upgraded" : "backup.imported");
});

pythonEditor?.addEventListener("input", () => {
  pythonEditor.dataset.edited = "true";
});

pythonRunButton?.addEventListener("click", () => {
  if (!pythonEditor || !pythonOutput) {
    return;
  }

  if (window.location.protocol === "file:") {
    setPythonOutput("preview.serveHint");
    return;
  }

  pythonRunId += 1;
  setPythonRunning(true);
  setPythonOutput("preview.loading");

  try {
    pythonWorker ??= createPythonWorker();
    pythonWorker.postMessage({ id: pythonRunId, code: pythonEditor.value });
  } catch (error) {
    setPythonRunning(false);
    setPythonOutput("preview.error", error instanceof Error ? error.message : String(error));
    pythonWorker = null;
  }
});

pythonStopButton?.addEventListener("click", () => stopPythonWorker());

startAnalytics();
audioEnabled = storedAudioPreference();
learnerName = storedLearnerName();
saveKnownPathSteps();
saveCurrentPathStep();
saveDoneSteps();
soundToggle = createSoundToggle();
createSupportLink();
setLanguage(storedLanguage(), false);
updateLearnerNamePanel(!learnerName);
restoreStepActivities();
armStoredAudioPreference();

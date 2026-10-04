// Pages for the album, zone diplomas, the word list and the grown-ups' guide.
// Loaded after script.js, so it can use its translations, storage and helpers.

Object.assign(translations.en, {
  "meta.albumTitle": "My album — PyBot",
  "meta.diplomaTitle": "Diploma — PyBot",
  "meta.glossaryTitle": "Word list — PyBot",
  "meta.guideTitle": "Guide for parents and teachers — PyBot",
  "album.eyebrow": "MY ALBUM",
  "album.title": "Stickers and diplomas",
  "album.intro": "Finish activities and zones to fill your album.",
  "album.stickers": "Stickers",
  "album.count": "{count} of {total} stickers",
  "album.earnedOn": "Earned {date}",
  "album.diploma": "See diploma",
  "album.noDays": "Open a lesson to start counting your learning days.",
  "album.welcomeBack": "Welcome back! Every day you learn counts.",
  "album.today": "You learned today. Great!",
  "album.best": "Most days in a row: {count}",
  "album.more": "Want more? Look up a word in the word list.",
  "diploma.eyebrow": "YOUR DIPLOMA",
  "diploma.title": "You did it!",
  "diploma.intro": "Check your name, then print your diploma or save it as a PDF.",
  "diploma.nameLabel": "Name on the diploma",
  "diploma.namePlaceholder": "Your name",
  "diploma.kicker": "DIPLOMA",
  "diploma.heading": "Great coder!",
  "diploma.line": "This diploma says that",
  "diploma.finished": "finished the PyBot zone",
  "diploma.date": "Date",
  "diploma.signed": "Signed",
  "diploma.print": "Print or save as PDF",
  "diploma.back": "Back to my album",
  "diploma.missingTitle": "This diploma is still waiting",
  "diploma.missingText": "Finish every page of the zone {name} and your diploma appears here.",
  "diploma.unknownText": "Open your album to see the diplomas you have earned.",
  "diploma.goMap": "Go to the learning path",
  "glossary.eyebrow": "WORD LIST",
  "glossary.title": "Python words",
  "glossary.intro": "Each word with a drawing, its meaning, and a tiny example.",
  "glossary.search": "Find a word",
  "glossary.empty": "No word matches. Try a shorter word.",
  "glossary.other": "In Spanish: {word}",
  "guide.eyebrow": "FOR PARENTS AND TEACHERS",
  "guide.title": "A guide for each zone",
  "guide.intro": "What the child learns, about how long it takes, and two ideas without screens.",
  "guide.tip1": "Short sessions of 15 to 20 minutes work best at this age. Let the child press the buttons and read the hints; ask “what do you think will happen?” before running code. Mistakes are part of learning: celebrate the fix, not only the answer.",
  "guide.learn": "What they learn",
  "guide.home": "At home, without screens",
  "guide.challenge": "Paper challenge",
  "guide.time": "About {time}",
  "guide.print": "Print the guide",
  "guide.printChallenges": "Print only the paper challenges",
});

Object.assign(translations.es, {
  "meta.albumTitle": "Mi álbum — PyBot",
  "meta.diplomaTitle": "Diploma — PyBot",
  "meta.glossaryTitle": "Palabras — PyBot",
  "meta.guideTitle": "Guía para papás y profes — PyBot",
  "album.eyebrow": "MI ÁLBUM",
  "album.title": "Stickers y diplomas",
  "album.intro": "Termina actividades y zonas para llenar tu álbum.",
  "album.stickers": "Stickers",
  "album.count": "{count} de {total} stickers",
  "album.earnedOn": "Ganado el {date}",
  "album.diploma": "Ver diploma",
  "album.noDays": "Abre una lección para empezar a contar tus días de aprender.",
  "album.welcomeBack": "¡Qué bueno verte! Cada día que aprendes cuenta.",
  "album.today": "Hoy aprendiste. ¡Muy bien!",
  "album.best": "Más días seguidos: {count}",
  "album.more": "¿Quieres más? Busca una palabra en la lista de palabras.",
  "diploma.eyebrow": "TU DIPLOMA",
  "diploma.title": "¡Lo lograste!",
  "diploma.intro": "Revisa tu nombre y luego imprime tu diploma o guárdalo como PDF.",
  "diploma.nameLabel": "Nombre en el diploma",
  "diploma.namePlaceholder": "Tu nombre",
  "diploma.kicker": "DIPLOMA",
  "diploma.heading": "¡Gran talento para programar!",
  "diploma.line": "Este diploma dice que",
  "diploma.finished": "terminó la zona de PyBot",
  "diploma.date": "Fecha",
  "diploma.signed": "Firma",
  "diploma.print": "Imprimir o guardar como PDF",
  "diploma.back": "Volver a mi álbum",
  "diploma.missingTitle": "Este diploma todavía te espera",
  "diploma.missingText": "Termina todas las páginas de la zona {name} y tu diploma aparece aquí.",
  "diploma.unknownText": "Abre tu álbum para ver los diplomas que has ganado.",
  "diploma.goMap": "Ir al camino de aprendizaje",
  "glossary.eyebrow": "PALABRAS",
  "glossary.title": "Palabras de Python",
  "glossary.intro": "Cada palabra con un dibujo, su significado y un ejemplo pequeño.",
  "glossary.search": "Busca una palabra",
  "glossary.empty": "Ninguna palabra coincide. Prueba con una más corta.",
  "glossary.other": "En inglés: {word}",
  "guide.eyebrow": "PARA PAPÁS Y PROFES",
  "guide.title": "Una guía para cada zona",
  "guide.intro": "Qué aprende el niño o la niña, cuánto toma más o menos, y dos ideas sin pantalla.",
  "guide.tip1": "A esta edad funcionan mejor sesiones cortas de 15 a 20 minutos. Deje que el niño presione los botones y lea las pistas; pregunte “¿qué crees que va a pasar?” antes de ejecutar el código. Los errores son parte de aprender: celebre el arreglo, no solo la respuesta.",
  "guide.learn": "Qué aprende",
  "guide.home": "En casa, sin pantalla",
  "guide.challenge": "Reto en papel",
  "guide.time": "Más o menos {time}",
  "guide.print": "Imprimir la guía",
  "guide.printChallenges": "Imprimir solo los retos en papel",
});

// Word list: [drawing, English word, Spanish word, English meaning, Spanish meaning, example].
// The example is one string, or [English, Spanish] when it has words to translate.
const glossaryTerms = [
  ["🧭", "algorithm", "algoritmo", "A list of steps, in order, that solves a problem. A recipe is an algorithm.", "Una lista de pasos, en orden, que resuelve un problema. Una receta es un algoritmo.", ["1. Fill the glass\n2. Drink", "1. Llena el vaso\n2. Bebe"]],
  ["🐞", "bug", "error (bug)", "A mistake in the code that makes it do something you did not want.", "Una equivocación en el código que lo hace hacer algo que no querías.", ["print(\"Hi\"  # a ) is missing", "print(\"Hola\"  # falta un )"]],
  ["🔍", "debug", "depurar", "Look for a bug and fix it, like a detective.", "Buscar un error y arreglarlo, como un detective.", ["print(score)  # what is inside?", "print(puntos)  # ¿qué hay adentro?"]],
  ["📜", "code", "código", "Instructions written in a language the computer understands.", "Instrucciones escritas en un idioma que el computador entiende.", ["print(\"Hello\")", "print(\"Hola\")"]],
  ["💬", "comment", "comentario", "A note for people. Python skips everything after #.", "Una nota para personas. Python salta todo lo que va después de #.", ["# This line says hello", "# Esta línea saluda"]],
  ["📦", "variable", "variable", "A box with a name that keeps a value.", "Una caja con nombre que guarda un valor.", ["age = 9", "edad = 9"]],
  ["🔢", "number", "número", "Whole numbers are int. Numbers with a dot are float.", "Los números enteros son int. Los números con punto son float.", ["apples = 3\nprice = 2.5", "manzanas = 3\nprecio = 2.5"]],
  ["🔤", "text (string)", "texto (string)", "Letters, words or symbols inside quotes.", "Letras, palabras o símbolos entre comillas.", ["name = \"Ana\"", "nombre = \"Ana\""]],
  ["✅", "True and False", "True y False (verdadero y falso)", "The two answers of a yes-or-no question in Python.", "Las dos respuestas de una pregunta de sí o no en Python.", "5 > 3   # True"],
  ["🧺", "list", "lista", "A box that keeps many values in order.", "Una caja que guarda muchos valores en orden.", ["fruits = [\"apple\", \"pear\"]", "frutas = [\"manzana\", \"pera\"]"]],
  ["📒", "dictionary", "diccionario", "A box that finds each value by its key, like a word in a dictionary.", "Una caja que encuentra cada valor por su llave, como una palabra en un diccionario.", ["ages = {\"Ana\": 9}", "edades = {\"Ana\": 9}"]],
  ["➕", "operator", "operador", "A sign that does a job: add, compare, join.", "Un signo que hace un trabajo: sumar, comparar, unir.", "2 + 3\n4 == 4"],
  ["🔀", "condition (if)", "condición (if)", "A question that picks which code runs.", "Una pregunta que escoge qué código se ejecuta.", ["if rain:\n    print(\"Umbrella\")", "if lluvia:\n    print(\"Paraguas\")"]],
  ["🔁", "loop", "bucle (ciclo)", "Code that repeats. for repeats a number of times; while repeats while something is true.", "Código que se repite. for repite un número de veces; while repite mientras algo sea verdad.", ["for i in range(3):\n    print(\"Hop\")", "for i in range(3):\n    print(\"Salta\")"]],
  ["↹", "indentation", "sangría", "The spaces at the start of a line. They show which lines belong inside if, for or def.", "Los espacios al inicio de una línea. Muestran qué líneas van dentro de if, for o def.", ["if ok:\n    print(\"inside\")", "if listo:\n    print(\"adentro\")"]],
  ["⚙️", "function", "función", "A box with a name that does a job. You give it values and it can give one back.", "Una caja con nombre que hace un trabajo. Le das valores y te puede devolver uno.", ["def double(n):\n    return n * 2", "def doble(n):\n    return n * 2"]],
  ["🖨️", "print", "mostrar (print)", "Shows something on the screen.", "Muestra algo en la pantalla.", ["print(\"Hi!\")", "print(\"¡Hola!\")"]],
  ["🎤", "input", "entrada (input)", "Asks the person a question and waits for the answer.", "Le hace una pregunta a la persona y espera la respuesta.", ["name = input(\"Name? \")", "nombre = input(\"¿Nombre? \")"]],
  ["🎲", "random", "al azar (random)", "Picks something by chance, like rolling a die.", "Escoge algo por suerte, como lanzar un dado.", "random.randint(1, 6)"],
  ["🐍", "Python", "Python", "The programming language you learn with PyBot.", "El lenguaje de programación que aprendes con PyBot.", ["print(\"I speak Python\")", "print(\"Hablo Python\")"]],
  ["💻", "program", "programa", "All the code that does one whole job, like a game.", "Todo el código que hace un trabajo completo, como un juego.", ["my_game.py", "mi_juego.py"]],
  ["⚠️", "error message", "mensaje de error", "Python's clue when something is wrong. Read the last line first.", "La pista de Python cuando algo está mal. Lee primero la última línea.", ["NameError: name 'scor' is not defined", "NameError: name 'punto' is not defined"]],
];

// Guide per zone, by the zone's first step: [time EN, time ES, learn, home, paper challenge] in each language.
const guideZones = {
  world: {
    en: ["30 minutes", "That code is everywhere: phones, games, robots. That a program is a list of clear steps, in order, and that Python is a language to write them.", "Play “robot”: the child gives you exact orders to make a sandwich and you follow them literally. Laugh at what goes wrong and fix the steps together.", "Draw a morning routine in 5 boxes, one step per box. Cut them, mix them, and put them back in order."],
    es: ["30 minutos", "Que el código está en todas partes: celulares, juegos, robots. Que un programa es una lista de pasos claros, en orden, y que Python es un idioma para escribirlos.", "Jueguen a “el robot”: el niño le da órdenes exactas para hacer un sándwich y usted las sigue al pie de la letra. Rían con lo que sale mal y arreglen los pasos juntos.", "Dibuja tu rutina de la mañana en 5 cuadros, un paso por cuadro. Recórtalos, revuélvelos y vuelve a ponerlos en orden."],
  },
  keyboard: {
    en: ["30 minutes", "The keys that matter for code (quotes, brackets, Enter, Tab), where Python runs, and the special marks like ( ) : and #.", "Hunt for symbols at home: find a # on a phone, brackets in a book, quotes in a newspaper.", "Copy this line by hand without missing a mark: print(\"I like code!\"). Circle every symbol with a color."],
    es: ["30 minutos", "Las teclas que importan para el código (comillas, paréntesis, Enter, Tab), dónde se ejecuta Python y las marcas especiales como ( ) : y #.", "Busquen símbolos en casa: un # en el teléfono, paréntesis en un libro, comillas en el periódico.", "Copia esta línea a mano sin que falte ninguna marca: print(\"¡Me gusta el código!\"). Encierra cada símbolo con un color."],
  },
  variables: {
    en: ["45 minutes", "Variables as named boxes, kinds of values (numbers, text, True/False, lists), and how a box changes: score = score + 1.", "Label a few real boxes or jars with names and put things inside. Ask: what is in “snacks” now? And after we add 2 more?", "Draw three boxes: name, age and favorite_color. Write your own value inside each one."],
    es: ["45 minutos", "Las variables como cajas con nombre, los tipos de valores (números, texto, True/False, listas) y cómo cambia una caja: puntos = puntos + 1.", "Marquen con nombres algunas cajas o frascos reales y pongan cosas dentro. Pregunte: ¿qué hay en “galletas” ahora? ¿Y si agregamos 2 más?", "Dibuja tres cajas: nombre, edad y color_favorito. Escribe tu propio valor dentro de cada una."],
  },
  operatorsMath: {
    en: ["40 minutes", "Math signs in Python (+ - * / // %), comparing with == != < >, and which sign goes first.", "Shopping math: add prices at the store, split candies equally and count what is left over (that is %).", "Solve and then check: 7 // 2 = ?, 7 % 2 = ?, (2 + 3) * 4 = ?, 2 + 3 * 4 = ?"],
    es: ["40 minutos", "Los signos de matemáticas en Python (+ - * / // %), comparar con == != < > y qué signo va primero.", "Matemáticas de compras: sumen precios en la tienda, repartan dulces en partes iguales y cuenten los que sobran (eso es %).", "Resuelve y luego revisa: 7 // 2 = ?, 7 % 2 = ?, (2 + 3) * 4 = ?, 2 + 3 * 4 = ?"],
  },
  conditionals: {
    en: ["40 minutes", "Making decisions with if and else, more options with elif, and choosing among cases with match.", "Play “if, else” on a walk: “If the light is green, we cross. Else, we wait.” Let the child invent the rules.", "Draw a path that splits in two. Write a question at the fork (if it rains?) and what happens on each side."],
    es: ["40 minutos", "Tomar decisiones con if y else, más opciones con elif y escoger entre casos con match.", "Jueguen a “si, si no” en una caminata: “Si el semáforo está en verde, cruzamos. Si no, esperamos.” Deje que el niño invente las reglas.", "Dibuja un camino que se divide en dos. Escribe una pregunta en el cruce (¿si llueve?) y qué pasa en cada lado."],
  },
  loopsPatterns: {
    en: ["1 hour 15 minutes", "Spotting patterns, repeating with for and while, repeating until something happens, walking through words letter by letter, and loops inside loops.", "Make a clapping or bead pattern and ask how many times it repeats. Then “repeat until”: jump until I say stop.", "Draw a pattern of 3 shapes repeated 4 times. Write how you would tell a robot to draw it with “repeat”."],
    es: ["1 hora 15 minutos", "Encontrar patrones, repetir con for y while, repetir hasta que algo pase, recorrer palabras letra por letra y bucles dentro de bucles.", "Hagan un patrón con aplausos o cuentas y pregunte cuántas veces se repite. Luego “repite hasta”: salta hasta que yo diga alto.", "Dibuja un patrón de 3 figuras repetido 4 veces. Escribe cómo le dirías a un robot que lo dibuje con “repite”."],
  },
  comparisons: {
    en: ["1 hour", "Questions with True or False answers, the difference between = and ==, joining questions with and, or, not, looking inside with in, and logic puzzles.", "Play “True or false?” at dinner: “Dogs have 4 legs AND can fly.” Let the child make tricky ones for you.", "Write 5 sentences about your family. Mark each one True or False. Join two of them with and, then with or."],
    es: ["1 hora", "Preguntas con respuesta True o False, la diferencia entre = y ==, unir preguntas con and, or, not, mirar adentro con in y acertijos de lógica.", "Jueguen a “¿verdadero o falso?” en la comida: “Los perros tienen 4 patas Y vuelan.” Deje que el niño invente unas difíciles para usted.", "Escribe 5 frases sobre tu familia. Marca cada una True o False. Une dos con and y luego con or."],
  },
  functionsDo: {
    en: ["45 minutes", "Functions as boxes that do a job, giving them values, getting a value back with return, and the methods a value already has.", "Kitchen machines: a blender takes fruit in and gives juice out. Name other “machines” at home and what goes in and out.", "Invent a machine. Draw what goes in, what it does inside, and what comes out. Give it a name like make_juice."],
    es: ["45 minutos", "Las funciones como cajas que hacen un trabajo, darles valores, recibir un valor con return y los métodos que un valor ya tiene.", "Máquinas de cocina: la licuadora recibe fruta y entrega jugo. Nombren otras “máquinas” de la casa y qué les entra y qué sale.", "Inventa una máquina. Dibuja qué le entra, qué hace adentro y qué sale. Ponle un nombre como hacer_jugo."],
  },
  checkpoint1: {
    en: ["30 minutes", "A pit stop that mixes everything so far with real Python challenges, then a self-check of how it went.", "Ask the child to teach you one idea from the course with an example from home. Teaching is the best review.", "Write on a card the idea you liked most and the one that was hardest. Keep it to look at again later."],
    es: ["30 minutos", "Una parada en pits que mezcla todo lo anterior con retos de Python real, y luego una autoevaluación de cómo le fue.", "Pida al niño que le enseñe una idea del curso con un ejemplo de la casa. Enseñar es el mejor repaso.", "Escribe en una tarjeta la idea que más te gustó y la que fue más difícil. Guárdala para mirarla otra vez después."],
  },
  bugs: {
    en: ["40 minutes", "Finding bugs in everyday plans and in Python code, reading error messages, and detective tools like printing values.", "Write a plan with a mistake on purpose (“put on shoes, then socks”) and let the child find the bug.", "Find the 3 bugs: prin(\"Hello\") / if age > 8 / print(\"Bye). Rewrite each line correctly."],
    es: ["40 minutos", "Encontrar errores en planes del día a día y en código Python, leer mensajes de error y herramientas de detective como mostrar valores.", "Escriba un plan con un error a propósito (“ponerse los zapatos y luego las medias”) y deje que el niño encuentre el error.", "Encuentra los 3 errores: prin(\"Hola\") / if edad > 8 / print(\"Chao). Vuelve a escribir cada línea bien."],
  },
  powersInput: {
    en: ["45 minutes", "Asking the user questions with input(), chance with random, and finding things by key with dictionaries.", "Roll a die and keep score in a notebook, like a program would. Make a family “dictionary”: name → favorite food.", "Make a paper dice game: roll a die, and write what happens for each number from 1 to 6."],
    es: ["45 minutos", "Hacerle preguntas al usuario con input(), el azar con random y encontrar cosas por su llave con diccionarios.", "Lancen un dado y anoten los puntos en un cuaderno, como lo haría un programa. Hagan un “diccionario” de la familia: nombre → comida favorita.", "Haz un juego de dado en papel: lanza un dado y escribe qué pasa con cada número del 1 al 6."],
  },
  thinkSplit: {
    en: ["40 minutes", "Splitting a big problem into small ones, planning before coding, and testing step by step.", "Plan a small party or a trip together: split it into tasks, order them, and check each one when done.", "Split “clean my room” into 5 small tasks. Number them and add a box to tick each one."],
    es: ["40 minutos", "Partir un problema grande en problemas pequeños, planear antes de programar y probar paso a paso.", "Planeen juntos una fiesta pequeña o un paseo: divídanlo en tareas, pónganlas en orden y revisen cada una al terminar.", "Divide “arreglar mi cuarto” en 5 tareas pequeñas. Numéralas y agrega un cuadrito para marcar cada una."],
  },
  cleanNames: {
    en: ["40 minutes", "Choosing clear names, writing helpful comments, and not repeating code by using loops and functions.", "Label the drawers or shelves at home with clear names. Compare a label like “stuff” with one like “socks”.", "Rename these boxes so anyone understands them: x = 9, a = \"Ana\", n = 3. Add a comment for one line."],
    es: ["40 minutos", "Escoger nombres claros, escribir comentarios útiles y no repetir código usando bucles y funciones.", "Marquen cajones o repisas de la casa con nombres claros. Comparen una etiqueta como “cosas” con una como “medias”.", "Cámbiales el nombre a estas cajas para que cualquiera las entienda: x = 9, a = \"Ana\", n = 3. Agrega un comentario a una línea."],
  },
  checkpoint2: {
    en: ["45 minutes", "The licence exam: theory questions and real code that prepare for the game projects.", "Hold a small “licence ceremony” when it is passed. Ask which game the child wants to build first.", "Design your own driving licence for PyBot: your photo or drawing, your name, and the three things you know best."],
    es: ["45 minutos", "El examen de licencia: preguntas de teoría y código real que preparan para los proyectos de juegos.", "Hagan una pequeña “ceremonia de licencia” cuando lo pase. Pregunte qué juego quiere construir primero.", "Diseña tu propia licencia de PyBot: tu foto o dibujo, tu nombre y las tres cosas que mejor sabes."],
  },
  projectGuess: {
    en: ["2 hours, in several days", "Building six small games (guess the number, calculator, rock-paper-scissors, adventure, quiz, magic 8-ball) that join everything.", "Play the paper version of each game first: you think of a number, the child guesses with “higher” or “lower”.", "Draw the screens of your own game: what it asks, what the player answers, and how it ends."],
    es: ["2 horas, en varios días", "Construir seis juegos pequeños (adivina el número, calculadora, piedra-papel-tijera, aventura, quiz, bola 8 mágica) que juntan todo.", "Jueguen primero la versión en papel de cada juego: usted piensa un número y el niño adivina con “más alto” o “más bajo”.", "Dibuja las pantallas de tu propio juego: qué pregunta, qué contesta quien juega y cómo termina."],
  },
  turtleMoves: {
    en: ["1 hour", "Drawing with Python's turtle: moving and turning, shapes made with loops, and pictures made with functions.", "Be the turtle: the child gives you orders like “forward 3 steps, turn right” to walk a square in the living room.", "On squared paper, follow: forward 4, turn right, forward 4, turn right, forward 4, turn right, forward 4. What did you draw?"],
    es: ["1 hora", "Dibujar con la tortuga de Python: avanzar y girar, figuras hechas con bucles y dibujos hechos con funciones.", "Sea la tortuga: el niño le da órdenes como “adelante 3 pasos, gira a la derecha” para caminar un cuadrado en la sala.", "En papel cuadriculado sigue: adelante 4, gira a la derecha, adelante 4, gira a la derecha, adelante 4, gira a la derecha, adelante 4. ¿Qué dibujaste?"],
  },
};

const extrasPage = document.body.dataset.page;

function formatDay(day) {
  const date = new Date(`${day}T12:00:00`);
  return Number.isNaN(date.getTime()) ? day : date.toLocaleDateString(currentLanguage, { dateStyle: "long" });
}

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function renderAlbum() {
  const { days, bestRun, currentRun } = learningStreak();
  const today = todayString();
  const streakMain = document.querySelector("[data-album-streak]");
  const streakNote = document.querySelector("[data-album-streak-note]");
  if (days.length === 0) {
    streakMain.textContent = textFor("album.noDays");
    streakNote.textContent = "";
  } else {
    const total = days.length === 1 ? textFor("streak.oneDay") : textFor("streak.days").replace("{count}", String(days.length));
    streakMain.textContent = currentRun >= 2 ? `${textFor("streak.run").replace("{count}", String(currentRun))} ${total}` : total;
    const mood = days.includes(today) ? textFor("album.today") : textFor("album.welcomeBack");
    streakNote.textContent = bestRun >= 2 ? `${mood} ${textFor("album.best").replace("{count}", String(bestRun))}` : mood;
  }

  const badges = storedBadges();
  const list = badgeList();
  const grid = document.querySelector("[data-sticker-grid]");
  grid.replaceChildren(...list.map((badge) => {
    const date = badges.get(badge.id);
    const item = makeElement("li", `sticker${date ? " is-earned" : ""}`);
    item.append(makeElement("span", "sticker-icon", badge.icon), makeElement("b", "", textFor(badge.title)));
    item.querySelector(".sticker-icon").setAttribute("aria-hidden", "true");
    item.append(makeElement("small", "", date ? textFor("album.earnedOn").replace("{date}", formatDay(date)) : badgeHint(badge)));
    if (date && badge.zone) {
      const link = makeElement("a", "", textFor("album.diploma"));
      link.href = `diploma.html?zone=${encodeURIComponent(badge.zone.steps[0])}`;
      item.append(link);
    }
    return item;
  }));
  const earnedCount = list.filter((badge) => badges.has(badge.id)).length;
  document.querySelector("[data-sticker-count]").textContent = textFor("album.count")
    .replace("{count}", String(earnedCount))
    .replace("{total}", String(list.length));
}

function diplomaZone() {
  const id = new URLSearchParams(window.location.search).get("zone");
  return pathZones.find((zone) => zone.steps[0] === id) ?? null;
}

function renderDiploma() {
  const zone = diplomaZone();
  const isDone = zone ? zoneProgress().done.has(zone) : false;
  document.querySelector("[data-diploma]").hidden = !isDone;
  document.querySelector("[data-diploma-tools]").hidden = !isDone;
  document.querySelector("[data-diploma-tools-actions]").hidden = !isDone;
  document.querySelector(".meet-intro").hidden = !isDone;
  const missing = document.querySelector("[data-diploma-missing]");
  missing.hidden = isDone;
  if (!isDone) {
    missing.querySelector("p").textContent = zone
      ? textFor("diploma.missingText").replace("{name}", textFor(zone.title))
      : textFor("diploma.unknownText");
    return;
  }

  const index = pathZones.indexOf(zone);
  const nameInput = document.querySelector("[data-diploma-input]");
  if (!nameInput.dataset.ready) {
    nameInput.value = learnerName;
    nameInput.dataset.ready = "true";
    nameInput.addEventListener("input", renderDiplomaName);
  }
  renderDiplomaName();
  document.querySelector("[data-diploma-zone]").textContent = textFor(zone.title);
  document.querySelector("[data-diploma-sticker]").textContent = zoneBadgeIcons[index] ?? "⭐";
  document.querySelector("[data-diploma-date]").textContent = formatDay(storedBadges().get(zoneBadgeId(zone)) ?? todayString());
}

function renderDiplomaName() {
  const value = normalizeLearnerName(document.querySelector("[data-diploma-input]").value);
  document.querySelector("[data-diploma-name]").textContent = value || " ";
}

function renderGlossary() {
  const isSpanish = currentLanguage === "es";
  const search = document.querySelector("[data-glossary-search]");
  const query = search.value.trim().toLowerCase();
  const terms = glossaryTerms
    .map(([drawing, en, es, meaningEn, meaningEs, example]) => ({
      drawing,
      word: isSpanish ? es : en,
      other: isSpanish ? en : es,
      meaning: isSpanish ? meaningEs : meaningEn,
      example: Array.isArray(example) ? example[isSpanish ? 1 : 0] : example,
      search: `${en} ${es}`.toLowerCase(),
    }))
    .sort((a, b) => a.word.localeCompare(b.word, currentLanguage));
  const shown = terms.filter((term) => !query || term.search.includes(query));
  document.querySelector("[data-glossary-list]").replaceChildren(...shown.map((term) => {
    const item = makeElement("li", "glossary-term");
    const drawing = makeElement("span", "glossary-drawing", term.drawing);
    drawing.setAttribute("aria-hidden", "true");
    item.append(
      drawing,
      makeElement("h2", "", term.word),
      makeElement("p", "glossary-other", textFor("glossary.other").replace("{word}", term.other)),
      makeElement("p", "", term.meaning),
      makeElement("code", "", term.example),
    );
    return item;
  }));
  document.querySelector("[data-glossary-empty]").hidden = shown.length > 0;
}

function renderGuide() {
  const isSpanish = currentLanguage === "es";
  document.querySelector("[data-guide-list]").replaceChildren(...pathZones.map((zone, index) => {
    const guide = guideZones[zone.steps[0]];
    if (!guide) {
      return "";
    }
    const [time, learn, home, challenge] = isSpanish ? guide.es : guide.en;
    const item = makeElement("li", "guide-zone");
    const header = makeElement("header");
    header.append(
      makeElement("span", "guide-number", String(index).padStart(2, "0")),
      makeElement("h2", "", textFor(zone.title)),
      makeElement("span", "guide-time", textFor("guide.time").replace("{time}", time)),
    );
    const details = makeElement("dl");
    [["guide.learn", learn, ""], ["guide.home", home, ""], ["guide.challenge", challenge, "guide-challenge"]].forEach(([label, text, className]) => {
      const group = makeElement("div", className);
      group.append(makeElement("dt", "", textFor(label)), makeElement("dd", "", text));
      details.append(group);
    });
    item.append(header, details);
    return item;
  }));
}

const extrasRenderers = { album: renderAlbum, diploma: renderDiploma, glossary: renderGlossary, guide: renderGuide };

function renderExtras() {
  setLanguage(currentLanguage, false);
  extrasRenderers[extrasPage]?.();
}

languageButtons.forEach((button) => button.addEventListener("click", () => extrasRenderers[extrasPage]?.()));
document.querySelector("[data-glossary-search]")?.addEventListener("input", renderGlossary);
document.querySelectorAll("[data-print]").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.toggle("print-challenges", button.dataset.print === "challenges");
    window.print();
  });
});
window.addEventListener("afterprint", () => document.body.classList.remove("print-challenges"));

renderExtras();

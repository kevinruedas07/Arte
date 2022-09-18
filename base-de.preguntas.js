function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
        {
        pregunta: "1 ¿Quién escribió La Odisea?",
        respuesta: "Homero",
        distractores: ["Virgilio", "Amaya"],
        },
        {
        pregunta: "2 ¿Cuál es la obra más importante de la literatura española?",
        respuesta: "Don Quijote de la Mancha",
        distractores: ["El Principito", "Amor en tiempos de cólera"],
        },
        {
        pregunta: "3 ¿Quién pinto el famoso cuadro La última cena?",
        respuesta: "Leonardo da Vinci",
        distractores: ["Rembrandt", "Velázquez"],
        },
        {
        pregunta: "4 ¿Cómo se llama el Himno Nacional de Francia?",
        respuesta: "La Marsellesa",
        distractores: ["La solitaria", "La incondicional"],
        },
        {
          pregunta: "5 ¿A qué se denomina séptimo arte?",
          respuesta: "Cine",
          distractores: ["Música", "Pintura"],
        },
        {
          pregunta: "6 ¿Qué es un melómano?",
          respuesta: "Un amante de la música",
          distractores: ["Un amante del cine", " Un amante de los comics"],
        },
        {
          pregunta: "7 ¿Cómo se llama la estrofa poética que está conformada por 10 versos de 8 sílabas cada uno?",
          respuesta: "Décima espinela",
          distractores: ["Decasílabo octogonal", "Decasílabo"],
        },
        {
          pregunta: "8 ¿Cuáles son las notas musicales?",
          respuesta: "Do, Re, Mi, Fa, Sol, La, Si",
          distractores: ["Do, Re, Mi, Sol, La, Si, Do", "Do, Re, Sol, La, Si"],
        },
        {
          pregunta: "9 ¿Quién escribió Cien años de soledad?",
          respuesta: "Gabriel García Márquez",
          distractores: ["Frida", "Gótico Americano"],
        },
        {
          pregunta: "10 ¿Cuál es el arte más representativo de Colombia?",
          respuesta: "Donación Botero",
          distractores: ["Miguel Ángelo", " Velázquez"],
        },
        {
          pregunta: "11 ¿Quién es denominado el Rey del Rock and Roll en Estados Unidos?",
          respuesta: "Elvis Presley",
          distractores: ["Michael Jackson", "Bruce Springsteen"],
        },
        {
          pregunta: "12 ¿Cuál es el nombre de la artista mexicana conocida como la Doña?",
          respuesta: "Maria Félix",
          distractores: [" Paulina Rubio", "Frida Kahlo"],
        },
        {
          pregunta: "13 ¿En qué año murió Kurt Cobain?",
          respuesta: "1994",
          distractores: ["1996", "1998"],
        },
        {
          pregunta: "14 ¿Quién compuso Los Conciertos de Brandeburgo?",
          respuesta: "Bach",
          distractores: ["Mozart", "Beethoven"],
        },
        {
          pregunta: "15 ¿Quién pinto la noche estrellada?",
          respuesta: "Vincent van Gogh",
          distractores: ["Miguel Ángel", "Claude Monet"],
        },
        
  ];

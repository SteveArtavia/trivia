let preguntas = [
    {
        pregunta: '¿Cuál es la capital de Australia?',
        opciones: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
        respuestaCorrecta: 'Canberra'
    },
    {
        pregunta: '¿Quién pintó la Mona Lisa?',
        opciones: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
        respuestaCorrecta: 'Leonardo da Vinci'
    },
    {
        pregunta: '¿Cuál es el animal más rápido del mundo?',
        opciones: ['Leopardo', 'Guepardo', 'León', 'Tigre'],
        respuestaCorrecta: 'Guepardo'
    },
    {
        pregunta: '¿En qué año se descubrió América?',
        opciones: ['1492', '1519', '1453', '1532'],
        respuestaCorrecta: '1492'
    },
    {
        pregunta: '¿Cuál es el elemento químico más abundante en el universo?',
        opciones: ['Oxígeno', 'Hidrógeno', 'Carbono', 'Nitrógeno'],
        respuestaCorrecta: 'Hidrógeno'
    },
    {
        pregunta: '¿Cuál es el océano más grande de la Tierra?',
        opciones: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
        respuestaCorrecta: 'Océano Pacífico'
    },
    {
        pregunta: '¿Quién escribió la obra de teatro "Romeo y Julieta"?',
        opciones: ['Miguel de Cervantes', 'William Shakespeare', 'Charles Dickens', 'Mark Twain'],
        respuestaCorrecta: 'William Shakespeare'
    },
    {
        pregunta: '¿Cuál es la fórmula química del agua?',
        opciones: ['CO2', 'NaCl', 'H2O', 'O2'],
        respuestaCorrecta: 'H2O'
    },
    {
        pregunta: '¿En qué país se encuentra la Torre Eiffel?',
        opciones: ['Londres', 'Nueva York', 'París', 'Roma'],
        respuestaCorrecta: 'París'
    },
    {
        pregunta: '¿Cuál es el planeta más cercano al Sol?',
        opciones: ['Marte', 'Venus', 'Mercurio', 'Tierra'],
        respuestaCorrecta: 'Mercurio'
    },
    {
        pregunta: "¿Cuál es el país con más volcanes activos?",
        opciones: ["Islandia", "Japón", "Indonesia", "Estados Unidos"],
        respuestaCorrecta: "Indonesia"
    },
    {
        pregunta: "¿Quién escribió la novela '1984'?",
        opciones: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Isaac Asimov"],
        respuestaCorrecta: "George Orwell"
    },
    {
        pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
        opciones: ["Oro", "Plata", "Aluminio", "Hierro"],
        respuestaCorrecta: "Aluminio"
    },
    {
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        opciones: ["1969", "1979", "1959", "1949"],
        respuestaCorrecta: "1969"
    },
    {
        pregunta: "¿Cuál es la capital de Brasil?",
        opciones: ["Río de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        respuestaCorrecta: "Brasilia"
    },
    {
        pregunta: "¿Quién pintó el cuadro 'Las meninas'?",
        opciones: ["Vincent van Gogh", "Diego Velázquez", "Pablo Picasso", "Leonardo da Vinci"],
        respuestaCorrecta: "Diego Velázquez"
    },
    {
        pregunta: "¿Cuál es el país de origen del tango?",
        opciones: ["Argentina", "España", "Uruguay", "Brasil"],
        respuestaCorrecta: "Argentina"
    },
    {
        pregunta: "¿Cuál es el elemento químico más abundante en el cuerpo humano?",
        opciones: ["Carbono", "Oxígeno", "Hidrógeno", "Nitrógeno"],
        respuestaCorrecta: "Oxígeno"
    },
    {
        pregunta: "¿En qué año se produjo la Revolución Francesa?",
        opciones: ["1789", "1848", "1776", "1815"],
        respuestaCorrecta: "1789"
    },
    {
        pregunta: "¿Cuál es el animal más grande que ha existido?",
        opciones: ["Dinosaurio T-Rex", "Ballena Azul", "Mamut", "Elefante"],
        respuestaCorrecta: "Ballena Azul"
    },
    {
        pregunta: "¿Quién escribió la novela 'El Principito'?",
        opciones: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Alexandre Dumas"],
        respuestaCorrecta: "Antoine de Saint-Exupéry"
    },
    {
        pregunta: "¿Cuál es la capital de Canadá?",
        opciones: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
        respuestaCorrecta: "Ottawa"
    },
    {
        pregunta: "¿En qué deporte se utiliza un birdie?",
        opciones: ["Golf", "Tenis", "Básquetbol", "Fútbol"],
        respuestaCorrecta: "Golf"
    },
    {
        pregunta: "¿Cuál es el río más largo de África?",
        opciones: ["Nilo", "Amazonas", "Congo", "Mekong"],
        respuestaCorrecta: "Nilo"
    },
    {
        pregunta: "¿Quién inventó la bombilla eléctrica?",
        opciones: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Albert Einstein"],
        respuestaCorrecta: "Thomas Edison"
    },
    {
        pregunta: "¿Cuál es la moneda oficial de Japón?",
        opciones: ["Dólar", "Yen", "Euro", "Yuan"],
        respuestaCorrecta: "Yen"
    },
    {
        pregunta: "¿En qué deporte se utiliza una raqueta?",
        opciones: ["Fútbol", "Básquetbol", "Tenis", "Natación"],
        respuestaCorrecta: "Tenis"
    },
    {
        pregunta: "¿Cuál es la capital de Italia?",
        opciones: ["Roma", "Venecia", "Florencia", "Milán"],
        respuestaCorrecta: "Roma"
    },
    {
        pregunta: "¿Cuál es el océano más pequeño del mundo?",
        opciones: ["Océano Atlántico", "Océano Índico", "Océano Pacífico", "Océano Ártico"],
        respuestaCorrecta: "Océano Ártico"
    },
    {
        pregunta: "¿En qué continente se encuentra Australia?",
        opciones: ["América", "Asia", "Europa", "Oceanía"],
        respuestaCorrecta: "Oceanía"
    },
    {
        pregunta: "¿Cuál es el metal más valioso?",
        opciones: ["Oro", "Plata", "Platino", "Diamante"],
        respuestaCorrecta: "Platino"
    },
    {
        pregunta: "¿Quién escribió la obra 'El Principito'?",
        opciones: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Alexandre Dumas"],
        respuestaCorrecta: "Antoine de Saint-Exupéry"
    },
    {
        pregunta: "¿Cuál es el país con más pirámides?",
        opciones: ["Egipto", "México", "China", "Perú"],
        respuestaCorrecta: "Sudán"
    },

];

export default preguntas;
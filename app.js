import preguntas from './preguntas.js';
console.log(preguntas);

let preguntaHTML = document.getElementById('pregunta');
let opcionesHTML = document.getElementById('opciones');

let preguntaGenerada = '';
let intentos = 0;

function generarPregunta() {
    let preguntaRandom = Math.floor(Math.random() * preguntas.length);
    return preguntaRandom;
}

function mostrarPregunta(){

    let indice = generarPregunta();
    preguntaGenerada = preguntas[indice];

    let pregunta = preguntaGenerada.pregunta;
    let opciones = preguntaGenerada.opciones;

    preguntaHTML.innerHTML = `${pregunta}`;

    opcionesHTML.innerHTML = '';

    opciones.forEach(opcion => {
        opcionesHTML.innerHTML += `<li><button onclick="seleccionarOpcion('${opcion}');">${opcion}</button></li>`
    });

    return;
}

mostrarPregunta();

window.seleccionarOpcion = function(opcionSeleccionada){
    console.log(opcionSeleccionada);
    if(opcionSeleccionada === preguntaGenerada.respuestaCorrecta){
        console.log(`respuesta correcta`);
        mostrarPregunta();
    }else{
        console.log(`respuesta incorrecta`);
        mostrarPregunta();
    }
}
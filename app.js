import preguntas from './preguntas.js';

let preguntaHTML = document.getElementById('pregunta');
let opcionesHTML = document.getElementById('opciones');

let preguntaGenerada = '';
let intentos = 0;
let puntos = 0;

function generarPregunta() {
    let preguntaRandom = Math.floor(Math.random() * preguntas.length);
    return preguntaRandom;
}

function mostrarPregunta(){

    let indice = generarPregunta();
    preguntaGenerada = preguntas[indice];

    let pregunta = preguntaGenerada.pregunta;
    let opciones = preguntaGenerada.opciones;
    let puntosHTML = document.getElementById('puntos');

    preguntaHTML.innerHTML = `${pregunta}`;

    opcionesHTML.innerHTML = '';

    opciones.forEach(opcion => {
        opcionesHTML.innerHTML += `<li><button onclick="seleccionarOpcion('${opcion}');">${opcion}</button></li><br>`
    });

    puntosHTML.innerHTML = `puntos: ${puntos}`;

    return;
}

mostrarPregunta();

window.seleccionarOpcion = function(opcionSeleccionada){
    if(opcionSeleccionada === preguntaGenerada.respuestaCorrecta){
        puntos += 10;
        intentos++;
        mostrarPregunta();
        console.log(puntos)
    }else{
        intentos++;
        mostrarPregunta();
        console.log(puntos);
    }

    if(intentos == 5){
        reiniciarTrivia();
    }

    return;
}

function reiniciarTrivia(){
    //Agregar un modal de sweetalert o alguna libreria de notificaciones
    puntos = 0;
    intentos = 0;
    mostrarPregunta();
}

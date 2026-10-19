"use strict";
function contarPalabras(palabra) {
    var listaPalabras = [];
    palabra.split(" ");
    listaPalabras.push(palabra);
    var numPalabras = listaPalabras.length;
    console.log("La cantidad de palabras en tu frase es: " + numPalabras);
}
function getAvenger(nombre, arma = "arco", poder) {
    return nombre + " " + poder + " " + " " + arma;
}
contarPalabras("Quiero que cuente cuantas palabras hay");
contarPalabras("Son 2");
getAvenger("Paco", "Bate", "Volar");
getAvenger("Paquita", "Fuego");

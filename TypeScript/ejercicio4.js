"use strict";
class Animal {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    hacerRuido() {
        console.log("Ruido");
    }
}
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad, "perro");
        this.raza = raza;
    }
    hacerRuido() {
        console.log("Guau");
    }
    traerPelota() {
        console.log(this.getNombre() + " trae la pelota");
    }
}
class Pajaro extends Animal {
    constructor(nombre, edad, color) {
        super(nombre, edad, "pajaro");
        this.color = color;
    }
    hacerRuido() {
        console.log("Pio pio");
    }
    volar() {
        console.log(this.getNombre() + " esta volando");
    }
}
var perro = new Perro("Toby", 5, "Labrador");
var pajaro = new Pajaro("Piolin", 2, "amarillo");
console.log(perro.getNombre() + " " + perro.getTipo());
perro.hacerRuido();
perro.traerPelota();
console.log(pajaro.getNombre() + " " + pajaro.getTipo());
pajaro.hacerRuido();
pajaro.volar();

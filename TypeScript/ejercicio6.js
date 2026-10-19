"use strict";
class Almacen {
    constructor() {
        this.elementos = [];
    }
    agregarElemento(x) {
        this.elementos.push(x);
    }
    obtenerElemento(posicion) {
        return this.elementos[posicion];
    }
    listarElementos() {
        for (var index = 0; index < this.elementos.length; index++) {
            console.log(this.elementos[index]);
        }
    }
}
var numeros = new Almacen();
numeros.agregarElemento(10);
numeros.agregarElemento(25);
console.log(numeros.obtenerElemento(1));
numeros.listarElementos();
var nombres = new Almacen();
nombres.agregarElemento("Paco");
nombres.agregarElemento("Paca");
console.log(nombres.obtenerElemento(0));
nombres.listarElementos();
var personas = new Almacen();
personas.agregarElemento({ nombre: "Paco", edad: 20 });
personas.agregarElemento({ nombre: "Paca", edad: 22 });
console.log(personas.obtenerElemento(0));
personas.listarElementos();

"use strict";
class Laptop {
    constructor(nombre, modelo) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log("Portatil encendido");
    }
    apagar() {
        this.encendido = false;
        console.log("Portatil apagado");
    }
    abrirPrograma(programa) {
        console.log("Abriendo " + programa);
    }
}
class Smartphone {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log("Movil encendido");
    }
    apagar() {
        this.encendido = false;
        console.log("Movil apagado");
    }
    llamar(numero) {
        console.log("Llamando a " + numero);
    }
}
var portatil = new Laptop("Portatil", "Lenovo");
var movil = new Smartphone("Galaxy", "Samsung");
portatil.encender();
portatil.abrirPrograma("Word");
portatil.apagar();
movil.encender();
movil.llamar("600123456");
movil.apagar();

"use strict";
class Employee {
    constructor(nombre, apellido, edad, fechaInicio, fechaFin, profesion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.profesion = profesion;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getFechaInicio() {
        return this.fechaInicio;
    }
    setFechaInicio(fechaInicio) {
        this.fechaInicio = fechaInicio;
    }
    getFechaFin() {
        return this.fechaFin;
    }
    setFechaFin(fechaFin) {
        this.fechaFin = fechaFin;
    }
    getProfesion() {
        return this.profesion;
    }
    setProfesion(profesion) {
        this.profesion = profesion;
    }
}
var empleado1 = new Employee("Paco", "Garcia", 45, new Date("2015-04-01"), new Date("2023-09-30"), "Fontanero");
var empleado2 = new Employee("Paca", "Lopez", 30, new Date("2020-01-15"), null, "Programadora");
console.log(empleado1.getNombre() + " " + empleado1.getEdad());
console.log(empleado2.getNombre() + " " + empleado2.getEdad());

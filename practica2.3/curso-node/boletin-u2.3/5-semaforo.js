var EventEmitter = require("events")

class Semaforo extends EventEmitter {
   constructor(ms) {
      super()
      this.colores = ["verde", "amarillo", "rojo"]
      this.posicion = 0
      this.color = "verde"

      var semaforo = this

      this.intervalo = setInterval(function () {
         semaforo.posicion++
         if (semaforo.posicion === 3) {
            semaforo.posicion = 0
         }
         semaforo.color = semaforo.colores[semaforo.posicion]
         semaforo.emit("cambio", semaforo.color)
         if (semaforo.color === "rojo") {
            semaforo.emit("rojo")
         }
      }, ms)
   }

   parar() {
      clearInterval(this.intervalo)
      this.emit("parado")
   }
}

module.exports = Semaforo

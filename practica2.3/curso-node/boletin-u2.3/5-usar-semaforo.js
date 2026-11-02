var Semaforo = require("./5-semaforo")
var semaforo = new Semaforo(1000)
var rojos = 0

console.log("Color: " + semaforo.color)

semaforo.on("cambio", function (color) {
   console.log("Color: " + color)
})

semaforo.once("rojo", function () {
   console.log("(primer rojo: ¡frena!)")
})

semaforo.on("rojo", function () {
   rojos++
   if (rojos === 2) {
      semaforo.parar()
   }
})

semaforo.on("parado", function () {
   console.log("Semáforo apagado")
})

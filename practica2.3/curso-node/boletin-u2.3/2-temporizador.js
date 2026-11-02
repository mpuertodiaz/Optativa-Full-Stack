var segundos = Number(process.argv[2])
var mensaje = process.argv.slice(3).join(" ") || "¡Tiempo!"

if (isNaN(segundos) || segundos <= 0 || segundos % 1 !== 0) {
   console.error("Tienes que poner los segundos, por ejemplo: node 2-temporizador.js 10 Sacar la pizza")
   process.exit(1)
}

console.time("Duración")
var quedan = segundos

var intervalo = setInterval(function () {
   quedan--
   if (quedan === 0) {
      clearInterval(intervalo)
      console.log(mensaje)
      console.timeEnd("Duración")
   } else {
      console.log(`Quedan ${quedan} s`)
   }
}, 1000)

setTimeout(function () {
   console.log("¡Ya vas por la mitad!")
}, segundos * 1000 / 2)

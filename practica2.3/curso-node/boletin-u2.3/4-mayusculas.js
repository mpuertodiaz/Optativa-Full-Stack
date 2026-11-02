var fs = require("fs")

process.stdout.write("Qué fichero quieres copiar: ")

process.stdin.once("data", function (resp) {
   var origen = resp.toString().trim()
   var destino = "MAYUS-" + origen
   var lectura = fs.createReadStream(origen, "utf8")
   var escritura = fs.createWriteStream(destino)
   var bytes = 0

   lectura.on("data", function (chunk) {
      bytes += Buffer.byteLength(chunk)
      escritura.write(chunk.toUpperCase())
   })

   lectura.on("end", function () {
      escritura.end()
   })

   lectura.on("error", function (err) {
      console.error("No se ha podido leer el fichero:", err.message)
      process.exit(1)
   })

   escritura.on("finish", function () {
      console.log(`Creado ${destino} (${bytes} bytes)`)
      process.exit()
   })
})

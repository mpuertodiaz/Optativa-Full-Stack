var fs = require("fs")
var path = require("path")

var carpeta = process.argv[2] || __dirname
var ficheros = fs.readdirSync(carpeta)
var conteo = {}

ficheros.forEach(function (fichero) {
   var ext = path.extname(fichero)
   if (ext === "") {
      ext = "(sin extensión)"
   }
   if (conteo[ext]) {
      conteo[ext]++
   } else {
      conteo[ext] = 1
   }
})

console.table(conteo)

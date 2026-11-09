var http = require("http")
var fs = require("fs")
var path = require("path")

var tipos = {
   ".html": "text/html; charset=utf-8",
   ".css": "text/css; charset=utf-8"
}

var rutas = {
   "/": "index.html",
   "/contacto": "contacto.html",
   "/estilos.css": "estilos.css"
}

var servidor = http.createServer(function (req, res) {
   console.log(req.method, req.url)

   var fichero = rutas[req.url]
   var codigo = 200
   if (!fichero) {
      fichero = "404.html"
      codigo = 404
   }

   var ruta = path.join(__dirname, "paginas", fichero)
   var tipo = tipos[path.extname(ruta)]

   fs.readFile(ruta, function (err, datos) {
      if (err) {
         res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
         return res.end("Error 500: no se ha podido leer el fichero")
      }
      res.writeHead(codigo, { "Content-Type": tipo })
      res.end(datos)
   })
})

servidor.listen(3000, function () {
   console.log("Servidor en http://localhost:3000")
})

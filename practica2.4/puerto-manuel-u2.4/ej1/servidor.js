var http = require("http")

var HTML = { "Content-Type": "text/html; charset=utf-8" }

var rutas = {
   "/": "<h1>Inicio</h1><a href=\"/sobre-mi\">Sobre mí</a> | <a href=\"/aficiones\">Aficiones</a> | <a href=\"/hora\">Hora</a>",
   "/sobre-mi": "<h1>Manuel Puerto Díaz</h1><p>Estudio 2º de DAM y este año estoy aprendiendo a hacer servidores con Node.js.</p>",
   "/aficiones": "<h1>Aficiones</h1><ul><li>Programar</li><li>Videojuegos</li><li>Editar vídeos</li></ul>"
}

var servidor = http.createServer(function (req, res) {
   console.log(req.method, req.url)

   var contenido = rutas[req.url]
   if (req.url === "/hora") {
      contenido = "<h1>Son las " + new Date().toLocaleTimeString("es-ES") + "</h1>"
   }

   if (contenido) {
      res.writeHead(200, HTML)
      res.end(contenido)
   } else {
      res.writeHead(404, HTML)
      res.end("<h1>Error 404: la ruta no existe</h1><a href=\"/\">Volver al inicio</a>")
   }
})

servidor.listen(3000, function () {
   console.log("Servidor en http://localhost:3000")
})

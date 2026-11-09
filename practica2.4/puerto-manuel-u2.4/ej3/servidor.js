var http = require("http")
var fs = require("fs")
var path = require("path")

var HTML = { "Content-Type": "text/html; charset=utf-8" }
var firmas = []

var servidor = http.createServer(function (req, res) {
   console.log(req.method, req.url)
   var url = new URL(req.url, "http://localhost")

   if (req.method === "GET" && url.pathname === "/") {
      var ruta = path.join(__dirname, "recursos", "formulario.html")
      fs.readFile(ruta, function (err, datos) {
         if (err) {
            res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" })
            return res.end("Error 500: no se ha podido leer el formulario")
         }
         res.writeHead(200, HTML)
         res.end(datos)
      })
   } else if (req.method === "POST" && url.pathname === "/firmar") {
      var cuerpo = ""
      req.on("data", function (chunk) {
         cuerpo += chunk
      })
      req.on("end", function () {
         var datos = new URLSearchParams(cuerpo)
         var nombre = (datos.get("nombre") || "").trim()
         var mensaje = (datos.get("mensaje") || "").trim()

         var error = ""
         if (!nombre) {
            error = "El nombre es obligatorio."
         } else if (!mensaje) {
            error = "El mensaje es obligatorio."
         } else if (mensaje.length > 200) {
            error = "El mensaje no puede tener más de 200 caracteres."
         }

         if (error) {
            res.writeHead(400, HTML)
            return res.end("<h1>No se ha podido firmar</h1><p>" + error + "</p><a href=\"/\">Volver</a>")
         }

         firmas.push({ nombre: nombre, mensaje: mensaje, fecha: new Date() })
         res.writeHead(201, HTML)
         res.end("<h1>Gracias por firmar, " + nombre + "</h1><a href=\"/\">Volver</a>")
      })
   } else if (req.method === "GET" && url.pathname === "/firmas") {
      var filtro = url.searchParams.get("nombre")
      var lista = firmas
      if (filtro) {
         lista = firmas.filter(function (firma) {
            return firma.nombre === filtro
         })
      }
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" })
      res.end(JSON.stringify(lista, null, 2))
   } else {
      res.writeHead(404, HTML)
      res.end("<h1>Error 404</h1>")
   }
})

servidor.listen(3000, function () {
   console.log("Servidor en http://localhost:3000")
})

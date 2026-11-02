var http = require("http")
var os = require("os")
var crypto = require("crypto")

var puerto = process.env.PORT || 3000

var servidor = http.createServer(function (req, res) {
   console.log(req.method, req.url)

   if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
      res.end("<h1>Servidor de 2º DAM</h1><p>Prueba también /info y /dado</p>")
   } else if (req.url === "/info") {
      var info = {
         sistema: os.type(),
         cpus: os.cpus().length,
         node: process.version
      }
      res.writeHead(200, { "Content-Type": "application/json" })
      res.end(JSON.stringify(info))
   } else if (req.url === "/dado") {
      var numero = crypto.randomInt(1, 7)
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
      res.end(`<h1>Has sacado un ${numero}</h1>`)
   } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" })
      res.end("404 - Página no encontrada")
   }
})

servidor.listen(puerto, function () {
   console.log(`Servidor en http://localhost:${puerto}`)
})

var texto = process.argv[2]

if (!texto) {
   console.error("Tienes que escribir un texto, por ejemplo: node 3-bytes.js hola")
   process.exit(1)
}

console.log("Caracteres:", texto.length)
console.log("Bytes:", Buffer.byteLength(texto))
console.log("Buffer:", Buffer.from(texto))

var buf = Buffer.alloc(26)
for (var i = 0; i < buf.length; i++) {
   buf[i] = 65 + i
}
console.log("Abecedario:", buf.toString("ascii"))

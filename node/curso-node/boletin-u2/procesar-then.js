var fs = require('fs/promises')

var config

fs.readFile('config.json', 'utf8')
    .then((datos) => {
        config = JSON.parse(datos)
        return fs.readFile(config.entrada, 'utf8')
    })
    .then((texto) => {
        var lineas = texto.trim().split('\n').length
        var informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}\n`
        return fs.writeFile(config.salida, informe)
    })
    .then(() => {
        console.log('Informe creado en', config.salida)
    })
    .catch((err) => {
        console.error('Error:', err.message)
    })

var fs = require('fs/promises')

async function procesar() {
    try {
        var datos = await fs.readFile('config.json', 'utf8')
        var config = JSON.parse(datos)
        var texto = await fs.readFile(config.entrada, 'utf8')
        var lineas = texto.trim().split('\n').length
        var informe = `Fichero: ${config.entrada}\nLíneas: ${lineas}\n`
        await fs.writeFile(config.salida, informe)
        console.log('Informe creado en', config.salida)
    } catch (err) {
        console.error('Error:', err.message)
    }
}

procesar()

var fs = require('fs/promises')
var pc = require('picocolors')
var { media, aprobados, mejor } = require('./notas')

async function main() {
    try {
        var datos = await fs.readFile('notas.json', 'utf8')
        var lista = JSON.parse(datos)

        for (var i = 0; i < lista.length; i++) {
            var alumno = lista[i]
            if (alumno.nota >= 5) {
                console.log(pc.green(alumno.nombre + ': ' + alumno.nota))
            } else {
                console.log(pc.red(alumno.nombre + ': ' + alumno.nota))
            }
        }

        console.log('Media:', media(lista).toFixed(2))
        console.log('Aprobados:', aprobados(lista).length)
        console.log('Mejor alumno:', mejor(lista).nombre)
    } catch (err) {
        console.error('Error:', err.message)
    }
}

main()

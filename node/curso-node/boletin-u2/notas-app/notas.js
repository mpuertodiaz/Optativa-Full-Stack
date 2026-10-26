function media(lista) {
    var suma = lista.reduce((total, alumno) => total + alumno.nota, 0)
    return suma / lista.length
}

function aprobados(lista) {
    return lista.filter((alumno) => alumno.nota >= 5)
}

function mejor(lista) {
    return lista.reduce((max, alumno) => {
        if (alumno.nota > max.nota) {
            return alumno
        }
        return max
    }, lista[0])
}

module.exports = { media, aprobados, mejor }

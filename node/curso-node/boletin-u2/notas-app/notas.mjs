export function media(lista) {
    var suma = lista.reduce((total, alumno) => total + alumno.nota, 0)
    return suma / lista.length
}

export function aprobados(lista) {
    return lista.filter((alumno) => alumno.nota >= 5)
}

export function mejor(lista) {
    return lista.reduce((max, alumno) => {
        if (alumno.nota > max.nota) {
            return alumno
        }
        return max
    }, lista[0])
}

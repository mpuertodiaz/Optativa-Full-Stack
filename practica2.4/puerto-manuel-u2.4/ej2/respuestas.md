1. GET / y GET /estilos.css. La segunda la hace el navegador al leer el link del HTML para cargar el CSS.

2. readFile carga el fichero entero en memoria antes de enviarlo, con 500 MB por cada peticion. Usaria fs.createReadStream(ruta).pipe(res) para enviarlo a trozos.

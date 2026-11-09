1. La hace el navegador para pedir el icono de la pestaña. Mi servidor le responde con el 404 porque esa ruta no existe.

2. Porque el objeto se crea una sola vez al arrancar el servidor y la hora se queda guardada. Hay que calcularla dentro de createServer para que se haga en cada peticion.

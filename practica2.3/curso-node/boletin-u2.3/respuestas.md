Ejercicio 1

a) querystring esta en nivel 3, Legacy, que quiere decir que se puede usar pero hay algo mejor, y la documentacion dice que se use URLSearchParams. new Buffer() esta en nivel 0, Deprecated, o sea que esta obsoleto y no hay que usarlo, en vez de eso se usa Buffer.from() o Buffer.alloc().

b) path y callback son obligatorios y options es opcional. Lo se porque options va entre corchetes.

c) 1-extensiones.js

Ejercicio 2

2-temporizador.js

e) Termina solo porque despues de clearInterval ya no le queda nada por hacer. Si no lo llamara el intervalo seguiria repitiendose y el programa no acabaria nunca, habria que pararlo con ctrl+c.

Ejercicio 3

3-bytes.js

Texto     Caracteres   Bytes
hola      4            4
España    6            7
5 €       3            5
😀        2            4

No coinciden siempre porque en UTF-8 hay caracteres que ocupan mas de un byte. Una letra normal ocupa 1, la ñ 2, el € 3 y el emoji 4, y ademas el emoji cuenta como 2 caracteres.

Ejercicio 4

4-mayusculas.js

e) No puedo usar pipe porque copia el fichero tal cual y aqui hay que pasar cada trozo a mayusculas antes de escribirlo. Hace falta process.exit() porque stdin se queda esperando a que escriba algo y el programa no se cerraria.

Ejercicio 5

5-semaforo.js y 5-usar-semaforo.js

Ejercicio 6

6-servidor.js

e) Sale GET /favicon.ico porque el navegador pide solo el icono de la pagina para la pestaña. Si arranco el servidor dos veces en el mismo puerto el segundo da error EADDRINUSE, porque el puerto ya lo esta usando el primero.

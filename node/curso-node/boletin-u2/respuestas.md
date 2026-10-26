Ejercicio 1

a) El orden es A, D, B, C. A y D son codigo sincrono y se ejecutan directamente en la pila. setTimeout y readFile se mandan a Node y sus callbacks van a la cola, y el event loop los ejecuta cuando la pila queda vacia.

b) He acertado. readFileSync es bloqueante porque el programa se para hasta leer el fichero. setTimeout y readFile no son bloqueantes, el programa sigue y luego se ejecuta el callback.

c) Sale A, D true, B y el error de que no existe el fichero en vez de C. El programa no se para porque el error lo controlo con err.

d) process.version muestra la version de Node. document.title da error "document is not defined" y el programa se para, porque en Node no hay DOM ni window como en el navegador.

Ejercicio 2

a) Es callback hell porque hay callbacks unos dentro de otros y cuesta leerlo. Van dentro del anterior porque cada paso necesita el resultado del anterior.

b) procesar-then.js

c) procesar-async.js

d) Las tres muestran el error de que no existe alumnos.txt. Con callbacks controlo el error en 3 sitios, con then en 1 (el catch) y con async/await en 1 (el catch).

e) procesar-esperar.js

Ejercicio 3

El proyecto esta en notas-app.

6) npm start ejecuta el programa una vez. npm run dev lo deja vigilando y cuando cambio una nota y guardo se vuelve a ejecutar solo.

7) Despues de borrar node_modules y hacer npm install funciona igual. package.json tiene los datos del proyecto, los scripts y las dependencias. package-lock.json guarda las versiones exactas instaladas.

8) Con import hay que poner la extension del fichero: './notas.mjs' en vez de './notas'.

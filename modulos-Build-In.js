//*MODULOS "BUILDIN / CORE" (INCORPORADOS) - pasar a app para que funcione */

//*📌📌 estos son algunos de los metodos utiles que usaremos en el futuro */

//*📌 modulo CONSOLE */

/* console.log() */
/* console.warn() */
/* console.error() */
/* console.assert() */
/* console.table() */

console.log('hola Pei');
console.warn('no duermas con la salsa pei');
console.error( new Error ('Ocurrio un error...!')) /* para un mensaje mas detallado creamos un "nuevo error" */

//*📌 PROCESS - informacion del proceso que se esta cejecutando */

console.log(process); 

//*📌 PROCESS.ENV - informacion del "ENTORNO" de ejecucion del programa*/
console.log(process.env);

//*📌 PROCESS.ARGV -  crear un objeto a partir de los argumentos que le pasemos por consola*/
console.log(process.argv);

/* ej: node app.js 8 9 => aqui estamos pasando los argumentos 8 y 7 para mostrar como convierte estos elementos en un objeto  
([
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\JAVO\\programacion\\Coderhouse\\node\\app.js',
  '8',
  '9'
])
*/
console.log(process.argv);

/* como es un arreglo, podemos acceder a esos valores medianbte su indice */
console.log(process.argv[2,3]);

//*📌 PROCESS.memoryUsage - para ver el uso de la memoria actual*/

//*📌 OS - para ver el sistema operativo de la computadora */
/* en este caso debemos crear una constante para poder usar el metodo "type()" y ver su informacion */

const os = require('os');

console.log(os.type());

//*📌 OS.homedir - para ver el directorio principal de la computadora */
 console.log(os.homedir());

//*📌 OS.uptime - para ver el tiempo en segundos que lleva encendida la computadora */
console.log(os.uptime());

//*📌 OS.userInfo - para ver el la informacion del usuario */
 console.log(os.userInfo());


/* ------------------------------------------------------------------------------------------------------- */


//*📌📌📌 MODULOS BUILDIN => PROCESOS ASINCRONOS - pasar a app para que funcione */

//*📌estas son algunas de las modulos "buildin" mas utiles*/
/* 
setTimeout();
setImmediate();
setInterval();
 */

//*📌📌 SINTAXIS - setTimeout() - para ejecutar un codigo desp de un periodo de tiempo determinado */
/* setTimeout( funcion, retraso, argumento); */

/*- la fn setTimeout recibe hasta 3 argumentos */
/* setTimeout( 
    funcion => lo que va a ejecutarse transcurrido el "retraso"
    retraso => en milisegundos (ej: 3000s)
    argumento => pueden ser mas de uno y debemos seprarlos con "," => setTimeout( funcion, retraso, argumento1, argumento2, argumentoN );*/

/* ejemplo - 1 solo argumento */
    
function mostrarTema(tema) {
    console.log(`Estoy aprendiendo ${tema}`);
}
setTimeout(mostrarTema, 5000, 'Node.js'); /* pasar una fn (mostrarTema) como un argmento a otra fn, se llama "Higer-Order Programming" */

//*📌 "Higer-Order Programming" */
/*NOTA: esto nos permite tratar a las fn como objetos que se pueden pasar como argumento y retornar desde otras fn */

/* ejemplo - mas de 1 argumento */

function mostrarTemas(tema1, tema2) {
    console.log(`Estoy aprendiendo ${tema1} y ${tema2}`);
}
setTimeout(mostrarTemas, 3000, 'Node JS', 'React JS');

function sumar(num1, num2) {
    const resultado = num1 + num2;
    console.log(`El resultado de sumar ${num1} y ${num2} es ${resultado}`);
}
setTimeout(sumar, 2000, 7, 5);

//*📌📌 SINTAXIS - setImmediate() - para ejecutar codigo asincrono en la proxima iteracion del ciclo de eventos - inmediatamente, o sea que se ejecutaran primero que cualquier otra*/

/* setImmediate(funcion, argumento1, argumento2, argumentoN); */

//*📌📌 SINTAXIS - setInterval() - para ejecutar codigo una infinita cantidad de veces cada cierto periodo de tiempo*/


/* setInterval( funcion, intervalo, arg1, arg2, argN); */
/*NOTA: para detern eseproceso debemos presionar "ctrl + c" en la consola */

/* ejemplo - setInterval()*/

setInterval(sumar, 1500, 3, 4);


//*📌📌 MODULO fs*/
/* contiene funcional idades muy utiles para trabajar con el sistemas de archivos (leer / modificar / copiar / eliminar / cambiar nombre) */
/* todos los metodos de este modulos son ASINCRONOS por defecto */
/* por convencion se importa el modulo por mas que sea build-in / core */

//*📌 METODO .readFile() - leer archuivo - */
/* el metodo readFile recibe 3 argumentos.*/
/* 1- el nombre o ubicacion del archivo que desamos leer - si esta en la misma carpeta podemos colocar el nombre directamente */
/* 2- especificamos la codificacion de los caracteres */
/* 3- fn flecha o anonima que se ejecutara al terminar el proceso de leer el archivo*/
/* se recomienda validar si hubo un error */



const fs = require('fs');

fs.readFile('inde.html', 'utf-8', (err, contenido) => {
    if (err) {
        throw (err); /* con "throw" nos detalla mejor el error y corta el proceso.*/
        /* console.log(err); */ /* con "console.log" nos muestra el error muy brevemente y no corta el proceso.*/
    }else{
      console.log(contenido);
    }
});


//*📌 METODO .rename() - renombrar archivo*/
/* el metodo readFile recibe 3 argumentos.*/
/* 1-el nombre o ubocacion del archivo que desamos renombrar */
/* 2-el nuevo nombre por el cual lo vamos a reemplazar */
/* 3a-fn flecha o anonima que se ejecutara cuando se complete el proceso de "renombrar" el archivo*/
/* 3b-pasamos como parametro un "error"(err) y una verificacion que: si el error existe, mande un mensaje por consola.*/
/* NOTA: si no hay error el valor sera null y se ejecutara la otra salida del "if" (el contenido de ese archivo en una cadena de texto)*/

fs.rename('index.html', 'secion1.html', (err) => {
    if (err) {
        throw (err);
    }else
    console.log('nombre cambiado con exito.');
}) 

//*📌 METODO .appendFile() - agregar "algo" en el archivo*/
/*NOTA: si no existe el archivo, se crea uno por defecto */
/*1- idem */
/*2- contedino que de seamos agregar(<div><p>Hola mundo!</p></div>) */
/*NOTA: este contenido se agregará al final de la ultima linea del archivo */
/*3- idem */
fs.appendFile('index.html', '<div><p>Hola mundo!</p></div>', ()=> {
    if (err) {
        throw (err);
    }else
    console.log('se ha agregado el contenido con exito.');
})

//*📌 METODO .writeFile() - "escribir" / crear archivo / reemplazar todo el contenido del archivo*/
/*NOTA: si no existe el archivo, se crea uno por defecto */
/*1- idem */
/*2-contedino con el que deseamos reemplzar todo el contenido anterior  (<h1>Hola mundo!</h1>) */
/*3- idem */

fs.writeFile('index.html', '<h1>Hola mundo!</h1>', ()=> {
    if (err) {
        throw (err);
    }else
    console.log('se ha agregado el contenido con exito.');
})

//*📌 METODO .unlink() - "desvincular" / borrar archivo */
/*NOTA: si no existe el archivo, se crea uno por defecto */
/*1- nombre del archivo que deseamos eliminar index_copy.html*/
/*2- fn a ejecutar al final proceso eliminar archivo */

fs.unlink('index.html', '<h1>Hola mundo!</h1>', ()=> {
    if (err) {
        throw (err);
    }else
    console.log('se ha agregado el contenido con exito.');
})
//*📌📌 MOSTRAR contenido el .json */
/* METODO 1 - importarlo con "require()" y almacenarlo en una variable, convierte a la informacion del archivo ".json" a un objeto de JS. Por lo que podemos accedera sus propiedades y/o manipularlas como tal. */
/* el nombre de la variable donde almacenaremos el valor de ese archivo ".json" puede ser el que nosotros querramos - (siempre haciendo referencia a su contenido). */

const cursoJSON = require('./cursos.json');

console.log(cursoJSON.numLikes);

//*📌📌 METODO ".strnglify" - ( JSON.stringlify() ) - convertir un objeto de .js a .json (o sea, a informacion de tipo "string" - porque .json solo trabaja con cadenas de texto) */
/*📌 1- creamos el objeto */
let cursoJS = {
    "aprende": "node js",
    "numVisitas": "245551",
    "numLikes": "545451",
    "temas": [
        "javascript",
        "React.js",
        "node.js"
    ],
    "esPublico": "true"
};

/*📌 2- aplicamos el metodo y lo mostramos por consola*/
let infoCursoEnJSON = JSON.stringify(cursoJS);

console.log(infoCursoEnJSON);

console.log(typeof infoCursoEnJSON); /* para ver el tipo de archivo => string y como tal, si intentamos acceder a una de sus propiedades como si fuera un obejto no podremos*/


//*📌📌 METODO ".parse" - ( JSON.parse() ) - convertir informacion de .json a .js*/
/*📌 1- creamos una variable para almacenar el resultado que buscamos y lo igualamos a: aplicar el metodo y pasarle como parametro la informacion que deseamos convertir a un objeto de JS (en este caso: la variable "infoCursoEnJSON" que es donde esta gurdada la informacion en tipo .json / string ) */

let infoCursoEnJS = JSON.parse(infoCursoEnJSON);

/*📌 2- mostramos por consola*/
console.log(infoCursoEnJS);
console.log(typeof infoCursoEnJS);


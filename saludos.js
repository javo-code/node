/* EXPORTAR MODULOS */

function saludarJavo(nombre) {
    return `Hola ${nombre}`;
}
function saludarJacqui(nombre) {
    return `Hola ${nombre}`;
}

/*📌 forma de exportar nº 1 - individualmente */
/* module.exports.saludarJavo = saludarJavo;
module.exports.saludarJacqui = saludarJacqui;
 */

/*📌 forma de exportar nº 2 - multiples*/
/* como el metodo exports() es un objeto vacio podemos pasarle como argumento las fn creadas pasando los pares "propiedad : valor" separados por comas*/

module.exports = {
    saludarJavo: saludarJavo,
    saludarJacqui: saludarJacqui
}

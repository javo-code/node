//*📌📌 ejemplo practico - orden de pizzas */
//contexto: el sistema falla el 20% de las veces.


const statusPedido = () => {
    /* const status = Math.random < 0.5;*/  //*para simular que el programa falle el 20% de las veces ()por eso 0.8 es el valor para determinar que el otro 80% funcione correctamente */
    /* console.log(status); //*solo para ver el valor del status en esta instancia */
    return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((res, rej) => {
    setTimeout(() => {
        if (statusPedido()) {
            res('Pedido exitoso! Tu pizza esta en camino!');
        } else {
            rej('Algo salio mal... Tu pedido no fue procesado')
        }
    },2000);
})

/*📌 METODO Chaining ("encadenamiento" de metodos) - podemos escribir los metodos consecutivamente*/
miPedidoDePizza
    .then((res) => {
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej);
    });

//*📌 si la fn a ejecutar para cada caso fuera una MAS compleja podemos mezclar los metodos */
/* 
    const handlePedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
    };

const rejectPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
};
    
miPedidoDePizza.then(handlePedido).catch(rejectPedido);
 */

//* 📌 METODO ALTERNATIVO - con variables propias para manejar las respuestas exitosas y las rechazadas
/*    
const handlePedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rejectPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
};
    
miPedidoDePizza
    .then(mensajeDeConfirmacion) =>{
        console.log(mensajeDeConfirmacion);
    }
    .then(null, (mensajeDeRechazo)=>{
    console.log(mensajeDeRechazo);
    });
*/
//* 📌tambien podemos manejarlo con funciones propias y luego pasarlas por parametro => "miPromesa.then(fnRtaExitosa, fnRtaRechazada)" :
/*
    const manejarRespuestaExitosa = (valor) => {
    console.log(razonRechazo)
};

const manejarRespuestaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarRespuestaExitosa, manejarRespuestaRechazada);
*/


//*📌📌 ejemplo practico - orden de taza con logo "javo-code" */
/* 📌 creamos las fn procesarPedido */
/* 
function procesarPedido(respuesta){// pasamo la "respuesta" por parametro para "encadenarla" mas adelnate en este EJEMPLO PUNTUAL
    return new Promise( res => {// la fn procesarPedido tmabien retornará una promesa (en este caso solo se resolvera "exitosamente" por lo que podemos quitar el "rej")
        console.log('Procesando respuesta...');//pasamos msj para avisar que se "esta procesando la respuesta"
        console.log(`La respuesta fue: "${respuesta}"`);// pasamo msj con un plantilla literar para informar cual fue el producto ordenado
        setTimeout(() => {// simulamos retraso real
        res('Gracias por su compra!');// enviamos el msj "Gracias por su compra!"" como respuesta exitosa
        }, 2000); //pasamos 1.5s de tiempo de retraso
    });
}
 */
/* 📌 llamamos a la fn "procesarPedido" y le pasamos el producto hardcodeado por parametro y encadenamos las promesas (.then(), .then(), .catch() ) */
/* 
ordenarProducto('lapiz')// primero se ejecutara este proceso (asincrono) "pedir el producto" (en este caso hardcodeado)
  .then(respuesta => { // pasamos como parametro la respuesta para luego mostrarla en el clg.
    console.log('Respuesta recibida');// mostramos msj "Respuesta recibida"
    console.log(respuesta);//mostramos la respuesta
    return procesarPedido(respuesta);// retornamos la 2da fn que queremos ejecutar / "encadenar" con el parametro "respuesta"
    })
    .then(respuestaProcesada => {//procesamos la 2da promesa que fue "encadenada en el 1er .then()"
    console.log(respuestaProcesada);// mostramos el valor procesado 
    })
    .catch(err => {// agregamos una llamada al metodo .catch() para mostrar el error 
    console.log(err); // mostramos el error bien detallado
    });
    */
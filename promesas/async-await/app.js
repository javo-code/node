/*📌📌 ASINC & AWAIT */

/* 📌 creamos las fn ordenarProducto */

function ordenarProducto(producto){ //pasamos el "producto"por parametro
  return new Promise((res, rej) => { //indicamos que la fn "ordenarProducto" va a "retornar" una promesa
    console.log(`Ordenando: ${producto} de javo-code.`); // pasamos el producto "hardcodeado" a traves de una plantilla literal ( `${}`)
    setTimeout(() => { // usamos "setTimeout" para simular el retraso de la consulta real
      if (producto === 'taza') { //verificamos si el producto existe o si tiene stock, etc (en este caso esta "hardcodeado")
        res('Ordenando una taza con el logo de javo-code'); // "res" para "resolver" una respuesta exitosa
      } else {
        rej('El producto no esta disponible actualmente') // "rej" para "rechazada" una respuesta rechazada
      }
    },1500) //pasamos 1.5s de tiempo de retraso
  });
}

/* 📌 creamos las fn procesarPedido */
function procesarPedido(respuesta){// pasamo la "respuesta" por parametro para "encadenarla" mas adelnate en este EJEMPLO PUNTUAL
  return new Promise( res => {// la fn procesarPedido tmabien retornará una promesa (en este caso solo se resolvera "exitosamente" por lo que podemos quitar el "rej")
      console.log('Procesando respuesta...');//pasamos msj para avisar que se "esta procesando la respuesta"
      console.log(`La respuesta fue: "${respuesta}"`);// pasamo msj con un plantilla literar para informar cual fue el producto ordenado
      setTimeout(() => {// simulamos retraso real
      res('Gracias por su compra!');// enviamos el msj "Gracias por su compra!"" como respuesta exitosa
    }, 2000); //pasamos 1.5s de tiempo de retraso
  });
}

async function realizarPedido(producto) { //agregamos la palara clave "async" al inicio de la declaracion de la fn
  try { //para detectar errores usamos "try"y"catch" (con "try" vamos a envolver TODO el codigo que pueda devolver un error)
    const respuesta = await ordenarProducto(producto) // 1- ordenamos el producto - NOTA: antemponemos la palabra clave "await"para indicarle al codigo que debe esperar a la resolucion de la fn asincrona (en este caso la promesa "ordenarProducto()")
    console.log('Respuesta recibida'); // 2- recibimos la respuesta
    const respuestaProcesada = await procesarPedido(respuesta) // 3- procesamos el pedido - NOTA: antemponemos la palabra clave "await"para indicarle al codigo que debe esperar a la resolucion de la fn asincrona (en este caso la promesa "procesarPedido()")
    console.log(respuestaProcesada) // mostramos la respuesta}
  } catch (err) { //para manejar el error
    console.log(err);
  }
}

realizarPedido('taza') //si cambiamos el rpoducto hardcodeado podremos ver la resolucion para respuesta rechazada.
/* 📌 creamos las fn procesarPedido */


/* 📌 llamamos a la fn "procesarPedido" y le pasamos el producto hardcodeado por parametro y encadenamos las promesas (.then(), .then(), .catch() ) */
/* ordenarProducto('lapiz')// primero se ejecutara este proceso (asincrono) "pedir el producto" (en este caso hardcodeado)
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
  }); */
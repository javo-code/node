//📌 definimos la variable "promesaCumplida" para poder ver mediante una validacion una respuesta u otra.
const promesaCumplida = false;
//📌 Crear una promesa
const miPromesa = new Promise((resolve, reject) => { // la fn flecha recibe como argumento dos valores: "resolve y "reject" ("res","rej")
    // Simulamos una operación asíncrona que tarda un tiempo en completarse por que las promesas son asincronas
    setTimeout(() => {
        if(promesaCumplida){
      // Completar la promesa con éxito
      resolve('¡Operación exitosa!');
        } else{
      // O rechazar la promesa con un error
      reject(new Error('¡Algo salió mal!'));
        }
    }, 2000);
  });
  
  //📌 Usar la promesa
  miPromesa
  // utilizamos el metodo ".then()" para indicar lo que queremos que ocurra cunado la respuesta se resuelve exitozamente
    .then(resultado => {
      console.log(resultado); // Imprime "¡Operación exitosa!" si se completa con éxito
    })
// utilizamos el metodo ".cathc()" para mostrar el error cuando la respeusta es rechazada
    .catch(error => {
      console.error(error); // Imprime el error si la promesa es rechazada
    });

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
// definimos la variable "promesaCumplida" para poder ver mediante una validacion una respuesta u otra.
const promesaCumplida = false;
// Crear una promesa
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
  
  // Usar la promesa
  miPromesa
  // utilizamos el metodo ".then()" para indicar lo que queremos que ocurra cunado la respuesta se resuelve exitozamente
    .then(resultado => {
      console.log(resultado); // Imprime "¡Operación exitosa!" si se completa con éxito
    })
// utilizamos el metodo ".cathc()" para mostrar el error cuando la respeusta es rechazada
    .catch(error => {
      console.error(error); // Imprime el error si la promesa es rechazada
// tambien podemos manejarlo con funciones propias y luego pasarlas por parametro => ".miPromesa.then(fnRtaExitosa, fnRtaRechazada)" :
/* 
const manejarRespuestaExitosa = (valor) => {
    console.log(razonRechazo)
};

const manejarRespuestaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa
.then(manejarRespuestaExitosa, manejarRespuestaRechazada);

*/
});
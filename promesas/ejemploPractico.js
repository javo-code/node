/* ejemplo practico - orden de pizzas */
//contexto: el sistema falla el 20% de las veces.


const statusPedido = () => {
    const status = Math.random < 0.8; //para simular que el programa falle el 20% de las veces ()por eso 0.8 es el valor para determinar que el otro 80% funcione correctamente
    console.log(status); //solo para ver el valor del status en esta instancia
    return status;
};

/*  */


/* ejemplo practico - orden de pizzas */
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
    },);
})

const handlePedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rejectPedido = (mensajeDeRechazo) => {
    console.log(mensajeDeRechazo);
};
    
miPedidoDePizza.then(handlePedido, rejectPedido);
/* Servidor basico */

const http = require("http");

const servidor = http.createServer((req, res) => {
    console.log("Solicutud nueva");
    res.end("Puto el que lee =B");
});

const PUERTO = 3000;

servidor.listen(PUERTO, () => {
    console.log(`El servidor esta ecuchando en el puerto ${PUERTO}`);
});

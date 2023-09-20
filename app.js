/* Servidor basico */

const http = require('http');

const servidor = http.createServer((req, res) => {
    res('Hola mundo');
})

servidor.listen(3000, () => {
    console.log('Hola usuario!');
})
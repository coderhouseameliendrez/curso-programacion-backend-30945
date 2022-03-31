const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hola Coders');
})

const connectedServed = server.listen(8080, () => {
    console.log("Servidor HTTP escuchando en el puerto " + connectedServed.address().port);
})
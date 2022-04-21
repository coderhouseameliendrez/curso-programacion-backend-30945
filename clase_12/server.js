const express = require('express');
const { Server: HttpServer } = require('http');
const { Server:IOServer } = require('socket.io');

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

httpServer.listen(8080, () => {
    console.log('SERVER ON en http://localhost:8080');
});

const messages = [
    { author: "Juan", text: 'Hola que tal?'},
    { author: "Pedro", text: 'Muy y vos?'},
    { author: "Ana", text: 'Genial'}
];

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    socket.emit('messages', messages);

    socket.on('new-message', data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    })
})
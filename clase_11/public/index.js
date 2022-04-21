const socket = io();

let button = document.getElementById('btn-enviar');
let inputMensaje = document.getElementById('mensaje');
let parrafo = document.getElementById('parrafo');

button.addEventListener('click', function (params) {
    let value = inputMensaje.value;
    
    socket.emit('mensaje', value);
})


socket.on('mi mensaje', data => {
    parrafo.innerHTML += '</br>' + data;
    console.log(data);
    socket.emit('notification', 'Mensaje recibido desde el cliente');
});
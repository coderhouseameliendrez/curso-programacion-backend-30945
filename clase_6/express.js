const express = require('express');



class Contenedor {

    ///
}


const app = express();
const PORT = 8080;
let cantidadVisitas = 0;

const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto 8080");
});

server.on("Error", error => console.log(`Se tiene el siguiente error: ${error}`));

app.get('/', (req, resp) => {
    resp.send('<p style="color:0000FF">Esto es una locura!!!!</p>');
})

app.get('/visitas', (req, resp) => {
    cantidadVisitas++;
    resp.send({cantidad: cantidadVisitas});
})

app.get('/hola', (req, resp) => {
    resp.send({mensaje: 'Hola Coders!!!!'});
})

let numero = random
let productos = ['heladera', 'microondas', 'televisor'];
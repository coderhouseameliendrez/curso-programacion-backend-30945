const http = require('http');


function calculo() {
    let sum = 0;

    for (let index = 0; index < 6e9; index++) {
        sum += index
    }

    return sum;
}

let visitas = 0;


const server = http.createServer();
server.on('request', (req, res) => {
    let { url } = req;

    if(url == '/calcular') {
        const sum = calculo();
        res.end(`La suma es ${sum}`)
    } else if(url == '/') {
        res.end(`Las cantidad de visitas son: ${++visitas}`)
    }
})

server.listen(8080, err => {
    if (err) throw new Error('Error en servidor')
    console.log('Servidor http escuchando');
})
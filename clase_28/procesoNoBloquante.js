const http = require('http');
const { fork } = require('child_process');

let visitas = 0;


const server = http.createServer();
server.on('request', (req, res) => {
    let { url } = req;

    if(url == '/calcular') {
        const computo = fork('./computo.js')
        computo.send('start');
        computo.on('message', sum => {
            res.end(`La suma es ${sum}`)
        })
    } else if(url == '/') {
        res.end(`Las cantidad de visitas son: ${++visitas}`)
    }
})

server.listen(8080, err => {
    if (err) throw new Error('Error en servidor')
    console.log('Servidor http escuchando');
})
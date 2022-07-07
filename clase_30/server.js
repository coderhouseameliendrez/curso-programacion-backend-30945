const express = require('express');
const app = express();

const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
    res.send(`Servidor express <span style="color:blueviolet;">(PM2)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
});

app.get('/datos', (req, res) => {
    console.log(`port: ${PORT} -> Fyh: ${Date.now()}`);
    res.send(`Servidor express <span style="color:blueviolet;">(PM2)</span> en ${PORT} - <b>PID ${process.pid}</b> - ${new Date().toLocaleString()}`)
});

app.listen(PORT, err => {
    if (!err) console.log(`Servidor express escuchando en http://localhost:${PORT} - PID WORKER ${process.pid}`)
});


// Este servidor es para el ejemplo de fork y cluster con pm2
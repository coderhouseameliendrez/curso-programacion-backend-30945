const express = require('express');
const app = express();
const PORT = parseInt(process.argv[2]) || 8080;

app.get('/', (req, res) => {
    res.send('Servidor express ' + process.pid)
})

app.listen(PORT, err => {
    if (!err) console.log('Escuchando');
})
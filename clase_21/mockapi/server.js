const express = require('express');
const usuariosRouter = require('./src/routes/usuarios')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/usuarios', usuariosRouter);

const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})


server.on('error', error => console.log(`Error en servidor ${error}`))
const configs = require('./src/configs/enviroments')


console.log('Las configuraciones de ambiente son: ');
console.log('Environment: ' + configs.NODE_ENV);
console.log('Host: ' + configs.HOST);
console.log('Port: ' + configs.PORT);


const dotenv = require('dotenv');

// dotenv.config()

// const fondo = process.env.FONDO
// const frente = process.env.FRENTE
// const environment = process.env.ENV

const path = require('path');


dotenv.config({
    path: configs.MODO == 'production'
        ? path.resolve(__dirname, 'byn.env')
        : path.resolve(__dirname, 'colores.env')
})

const fondo = process.env.FONDO
const frente = process.env.FRENTE


console.log({fondo, frente});




// testing == develop

// staging == uat // user acceptance testing

// ambiente productivo == produccion




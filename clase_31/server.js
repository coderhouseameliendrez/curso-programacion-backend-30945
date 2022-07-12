const express = require('express');
const compression = require('compression');
const log4js = require('log4js');
const winston = require('winston');
const loggerPino = require('pino')();


const app = express();
app.use(compression())
const PORT = 8080;
const saludo = 'Hola Coders';


//const environment = process.env.NODE_ENV;

log4js.configure({
    appenders: {
        miLoggerConsole: { type: 'console' },
        miLoggerFile: { type: 'file', filename: 'logger1.log' },
        miLoggerFile2: { type: 'file', filename: 'logger2.log' },
    }, 
    categories: {
        default: { appenders: ["miLoggerConsole"], level: "trace" },
        consola: { appenders: ["miLoggerConsole"], level: "debug" },
        archivo: { appenders: ["miLoggerFile"], level: "warn" },
        archivo2: { appenders: ["miLoggerFile2"], level: "info" },
        todos: { appenders: ["miLoggerFile", "miLoggerFile2", "miLoggerConsole"], level: "error" },
    }
})

app.get('/saludo', (req, res) => {

    let message = '';

    for (let index = 0; index < 1000; index++) {
        message += saludo + ' ';
    }

    res.send({response: message});
})


app.get('/log4js', (req, res) => {


    // if(environment == 'production') {
    //     const logger = log4js.getLogger('archivo');
    // } else {
    //     const logger = log4js.getLogger('console');
    // }

    logger.trace('Log trace');
    logger.debug('Log debug');
    logger.info('Log info');
    logger.warn('Log warn');
    logger.error('Log error');
    logger.fatal('Log fatal');
    

    res.send({response: 'hola coders'});
})


app.get('/winston', (req, res) => {
    const logger = winston.createLogger({
        level: 'warn',
        transports: [
            new winston.transports.Console( { level: 'verbose' }),
            new winston.transports.File( { filename: 'infowinston.log',  level: 'error' }),
        ]
    })

    logger.log('silly', 'Log silly');
    logger.log('debug', 'Log debug');
    logger.log('verbose', 'Log verbose');
    logger.log('info', 'Log info');
    logger.log('warn', 'Log warn');
    logger.log('error', 'Log error');

    //logger.info('Log info')

    

    res.send({response: 'hola coders'});
})

app.get('/pino', (req, res) => {
    loggerPino.level = 'info';

    loggerPino.info('pino info')
    loggerPino.error('pino error')

    loggerPino.info('pino info %d', 2)

    loggerPino.info({color: 'rojo'}, 'pino info')
    loggerPino.info({colores: {primario: 'rojo', secundario:'azul'}}, 'pino info')

    const child = loggerPino.child({propiedad: 'property'})
    child.info('child pino info')
    child.error('child pino error')



    //logger.info('Log info')

    

    res.send({response: 'hola coders'});
})

app.listen(PORT, err => {
    if(!err) {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    }
})

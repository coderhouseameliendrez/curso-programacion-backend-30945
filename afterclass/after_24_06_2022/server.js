const express = require('express');
const handlebars = require('express-handlebars');
const productsRouter = require('./src/routes/productos');
const pageRouter = require('./src/routes/routes')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/productos', productsRouter)
app.use('', pageRouter)

app.engine(
    "hbs", 
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + "/src/views/layouts",
        partialsDir: __dirname + "/src/views/partials/",
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    })
);

app.set('view engine', 'hbs');
app.set('views', './src/views');
app.use(express.static(__dirname + "/public"));

const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})

server.on('error', error => console.log(`Error en el servidor ${error}`))
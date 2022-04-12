const express = require('express');
const app = express();
const PORT = 8080;
const handlebars = require('express-handlebars');


app.engine(
    "hbs", 
    handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials/"
    })
);


app.set('view engine', 'hbs');
app.set('views', './views');
app.use(express.static("public"));

let fakeApi = () => [
    { name: 'Katarina', lane: 'midlaner'},
    { name: 'Jayce', lane: 'toplaner'},
    { name: 'Heimerdinger', lane: 'toplaner'},
    { name: 'Azir', lane: 'midlaner'},
    { name: 'Miss', lane: 'botlaner'}  
];

app.get('/', function (req, res) {
    res.render('main', { suggestedChamps: fakeApi(), listExists: true });    
})

app.get('/productos', function (req, res) {
    res.render('productos', {});    
})



const server = app.listen(PORT, err => {
    if(err) throw new Error(`Error en servidor ${err}`);
    console.log("Aplicacion express escuchando en el puerto " + server.address().port);
});
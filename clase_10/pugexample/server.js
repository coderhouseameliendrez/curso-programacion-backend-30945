const express = require('express');
const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/hello', function (req, res) {
    //let saludo = req.query.saludo;
    res.render('hello.pug', {mensaje: 'Hola Coders', saludo: 'Otro atributo'});    
})


app.get('/datos', function (req, res) {
    //let saludo = req.query.saludo;
    res.render('datos.pug', req.query);    
})



// template pseudo codigo que utilizan variables variables
// variables
// template engine --> juntar template con las variables






const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto " + server.address().port);
});
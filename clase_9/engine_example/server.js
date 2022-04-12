const express = require('express');
const fs = require('fs');


const PORT = 8080;

const app = express();


app.engine('ntl', function (filepath, options, callback) {
    fs.readFile(filepath, function (err, content) {
        if(err) {
            return callback(new Error(err));
        }

        const rendered = content.toString()
                            .replace('#title#', '' + options.title + '')
                            .replace('#message#', '' + options.message + '');

        return callback(null, rendered);
    })
})

app.set('views', './views');
app.set('view engine', 'ntl');

app.get('/', function (req, res) {
    res.render('index', {title: 'Hey', message: 'Hello there!'});    
})


const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto " + server.address().port);
});
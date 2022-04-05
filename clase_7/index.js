const express = require('express');

const app = express();
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log("Aplicacion express escuchando en el puerto 8080");
});


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/api/productos', (req, resp) => {
    let productos = [{nombre:'heladera', precio:100}, {nombre:'heladera2', precio:102}];
    
    if(Object.entries(req.query).length > 0) {
        resp.json({
            result: 'get all WITH params',
            productos: productos,
            query: req.query
        });
    } else {
        resp.json({
            result: 'get all without params',
            productos: productos
        });
    }
});

app.get('/api/productos/:id', (req, resp) => {
    let productos = [{nombre:'heladera', precio:100, id:5}, {nombre:'heladera2', precio:102, id:6}];
    //contenedor --> contenedor.getById(req.params.id)
    resp.json({
        result: 'get by id',
        producto: productos[req.params.id],
        id: req.params.id, 
        error: 'mi error'
    });
})

app.post('/api/productos', (req, resp) => {

    resp.json({
        result: 'Save product',
        body: req.body
    });
})

// PUT  /api/productos/:id
app.put('/api/productos/:id', (req, resp) => {
 
    resp.json({
        result: 'edit by id',
        id: req.params.id, 
        body: req.body
    });
})


// DELETE  /api/productos/:id
app.delete('/api/productos/:id', (req, resp) => {
 
    resp.json({
        result: 'edit by id',
        id: req.params.id
    });
})













const frase = 'Hola Coders!! Como estan?';


app.get('/api/frase', (req, resp) => {
    resp.json({
        result: 'Se devuelve la frase',
        frase: frase
    })
})
    


// GET /api/productos?marca=philip&tipo=heladera&precioMayor=10
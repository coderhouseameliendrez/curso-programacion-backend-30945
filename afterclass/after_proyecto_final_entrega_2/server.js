const express = require('express');
const app = express();
const userRouter = require('./src/routes/usuario.js');
const filmsRouter = require('./src/routes/peliculas.js')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/users', userRouter);
app.use('/api/peliculas', filmsRouter);

app.listen(8080, () => {
    console.log('Server on port 8080');
})


// EN CASO DE QUE QUIERA MAS RUTAS Y MODELOS, EN LA PRIMER SECCION DEBERIA AGREGAR:
// EJEMPLO DE PELICULAS:
// const filmsRouter = require('./src/routes/peliculas.js')

// UNA VEZ INCLUIDO EL PRODUCTO ROUTER DEBO AGREGAR EL MAPEO
// app.use('/api/peliculas', filmsRouter)

// ESTO SE DEBE HACER POR CADA ARCHIVO DE RUTAS QUE TENGA
// SE DEJAN ARCHIVOS DE RUTAS, MODELOS, Y DAOS DE PELICULAS A MODO ILUSTRATIVO
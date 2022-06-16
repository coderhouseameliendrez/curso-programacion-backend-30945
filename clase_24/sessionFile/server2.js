const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')(session)


const app = express()

app.use(session({
    store: new FileStore( { path: './sesiones', ttl: 300, retries: 0}),
    secret: 'coderhouse',
    resave: false,
    saveUninitialized: false
}))


app.get('/contador', (req, res) => {
    if(req.session.contador) {
        req.session.contador++;
        res.send(`Usted ha ingresado al sitio ${req.session.contador} veces.`)
    } else {
        req.session.contador = 1;
        res.send('Bienvenido a coderhouse')
    }
})

app.get('/login', (req, res) => {
    const { username, password } = req.query

    // Validacion de login (deberia hacerse comparando con informacion de base de datos)
    if(username == 'coderhouse' && password == 'coder2022') {
        req.session.user = username;
        req.session.admin = true;
        req.session.logged = true;
    } else if(username == 'ameliendrez' && password == 'coder2022') {
        req.session.user = username;
        req.session.logged = true;
    } else {
        return res.send('Usuario o contraseña incorrecto')
    }


    return res.send('Login success')
})

function checkAuth(req, res, next) {
    if(req.session?.admin) {
        return next();
    }

    return res.status(401).send('Usted no tiene permisos')
}

//localhost:8080/login?username=ameliendrez&password=coder2022

function checkLogged(req, res, next) {
    if(req.session?.logged) {
        return next();
    }

    return res.status(401).send('Usted no tiene permisos')
}

app.get('/privadoAdmin', checkAuth, (req, res) => {
    res.send('pagina logueado para admin')
})


app.get('/privadoCliente', checkLogged, (req, res) => {
    res.send('pagina logueado para usuario')
})


app.get('/logout', (req, res) => {
    req.session.destroy( error => {
        if (error) {
            res.send({status: 'Logout Error', body: error})
        }
    })

    res.send('Usted ha cerrado sesion')
})



const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})


server.on('error', error => console.log(`Error en el servidor ${error}`))
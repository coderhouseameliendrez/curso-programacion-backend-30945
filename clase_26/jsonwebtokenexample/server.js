const express = require('express');
const jwt = require('jsonwebtoken');
const PRIVATE_KEY = 'coderhouse';
const usuarios = [];

function generateToken(user) {
    const token = jwt.sign({data: user}, PRIVATE_KEY, {expiresIn: '24h'});

    return token;
}

function auth(req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(401).json({error: 'not authenticated'})
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, PRIVATE_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({error: 'not authorized'})
        }

        req.user = decoded.data;
        next()
    })
}

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post('/register', (req, res) => {
    const {nombre, password, direccion} = req.body;

    const yaExiste = usuarios.find(usuario => usuario.nombre == nombre);

    if(yaExiste) {
        return res.json({error: 'Usuario ya existe'})
    }

    const usuario = {nombre, password, direccion};

    usuarios.push(usuario);

    const accessToken = generateToken(usuario)

    res.json({accessToken})
})

app.post('/login', (req, res) => {
    const {nombre, password} = req.body;

    const usuario = usuarios.find(usuario => usuario.nombre == nombre 
        && usuario.password == password);

    if(!usuario) {
        return res.json({error: 'Usuario o contraseña incorrectos'})
    }

    const accessToken = generateToken(usuario)

    res.json({accessToken})
})

const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})

app.get('/profile', auth, (req, res) => {
    return res.json({response: 'Esta pagina se muestra si esta logueado'})
})

server.on('error', error => console.log(`Error en el servidor ${error}`))


const express = require('express')
const cookieParser = require('cookie-parser')


const app = express()


app.use(cookieParser("coderhouse"))

app.get('/set', (req, res) => {
    res.cookie('logged', 'Cookie desde express').send('Cookie set')
} )

app.get('/set2', (req, res) => {
    res.cookie('server2', 'express2').send('Cookie set')
} )

app.get('/set3', (req, res) => {
    res.cookie('server3', 'express3', { maxAge: 30000 }).send('Cookie set con tiempo de vida')
} )

app.get('/set4', (req, res) => {
    res.cookie('server4', 'express4', { signed: true }).send('Cookie set con tiempo de vida')
} )

app.get('/get', (req, res) => {
    res.send(req.cookies)
} )

app.get('/getSigned', (req, res) => {
    res.send(req.signedCookies)
} )

app.get('/clearCookie', (req, res) => {
    res.clearCookie('server').send('Se elimina la cookie con identificador server')
} )


const server = app.listen(8080, () => {
    console.log('Server on port 8080');
})


server.on('error', error => console.log(`Error en el servidor ${error}`))
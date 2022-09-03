const Application = require('koa');
const Koa = require('koa');
const koaBody = require('koa-body');
let categoryRouter = require('./src/routes/category');
let PORT = 3000
const app = new Koa();

app.use(koaBody());
app.use(categoryRouter.routes())

app.use(async ctx => {
    ctx.body = 'Hello World';
})


const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

server.on('error', error => console.log('Error en el servidor: ', error))
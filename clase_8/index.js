const express = require('express');
const multer = require('multer');
const { Router } = express;

const app = express();
const router = Router();
const router2 = Router();
const routerPersona = Router();


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());  
    }
})

let upload = multer({storage: storage});



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', router);
app.use('/api', router2);
app.use('/mascotas', routerPersona);



app.use(express.static('public'));
app.use('/custom/url', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
})

function myMiddleware1(req,res,next) {
    req.miAporte1 = 'dato aportado por myMiddleware 1';


    let logueado = false;

    if(logueado) {
        next();
    } else {
        throw 'error forzado';
    }

    //next();
}

app.use(function (err, req, resp, next) {
    console.error(err);
    resp.status(500).send('something broke!!');
});

function myMiddleware2(req,res,next) {
    req.miAporte2 = 'dato aportado por myMiddleware 2';
    next();
}

router.get('/mensajeConMiddleware', myMiddleware1, (req, resp) => {
    let aporte1 = req.miAporte1;
    resp.send({aporte1});
})

router.get('/mensajeConMiddlewareDoble', myMiddleware1, myMiddleware2, (req, resp) => {
    let aporte1 = req.miAporte1;
    let aporte2 = req.miAporte2;

    resp.send({aporte1: aporte1, segundoAporte: aporte2});
})




routerPersona.get('/', (req, resp) => {

    resp.send({nombre:"negrito", raza:"de la calle"});
})

routerPersona.post('/', (req, resp) => {

    resp.json({objeto: req.body});
})


router.get('/recurso', (req, resp) => {
    resp.send('get ok');
})

router.post('/recurso', (req, resp) => {
    resp.send('post ok');
})

router2.post('/recurso', (req, resp) => {
    resp.send('post ok');
})

app.get('/productos', (req, resp) => {
    resp.send('lista de productos');
})




app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file;

    if(!file) {
        const error = new Error('please upload a file');
        error.httpStatusCode = 400;
        return next(error);
    }

    res.send(file);
})

app.post('/uploadmultiple', upload.array('myFiles'), (req, res, next) => {
    const files = req.files;

    if(!files) {
        const error = new Error('please choose files');
        error.httpStatusCode = 400;
        return next(error);
    }

    res.send(files);
})





//url.com/api/V1/productos
//url.com/api/V2/productos

const server = app.listen(8080, () => {
    console.log('La aplicacion express esta escuchando');
})


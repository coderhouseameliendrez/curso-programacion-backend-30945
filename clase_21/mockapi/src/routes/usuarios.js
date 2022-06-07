const express = require('express');
const { Router } = express;

const router = Router();

const ApiUsuariosMock = require('../api/usuarios')

const apiUsuarios = new ApiUsuariosMock();

// const usuarios = [
//     {
//         name: 'Agustin',
//         edad: 29,
//         email: 'ameliendrez@gmail.com'
//     },
//     {
//         name: 'Jorge',
//         edad: 50,
//         email: 'jorge@gmail.com'
//     }
// ];

router.post('/popular', async (req, res, next) => {
    try {
        res.json(await apiUsuarios.popular(req.query.cant));
    } catch (error) {
        next(error);
    }
})

router.get('/', async (req, res, next) => {
    try {
        res.json(await apiUsuarios.listarTodos());
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        res.json(await apiUsuarios.listar(req.params.id));
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req, res, next) => {
    try {
        res.json(await apiUsuarios.guardar(req.body));
    } catch (error) {
        next(error);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        res.json(await apiUsuarios.actualizar({...req.body, id: req.params.id}))
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        res.json(await apiUsuarios.borrar(req.params.id));
    } catch (error) {
        next(error);
    }
})

router.use((err, req, res, next) => {
    const erroresNoEncontrado = [
        'Error al listar: elemento no encontrado',
        'Error al actualizar: elemento no encontrado',
        'Error al borrar: elemento no encontrado'
    ];

    if(erroresNoEncontrado.includes(err.message)) {
        res.status(404);
    } else {
        res.status(500);
    }

    res.json({message: err.message})
})


module.exports = router;
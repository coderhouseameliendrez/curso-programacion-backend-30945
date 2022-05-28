const express = require('express')
const { Router } = express
const filmsRouter = Router()

// const { PeliculaDaoFile } = require('../daos/usuarios/PeliculaDaoFile')
// const filmDao = new PeliculaDaoFile()

//const { PeliculaDaoMongo } = require('../daos/usuarios/PeliculaDaoMongo')
//const filmDao = new PeliculaDaoMongo()

const { PeliculaDaoFirestore } = require('../daos/peliculas/PeliculaDaoFirestore')
const filmDao = new PeliculaDaoFirestore()

// ACA VAN MIS RUTAS A '/api/peliculas'

filmsRouter.get('/', async (req, res) => {
  let films = await filmDao.getAll();
  res.json({films: films})
})

module.exports = filmsRouter

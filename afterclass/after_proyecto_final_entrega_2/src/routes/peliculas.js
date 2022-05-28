const express = require('express')
const { Router } = express
const filmsRouter = Router()

// const { UserDaoFile } = require('../daos/usuarios/PeliculaDaoFile')
// const userDao = new PeliculaDaoFile()

//const { UserDaoMongo } = require('../daos/usuarios/PeliculaDaoMongo')
//const userDao = new PeliculaDaoMongo()

const { PeliculaDaoFirestore } = require('../daos/peliculas/PeliculaDaoFirestore')
const userDao = new PeliculaDaoFirestore()
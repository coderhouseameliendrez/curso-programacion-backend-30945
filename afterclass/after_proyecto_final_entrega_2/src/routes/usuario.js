const express = require('express')
const { Router } = express
const usersRouter = Router()


// USAR EL MISMO FORMATO YA SEA EN ARCHIVO, FIRESTORE O MONGO...
// CON DESCOMENTAR Y COMENTAR EL USER DAO DEBERIA FUNCIONAR
// CADA RUTA MANEJA SU MODELO Y SUS DAOS... EN ESTE CASO DE USUARIOS


// const { UserDaoFile } = require('../daos/usuarios/UsuarioDaoFile')
// const userDao = new UserDaoFile()

//const { UserDaoMongo } = require('../daos/usuarios/UsuarioDaoMongo')
//const userDao = new UserDaoMongo()

const { UserDaoFirestore } = require('../daos/usuarios/UsuarioDaoFirestore')
const userDao = new UserDaoFirestore()

usersRouter.get('/', async (req, res) => {
  let users = await userDao.getAll();
  res.json({users: users})
})

usersRouter.get('/:id', async (req, res) => {
  let user = await userDao.getById(req.params.id)
  res.json({user})
})

usersRouter.post('/', (req, res) => {
  let user = req.body

  if(user && user.name && user.email && user.age){
    user = userDao.saveUser(user)
    res.json({result: 'User saved', user: user})
  } else {
    res.json({result: 'User cannot saved'})
  }
})

usersRouter.delete('/:id', async (req, res) => {
  let { id } = req.params
  user = await userDao.delete(id)
  res.json({result: 'Result', user_deleted: user})
})

usersRouter.put('/:id', (req, res) => {
  let user = req.body 
  let response = userDao.updateUser(user, req.params.id)
  res.json(response)
})

module.exports = usersRouter

const ContainerMongo = require('../../contenedores/ContainerMongo')
const peliculaModel = require('../../models/peliculas')

class PeliculaDaoMongo extends ContainerMongo{
  constructor() {
    super(peliculaModel);
  }

} 

module.exports = { PeliculaDaoMongo }

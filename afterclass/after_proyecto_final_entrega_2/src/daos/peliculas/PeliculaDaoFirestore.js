const { ContainerFirestore } = require('../../contenedores/ContainerFirestore')

class PeliculaDaoFirestore extends ContainerFirestore {
  constructor(){
    super('films')
  }

}

module.exports = { PeliculaDaoFirestore }

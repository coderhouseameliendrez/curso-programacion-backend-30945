const ContainerMongo = require('../../contenedores/ContainerMongo')
const userModel = require('../../models/usuarios')

class UserDaoMongo extends ContainerMongo{
  constructor() {
    super(userModel);
  }

} 

module.exports = { UserDaoMongo }

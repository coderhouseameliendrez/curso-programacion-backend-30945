//const MONGO_URI = 'mongodb+srv://test1:test1234@cluster0.30cad.mongodb.net/ecommerce?retryWrites=true&w=majority';

// ACA PUEDO PONER LA URL COMO ARRIBA Y USAR ESA URL, O USAR UN .env EN EL ROOT DEL PROYECTO
// PARA CARAGAR UNA VARIABLE DE ENTORNO (MONGO_URI)
// EL ARCHIVO .env VA EN EL ROOT DEL PROYECTO...
// LA CONFIG SERIA (cambiando a la url que use cada uno):
// MONGO_URI = 'mongodb+srv://test1:test1234@cluster0.30cad.mongodb.net/ecommerce?retryWrites=true&w=majority'
const { MONGO_URI } = require('../config/globals')
const mongoose = require('mongoose')

class ContainerMongo {
  constructor(model) {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true, 
      useUnifiedTopology: true
    }, () => console.log('Connected'))

    this.model = model;
  }

  async getAll(){
    return await this.model.find()
  }

}

module.exports = ContainerMongo;

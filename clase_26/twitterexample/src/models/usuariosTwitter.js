const mongoose = require('mongoose');
const MONGO_URI  = 'mongodb://localhost/auth'

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, () => console.log('Connected'))

const usuariosCollection = 'usuariostwitters';

const UsuarioSchema = new mongoose.Schema({
    username: {type: String, required: true, max: 100},
    provider: {type: String, required: true, max: 100},
    id: {type: String, required: true, max: 100}
})

module.exports = mongoose.model(usuariosCollection, UsuarioSchema)

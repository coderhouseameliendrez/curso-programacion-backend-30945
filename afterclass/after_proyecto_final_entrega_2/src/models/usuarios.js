const mongoose = require("mongoose");

const usuariosCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100},
    apellido: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    usuario: {type: String, required: true, max: 100},
    password: {type: Number, required: true}
})

const usuarios = mongoose.model(usuariosCollection, UsuarioSchema);

module.exports = usuarios
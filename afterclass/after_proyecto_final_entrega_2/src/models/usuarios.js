const mongoose = require("mongoose");

const peliculasCollection = 'peliculas';

const PeliculaSchema = new mongoose.Schema({
    titulo: {type: String, required: true, max: 100},
    director: {type: String, required: true, max: 100},
    duracion: {type: Number, required: true}
})

const peliculas = mongoose.model(peliculasCollection, PeliculaSchema);

module.exports = peliculas
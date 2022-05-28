const { ContainerFile } = require('../../contenedores/ContainerFile')

class PeliculaDaoFile extends ContainerFile {
    constructor() {
        super('./src/data/films.json');
        let films = this.getAll();
        this.id = (films.length > 0) ? films[films.length -1].id + 1 : 1;
    }


    getAll() {
        let films = this.getContentFile();

        return films;
    }
}

module.exports = { PeliculaDaoFile }

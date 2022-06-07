const ContenedorMemoria = require('../contendores/ContenedorMemoria')
const {generarUsuario} = require('../utils/generadorDeUsuarios')
const {generarId} = require('../utils/generadorDeIds')

class ApiUsuariosMock extends ContenedorMemoria {
    constructor() {
        super('src/data/usuariosMock.json');
    }

    popular(cant = 50) {
        const nuevosUsuarios = [];

        for (let index = 0; index < cant; index++) {
            const nuevoUsuario = generarUsuario(generarId());
            nuevosUsuarios.push(nuevoUsuario);
        }

        this.guardar(nuevosUsuarios);

        return nuevosUsuarios;
    }
}

module.exports = ApiUsuariosMock;
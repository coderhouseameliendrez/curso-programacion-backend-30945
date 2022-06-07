let faker = require('faker');
faker.locale = 'es';

function generarUsuario(id) {
    return {
        id: id,
        nombre: faker.name.findName(),
        email: faker.internet.email(),
        website: faker.internet.url(),
        image: faker.image.avatar()
    }
}

module.exports = {generarUsuario}
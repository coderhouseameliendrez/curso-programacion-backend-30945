let faker = require('faker');
faker.locale = 'es';

function generarId() {
    return faker.random.number()
}

module.exports = {generarId}
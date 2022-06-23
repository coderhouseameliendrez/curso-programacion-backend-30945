const bcrypt = require('bcrypt');

function createHash(password) {
    return bcrypt.hashSync(
        password,
        bcrypt.genSaltSync(10),
        null
    )
}

module.exports = {createHash}
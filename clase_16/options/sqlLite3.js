const knexSqLite = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './DB/mi_tienda.sqlite'
    },
    useNullAsDefault: true
})

module.exports = { knexSqLite };
const { knexMysql } = require('./options/mariaDB');
const { knexSqLite } = require('./options/sqlLite3');

const createTable = async knex => {
    await knex.schema.createTable('productos', table => {
        table.increments('id').primary();
        table.string('name');
        table.integer('price');
      });
   }

createTable(knexMysql);
createTable(knexSqLite);
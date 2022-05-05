const { knexMysql } = require('./options/mariaDB');
const { knexSqLite } = require('./options/sqlLite3');

const deleteProducts = (knex) => {
    knex('productos').del()
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

deleteProducts(knexMysql);
deleteProducts(knexSqLite);
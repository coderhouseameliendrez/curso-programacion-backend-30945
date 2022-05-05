const { knexMysql } = require('./options/mariaDB');
const { knexSqLite } = require('./options/sqlLite3');

const getProducts = (knex) => {
    knex('productos').select('id', 'name', 'price')
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

getProducts(knexMysql);
getProducts(knexSqLite);
const { knexMysql } = require('./options/mariaDB');
const { knexSqLite } = require('./options/sqlLite3');

const updateProducts = (knex) => {
    knex('productos').where({id:1}).update({name: 'Lavarropa'})
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}

updateProducts(knexMysql);
updateProducts(knexSqLite);
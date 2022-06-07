let faker = require('faker');
faker.locale = 'es';
const { name, internet, random } = faker;
let fs = require('fs');

let str = 'NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n';

for (let i = 0; i < 100; i++) {
    str += name.firstName() +
    ';' + name.lastName() +
    ';' + internet.email() +
    ';' + name.jobTitle() +
    ';' + random.locale() +
    '\n';
}

fs.writeFileSync('./test.csv', str, err => {
    if(err) console.log(err);
    console.log('Archivo guardado');
})


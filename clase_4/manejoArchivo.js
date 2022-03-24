const fs = require('fs');

let producto = { nombre: 'Heladera', precio: 100 };
let producto2 = { nombre: 'Lavarropas', precio: 50 };
let arregloProductos = [];

arregloProductos.push(producto);
arregloProductos.push(producto2);

fs.writeFileSync('./productos.json',JSON.stringify({productos: arregloProductos}));

let data = fs.readFileSync('./productos.json', 'utf-8');
let arreglo = JSON.parse(data).productos;

console.log(arreglo);
const fs = require('fs');

let fecha = Date();

fs.writeFileSync('./fyh.txt', fecha);

fecha = Date();

fs.appendFileSync('./fyh.txt', "\n" + fecha);

let data = fs.readFileSync('./fyh.txt', 'utf-8');

console.log(data);

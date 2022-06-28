for (let index = 0; index < process.argv.length; index++) {
   console.log(`${index} => ${process.argv[index]}`);
}


// MINIMIST
// const parseArgs = require('minimist');

// const optionsDefault = {default: {nombre: "pepe", apellido: "copado"}}

// //const args = parseArgs(process.argv.slice(2), optionsDefault)

// const optionsAlias = {alias: {c: "colores"}}

// const args = parseArgs(process.argv.slice(2), optionsAlias)

// console.log('--------');
// console.log(args);
// console.log('--------');
// console.log(args._);
// console.log('--------');
// //console.log(args.colores);
// console.log('--------');




// YARGS

const yargs = require('yargs/yargs')(process.argv.slice(2));

console.log('--------');
//const argv = yargs.argv;

console.log('--------');


//const argv = yargs.default({nombre: "pepe", apellido: "copado"}).argv;


//const argv = yargs.alias({c: "colores"}).argv;


const argv = yargs.boolean("colores").argv;



console.log(argv);
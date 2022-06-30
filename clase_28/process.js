console.log("Direccion actual del trabajo " + process.cwd());
console.log("id del proceso " + process.pid);
console.log("version de node " + process.version);
console.log("Titulo del proceso " + process.title);
console.log("Sistema operativo " + process.platform);
console.log("uso de la memoria ", process.memoryUsage());

console.log("");
console.log("");

process.stdout.write('Hola coders \n')
console.log("otro mensaje");
console.log("");

process.on('exit', (code) => {
    console.log('Proceso termino con el codigo: ', code);
}) 


process.on('uncaughtException', (err) => {
    console.log('uncaughtException con error: ', err);
})

throw 'Error custom';


console.log('Antes de finalizar mi aplicacion');
process.exit(3);

console.log(process);

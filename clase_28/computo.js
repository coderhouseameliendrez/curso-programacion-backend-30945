// PROCESO HIJO



process.on('message', msg => {
    console.log(`Mensaje del proceso padre: ${msg}`);

    let sum = 0;

    for (let index = 0; index < 6e9; index++) {
        sum += index
    }

    process.send(sum)
})
const {exec, execFile, spawn} = require('child_process');

// exec('git --version', (error, stdout, stderr) => {
//     if(error) {
//         console.log(`Error: ${error}`);
//         return;
//     }

//     if(stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }

//     console.log(`stdout: ${stdout}`);
// })


console.log("");
console.log("");


// execFile(__dirname + '/proccessNode.sh', (error, stdout, stderr) => {
//     if(error) {
//         console.log(`Error: ${error}`);
//         return;
//     }

//     if(stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }

//     console.log(`stdout: ${stdout}`);
// })


const child = spawn('find', ['.'])

child.stdout.on('data', data => {
    console.log(`stdout:\n ${data}`);
})

child.on('error' , error => {
    console.log(`error: ${error.message}`);
})

child.on('close' , code => {
    console.log(`exit whit code: ${code}`);
})
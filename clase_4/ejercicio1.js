const delay = ret => {for (let index = 0; index < ret*3e6; index++);}

function hacerTarea(num) {
    console.log('haciendo tarea ' + num);
    delay(100);
}

console.log('inicio de tareas');
hacerTarea(1);
hacerTarea(2);
hacerTarea(3);
hacerTarea(4);

console.log('fin de tareas');
console.log('otras tareas ...');
const delay = ret => {for (let index = 0; index < ret*3e6; index++);} 
const fin = () => { console.log('termine') }; 

function mostrarLetras(palabra, tiempo){ 
    let arr = palabra.split(''); 

    arr.forEach(e => { 
        console.log(e); 
        delay(tiempo); 
    }) 
    fin() 
} 
mostrarLetras('¡hola!', 1000); 
mostrarLetras('¡hola!', 250); 
mostrarLetras('¡hola!', 0);
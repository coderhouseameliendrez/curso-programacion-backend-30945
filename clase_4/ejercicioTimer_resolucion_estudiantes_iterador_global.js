let i = 0; 

function mostrarLetras(frase, fin) { 
    console.log(frase[i]); 
    
    if (i < frase.length -1) { 
        i++; 
        setTimeout(() => {
            mostrarLetras(frase, fin);
        }, 1000); 
    } else { 
        fin(); 
    } 
} 

const fin = () => console.log("termine"); 

mostrarLetras("Hola", fin); 
mostrarLetras("Hola", fin); 
mostrarLetras("Hola", fin); 
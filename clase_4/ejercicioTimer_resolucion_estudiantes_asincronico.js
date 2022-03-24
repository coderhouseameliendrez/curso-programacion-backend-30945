const msg = () => { console.log("terminé"); }; 
const text = "HolaCoders"; 

const mostrarLetras = (text, time, msg) => { 
    let i = 0; 
    const cicle = setInterval(()=>{ 
        console.log(text[i])
        i++ 
        if(i >= text.length){ 
            clearInterval(cicle); 
            msg(); 
        } 
    },time); 
}; 

mostrarLetras(text, 0, msg); 
mostrarLetras(text, 250, msg); 
mostrarLetras(text, 500, msg); 
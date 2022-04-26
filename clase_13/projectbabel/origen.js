const lista=[1,2,7,5];
const getEdad = (edad) => {
    console.log(`La edad es ${edad}`);
  }
  
lista.map(x => x*x).forEach(x => console.log(x));


let edad = 29

getEdad(edad)

class Persona {
    constructor(nombre) {
        this.nombre = nombre
    }
}
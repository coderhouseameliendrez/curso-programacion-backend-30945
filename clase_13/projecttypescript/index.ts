const listaNumeros:Array<number> =[2,3,5,7];


listaNumeros.map((x:number) => x*x)
    .forEach((x:number) => console.log(x));


function getEdad(edad:number) : number {
    return edad;
}


let edad:number = getEdad(29);
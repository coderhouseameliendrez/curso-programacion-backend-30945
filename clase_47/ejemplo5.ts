await Deno.writeTextFile("test.txt", "Hola coders desde deno con permisos!!");

const enconder = new TextEncoder();
const data = enconder.encode("Hola coders!!!!");


await Deno.writeFile("test.txt", data);



const result = await Deno.readTextFile("test.txt");
console.log(result);





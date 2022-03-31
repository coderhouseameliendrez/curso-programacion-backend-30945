const fs = require('fs');


class ContenedorUsuarios {
    constructor() {
        this.nombreArchivo = './usuarios.json';
        this.id = 1;
    }

    save(nombre, edad) {
        let usuario = {nombre: nombre, edad: edad, id: this.id};
        let usuarios = [];

        try {
            let file = fs.readFileSync(this.nombreArchivo, 'utf-8');
            usuarios = JSON.parse(file);
        } catch (error) {
            console.log('No hay archivo');
        }

        usuarios.push(usuario);
        fs.writeFileSync(this.nombreArchivo, JSON.stringify(usuarios));
        this.id++;
    }

    getById(id) {
        let usuarios = [];

        try {
            let file = fs.readFileSync(this.nombreArchivo, 'utf-8');
            usuarios = JSON.parse(file);
        } catch (error) {
            console.log('No hay archivo');
        }

        let usuario = null;

        usuarios.forEach(user => {
            if(user.id == id) {
                usuario = user;
            }
        });

        return usuario;
    }
}

let contenedor = new ContenedorUsuarios();
console.log(contenedor.getById(5));

contenedor.save('Diego', 28);
contenedor.save('Agustin', 29);
contenedor.save('Martin', 29);


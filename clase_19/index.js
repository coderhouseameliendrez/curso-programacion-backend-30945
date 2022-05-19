import mongoose from "mongoose";
import * as model from './src/models/usuarios.js';

CRUD();

async function CRUD() {
    try {
        /* --------------------------------------- */
        /*     conexión hacia la vase de datos     */
        /* --------------------------------------- */
        const URL = 'mongodb://localhost:27017/ecommerce';

        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log('Base de datos conectada');

        /* --------------------------------------- */
        /*                CREATE                   */
        /* --------------------------------------- */

        console.log('Create');
        const usuario = {
            nombre: 'Juan', 
            apellido: 'Perez', 
            email: 'test@test.com', 
            password: 123456,
            usuario: 'jperez'
        };
        const usuarioSaveModel = new model.usuarios(usuario);
        let usuarioSave = await usuarioSaveModel.save();
        console.log(usuarioSave);


        console.log('Create 4 users');
        await new model.usuarios({nombre: 'Juan', apellido: 'Perez', email: 'test@test.com', password: 123456, usuario: 'jperez'}).save();
        await new model.usuarios({nombre: 'Agustin', apellido: 'Meliendrez', email: 'test@test.com', password: 987654, usuario: 'ameliendrez'}).save();
        await new model.usuarios({nombre: 'Rodrigo', apellido: 'rodriguez', email: 'test@test.com', password: 567891, usuario: 'rrodriguez'}).save();
        await new model.usuarios({nombre: 'Pepe', apellido: 'Gonzales', email: 'test@test.com', password: 468032, usuario: 'pgonzalez'}).save();



        /* --------------------------------------- */
        /*                READ ALL                 */
        /* --------------------------------------- */
        
        console.log('Read all');
        let usuarios = await model.usuarios.find({});
        console.log(usuarios);
        
        /* --------------------------------------- */
        /*                UPDATE                   */
        /* --------------------------------------- */

        // console.log('UPDATE');

        let usuarioUpdate = await model.usuarios.updateOne(
            {nombre: 'Juan'},
            {$set: { password: 654321 } }
        );
        console.log(usuarioUpdate);


        /* --------------------------------------- */
        /*                  READ                   */
        /* --------------------------------------- */
        
        console.log('Read');
        let usuarios = await model.usuarios.find({apellido:'Meliendrez'});
        console.log(usuarios);


        /* --------------------------------------- */
        /*                DELETE                   */
        /* --------------------------------------- */

        console.log('DELETE');

        let usuarioDelete = await model.usuarios.deleteOne(
            {nombre: 'Juan'}
        );
        console.log(usuarioDelete);

        console.log('READ PROJECTION + FILTER');
        console.log(await model.usuarios.find(
            {apellido: 'Gonzales'},
            {nombre:1, apellido:1, email:1, _id:0}
        ));
        console.log(await model.usuarios.find(
            {apellido: 'Agustin'},
            {nombre:1, apellido:1, email:1, _id:0}
        ));

        console.log('READ PROJECTION + SORT');
        console.log(
            await model.usuarios.find(
            {},
            {nombre:1, _id:0}
        ).sort({nombre: -1})
        );

        console.log('READ PROJECTION + SORT');
        console.log(await model.usuarios.find(
            {},
            {nombre:1, _id:0}
        ).sort({nombre: -1}));

        console.log('READ PROJECTION + SORT + SKIP');
        console.log(await model.usuarios.find(
            {},
            {nombre:1, _id:0}
        ).sort({nombre: -1}).skip(5));

        console.log('READ PROJECTION + SORT + SKIP + LIMIT');
        console.log(await model.usuarios.find(
            {},
            {nombre:1, _id:0}
        ).sort({nombre: -1}).skip(1).limit(2));




    } catch (error) {
        console.log(`Error en el CRUD: ${error}`);
    }
}
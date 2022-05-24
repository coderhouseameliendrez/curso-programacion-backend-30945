let admin = require("firebase-admin");

let serviceAccount = require("./db/coderhouse-60df1-firebase-adminsdk-uvqfs-4638060421.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log('Base de datos conectada');


CRUD();

async function CRUD() {
    

    const db = admin.firestore();
    const userCollection = db.collection('usuarios');

    try {
        //INSERT WITH MANUAL IDS
        // let id = 1;
        // let doc = userCollection.doc(`${id}`);
        // await doc.create({nombre: 'Jose', dni: 11111111});
        // id++;

        // doc = userCollection.doc(`${id}`);
        // await doc.create({nombre: 'Ana', dni: 22222222});
        // id++;

        // doc = userCollection.doc(`${id}`);
        // await doc.create({nombre: 'Pepe', dni: 33333333});
        // id++;
        // console.log('Datos insertados');


        //READ ALL
        // const querySnapshot = await userCollection.get();
        // let docs = querySnapshot.docs;

        // const response = docs.map((doc) => ({
        //     id: doc.id,
        //     nombre: doc.data().nombre,
        //     dni: doc.data().dni
        // }))

        // console.log(response);

        //READ BY ID
        // let id = 2;
        // const doc = userCollection.doc(`${id}`);
        // const item = await doc.get();
        // const responseById = item.data();
        // console.log(responseById);


        // GET - DELETE - UPDATE - CREATE
        //UPDATE
        // let id = 2;
        // const doc = userCollection.doc(`${id}`);
        // const item = await doc.update({dni:98765});
        // console.log("Usuario actualizado", item);


        // DELETE
        let id = 1;
        const doc = userCollection.doc(`${id}`);
        const item = await doc.delete();
        console.log("Usuario ELIMINADO", item);


        
    } catch (error) {
        console.log(`Error: ${error}`);
    }


}
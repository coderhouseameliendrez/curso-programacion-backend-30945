import express from "express";
import {getTime} from "./lib/utils";
import Persona from "./models/Persona";

const p: Persona = new Persona("Coder", "house");
const app = express();

app.get('/', (req, res) => {
    res.send({
        time: getTime(),
        name: p.getFullName()
    })
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log('Conectado al puerto 8080');
    
})
const fetch = require('cross-fetch');
const { response } = require('express');


fetch('http://localhost:8080/graphql?query={getAllPersonas{edad}}')
.then(response => response.json())
.then(data => {
    data.data.getAllPersonas.forEach(persona => {
        console.log(persona);
    
    });
})
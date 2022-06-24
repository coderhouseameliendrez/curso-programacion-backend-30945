const express = require('express');
const { Router } = express;
const productsRouter = Router();

let products = [
    {name: "Heladera", price: 200}, 
    {name: "Televisor", price: 100}
];

productsRouter.get('/', (req, res) => {
    res.json({products: products});
});

productsRouter.post('/', (req, res) => {
    let product = req.body;

    if (product && product.name && product.price) {
        products.push(product);
        res.json({result: 'product saved', product: product});
    } else {
        res.json({result: 'product cannot saved', error: true});
    }
});

function getProductos() {
    
}

module.exports = productsRouter;
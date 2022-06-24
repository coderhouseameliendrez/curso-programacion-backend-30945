const express = require('express');
const { Router } = express;
const pageRouter = Router();

pageRouter.get('/', (req, res) => {
    res.render('main');
});

module.exports = pageRouter;


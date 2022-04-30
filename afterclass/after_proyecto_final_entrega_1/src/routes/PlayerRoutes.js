const express = require('express');
const { Router } = express;
const playerRouter = Router();

const { PlayerContainer } = require('../models/PlayerContainer');
let playerContainer = new PlayerContainer();

playerRouter.get('/', (req, res) => {
    let players = playerContainer.getAll();

    res.json({players: players});
});

playerRouter.post('/', (req, res) => {
    let player = req.body;

    if (player && player.name && player.number && player.age) {
        player = playerContainer.save(player.name, player.number, player.age);
        res.json({result: 'player saved', player: player});
    } else {
        res.json({result: 'player cannot saved'});
    }
});

module.exports = playerRouter;
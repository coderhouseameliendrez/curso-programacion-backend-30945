const express = require('express');
const { Router } = express;
const teamRouter = Router();

const { PlayerContainer } = require('../models/PlayerContainer');
const { TeamContainer } = require('../models/TeamContainer');

let playerContainer = new PlayerContainer();
let teamContainer = new TeamContainer();

teamRouter.get('/', (req, res) => {
    let teams = teamContainer.getAll();

    res.json({teams: teams});
});

teamRouter.post('/', (req, res) => {
    let team = req.body;

    if (team && team.name && team.description) {
        team = teamContainer.save(team.name, team.description);
        res.json({result: 'team saved', team: team});
    } else {
        res.json({result: 'team cannot saved'});
    }
});

teamRouter.post('/:id/players', (req, res) => {
    let teamId = req.params.id;
    let player = playerContainer.getById(req.body.id);

    if (teamId && player) {
        let team = teamContainer.addPlayerToTeam(teamId, player);
        
        res.json({result: 'player added to team', team: team});
    } else {
        res.json({result: 'player cannot be added'});
    }
});

module.exports = teamRouter;
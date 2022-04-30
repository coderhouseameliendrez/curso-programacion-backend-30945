const { Container } = require('./Container');

class TeamContainer extends Container {
    constructor() {
        super('./src/data/teams.json');
        let teams = this.getAll();
        this.id = (teams.length > 0) ? teams.length + 1 : 1;
    }

    save(name, description) {
        let teams = this.getAll();
        let team = {id:this.id, name: name, description: description, players: []}
        teams.push(team);
        this.saveInFile(teams);
        this.id++;

        return team;
    }

    getAll() {
        let teams = this.getContentFile();

        return teams;
    }

    getById(id) {
        let teams = this.getAll();
        let team = null;

        if(teams.length > 0) {
            let element = teams.find(elem => elem.id == id);
            if(element) {
                team = element;
            }
        }

        return team;
    }

    addPlayerToTeam(teamId, player) {
        let teams = this.getAll();
        let team = null;

        if(teams.length > 0) {
            let element = teams.find(elem => elem.id == teamId);
            if(element) {
                element.players.push(player);
                team = element;
            }

            this.saveInFile(teams);
        }

        return team;
    }
}

module.exports = { TeamContainer }
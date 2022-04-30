const { Container } = require('./Container');

class PlayerContainer extends Container {
    constructor() {
        super('./src/data/players.json');
        let players = this.getAll();
        this.id = (players.length > 0) ? players.length + 1 : 1;
    }

    save(name, number, age) {
        let players = this.getAll();
        let player = {id:this.id, name: name, number: number, age: age}
        players.push(player);
        this.saveInFile(players);
        this.id++;
    }

    getAll() {
        let players = this.getContentFile();

        return players;
    }

    getById(id) {
        let players = this.getAll();
        let player = null;

        if(players.length > 0) {
            let element = players.find(elem => elem.id == id);
            if(element) {
                player = element;
            }
        }

        return player;
    }
}

module.exports = { PlayerContainer }
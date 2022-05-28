const { ContainerFile } = require('../../contenedores/ContainerFile')

class UserDaoFile extends ContainerFile {
    constructor() {
        super('./src/data/users.json');
        let users = this.getAll();
        this.id = (users.length > 0) ? users[users.length -1].id + 1 : 1;
    }

    save(name, email, age) {
        let users = this.getAll();
        let user = {id:this.id, name: name, email: email, age: age}
        users.push(user);
        this.saveInFile(users);
        this.id++;
	return user
    }

    getAll() {
        let users = this.getContentFile();

        return users;
    }
}

module.exports = { UserDaoFile }

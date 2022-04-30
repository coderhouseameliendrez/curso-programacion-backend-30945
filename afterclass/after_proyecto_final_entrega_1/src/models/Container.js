const fs = require('fs');

class Container {
    constructor(fileName) {
        this.fileName = fileName;
    }

    saveInFile(content) {
        fs.writeFileSync(this.fileName, JSON.stringify(content));
    }

    getContentFile() {
        let content = [];

        try {
            let file = fs.readFileSync(this.fileName, 'utf-8');
            content = JSON.parse(file);
        } catch (error) {
            this.saveInFile(content);
            console.log(`Creacion del archivo ${this.fileName}`);
        }

        return content;
    }
}

module.exports = { Container }
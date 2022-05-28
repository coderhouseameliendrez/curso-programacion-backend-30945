const fs = require('fs');

class ContainerFile {
    constructor(fileName) {
        this.fileName = fileName;
    }

    saveInFile(content) {
        fs.writeFileSync(this.fileName, JSON.stringify(content, null,'\t'));
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

  getById(id){
    let contentArray = this.getContentFile()
    let content = null
    if(contentArray.length > 0){
      let element = contentArray.find(elem => elem.id == id)
    }
    if(element){
      content = element
    }
    return element
  }

    deleteById(id){
      let contentArray = this.getContentFile()
      if(contentArray.length > 0){
	let newElementArray = contentArray.filter(elem => elem.id != id)
	this.saveInFile(newElementArray)
      }
      return { status: 'Removed' }
    }

  updateById(id, content){
    let contentArray = this.getContentFile()
    let index = contentArray.findIndex(elem => elem.id === id)
    if(index != -1) {
      contentArray[index] = content
      this.saveInFile(contentArray)
    }
      return content
    }
}

module.exports = { ContainerFile }

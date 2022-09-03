'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.timestamps()
      table.string('name', 255);
      table.string('description', 255);
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema

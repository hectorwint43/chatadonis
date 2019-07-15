'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrupoSchema extends Schema {
  up () {
    this.create('grupos', (table) => {
      table.increments()
      table.string('nombregrupo', 50).notNullable()
      table.string('usuario', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('grupos')
  }
}

module.exports = GrupoSchema

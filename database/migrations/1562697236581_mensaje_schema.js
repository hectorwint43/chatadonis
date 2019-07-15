'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MensajeSchema extends Schema {
  up () {
    this.create('mensajes', (table) => {
      table.increments()
      table.string('from', 10).notNullable()
      table.string('to', 10).notNullable()
      table.string('mensaje', 150).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('mensajes')
  }
}

module.exports = MensajeSchema

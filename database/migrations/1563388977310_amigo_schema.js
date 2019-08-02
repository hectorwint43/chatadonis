'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AmigoSchema extends Schema {
  up () {
    this.create('amigos', (table) => {
      table.increments()
      table.integer('propietario').notNullable().references('id').inTable('users');
      table.integer('contacto').notNullable().references('id').inTable('users');
      table.timestamps()
    })
  }

  down () {
    this.drop('amigos')
  }
}

module.exports = AmigoSchema

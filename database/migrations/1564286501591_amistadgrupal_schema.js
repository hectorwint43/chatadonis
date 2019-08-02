'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AmistadgrupalSchema extends Schema {
  up () {
    this.create('amistadgrupals', (table) => {
      table.increments()
      table.integer('idusuario').notNullable().references('id').inTable('users');
      table.integer('idgrupo').notNullable().references('id').inTable('grupos');
      table.timestamps()
    })
  }

  down () {
    this.drop('amistadgrupals')
  }
}

module.exports = AmistadgrupalSchema

'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsergrupoSchema extends Schema {
  up () {
    this.create('usergrupos', (table) => {
      table.increments()
      table.integer('iduser').notNullable();
      table.integer('idgrupo').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('usergrupos')
  }
}

module.exports = UsergrupoSchema

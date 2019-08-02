'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class MensajeGrupo
 */
class MensajeGrupo extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'MensajeGrupoHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * MensajeGrupo's schema
   */
  static get schema () {
    return {
      from:Number,
      to:Number,
      mensaje:String,
      tipo:String
    }
  }
}

module.exports = MensajeGrupo.buildModel('MensajeGrupo')

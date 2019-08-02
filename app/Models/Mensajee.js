'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class Mensajee
 */
class Mensajee extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'MensajeeHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * Mensajee's schema
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

module.exports = Mensajee.buildModel('Mensajee')

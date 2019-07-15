'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

//-----------------------USUARIO-------------------
Route.get('usuario','UsuarioController.ver')

Route.get('usuario/:id','UsuarioController.veruno')

Route.post('usuario/guardar','UsuarioController.guardar')

Route.delete('usuario/eliminar/:id','UsuarioController.eliminar')

Route.put('usuario/editar/:id','UsuarioController.editar')
//-----------------------USUARIO-------------------

//-----------------------MENSAJE-------------------
Route.get('mensaje','MensajeController.ver')

Route.post('mensaje/guardar','MensajeController.guardar')
//-----------------------MENSAJE-------------------


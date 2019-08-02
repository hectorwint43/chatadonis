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
//----------LOGIN--------------------
Route.post('login','LoginController.login')
Route.post('verusua','LoginController.veraftertoken')

//--------------PARA LA LISTA DE AMIGOS-------------------
Route.get('amigosconsulta/:id','UsuarioController.consultaamigosusuario')
Route.delete('amigo/eliminar/:id','UsuarioController.eliminaramigo')
Route.post('amigo/agregar','UsuarioController.agregaramigo')
//--------------PARA LA LISTA DE AMIGOS-------------------

//-----------------------GRUPO-------------------
Route.post('grupo/guardar/:id','GrupoController.guardargrupo')
Route.post('grupo/agregaramigogrupo','GrupoController.agregaramigogrupo')
Route.get('grupoconsula/:id','GrupoController.consultagrupousuario')
Route.get('grupoveruno/:id','GrupoController.veruno')
Route.delete('grupo/eliminar/:id','GrupoController.eliminargrupo')
Route.delete('grupo/eliminaramistadgrupal/:id','GrupoController.eliminaramistadgrupal')
//-----------------------GRUPO-------------------


//-----------------------USUARIO-------------------
Route.post('usuario/especial','UsuarioController.miusuarioespecial')

Route.get('usuario','UsuarioController.ver')

Route.get('usuario/:id','UsuarioController.veruno')

Route.post('usuario/guardar','UsuarioController.guardar')

Route.delete('usuario/eliminar/:id','UsuarioController.eliminar')

Route.put('usuario/editar/:id','UsuarioController.editar')

Route.get('participantesgrupo/:id','UsuarioController.participantesdelgrupo')
//-----------------------USUARIO-------------------

//-----------------------MENSAJE-------------------
// Route.get('mensaje','MensajeController.ver')
Route.get('mensaje/:id/:id2','MensajeController.ver')
Route.post('mensaje/guardar','MensajeController.guardar')

Route.get('mensajegrupo/:id/:id2','MensajeController.vermensajeG')
Route.post('mensajegrupo/guardar','MensajeController.guardarmensajeG')

Route.post('archivos','MensajeController.archivos')
//-----------------------MENSAJE-------------------


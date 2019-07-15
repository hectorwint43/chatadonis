'use strict'
const Usuario=use('App/Models/User');


class UsuarioController {

    async ver({request,response, socket})
     {

       //esto es una consulta en query 
    //   return await Database
    //   .table('users')
    //   .where('username', 'luigi bros2')
    //   .first()

          const usuario = await Usuario.all();
          return response.status(200).json(usuario)
     }
    async veruno({params,request,response})
    {
        const usuario = await Usuario.find(params.id);
        return response.status(200).json(usuario);
    }

    async guardar({request,response})
    {
        const usuario = new Usuario()
        usuario.username = request.input('username');
        usuario.email = request.input('email');
        usuario.password = request.input('password');
        await usuario.save();
        return response.status(200).json(usuario);
    }
    

    async eliminar({params,response})
    {
        const usua=await Usuario.find(params.id);
        await usua.delete()
        return 'usuario eliminado';    
    }

    async editar({params,request,response})
    {
        const usua=await Usuario.find(params.id);
        usua.username = request.input('username');
        usua.email = request.input('email');
        usua.password = request.input('password');
        await usua.save();
        return response.status(200).json(usua);
    }

}

module.exports = UsuarioController

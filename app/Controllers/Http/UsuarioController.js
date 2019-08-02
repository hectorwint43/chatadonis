'use strict'
const Usuario=use('App/Models/User');
const Amigito=use('App/Models/Amigo');
const Database = use('Database');

class UsuarioController {

    async consultaamigosusuario({params,request,response})
    {
       return await Database
       .select('amigos.id as amigoid','amigos.propietario as propietarioid',
       'amigos.contacto as contactoid',
       'users.id as userid','users.username as username','users.email as email',
       'users.password as password')
       .from('users')
       .innerJoin('amigos', function () {
        this
          .on('users.id', 'amigos.contacto')
          .orOn('users.id', 'amigos.propietario')
      })
      .where('amigos.contacto', params.id)
      .orWhere('amigos.propietario', params.id)
    }

    async ver({request,response, socket})
     {

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
    async eliminaramigo({params,response})
    {
        const amigo=await Amigito.find(params.id);
        await amigo.delete()
        return 'Relacion eliminada';    
    }

    async agregaramigo({request,response})
    {
        var email=request.input('email')
        var elid=request.input('miid')
        const u = await Usuario.findBy('email', email);
        const u2 = await Usuario.findBy('id', elid);
        console.log('mira id para contacto '+u.id);
        console.log('mira id para usuario '+u2.id);


        const amigosnuevo = new Amigito()
        amigosnuevo.propietario = u2.id;
        amigosnuevo.contacto = u.id;
        
         await amigosnuevo.save();
        return response.status(200).json(amigosnuevo);

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

    async miusuarioespecial({request,response})
    {
        var id=request.input('id')
        const u = await Usuario.findBy('id', id);
        return await Usuario.query().where('id',id).orderBy('id').fetch();  
    }

    async participantesdelgrupo({params,request,response})
    {
       return await Database
       .select('amistadgrupals.id as amistadgrupoid','amistadgrupals.idusuario as idusuario',
       'users.id as userid','users.username as username','users.email as email',
       'users.password as password','grupos.id as grupoid',
       'grupos.nombregrupo as nombregrupo','grupos.creadorid as creadorid')
       .from('users')
       .innerJoin('amistadgrupals', function () {
        this
          .on('users.id', 'amistadgrupals.idusuario')
      })
      .innerJoin('grupos', function () {
        this
          .on('amistadgrupals.idgrupo', 'grupos.id')
      })
      .where('grupos.id', params.id)
    //   .orWhere('amigos.propietario', params.id)
    }

}

module.exports = UsuarioController

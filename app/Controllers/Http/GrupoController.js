'use strict'
const Usuario=use('App/Models/User');
const Grupo=use('App/Models/Grupo');
const GrupoUsuario=use('App/Models/Amistadgrupal');

const Database = use('Database');


class GrupoController {

    async guardargrupo({params,request,response})
    {
        // const usuariooo = await Usuario.find(params.id);

        const grupo = new Grupo()
        grupo.nombregrupo = request.input('nombregrupo');
        grupo.creadorid = params.id;
        await grupo.save();

        const u = await Database
        .table('grupos')
        .where('creadorid', params.id)
        .last();
        
        const grupouser = new GrupoUsuario()

        grupouser.idusuario = params.id;
        grupouser.idgrupo = u.id;
        
        await grupouser.save();
         return response.status(200).json(await grupouser);
        
    }

    async agregaramigogrupo({request,response})
    {
         var email=request.input('email')
         var idgrupo=request.input('idgrupo')
        // var elid=request.input('idgrupo')
         const u = await Usuario.findBy('email', email);
        // // const u2 = await Grupo.find(elid);
         console.log('mira id para amigo '+u.id);
         console.log('mira id para grupo '+idgrupo);


        const grupouser = new GrupoUsuario()

        grupouser.idusuario = u.id;
        grupouser.idgrupo = request.input('idgrupo');
        
        await grupouser.save();
         return response.status(200).json(grupouser);
    }

    async consultagrupousuario({params,request,response})
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
      .where('users.id', params.id)
    //   .orWhere('amigos.propietario', params.id)
    }

    async veruno({params,request,response})
    {
        const grupo = await Grupo.find(params.id);
        return response.status(200).json(grupo);
    }


    async eliminargrupo({params,response})
    {
        const grupo=await Grupo.find(params.id);
        await grupo.delete()
        return 'grupo eliminado';    
    }

    async eliminaramistadgrupal({params,response})
    {
        
        const grupous=await GrupoUsuario.find(params.id);
        await grupous.delete()
        return 'grupo eliminado';    
    }


}

module.exports = GrupoController

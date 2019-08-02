'use strict'
const Mensajee = use('App/Models/Mensajee')
const MensajeG=use('App/Models/MensajeGrupo');
const Usuario=use('App/Models/User');
const Grupo=use('App/Models/Grupo');
const Database = use('Database');
const Helpers = use("Helpers");

class MensajeController {

   async vermensajeG({params,request,response})
    {
      //  no se utiliza el primere params
     console.log("mira un "+params.id);
     console.log("mira un2 "+params.id2);
     const u2 = await Grupo.find(params.id2);

      const mensajito = await MensajeG
     .find({to:params.id2});

   //  const mensajito = await MensajeG
   //   .find({$or:[{from:params.id,to:params.id2},
   //      {from:params.id2,to:params.id}]});

     return response.status(200).json(await mensajito);
    
    }

    async archivos({ request, response  }) {
      console.log('1');
      const file = request.file('file', {
        types: ['jpg','jpeg','png', 'gif','svg','mp4','mp3','avi','wmv','mov','mpeg'],
        size: '1024mb'
      })
      console.log('2');
   const fileName = `${new Date().getTime()}.${file.subtype}`
   console.error(fileName);
   file.move(Helpers.publicPath('/assets/archivos/'), {
    name: fileName
  });
      console.log('3');
      console.log('/assets/archivos/'+fileName);
     return response.status(200).json({url:'/assets/archivos/'+fileName})
  }

    async guardarmensajeG({request,response})
   {
       const mensajito = new MensajeG()
       mensajito.from = request.input('from');       
       mensajito.to = request.input('to');
       mensajito.mensaje = request.input('mensaje');
       mensajito.tipo = request.input('tipo');
       await mensajito.save();

       var id=request.input('from')
        var id2=request.input('to')

        const u = await Usuario.find(id);
         const u2 = await Grupo.find(id2);
        console.log('mira id para contacto '+u.id);
      //   console.log('mira id para usuario '+u2.id);

      //   const mensajito2 = await MensajeG
      //   .find({$or:[{from:u.id,to:u2.id},
      //      {from:u2.id,to:u.id}]})
      const mensajito2 = await MensajeG
      .find({to:u2.id});
    
    return response.status(200).json(await mensajito2);     
   }

    async ver({params,request,response})
    {
     // idusuario1 = params.id;
     console.log("mira un "+params.id);
     console.log("mira un2 "+params.id2);


    // const mensajito = await Mensajee
    //  .find({$or:[{ $where:'from = '+params.id,$where:'to = '+params.id2},
    //  { $where:'from = '+params.id2,$where:'to = '+params.id}]})
    const mensajito = await Mensajee
     .find({$or:[{from:params.id,to:params.id2},
        {from:params.id2,to:params.id}]});

     return response.status(200).json(await mensajito);

    //  return response.status(200).json(await Mensajee.query()
    //  .where({'from':params.id,'to':params.id2})
    //  .orWhere({'from':params.id2,'to':params.id}).orderBy('id').fetch());     
    }

   async guardar({request,response})
   {
       const mensajito = new Mensajee()
       mensajito.from = request.input('from');       
       mensajito.to = request.input('to');
       mensajito.mensaje = request.input('mensaje');
       mensajito.tipo = request.input('tipo');
       await mensajito.save();

       var id=request.input('from')
        var id2=request.input('to')

        const u = await Usuario.find(id);
        const u2 = await Usuario.find(id2);
        console.log('mira id para contacto '+u.id);
        console.log('mira id para usuario '+u2.id);

        const mensajito2 = await Mensajee
        .find({$or:[{from:u.id,to:u2.id},
           {from:u2.id,to:u.id}]})
    
    // const mensajito2 = await Mensaje.all();
    //      return response.status(200).json(mensajito2)
    return response.status(200).json(await mensajito2);     
   }

}

module.exports = MensajeController

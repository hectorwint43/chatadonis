'use strict'
const Mensaje=use('App/Models/Mensaje');

class MensajeController {

    async ver({request,response, socket})
    {
         const mensajito = await Mensaje.all();
         return response.status(200).json(mensajito)
    }

   async guardar({request,response})
   {
       const mensajito = new Mensaje()
       mensajito.from = request.input('from');       
       mensajito.to = request.input('to');
       mensajito.mensaje = request.input('mensaje');
       await mensajito.save();
       return response.status(200).json(mensajito);
   }

}

module.exports = MensajeController

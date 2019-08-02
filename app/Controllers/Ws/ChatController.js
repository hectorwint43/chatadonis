'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }

  onMessage (message) {
    this.socket.broadcast('message', message)
    // this.socket.broadcastToAll('message', message)
  }

  
    onCambiar (message) {
      //aqui manda mensaje al angular
        this.socket.broadcast('message',message);  
      }
  
    onClose () {
      // same as: socket.on('close')
    }
  
    onError () {
      // same as: socket.on('error')
    }

}

module.exports = ChatController

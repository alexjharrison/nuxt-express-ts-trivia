import { Socket } from 'socket.io'

export default (socket: Socket) => {
  console.log('heyo')
  socket.on('message', (message: string) => console.log(message))
}

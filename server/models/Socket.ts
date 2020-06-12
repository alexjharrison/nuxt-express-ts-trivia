// const Socket = (() => {
//   let io = null
//   return {
//     getSocketIOInstance: () => {
//       return io
//     },
//     startSocketIO: (server) => {
//       if (!io) {
//         io = IOSocket(server)
//         io.on('connection', (socket) => {
//           socket.emit('news', {
//             hello: 'world'
//           })
//           socket.on('get_data', (data) => {
//             console.log(data)
//           })
//         })
//       }
//     }
//   }
// })()

// module.exports = Socket

// class Socket {
//     constructor(private http:Express){}
// }

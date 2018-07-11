export default class Socket {
  constructor(io) {
    this.io = io;
    this.connections = [];
    this.onConnection();
  }

  onConnection = () => {
    this.io.on('connection', (socket) => {
      this.connections.push(socket);

      socket.on('messageType', (data) => {
        console.log(data);
      });
    });
  }

  get sockets() {
    return this.connections;
  }
}

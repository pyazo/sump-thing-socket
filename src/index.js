import restify from 'restify';
import socketio from 'socket.io';

import Socket from './lib/socket';

const server = restify.createServer();
const port = process.env.PORT || '4000';

const io = socketio.listen(server.server);

server.listen(port, () => {
  console.log(`The server is swimming at ${server.url}! 🐠`);
});

const socket = new Socket(io);

server.get('/power/:number', (req, res, next) => {
  const { number } = req.params;

  const powerArr = [0, 0, 0, 0];

  powerArr[number] = 1;

  socket.sockets.forEach((client) => {
    client.emit('outlet', { power: powerArr });
  });

  res.send(200);

  return next();
});

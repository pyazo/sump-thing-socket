import restify from 'restify';

const server = restify.createServer();
const port = process.env.PORT || '4000';

server.listen(port, () => {
  console.log('The server is swimming! 🐠');
});

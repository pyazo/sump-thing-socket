const { spawn } = require('child_process');
const chokidar = require('chokidar');
const terminate = require('terminate');

const watcher = chokidar.watch('./src', { usePolling: true });

console.log('Starting watch...')

let server = spawn('npm', ['start']);

server.stdout.on('data', function(data) {
    console.log(data.toString());

    data.toString();
});

watcher.on('change', (path) => {
  console.log('CHANGED');
  terminate(server.pid, (err) => {
    if (err) {
      console.log('HI');
      console.log(err);
      return;
    }

    console.log(`[REBUILDING]: Change detected at ${path}`);

    server = spawn('npm', ['start']);

    server.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    server.stderr.on('data', d => console.log(d.toString()))
  });
});

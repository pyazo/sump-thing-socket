const { spawn } = require('child_process');
const chokidar = require('chokidar');
const terminate = require('terminate');

const watcher = chokidar.watch('./src');

console.log('Starting watch...')

let server = spawn('npm', ['start']);

server.stdout.on('data', function(data) {
    console.log(data.toString());

    data.toString();
});

watcher.on('change', (path) => {
  terminate(server.pid, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`[REBUILDING]: Change detected at ${path}`);

    server = spawn('npm', ['start']);

    server.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    server.stderr.on('data', d => console.log(d.toString()))
  });
});

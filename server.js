const { urls } = require('./src/config');
const io = require('socket.io')();

let i = 0;
const getNewUrl = () => {
  if (i >= urls.length) {
    i = 0;
  }
  return urls[i++];
};

io.on('connection', client => {
  client.on('subscribeToMediaServer', interval => {
    console.log(
      'client is subscribing to media server with interval ',
      interval
    );
    setInterval(() => {
      client.emit('url', getNewUrl());
    }, interval);
  });
  client.on('updateUrl', url => client.emit(url));
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);

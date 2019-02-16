import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

// Polling every 1000ms (1s)
function subscribeToMediaServer(cb) {
  socket.on('url', url => cb(null, url));
  socket.emit('subscribeToMediaServer', 100);
}

export { subscribeToMediaServer };

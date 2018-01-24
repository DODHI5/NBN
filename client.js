

const net = require('net');

const socket = new net.Socket();

socket.connect(1800,'0.0.0.0',function () {
  console.log('Aloha');
  process.stdin.pipe(socket);

  });    
  socket.on('data',function (data) {
   console.log(data.toString('utf8'));
  
});
socket.once('end',function () {
  console.log('client disconnected');
  socket.destroy();
});
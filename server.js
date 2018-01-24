var net = require('net');

const arr = [];

const server = net.createServer(function (socket) {
  socket.setEncoding('utf8');
  arr.push(socket);
  console.log('new client connection');

  socket.on('data', function (data) {
    let clients = arr.length;
    for (let i = 0; i < clients; i++) {
      if (arr[i] === socket) continue;
        arr[i].write(data);
      
    }
  });


});
server.once('close', function () {
  console.log('Connection closed');

});
server.on('error', function (err) {
throw err;


});
server.on('end', function () {
  arr.splice(arr.indexOf(socket,1));
  
  
  });



server.listen(1800, function () {
  console.log('Server listening to 1800 port')
});
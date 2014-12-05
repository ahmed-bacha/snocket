var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = 80;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));


// Socket.io server listens to our app
var io = require('socket.io').listen(server);

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {
  socket.emit('welcome', { message: 'Welcome!' });

  socket.on('left', function(data){
    console.log(data);
  });

  socket.on('up', function(data){
    console.log(data);
  });

  socket.on('right', function(data){
    console.log(data);
  });

  socket.on('down', function(data){
    console.log(data);
  });

  //socket.on('right', console.log);
});

app.listen(80);

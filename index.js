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
var io = require('socket.io')(server);

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {
  socket.emit('welcome', { message: 'Welcome!' });

  socket.on('left', function(data){
    console.log('left');
    io.emit('snake_left', { message: 'Left!' });
  });

  socket.on('up', function(data){
    io.emit('snake_up', { message: 'Up!' });
  });

  socket.on('right', function(data){
    io.emit('snake_right', { message: 'Right!' });
  });

  socket.on('down', function(data){
    io.emit('snake_down', { message: 'Down!' });
  });

  //socket.on('right', console.log);
});

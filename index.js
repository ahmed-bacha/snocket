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
    socket.emit('snake_left');
  });

  socket.on('up', function(data){
    socket.emit('snake_up');
  });

  socket.on('right', function(data){
    socket.emit('snake_right');
  });

  socket.on('down', function(data){
    socket.emit('snake_down');
  });

  //socket.on('right', console.log);
});

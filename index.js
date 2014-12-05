var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/index.html');

var express = require('express');
var app1 = express();

// Routing
app1.use(express.static(__dirname + '/public'));


// Socket.io server listens to our app
var io = require('socket.io').listen(app1);

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

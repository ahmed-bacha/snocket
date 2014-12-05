var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/index.html');

var express = require('express');
var app = express();

// Routing
app.use(express.static(__dirname + '/public'));


// Send index.html to all requests
var app = http.createServer();

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

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

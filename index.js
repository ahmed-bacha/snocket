var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/mobile.html');

// Send index.html to all requests
var app = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

// Emit welcome message on connection
io.sockets.on('connection', function(socket) {
  socket.emit('welcome', { message: 'Welcome!' });

  socket.on('left', function(){
    socket.emit('snake_move', {direction: 'left'})
  });
  //socket.on('right', console.log);
});

app.listen(80);

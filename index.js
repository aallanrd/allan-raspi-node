var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

var path = require('path');
 
var spawn = require('child_process').spawn;
var proc;
 
app.use('/', express.static(path.join(__dirname, 'stream')));
 
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/stream/image_stream1.jpg', function(req, res) {
  res.sendFile(__dirname + '/stream/image_stream1.jpg');
});

 
var sockets = {};
 
io.on('connection', function(socket) {
 
  sockets[socket.id] = socket;
  console.log("Total clients connected : ", Object.keys(sockets).length);
 
  socket.on('start-stream', function() {
         
    startStreaming(io);
  });

   socket.on('take', function() {
         
    takePicture(io);
  });
 
});
 
http.listen(3000, function() {
  console.log('Server Allan Camara Init *:3000');
});
 

 
function takePicture(io) {
 
	  
  	  var args =  ["stream/image_stream1.jpg"];
	  proc = spawn('fswebcam', args);
 
}
 
function startStreaming(io) {
 
	  
  	  io.sockets.emit('liveStream', 'stream/image_stream1.jpg');
 
}



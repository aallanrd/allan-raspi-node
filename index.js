var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var fs = require('fs');

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

var path = require('path');
 
var spawn = require('child_process').spawn;
var proc;
 

var sockets = {};

io.on('connection', function (socket) {

    //Leer clientes conectados
    sockets[socket.id] = socket;
    console.log("Total clientes conectados: ", Object.keys(sockets).length);


    socket.on('send-foto', function (data) {

        console.log(data);
        fs.readFile('stream/image_stream1.jpg', function(err, buf){

            const bufx = Buffer.from(buf, 'ascii');
            var imageHex = bufx.toString('hex');
            var imageBinary = bufx.toString('binary');
            var imageB64 = bufx.toString('base64');
            socket.emit('news', imageB64);
          
        });

    });
    
    socket.on('tomar-foto', function (data) {
        console.log(data);
        var args =  ["-r","1200x800","stream/image_stream1.jpg"];
        proc = spawn('fswebcam', args);
    });
});



http.listen(3000, function() {
  console.log('Server  192.168.0.106:3000');
});



//Understand to put in other file

app.use('/', express.static(path.join(__dirname, 'stream')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/stream/image_stream1.jpg', function(req, res) {
    res.sendFile(__dirname + '/stream/image_stream1.jpg');
});

app.get('/jquery', function(req, res) {
    res.sendFile(__dirname + '/bower_components/jquery/dist/jquery.js');
});

app.get('/bootstrapjs', function(req, res) {
    res.sendFile(__dirname + '/bower_components/bootstrap/dist/js/bootstrap.js');
});

app.get('/bootstrapcss', function(req, res) {
    res.sendFile(__dirname + '/bower_components/bootstrap/dist/css/bootstrap.css');
});

app.get('/fontawesome', function(req, res) {
    res.sendFile(__dirname + '/bower_components/font-awesome/css/font-awesome.css');
});


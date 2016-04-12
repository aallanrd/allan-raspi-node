/*
   Conexión a Raspberry Pi con NodeJS {'express','socket.io'}
 */


var express = require('express');
var app = express();

var sleep = require('sleep');

var io = require('socket.io');

var http = require('http').Server(app);

//See https://nodejs.org/api/fs.html
var fs = require('fs');


var path = require('path');

// See https://nodejs.org/api/child_process.html
var spawn = require('child_process').spawn;

var proc;

http.listen(3000, function() {
  console.log('Server  192.168.0.106:3000');
});


app.get('/takePhoto', function(req, res) {
    res.sendFile(__dirname + '/index-started.html');
    var args =  ["-r","1200x800","stream/image_stream1.jpg"];
    proc = spawn('fswebcam', args);
});

app.get('/getPhoto', function(req, res) {

    fs.readFile('stream/image_stream1.jpg', function(err, buf){
        const bufx = Buffer.from(buf, 'ascii');
        var imageB64 = bufx.toString('base64');
        var num = Math.floor((Math.random() * 100000000) + 1);
        var name = "/tmp/image-"+ num +".txt";
    });

    res.sendfile('stream/image_stream1.jpg')

});


//Understand to put in other file

app.use('/', express.static(path.join(__dirname, 'stream')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/stream/image_stream1.jpg', function(req, res) {
    res.sendFile(__dirname + '/stream/image_stream1.jpg');
});

app.get('/allan-node-api', function(req, res) {
    res.sendFile(__dirname + '/api.js');
});



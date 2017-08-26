'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var exports = module.exports = {};

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('<p>The React chat server</p>');
});

io.on('connection', function(socket){
  socket.on('client:message', function(msg){
    socket.broadcast.emit('server:message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on '+port);
});

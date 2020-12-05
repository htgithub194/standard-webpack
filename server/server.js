var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('action', action => {
        console.log("action: ", action);
    });
});

http.listen(9999, () => {
    console.log('listening on *:9999');
});
const express = require('express');

const app = express();

const server = app.listen(3000, () => {
    console.log("corriendo en puerto 3000");
})

const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log("se a conectado el usuario: " + socket.id);

    socket.on('disconnect', () => {
        cpnsole.log("el usuario" + socket.id + " se a desconectado");
    });

    socket.on('sendMessage', (data) => {
        io.emit('message', data);
    });
});
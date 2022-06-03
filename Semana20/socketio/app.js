const { Socket } = require('socket.io');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (res, req) => {
    res.sendFile(__dirname+'/index.html'); 
});

var clients = 0;

io.on('connection',(socket) => {
    clients++;
    io.socket.emit('broadcast',{
        total: clients + 'clientes conectados'
    });

    console.log('un usuario desconectado');

    socket.on('disconnect', () => {
        clients--;
        io.socket.emit('broadcast',{
            total: clients + 'clientes desconectados'
    });
});

io.on('connection', (socket) => {
    console.log('usuario conectado');

//resiviend cliebte
    socket.on('clientMessage', (data) => {
        console.log(data);
    });

    setTimeout(()=> {
        socket.send('mensaje');
    },3000);

    socket.on('disconnet', ()=>{
        console.log('usuario desconectdo');
    });
});

http.listen(3000, () => {
    console.log('scuchando puerto 3000');
});
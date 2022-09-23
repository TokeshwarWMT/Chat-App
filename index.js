const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.set('view engine', 'ejs')

app.get('/home', (req, res) => {
    res.render('home')
});

server.listen(3000, () => {
    console.log('Express App is running on port 3000')
});

io.on('connection', (socket) => {
    console.log('new user connected')

    socket.on('message', (data) => {
        socket.broadcast.emit('message', data)
    })
});
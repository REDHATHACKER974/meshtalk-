// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

let checkIns = [];
let resources = [];

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);
  io.emit('user-count', io.engine.clientsCount);

  socket.emit('checkin-history', checkIns);
  socket.emit('resource-history', resources);

  socket.on('chat-message', (data) => {
    io.emit('chat-message', data);
  });

  socket.on('checkin', (data) => {
    checkIns.push(data);
    io.emit('checkin', data);
  });

  socket.on('resource', (data) => {
    resources.push(data);
    io.emit('resource', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
    io.emit('user-count', io.engine.clientsCount);
  });
});


const PORT = 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running! Others on your WiFi can join at:`);
  console.log(`http://YOUR-LOCAL-IP:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 4000;


app.post('/login', async (req, res) => {
  const user = users.find((user) => user.username === req.body.username);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const token = jwt.sign({ username: user.username }, secretKey);
      res.json({ token: token });

    io.emit('notification', { message: 'Logged in successfully!' });
    } else {
      res.status(401).json({ error: 'Authentication failed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// ...

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

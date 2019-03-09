import express from 'express';

const server = express();
server.get('/', (req, res) => {
  res.status(200);
  res.send();
});

module.exports = server;

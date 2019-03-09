import express from 'express';
import Engine from './domain/Engine.js';

const engine = new Engine();

const app = express();
app.get('/', (req, res) => {
  return res.send();
});

app.get('/players', (req, res) => {
  return res.send(Array.from(engine.players));
});

const server = app.listen(3000, () => {
  console.log('App listening on port:', server.address().port);
})

module.exports = app;

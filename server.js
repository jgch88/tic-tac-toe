import express from 'express';
import bodyParser from 'body-parser';
import Engine from './domain/Engine.js';

const engine = new Engine();

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => {
  return res.send();
});

app.get('/players', (req, res) => {
  return res.send(Array.from(engine.players));
});

app.post('/registerplayer', (req, res) => {
  try {
    engine.registerPlayer(req.body.symbol)
  } catch (e) {
    res.status(409);
    return res.send({
      message: e.toString(),
    });
  }
  return res.send(Array.from(engine.players));
})

app.get('/hardreset', (req, res) => {
  try{
    engine.hardReset();
  } catch (e) {
  }
  return res.send({
    message: 'Game has reset!'
  });
})

/*
const server = app.listen(3000, () => {
  console.log('App listening on port:', server.address().port);
})
*/

module.exports = app;

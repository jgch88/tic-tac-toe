import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.status(200);
  res.send();
});

const server = app.listen(3000, () => {
  console.log('App listening on port:', server.address().port);
})

module.exports = app;

import app from './server';
const request = require('supertest');

// Had to do this instead because jest can't run sequential testing and server is a stateful singleton
it('end to end testing', async () => {
  // root response returns game status
  let response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  // /players returns a JSON array
  response = await request(app).get('/players');
  expect(response.body).toEqual([]);

  // players can register
  await request(app)
    .post('/registerplayer')
    .send({
      symbol: 'y'
    })
    .set('Accept', 'application/json')
  response = await request(app).get('/players');
  expect(response.body).toEqual(['y']);

  // players can reset the game
  response = await request(app).get('/hardreset');
  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({
    message: 'Game has reset!',
  });
  response = await request(app).get('/players');
  expect(response.body).toEqual([]);

  response = await request(app)
    .post('/registerplayer')
    .send({
      symbol: 'x'
    })
    .set('Accept', 'application/json')
  expect(response.body).toEqual(['x']);
  
  await request(app).get('/hardreset');

  response = await request(app)
    .post('/registerplayer')
    .send({
      symbol: 'o'
    })
    .set('Accept', 'application/json')
  expect(response.body).toEqual(['o']);
  // players registering duplicate symbol will get an error
  let error = await request(app)
    .post('/registerplayer')
    .send({
      symbol: 'o'
    })
    .set('Accept', 'application/json')
  expect(error.statusCode).toBe(409);
  expect(error.body).toEqual({
    message: `Error: 'o' is already registered.`,
  });
});

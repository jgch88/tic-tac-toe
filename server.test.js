import app from './server';
const request = require('supertest');

describe('server', () => {
  describe('api routes', () => {
    it('root response returns game status', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });

    it('/players returns a JSON array', async () => {
      const response = await request(app).get('/players');
      expect(response.body).toEqual([]);
    });

    describe('/hardreset', async () => {
      await request(app)
        .post('/registerplayer')
        .send({
          symbol: 'x'
        })
        .set('Accept', 'application/json')
      let response = await request(app).get('/players');
      expect(response.body).toEqual(['x']);

      response = await request(app).get('/hardreset');
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual({
        message: 'Game has reset!',
      });

      response = await request(app).get('/players');
      expect(response.body).toEqual([]);
    })

    describe('POST /registerPlayer', () => {
      it('can add a player to the game', async () => {
        const response = await request(app)
          .post('/registerplayer')
          .send({
            symbol: 'x'
          })
          .set('Accept', 'application/json')
        expect(response.body).toEqual(['x']);
      });

      it('adding two players of the same symbol shows an error', async () => {
        const response = await request(app)
          .post('/registerplayer')
          .send({
            symbol: 'o'
          })
          .set('Accept', 'application/json')
        expect(response.body).toEqual(['o']);
        const error = await request(app)
          .post('/registerplayer')
          .send({
            symbol: 'o'
          })
          .set('Accept', 'application/json')
        expect(error.statusCode).toBe(409);
      });
    });
  });
});

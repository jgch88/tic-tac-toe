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
    })
  });
});

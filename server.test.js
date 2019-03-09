import server from './server';
const request = require('supertest');

describe('server', () => {
  describe('api', () => {
    it('root response returns game status', async () => {
      const response = await request(server).get('/');
      expect(response.statusCode).toBe(200);
    });
  });
});

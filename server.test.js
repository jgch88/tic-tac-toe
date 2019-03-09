import server from './server';

describe('server', () => {
  describe('api', () => {
    it('root response returns game status', () => {
      request(server)
        .get('/')
        .expect(200);
    });
  });
});

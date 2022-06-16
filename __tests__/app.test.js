const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a dog object', async () => {
    const res = await request(app).get('/dogs');
    console.log('res.body', res.body);
    const expected = {
      id: 1,
      name: 'Spot',
      age: 4,
      color: 'spotted',
      does_tricks: true
    };
    expect(res.body.length).toEqual(5);
  });
  afterAll(() => {
    pool.end();
  });
});

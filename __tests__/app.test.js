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
    const spot = res.body.find((dog) => dog.id === '1');
    expect(res.body.length).toEqual(5);
    expect(spot).toHaveProperty('name', 'Spot');
    expect(spot).toHaveProperty('does_tricks', true);
  });
  afterAll(() => {
    pool.end();
  });
});

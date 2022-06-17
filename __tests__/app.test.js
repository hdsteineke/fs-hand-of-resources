const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  /////////// DOGS ///////////////////////

  it('should return a list of dogs', async () => {
    const res = await request(app).get('/dogs');
    const spot = res.body.find((dog) => dog.id === '1');
    expect(res.body.length).toEqual(5);
    expect(spot).toHaveProperty('name', 'Spot');
    expect(spot).toHaveProperty('does_tricks', true);
  });


  it('should return a specific dog detail', async () => {
    const res = await request(app).get('/dogs/1');
    const expected = {
      id: '1',
      name: 'Spot',
      age: 4,
      color: 'spotted',
      does_tricks: true
    };
    expect(res.body).toEqual(expected);
  });


  it('POST /dogs should create a new dog', async () => {
    const res = await request(app).post('/dogs').send({ name: 'Judas', age: 2, color: 'black', does_tricks: true });
    
    expect(res.body.name).toBe('Judas');
  });


  it('PUT /dogs/:id should update dog', async () => {
    const res = await request(app).put('/dogs/2').send({ name: 'Binders', age: 8, color: 'black', does_tricks: true });
    
    expect(res.status).toEqual(200);
  });


  it('DELETE /dogs/:id should delete dog', async () => {
    const res = await request(app).delete('/dogs/1');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('1');

  });

  ////////// SNACKS /////////////////

  it('/ should return a list of snacks', async () => {
    const res = await request(app).get('/snacks');
    console.log('res snack', res);
    expect(res.body.length).toEqual(3);
  })

  afterAll(() => {
    pool.end();
  });
});

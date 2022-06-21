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
    expect(res.body.length).toEqual(3);
  });

  it('/:id should return a specific snack', async () => {
    const res = await request(app).get('/snacks/3');
    const twizzler = {
      id: '3',
      type: 'Twizzlers',
      is_chocolate: false
    };
    expect(res.body).toEqual(twizzler);
  });

  it('POST should create a new snack', async () => {
    const res = await request(app).post('/snacks').send({ type: 'onigiri', is_chocolate: false });
    expect(res.body.type).toEqual('onigiri');
  });

  it('DELETE /snacks/:id should remove an existing snack', async () => {
    const res = await request(app).delete('/snacks/2');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('2');
  });

  it('PUT /snacks/:id should update an existing snack', async () => {
    const res = await request(app).put('/snacks/2').send({ type: 'Cheesey Chex Mix', is_chocolate: false });
    expect(res.status).toEqual(200);
    expect(res.body.type).toBe('Cheesey Chex Mix');
  });

  ////////// HOBBIES ////////////////////////

  it('/ should return a list of hobbies', async () => {
    const res = await request(app).get('/hobbies');
    expect(res.body.length).toEqual(5);
  });

  it('/:id should return a specific hobby', async () => {
    const res = await request(app).get('/hobbies/1');
    expect(res.body.hobby).toBe('writing');
  });

  it('POST should create a new hobby', async () => {
    const res = await request(app).post('/hobbies').send({ hobby: 'plant identification', since: 2011, is_active: true });
    expect(res.body.hobby).toBe('plant identification');
  });

  it('PUT /hobbies/:id should update an existing hobby', async () => {
    const res = await request(app).put('/hobbies/3').send({ since: 2015 });
    expect(res.status).toEqual(200);
    expect(res.body.since).toBe(2015);
  });

  it('DELETE /hobbies/:id should delete an existing hobby', async () => {
    const res = await request(app).delete('/hobbies/2');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('2');
  });

  ///////// FLOWERS ///////////

  it('/ should return a list of flowers', async () => {
    const res = await request(app).get('/flowers');
    expect(res.body.length).toEqual(5);
  });

  it('/flowers/:id should return a specific flower', async () => {
    const res = await request(app).get('/flowers/5');
    expect(res.body.common_name).toBe('cornflower');
  });

  it('POST should create a new flower', async () => {
    const res = await request(app).post('/flowers').send({ common_name: 'iris', color: 'violet', num_petals: 6 });
    expect(res.body.common_name).toBe('iris');
  });

  it('PUT should update an existing flower', async () => {
    const res = await request(app).put('/flowers/3').send({ color: 'pale yellow-green' });
    expect(res.status).toEqual(200);
    expect(res.body.color).toBe('pale yellow-green');
  });

  it('DELETE should remove an existing flower', async () => {
    const res = await request(app).delete('/flowers/1');
    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual('1');
  });

  ///////// PLANETS //////////////////

  it('/ should return a list of planets', async () => {
    const res = await request(app).get('/planets');
    expect(res.body.length).toEqual(10);
  });

  it('/planets/:id should return a specific planet', async () => {
    const res = await request(app).get('/planets/2');
    expect(res.body.name).toEqual('Mercury');
  });

  it('POST should add a new planet', async () => {
    const res = await request(app).post('/planets').send({ name: 'New Planet', radius_miles: 1236712 });
    console.log('res', res);
    expect(res.body.name).toEqual('New Planet');
  });

  afterAll(() => {
    pool.end();
  });
});

const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return API info with status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
    expect(res.body.message).toBe('Welcome to Products API');
    expect(res.body).toHaveProperty('endpoints');
  });
});

describe('GET /products', () => {
  it('should return an array of products with status 200', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should return products with correct structure', async () => {
    const res = await request(app).get('/products');
    const product = res.body[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
  });
});

describe('GET /products/:id', () => {
  it('should return 404 for non-existing product', async () => {
    const res = await request(app).get('/products/999');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});

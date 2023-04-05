'use strict'
// integration test

const server = require('../../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

// const error404 = require('../../src/error-handlers/404.js')
// const error500 = require('../../src/error-handlers/500.js')

describe('Testing the express server', () => {
  test('Should return a 404 on a bad route', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });
});

test('Should return a 404 on a bad method', async () => {
  const response = await request.patch('/food');
  expect(response.status).toEqual(404);
  // expect(response.body).toEqual({});
});



import { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';

describe('GET /api/v1/mentorshala/getFeeds', () => {
  it('should return a list of feeds in community', async () => {
    const response = await request(app).get('/api/v1/mentorshala/getFeeds');
    console.log(response.body);
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});

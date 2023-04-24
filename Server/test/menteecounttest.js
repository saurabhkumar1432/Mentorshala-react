import { expect } from 'chai';
import request from 'supertest';
import app from '../server.js';

describe('GET /api/v1/mentorshala/getReports', () => {
  it('should return all reports', async () => {
    const response = await request(app).get('/api/v1/mentorshala/getReports');
    expect(response.status).to.equal(200);
    console.log(response.body);
  });
});

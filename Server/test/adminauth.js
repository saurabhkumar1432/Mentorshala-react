import request from 'supertest';
import app from '../server.js';

describe('POST /loginAdmin', function() {
  it('should return 200 if admin credentials are correct', function(done) {
    const credentials = {
      username: 'admin@Mentorshala',
      password: 'admin@123'
    };
    request(app)
      .post('/api/v1/mentorshala/adminAuth')
      .send(credentials)
      .expect(200, done);
  });

  it('should return 201 if admin credentials are incorrect', function(done) {
    const credentials = {
      username: 'some_username',
      password: 'some_password'
    };
    request(app)
      .post('/api/v1/mentorshala/adminAuth')
      .send(credentials)
      .expect(201, done);
  });
});

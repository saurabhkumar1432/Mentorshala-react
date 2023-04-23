
const request = require('supertest');
const app = require('./server');
const expect = require('chai').expect;

describe('GET /api/v1/mentorshala/getFeeds', () => {
  it('should return a list of feeds in community', (done) => {
    request(app)
      .get('/getFeeds')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body[0]).to.have.property('username');
        expect(res.body[0]).to.have.property('profile_image');
        expect(res.body[0]).to.have.property('work');
        done();
      });
  });
});

const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  let result, response;
  beforeEach((done) => {
     request.get('http://localhost:7865', (err, res, body) => {
      result = body;
      response = res;
      done();
    });
  });

  describe('GET /', () => {
    it('should test the api and returns "Welcome to the payment system"', () => {
      expect(response.statusCode).to.equal(200);
      expect(result).to.equal('Welcome to the payment system');
    });
  });

  describe('Status Message', () => {
    it('should return a statusMessage of "OK"', () => {
      expect(response.statusMessage).to.equal('OK');
    });
  });
});

import request from 'request';
import { expect } from 'chai';

describe('Index page', () => {
  let result, response;
  beforeEach((done) => {
     request.get('http://localhost:7865', (err, res, body) => {
      result = body;
      response = res;
      done();
    });
  });

  it('should test the api and returns "Welcome to the payment system"', () => {
    expect(result).to.equal('Welcome to the payment system');
  });

  it('should test the api and returns all the status code', () => {
    expect(response.statusCode).to.equal(200);
  });

  it('should return a statusMessage of "OK"', () => {
    expect(response.statusMessage).to.equal('OK');
  });

  it('should return the request protocol', () => {
    expect(response.request.uri.protocol).to.equal('http:');
  });
});

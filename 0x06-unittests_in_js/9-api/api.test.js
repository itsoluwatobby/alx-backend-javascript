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

describe('Integration Testing', () => {
  describe('GET /cart/12', () => {
    it('should test the api and returns "Welcome to the payment system"', (done) => {
      request.get('http://localhost:7865/cart/12', (err, res, body) => {
	expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });

  describe('GET /cart/8', () => {
    it('should test the api and returns "Welcome to the payment system"', (done) => {
      request.get('http://localhost:7865/cart/8', (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 8');
        done();
      });
    });
  });

  describe('GET /cart/hello', () => {
    it('should return 404 when :id is NOT a number', (done) => {
      request.get('http://localhost:7865/cart/hello', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /cart/2ua', () => {
    it('should return 404 when :id is NOT a number', (done) => {
      request.get('http://localhost:7865/cart/2ua', (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });
});


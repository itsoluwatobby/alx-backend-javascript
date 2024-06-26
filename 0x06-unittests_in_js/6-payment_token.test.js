const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return response if success is true', () => new Promise((done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  }));
});

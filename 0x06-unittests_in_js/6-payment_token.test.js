import getPaymentTokenFromAPI from './6-payment_token.js';
import { expect } from 'chai';

describe('getPaymentTokenFromAPI', () => {
  it('should return response if success is true', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: 'Successful response from the API' });
      done();
    }).catch(done);
  })
});

import sendPaymentRequestToApi from './3-payment.js';
import sinon from 'sinon';
import Utils from './utils.js';
import { expect } from 'chai';

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});

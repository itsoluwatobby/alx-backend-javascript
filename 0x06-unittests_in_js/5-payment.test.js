import sinon from 'sinon';
import { expect } from 'chai';
import sendPaymentRequestToApi from './4-payment.js';
import Utils from './utils.js';

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log 120', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log 20', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    calculateNumberStub.restore();
  });
});

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber and log 120', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber and log 20', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    calculateNumberStub.restore();
  });
});

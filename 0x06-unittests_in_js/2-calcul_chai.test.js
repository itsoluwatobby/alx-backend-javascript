import calculateNumber from './2-calcul_chai.js';
import { expect } from 'chai';

describe('calculateNumber', () => {
  it('should return rounded sum equals 6', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.deep.equal(6);
  });
  it('should return rounded subtraction equals -5', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.deep.equal(-4);
  });
  it('should return rounded Division equals 0.2', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.deep.equal(0.2);
  });
  it('should return rounded Division equals Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.deep.equal('Error');
  });
  it('should return rounded sum not equals 16', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.not.equal(16);
  });
  it('should return rounded subtraction not equals -4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.not.equal(-5);
  });
  it('should return rounded Division not equals 0.2', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.not.equal(1.2);
  });
  it('should return rounded Division not equals Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 2)).to.not.equal('Error');
  });
});

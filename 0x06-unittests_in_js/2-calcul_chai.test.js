const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('1.4 + 4.5', () => {
    it('should return rounded sum equals 6', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.deep.equal(6);
    });
  });

  describe('1.4 - 4.5', () => {
    it('should return rounded subtraction equals -5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.deep.equal(-4);
    });
  });

  describe('1.4 / 4.5', () => {
    it('should return rounded Division equals 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.deep.equal(0.2);
    });
  });

  describe('1.4 / 0', () => {
    it('should return rounded Division equals Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.deep.equal('Error');
    });
  });

  describe('1.4 + 4.5', () => {
    it('should return rounded sum not equals 16', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.not.equal(16);
    });
  });

  describe('1.4 - 4.5', () => {
    it('should return rounded subtraction not equals -4', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.not.equal(-5);
    });
  });

  describe('1.4 / 4.5', () => {
    it('should return rounded Division not equals 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.not.equal(1.2);
    });
  });

  describe('1.4 / 2', () => {
    it('should return rounded Division not equals Error', () => {
      expect(calculateNumber('DIVIDE', 1.4, 2)).to.not.equal('Error');
    });
  });
});

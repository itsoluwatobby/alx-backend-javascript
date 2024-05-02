const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('1.4 + 4.5', () => {
    it('should return rounded sum equals 6', () => {
      assert.deepEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('1.4 - 4.5', () => {
    it('should return rounded subtraction equals -5', () => {
      assert.deepEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('1.4 / 4.5', () => {
    it('should return rounded Division equals 0.2', () => {
      assert.deepEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('1.4 / 0', () => {
    it('should return rounded Division equals Error', () => {
      assert.deepEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('1.4 + 4.5', () => {
    it('should return rounded sum not equals 16', () => {
      assert.notDeepEqual(calculateNumber('SUM', 1.4, 4.5), 16);
    });
  });

  describe('1.4 - 4.5', () => {
    it('should return rounded subtraction not equals -4', () => {
      assert.notDeepEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -5);
    });
  });

  describe('1.4 / 4.5', () => {
    it('should return rounded Division not equals 0.2', () => {
      assert.notDeepEqual(calculateNumber('DIVIDE', 1.4, 4.5), 1.2);
    });
  });

  describe('1.4 / 2', () => {
    it('should return rounded Division not equals Error', () => {
      assert.notDeepEqual(calculateNumber('DIVIDE', 1.4, 2), 'Error');
    });
  });
});

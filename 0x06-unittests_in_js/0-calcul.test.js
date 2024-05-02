const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('1 + 3', () => {
    it('should return rounded sum equals 4', () => {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });

  describe('1 + 3.7', () => {
    it('should return rounded sum equals 5', () => {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });

  describe('1.2 + 3.7', () => {
    it('should return rounded sum equals 5', () => {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('1.5 + 3.7', () => {
    it('should return rounded sum equals 6', () => {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('1 + 3', () => {
    it('should return rounded sum not equals 4', () => {
      assert.notEqual(calculateNumber(1, 3), 10);
    });
  });

  describe('1 + 3.7', () => {
    it('should return rounded sum not equals 5', () => {
      assert.notEqual(calculateNumber(1, 3.7), 7);
    });
  });

  describe('1.2 + 3.7', () => {
    it('should return rounded sum not equals 5', () => {
      assert.notEqual(calculateNumber(1.2, 3.7), 2);
    });
  });

  describe('1.5 + 3.7', () => {
    it('should return rounded sum not equals 6', () => {
      assert.notEqual(calculateNumber(1.5, 3.7), 8);
    });
  });
});

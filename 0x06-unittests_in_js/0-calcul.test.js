import calculateNumber from './0-calcul.js';
import assert from 'assert';

describe('calculateNumber', () => {
  it('should return rounded sum equals 4', () => {
    assert.deepEqual(calculateNumber(1, 3), 4);
  });
  it('should return rounded sum equals 5', () => {
    assert.deepEqual(calculateNumber(1, 3.7), 5);
  });
  it('should return rounded sum equals 5', () => {
    assert.deepEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('should return rounded sum equals 6', () => {
    assert.deepEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('should return rounded sum not equals 4', () => {
    assert.notEqual(calculateNumber(1, 3), 10);
  });
  it('should return rounded sum not equals 5', () => {
    assert.notEqual(calculateNumber(1, 3.7), 7);
  });
  it('should return rounded sum not equals 5', () => {
    assert.notEqual(calculateNumber(1.2, 3.7), 2);
  });
  it('should return rounded sum not equals 6', () => {
    assert.notEqual(calculateNumber(1.5, 3.7), 8);
  });
});

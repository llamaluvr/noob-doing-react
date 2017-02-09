import math from '../scripts/math';

test('1 + 1 to equal 2', () => { 
  expect(math.add(1,1)).toBe(2);
});

test('1 + 2 to equal 3', () => {
  expect(math.add(1,2)).toBe(3);
});
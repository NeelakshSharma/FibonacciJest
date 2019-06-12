const isFibonacci = require('./try1');

test('5 is a fibonacci number', () => {
  expect(isFibonacci(5)).toBe(true);
});
test('10 is not a fibonacci number', () => {
  expect(isFibonacci(10)).toBe(false);
});
test('13 is a fibonacci number', () => {
  expect(isFibonacci(13)).toBe(true);
});
test('2390 is not a fibonacci number', () => {
  expect(isFibonacci(2390)).toBe(false);
});
test('377 is a fibonacci number', () => {
  expect(isFibonacci(377)).toBe(true);
});
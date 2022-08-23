const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', (num) => {
  it('returns Fizz on 3', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  })
  it('returns Buzz on 5', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  })
  it('returns 8 on 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  })
  it('returns Fizz on 15', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  })
  it('returns Fizz on 18', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  })
  it('returns Fizz on 20', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  })
})


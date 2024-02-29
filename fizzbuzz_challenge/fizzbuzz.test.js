const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
    it('returns Fizz', () => {
        expect(fizzbuzz(3)).toBe('Fizz');
    });
    it('returns Buzz', () => {
        expect(fizzbuzz(5)).toBe('Buzz');
    });
    it('returns 8', () => {
        expect(fizzbuzz(8)).toBe(8);
    });
    it('returns FizzBuzz', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
    });
    it('returns Fizz', () => {
        expect(fizzbuzz(18)).toBe('Fizz');
    });
    it('returns Buzz', () => {
        expect(fizzbuzz(20)).toBe('Buzz');
    });
});

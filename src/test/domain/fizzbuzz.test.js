import {describe, it, expect} from 'vitest'
import {fizzBuzz} from '../../domain/fizzbuzz.js'

describe('fizzBuzz', () => {
    it('should return "1" when given 1', () => {
        expect(fizzBuzz(1)).toBe("1")
    })
    it('should return "2" when given 2', () => {
        expect(fizzBuzz(2)).toBe("2")
    })
    it('should return "Fizz" when given 3', () => {
        expect(fizzBuzz(3)).toBe("Fizz")
    })
    it('should return "Buzz" when given 5', () => {
        expect(fizzBuzz(5)).toBe("Buzz")
    })
    it('should return "FizzBuzz" when given 15', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz")
    })
})
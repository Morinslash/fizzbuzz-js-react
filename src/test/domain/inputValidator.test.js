import {describe, it, expect} from 'vitest'
import {isNumeric, isWholeNumber} from '../../domain/inputValidator.js'

describe('inputValidator check if is numeric', () => {
    it('should return true for positive whole numbers', () => {
        expect(isNumeric('123')).toBe(true)
    })

    it('should return true for negative numbers', () => {
        expect(isNumeric('-123')).toBe(true)
    })

    it('should return true for decimal numbers', () => {
        expect(isNumeric('123.45')).toBe(true)
        expect(isNumeric('-123.45')).toBe(true)
    })

    it('should return false for alphabetic characters', () => {
        expect(isNumeric('abc')).toBe(false)
    })

    it('should return false for mixed content', () => {
        expect(isNumeric('123abc')).toBe(false)
        expect(isNumeric('abc123')).toBe(false)
    })

    it('should return false for special characters', () => {
        expect(isNumeric('!@#')).toBe(false)
    })

    it('should return false for empty string', () => {
        expect(isNumeric('')).toBe(false)
    })

    it('should return false for whitespace', () => {
        expect(isNumeric(' ')).toBe(false)
    })
})

describe('inputValidator check if is whole number', () => {
    it('should return true for zero', () => {
        expect(isWholeNumber('0')).toBe(true)
    })

    it('should return true for positive integers', () => {
        expect(isWholeNumber('1')).toBe(true)
        expect(isWholeNumber('42')).toBe(true)
        expect(isWholeNumber('999')).toBe(true)
    })

    it('should return false for negative numbers', () => {
        expect(isWholeNumber('-1')).toBe(false)
        expect(isWholeNumber('-42')).toBe(false)
    })

    it('should return false for decimal numbers', () => {
        expect(isWholeNumber('1.0')).toBe(false)
        expect(isWholeNumber('42.42')).toBe(false)
    })
})


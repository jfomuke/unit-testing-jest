const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')


test('properly adds 2 numbers', () => 
{
    
    expect(
        subtract(1,2)
        ).toBe(-1)
})
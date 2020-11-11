// Import function to test
const { test, expect } = require('@jest/globals')
const sum = require('./sum')

// Params - description, function
test('properly adds 2 numbers', () => 
{
    // When calling function sum with 1 & 2 the result should be 3
    expect(
        sum(1,2)
        ).toBe(3)
})


// The "test": "jest --coverage" line in the package.json is what commands the test to be detailed
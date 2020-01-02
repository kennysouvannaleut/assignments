// CATCH ME IF YOU CAN TESING EXERCISE:

// #1a. Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
try {
    function sum(num1, num2) {
        throw new Error ("TEST FAILED:")
    }
    console.log("Its not of the data type number")
    }
catch(err) {
    console.log(err)
    }
finally {
    console.log("Code ran")
}   


function sum(num1, num2){
    return num1 + num2
}

// expected, actual
const actual = sum(10, 10)
const expected = 20

if(actual !== expected){
    throw new Error(`TEST FAILED: Expected ${expected}, but received ${actual}.`)
} else {
    console.log(`TEST PASSED: ${expected} === ${actual}`)
}
// // 1. Write a function that accepts two numbers as parameters, and returns the sum.
function sum(a, b) {
    return a + b
}
console.log(sum(5, 20))

// // 2. Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
function getLargestNumber(a, b, c) {
    if(a > b && a > c) {
        return a    
    } else if(b > c && b > a) {
        return b
    } else {
        return c 
    }
}
console.log(getLargestNumber(10, 50, 6))

// // 3. Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");
function evenOrOdd(num) {
    if(num % 2 === 0) {
        return "even"
    } else if(num % 2 !== 0) {
        return "odd"
    }
}
console.log(evenOrOdd[2])
console.log(evenOrOdd[num])

// // // 4. Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, 
// // return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half 
// // of the string.

function strConcat(string) 
{
    if (string.length <= 20) {
} else {
    return string.substr(0, string.length / 2)
}
}
// var newStrConcat = strConcat("areYouAwesomeYes")
// console.log(newStrConcat)
var newStrConcat = strConcat("whatIsFivePlusFiveMyWonderfulPeeps")
console.log(newStrConcat)

// // * Write a function that accepts a number ‘n’ as a parameter. Then print the first ‘n’ Fibonacci numbers and return their sum.
// // The first numbers are:
// // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
// // So if n were 6, the sum of 1+1+2+3+5+8 would be 20
// // Don't hardcode the sequence.

// // Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. 
// // ( White spaces count as a letter )

var fib = function(n) 
{
  if (n === 1) 
  {
    return [0, 1];
  } 
  else 
  {
    var newFib = fib(n - 1);
    newFib.push(newFib[newFib.length - 1] + newFib[newFib.length - 2]);
    return newFib;
  }
};

 console.log(fib(6))
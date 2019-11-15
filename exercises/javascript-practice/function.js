// 1. Write a function that accepts two numbers as parameters, and returns the sum.
// function sum(a, b) {
//     return a + b
// }
// console.log(sum(5, 20))

// 2. Write a function that accepts three numbers as parameters, and returns the largest of those numbers.
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


// 3. Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" 
// or "odd");

// function evenOrOdd(num) {
//     if(num % 2 === 0) {
//         return "even"
//     } else if(num % 2 !== 0) {
//         return "odd"
//     }
// }
// console.log(evenOrOdd[2])
// console.log(evenOrOdd[num])

// // 4. Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, 
// eturn the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half 
// of the string.



// Loop Olympics
// 1. Write a for loop that prints to the console the numbers 0 through 9.
// for(var i = 0; i <= 9; i++) {
//     console.log(i)
// }

// 2. Write a for loop that prints to the console 9 through 0.
// for(var i = 9; i >= 0; i--) {
//     console.log(i)
// }

// 3. Write a for loop that prints these fruits to the console.
// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i])
// }


// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array.

// var array = [];
// for(var i = 0; i < 10; i++) {
//     array[i] = i
// }
// console.log(array)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.

// for(var i = 0; i <= 100; i++) {
//     if(i === 0) {
//         console.log(i); 
//     }
//         else if(i % 2 === 0) { 
//             console.log(i) 
//     }
//     }

// 3. Write a for loop that will push every other fruit to an array.

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// var resultArr = [];
// for(var i = 0; i < fruit.length; i += 2) {
//     resultArr.push(fruit[i])
// }
// console.log(resultArr)


// Silver Medal
// Write a loop that will print out all the names of the people of the people array

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
  
    // Write a loop that pushes the names into a names array, and the occupations into an occupations array.
    // Write a loop that pushes every other name to an array starting with "Harrison Ford", and every other occupation to another array starting with "Singer".
/* LOOPS: EXERCISES

1. Write a function that accepts a string as input. Write a loop and
   add each letter of the string to an array. Then return the that new array.

2. Write a function that accepts a string and a single character as inputs. Write a loop that iterates over the string, 
   and returns the position of the first occurrence of the specified character. If the character is not found, tell 
   that to the user by returning "Character not found!".

3. Write a function that accepts an array of numbers as a parameter.
   Return "Found 42!" when the number 42 is found, return "42 not found!" if it is not in the array.

4. Write a function that accepts 10 numbers in an array and then prints out the smallest number out of the ten without 
   using Math.min()
*/

 // // Write a function that accepts a string as a parameter. Return the most frequently occuring letter in that string. 
// // ( White spaces count as a letter )

// function getMax (str) {
//     var max = 0
//     var maxChar = '';
//     var array = str.split('')
//     console.log(array)
//     for (i = 0; i < array.length; i++) {
//         var char = array[i]
//         if(str.split(char).length > max) {
//             max = str.split(char).length;
//             maxChar = char;
//         }
//     }
//     console.log(maxChar);
// };
// getMax("Heello")

// function letterCount(str) {
//     let count = 0;
//     let results = []
//     let newArr = str.split('')
//     let sorted = newArr.sort()
//     for (let i = 0; i < newArr.length - 1; i++) {
//       if(sorted[i + 1] === sorted[i])
//       results.push(sorted[i])
//     }
//     console.log(results)
//   }
//   letterCount('a;sdkfd')

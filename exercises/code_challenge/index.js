// Write a function that takes an unsorted array as a parameter, and returs the missing number. The missing number is the one missing from the array of numbers if the numbers were sorted from least to greatest

// function findMissingNo(arr) {

// }
// console.log(findMissing([3, 5, 4, 8, 1, 2, 7])) // 6
// console.log(findMissing([10, 14, 12, 11, 16, 18, 17, 13])) // 15

// Guaranteed Conditions:
// - The array has at least 3 numbers
// - There are no repeated numbers


const data = [
    { state: "UT", city: "Salt Lake City" },
    { state: "CA", city: "San Diego" },
    { state: "CA", city: "San Francisco" },
    { state: "CO", city: "Denver" }
  ];

  function makeStateObj(arr){

    return arr.reduce((final, cur) => {
    const { state, city } = arr[i]
    if(!result[state]){
    result[state] = city
    } else {
    result[state].push(city)
    }
    }
    return result

    })
  
  console.log(makeStateObj(data));
  
  const answer =  { 
    UT: ["Salt Lake City"],
    CA: ["San Diego", "San Francisco"],
    CO: ["Denver"]
  }
  
  // Notes from object bracket notation lesson:
​
const data = [
  { state: "UT", city: "Salt Lake City" },
  { state: "CA", city: "San Diego" },
  { state: "CA", city: "San Francisco" },
  { state: "CO", city: "Denver" },
  { state: "CO", city: "Denver" }
]
// the above data needs to be turned into this:
const answer =  { 
  UT: ["Salt Lake City"],
  CA: ["San Diego", "San Francisco"],
  CO: ["Denver"]
}
/////////////////////////////////////
// Answer using a regular for-loop //
 function makeStateObj(arr){
   const result = {}
   for(let i = 0; i < arr.length; i++){
     const { state, city } = arr[i]
     if(!result[state]){
       result[state] = [city]
     } else {
       if(!result[state].includes(city)){
         result[state].push(city)
       }
     }
   }
   return result
 }
// console.log(makeStateObj(data)) 
/////////////////////////
// Answer using Reduce //
// function makeStateObjWithReduce(arr){
//  return arr.reduce((final, cur) => {
//    const { state, city } = cur
//    if(!final[state]){
//      final[state] = [city]
//    } else {
//      if(!final[state].includes(city)){
//        final[state].push(city)
//      }
//    }
//    return final
//  }, {})
//}
console.log(makeStateObjWithReduce(data))
/////////////////////////////////////////////////////
// Explanation/usage of bracket [] object notation //
const user = {
  name: "steve"
}
console.log(user) // { name: "steve" }
const key = "age"
if(!user[key]){
  user.age = 10 
}
console.log(user) // { name: "steve", age: 10 }
user.age = 11
console.log(user) // { name: "steve", age: 11 }
//////////////////////////////////
// Another way to practice this:
// Write a function that takes a string and outputs
// and object of the letter count:
// Example:
  // getLetterCount("hello world")
  // {
  //   h: 1,
  //   e: 1,
  //   l: 3,
  //   o: 2,
  //   " ": 1,
  //   w: 1,
  //   d: 1
  // }




















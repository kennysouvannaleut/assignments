// ARRAY METHODS: EXERCISE
// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

// * Remove the last item from the vegetable array.
// * Remove the first item from the fruit array.
// * Find the index of "orange."
// * Add that number to the end of the fruit array.
// * Use the length property to find the length of the vegetable array.
// * Add that number to the end of the vegetable array.
// * Put the two arrays together into one array. Fruit first. Call the new Array "food".
// * Remove 2 elements from your new array starting at index 4 with one method.
// * Reverse your array.
// * Turn the array into a string and return it.

// If you've done everything correctly, the last step should print the following string to the console:
// FINAL RESULT = [ 3, pepper, 1, watermelon, orange, apple ]

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// console.log('fruit:', fruit);
// console.log('vegetables:', vegetables);

const removeLast = vegetables.pop();
// console.log(removeLast);

const removeFirst = fruit.shift();
// console.log(removeFirst);

const index = fruit.indexOf('orange');
// console.log(index);

const myFruitArr = [fruit];
fruit.push(1)
// console.log(myFruitArr)

// console.log(vegetables.length);
const myVegArr = [vegetables];
vegetables.push(3);
// console.log(myVegArr);

const food = fruit.concat(vegetables);
// console.log(food); 

const removedItems = food.splice(4, 2);
// console.log(removedItems);
// console.log(food.splice(4, 2))

 const reverseArr = food.reverse();
//  console.log(reverseArr);

function newFoodArr(str) {
    return str.reverseArr.length
}
console.log(reverseArr);


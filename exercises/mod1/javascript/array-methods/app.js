// ARRAY METHODS: EXERCISE

// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

// -Remove the last item from the vegetable array.
// Remove the first item from the fruit array.
// -Find the index of "orange."
// Add that number to the end of the fruit array.
// Use the length property to find the length of the vegetable array.
// Add that number to the end of the vegetable array.
// Put the two arrays together into one array. Fruit first. Call the new Array "food".
// Remove 2 elements from your new array starting at index 4 with one method.
// Reverse your array.
// Turn the array into a string and return it.

// If you've done everything correctly, the last step should print the following string to the console:

// [ 3, pepper, 1, watermelon, orange, apple ]

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

var newList = ["banana", "apple", "orange", "watermelon", ["carrot", "tomato", "pepper", "lettuce"]]
console.log(newList)

var newFoodArray = (fruit.concat(vegetables.concat([], [])))
console.log(fruit.concat(vegetables.concat([], [])))
console.log(newFoodArray)


console.log(fruit.reverse && vegetables.reverse([],))
console.log(fruit.concat(vegetables.concat(["banana", "apple", "orange", "watermelon"], ["carrot", "tomato", "pepper", "lettuce"])))
console.log(fruit.concat(["carrot", "tomato", "pepper", "lettuce"]))
console.log("fruit:  ", fruit)
console.log("vegetables: ", vegetables)
console.log(vegetables.length)

vegetables.pop()
console.log(vegetables.pop());

console.log(fruit.shift()) 
var indexOfOrange = fruit.indexOf()
console.log(fruit.indexOf("organge")) 
console.log(indexOfOrange)

var mergedFoodsArray = fruit.concat(["banana", "apple", "orange", "watermelon"], ["Australian Shepard", "Shitzu"])



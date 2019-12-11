// LOOP OLYMPICS: PRELIMINAARIES

// 1. Write a for loop that prints to the console the numbers 0 through 9.
for(var i = 0; i <= 9; i++) {
    console.log(i)
};

// 2. Write a for loop that prints to the console 9 through 0.
for(var i = 9; i >= 0; i--) {
    console.log(i)
};

// 3. Write a for loop that prints these fruits to the console.
var fruit = ["banana", "orange", "apple", "kiwi"]

for(var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
};

// Bronze Medal
// 1. Write a for loop that will push the numbers 0 through 9 to an array.

var array = [];
for(var i = 0; i < 10; i++) {
    array[i] = i
}
console.log(array)

// 2. Write a for loop that prints to the console only even numbers 0 through 100.

for(var i = 0; i <= 100; i++) {
    if(i === 0) {
        console.log(i); 
    }
        else if(i % 2 === 0) { 
            console.log(i) 
    }
    };

// 3. Write a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var resultArr = [];
for(var i = 0; i < fruit.length; i += 2) {
    resultArr.push(fruit[i])
}
console.log(resultArr);


// Silver Medal
// 1. Write a loop that will print out all the names of the people of the people array

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }, ]

  for(var i = 0; i < peopleArray.length; i ++) 
  {
    console.log(peopleArray[i].name)
  }

  // 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.

function createNamesArray() {
  let name = peopleArray.name = [];
  let occupation = peopleArray.occupation = [];
    for (let i = 0; i < peopleArray.length; i ++)
    return name + occupation
};

let peopleArray = createNamesArray()
  console.log(peopleArray);

for(let i = 0; i < peopleArray.length; i++) {
  console.log('name: ' + peopleArray[i].name);
};

// 3. Write a loop that pushes every other name to an array starting with "Harrison Ford", 
//    and every other occupation to another array starting with "Singer"

var resultPushArray = [];
var i = 2;
var len = peopleArray.length;
var text = "";
for(; i <= len; i++) {
  resultPushArray.push(peopleArray.name[i]) 
  resultPushArray.push(peopleArray.occupation[i])
  console.log(text += resultPushArray[i]) + "<br>"; 
} 

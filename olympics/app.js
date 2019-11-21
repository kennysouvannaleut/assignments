
// Preliminaries

// 1. Write an if statement that prints "is greater than" if 5 is greater than 3

if(5 > 3) {
   console.log("is greater then 3")
}

// 2. Write an if statement that prints "is the length" if the length of "cat" is 3


if("cat".length === 3)
    console.log("is the length")

// 3. Write an if/else statement that checks if "cat" is equal to "dog" and prints, "not the same" when they are not equal.

if("cat === dog") {
    console.log("not the same")


// Bronze Medal
/* 1. Using the below object, write an if statement that prints <theNameOfThePersonInObject> is allowed to go to the movie 
      if they are old enough (18 or older), and the opposite if they are not older than 18. */

var person = {
   name: "Bobby",
   age: 12

  }

if(person.age > 18) {
    console.log(person.name + " is allowed to go to the movies") 
} else {
    console.log(person.name + " is not allowed to go to the movies")
}

// 2. Using that same object, only allow them into the movie if their name starts with "B"

if(person.name = "B") {
    console.log(" is allowed to go to the movies")
} else {
    console.log(" is not allowed to go to the movies")
}

// 3. Using that same object, only allow them into the movie if their name starts with "B" and they are older than 18.

if(person.name = "B" && person.age > 18) {
    console.log("is allowed to go to the movies")
} else {
    console.log("is not allowed to go to the movies")
}

/* Silver Medal
1. Write an if/else if/else statement that prints "strict" if 1 strictly equals "1", prints "loose" or "abstract" 
if 1 equals "1" without type checking, and prints "not equal at all" if it doesn't print the other stuff. */

if(strict = 1) {
    console.log()
}

}

// 2. Write an if statement that prints "yes" if 1 is less than or equal to 2 AND (&&) 2 is equal to 4 

var cars = ["honda", "acura", "toyota", "nissan"];
var i = 2;
var len = cars.length;
var text = "";

for(; i <= len; i++) {
console.log(text += cars[i]) + "<br>"; } 

/* Create a for loop that iterates through 101 numbers (from 0 - 100). 
If the current iteration is an Odd number, 
print "Odd" to the console, otherwise print "Even". */

for(var i = 0; i < 101; i++) {
    if (i === 0) {
        console.log(i + " Even") 
    } else if (i % 2 === 0) {
        console.log(i + " Even")
    } else console.log(i + " Odd")

    }


// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for(var i = 0; i< officeItems.length; i++) {
    if(officeItems[i] === "computer") {
    count++
    }
}
console.log(count)
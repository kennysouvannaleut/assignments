// Create a for loop that iterates through 101 numbers (from 0 - 100). 
// If the current iteration is an Odd number, print "Odd" to the console, 
// otherwise print "Even".

for(var i = 0; i < 101; i++) 
{ if (i === 0) 
    {
    console.log(i + " Even")
} else if (i % 2 === 0) 
    { 
    console.log(i + " Even") 
} else {
    console.log(i + " Odd")
}
}

// Loops and Arrays Practice
// #1 Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for(var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        count++
    }
}
console.log(count)

// 2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if they aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    } ]

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
         console.log("old enough")
 } 
    else {
        console.log("not old enough")
}
}

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is not old enough to see Mad Max")
}  
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is old enough to see Mad Max")
    }
}

// 2. Check to see if the movie goer is a male or female for an even more personalized message.

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HIM in.")
 } 
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. SHE'S good to see Mad Max Fury Road")
}
}   
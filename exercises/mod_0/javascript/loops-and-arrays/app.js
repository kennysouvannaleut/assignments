
// Loops and Arrays Practice
// #1 Loop through the following array and count how many "computers" there are. Log the final count:

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

var count = 0;
for(var i = 0; i < officeItems.length; i++) {
    if(officeItems[i] === "computer") {
        count++
    }
}
console.log(count);

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
};

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age <= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is not old enough to see Mad Max")
}  
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[0].name + " is old enough to see Mad Max")
    }
};

// 2. Check to see if the movie goer is a male or female for an even more personalized message.

for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
         console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is not old enough to see Mad Max Fury Road, don't let HIM in.")
 } 
    else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + "is old enough. SHE'S good to see Mad Max Fury Road")
}
}; 
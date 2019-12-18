// ARRAY FILTER EXERCISES:

// #1. Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const fiveAndGreaterOnly = [3, 6, 8, 2];
const filterFiveAndGreaterOnly = fiveAndGreaterOnly.filter(num => num > 5);
// console.log(filterFiveAndGreaterOnly);

// console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8];

// #2. Given an array of numbers, return a new array that only includes the even numbers.
const evensOnly = [3, 6, 8, 2];
const filterEvensOnly = evensOnly.filter(num => num % 2 === 0);
// console.log(filterEvensOnly);

// console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2];

// #3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length.
const fiveCharactersOrFewerOnly = ["dog", "wolf", "by", "family", "eaten", "camping"];
const filterFiveCharactersOrFewerOnly = fiveCharactersOrFewerOnly.filter(word => word.length <= 5);
// console.log(filterFiveCharactersOrFewerOnly);

// console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// #4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
const peopleWhoBelongToTheIlluminati = ([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]);
const filterPeopleWhoBelongToTheIlluminati = peopleWhoBelongToTheIlluminati.filter(group => group.member === true);
// console.log(filterPeopleWhoBelongToTheIlluminati);

//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

// #5. Make a filtered list of all the people who are old enough to see The Matrix (younger than 18).
const ofAge = ([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]); 
const filterOfAge = ofAge.filter(x => x.age > 18);
// console.log(filterOfAge);
 
//[ { name: 'Angelina Jolie', age: 80 },
//  { name: 'Bob Ziroll', age: 100 } ]
// ARRAY MAP EXERCISES:

// #1. Make an array of numbers that are doubles of the first array.
const doubleNumbers = [2, 5, 100];
const mapDoubleNumbers = doubleNumbers.map(x => x * 2);
// console.log(mapDoubleNumbers);

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200];

// #2. Take an array of numbers and make them strings.
const stringItUp = [2, 5, 100];
const mapStringItUp = stringItUp.map(String);
// console.log(mapStringItUp);

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"];

// #3. Capalize each of an array of names.
const capitalizeName = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const mapToLowerCase = capitalizeName.map(x => x.toLowerCase());
// console.log(mapToLowerCase);
const mapCapitalizeName = mapToLowerCase.map(x => x.replace(/(.?)/, (letter) => letter.toUpperCase()));
// console.log(mapCapitalizeName);

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]))

// #4. Make an array of strings of the names.
const namesOnly =([
    { name: "Angelina Jolie",
      age: 80 },
    { name: "Eric Jones",
      age: 2 },
    { name: "Paris Hilton",
      age: 5 },
    { name: "Kayne West",
      age: 16 },
    { name: "Bob Ziroll",
      age: 100 }]);

const mapNamesOnly = namesOnly.map(namesOnly => namesOnly.name);
// console.log(mapNamesOnly);

// console.log(namesOnly(["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]));

// #5. Make an array of strings of the names saying whether or not they can go to the matrix.
const makeStrings =([
  { name: "Angelina Jolie",
    age: 80 },
  { name: "Eric Jones",
    age: 2 },
  { name: "Paris Hilton",
    age: 5 },
  { name: "Kayne West",
    age: 16 },
  { name: "Bob Ziroll",
    age: 100 }]);

const mapMakeStrings = makeStrings.map(makeStrings => makeStrings.name)
console.log(mapMakeStrings);

// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// #6. Make an array of the names in h1s, and the ages in h2s.
const readyToPutInTheDOM =([
  { name: "Angelina Jolie",
    age: 80 },
  { name: "Eric Jones",
    age: 2 },
  { name: "Paris Hilton",
    age: 5 },
  { name: "Kayne West",
    age: 16 },
  { name: "Bob Ziroll",
    age: 100 }]);

const mapReadyToPutInTheDOM = readyToPutInTheDOM.map(function(readyToPutInTheDOM){
  return readyToPutInTheDOM['age'];
});
// console.log(mapReadyToPutInTheDOM);

// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]

















// function arrayToString(arr){
//     let str = '';
//     arr.forEach(function(i, index){
//         str += i;
//     if(index != (arr.length - 1)){
//         str += ',';
//     };
// });
// return str;
// }

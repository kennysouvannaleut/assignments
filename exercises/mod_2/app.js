// ARRAY MAP EXERCISES

// #1. Make an array of numbers that are doubles of the first array.
const doubleNumbers = [2, 5, 100];
const mapDoubleNumbers = doubleNumbers.map(x => x * 2);

// console.log(mapDoubleNumbers);
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200];

// #2. Take an array of numbers and make them strings.
const stringItUp = [2, 5, 100];
const mapStringItUp = stringItUp.map(String)

// console.log(mapStringItUp);
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"];

// #3. Capalize each of an array of names.
const capitalizeName = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// const firstLetterCapilized = capitalizeName.charAt().toUpperCase()
// console.log(firstLetterCapilized)
const copyCapitalizddName = capitalizeName;
console.log(copyCapitalizddName)
// const slicedCharacter = capitalizeName.slice(1).join(', ').charAt(0)
const slicedCharacter = capitalizeName.join(', ').charAt(0)
// console.log(slicedCharacter)
const joinedName = copyCapitalizddName.join(slicedCharacter)
console.log(joinedName)
const firstCharacter = joinedName.charAt().toUpperCase()

console.log(firstCharacter)
// const slicedCharacter = firstCharacter.slice(1)
// console.log(capitalizedName)
// console.log(firstCharacter)
// console.log(firstCharacter)
// const capitalizedName = 
// console.log(slicedCharacter)


// console.log(capitalizeName.
// const mapCapitalizeName = capitalizeName.map(Array)
// console.log(mapCapitalizeName);
// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

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

// for (const {
//     name,
// } of namesOnly) {
//     console.log(name)
// }

const copyNamesOnly = [...name] = namesOnly

// const namesOnlyArray = copyNamesOnly.map(name => this.name)
// console.log(namesOnlyArray)

// console.log(mapNamesOnly)

// console.log(namesOnly([
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]








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

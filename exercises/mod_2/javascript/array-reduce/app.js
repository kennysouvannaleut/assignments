// ARRAY REDUCE EXERCISES:

// #1. Turn an array of numbers into a total of all the numbers.
const total = [1, 2, 3];
const result = total.reduce((final, current) => final + current)
// console.log(result);

//console.log(total([1,2,3])); // 6

// #2. Turn an array of numbers into a long string of all those numbers.
const stringConcat = [1,2,3];
const stringResults = stringConcat.reduce(function(final, num){
    final += num
    return final
}, [])
// console.log(stringResults);

// console.log(stringConcat([1,2,3])); // "123"

// #3. Turn an array of voter objects into a count of how many people voted.
const totalVotes = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
const voteCounts = totalVotes.reduce(function(final, voter){
    if(voter.voted){
        final++
    }
    return final;
}, 0)
// console.log(voteCounts);

//console.log(totalVotes(voters)); // 7

//  #4. Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.
const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const shoppingSpree = wishlist.reduce(function(final, cost){
    if(cost.price){
    return final.result;
}})
console.log(shoppingSpree);

// console.log(shoppingSpree(wishlist)); // 227005

// 5. Given an array of arrays, flatten them into a single array.
const flatten = arrays.reduce
const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// #6. Given an array of potential voters, return an object representing the results of the vote.
const voterResults = voters.reduce

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// console.log(voterResults(voters)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/
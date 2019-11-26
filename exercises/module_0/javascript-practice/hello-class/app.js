/*
    Tasks Level One:
    1. call the function
    2. change the function 
    
    Tasks Level Two:
    1. give the function a name parameter
    2. pass the function call a string (preferably a name) as an argument
    3. return a cool string, like "Hello Fred!"

    Tasks LeveL Three:
    1. give a function a age paramerter
    2. pass the function call a string (preferably an age) as an argument
    3. return a cool string, like "Hello Fred, how do you like being 27?"
*/

// var sayHello = function () {
// console.log("hello class");
// }

// function sum(a, b) {
// console.log(a + b);
// }
// sum(5, 2)

// function subtract(a, b) {
// console.log(a - b);
// }
// subtract(5, 2) 

function person(name) 
	{
    this.name = "Frank"
    this.age = 27
    }
// console.log(person);

person.prototype.talk = function () {
    console.log("Hello", "" + this.name)
    console.log("Hello" + "", + this.name, + "" + "how do you like bwing", + "", + this.age, + "?");
}





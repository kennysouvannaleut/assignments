// String Methods Exercise

// 1. Make a function that will return any given string into all caps followed by the same string all lowercase. || capilizeAndLowercase('Hello') // => 'HELLOhello'
// capilizeAndLowercase('Hello') // => 'HELLO'ello'

    var text = 'Hello';
    var upperCased = text.toUpperCase();
    // console.log(upperCased);
    var lowerCased = upperCased.toLowerCase();
    // console.log(lowerCased);
    var hello = upperCased+lowerCased;
    // console.log(hello);
    // console.log(text.toUpperCase()+text.toLowerCase());

// 2. Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().
// findMiddleIndex('Hello') // => 2
// findMiddleIndex('Hello World') // => 5

    let findMiddleIndex = 'Hello';
    var num1 = Math.floor(findMiddleIndex.length / 2);
    // console.log(num1);

    let findMiddleIndex2 = 'Hello World';
    var  num2 = Math.floor(findMiddleIndex2.length/ 2);
    // console.log(num2);

// 3. Make a function that uses slice() and the other functions you've written to return the first half of the string
// returnFirstHalf('Hello') // => 'He'
// returnFirstHalf('Hello World') // => 'Hello'

    var text = 'Hello';
    var text = 'Hello'.slice(-5, 2);
    // console.log(text);

    var txt = 'Hello World'.slice(-11, 6);
    // console.log(txt);

// 4. Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
// hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.
// capilizeAndLowercase('Hello') // => 'HEllo'
// capilizeAndLowercase('Hello World') // => 'HELLO world'

function upperLower(str) {
    return str.toUpperCase() + str.toLowerCase()
}
    // console.log(upperLower('Hello'));

function halfRoundedDown(str) {
    return Math.floor(str.length / 2)
}
    // console.log(halfRoundedDown('Hello'));
    // console.log(halfRoundedDown('Hello World'));

function firstHalf(str) {
    return str.slice(0, halfRoundedDown(str))
}
    // console.log(firstHalf('Hello'));
    // console.log(firstHalf('Hello World'));

function upperLowerText(str) {
    return str.slice(0, halfRoundedDown(str)).toUpperCase() + str.slice(halfRoundedDown(str), str.length).toLowerCase()
}
    // console.log(upperLowerText('Hello')); 
    // console.log(upperLowerText('Hello World'));

function correctUpperLowertext(str) {
    const splitStr = str.split(" ")
    for(let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1)
    }
        return splitStr.join(" ")
};
    console.log(correctUpperLowertext('hey friends! practice practice practice!'));


// Optional Code Challenge (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// Make a function that takes any string and capitalizes any character that follows a space.
// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"





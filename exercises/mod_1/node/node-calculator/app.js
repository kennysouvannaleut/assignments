// NODE CALCULATOR

const readline = require("readline-sync");

num1 = readline.question('Please enter your first number:');
num2 = readline.question('Please enter your second number:');
option = ['add', 'subtract', 'multiply', 'divide'];
choice = readline.keyInSelect(option, 'Which operation');

if(choice === 0) {
    console.log(`The result is ${(+num1 + (+num2))}`)
} else if (choice === 1) {
    console.log(`The result is ${num1 - num2}`)
} else if (choice === 2) {
    console.log(`The result is ${num1 * num2}`)
} else if (choice === 3) {
    console.log(`The result is ${num1 / num2}`)
} else {
    console.log('Invalid, Try again!');
};

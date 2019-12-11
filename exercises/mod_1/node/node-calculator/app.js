// NODE CALCULATOR

var readlineSync = require('readline-sync');
    operators = ['+', '-', '*', '/'],
    index = readlineSync.keyInSelect(operators, 'Please choose the type of operation to perform');
    console.log('Great!' + operators[index], 'Please stand by for further instructions');

const readline = require('readline');
const r1 = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

r1.question('Please enter your first number:', (num1) => {
    r1.question('Please enter your second number:', (num2) => {
        const operators = {
            calculateProduct(...rest) {
                console.log('Please use the multiply method')
                return this.multiply(...rest);
            },
            multiply(num1, num2) {
                return num1 * num2
            }
        }; 
        console.log(num1*num2); 
    // var result = []
    // console.log(`The sum of the two numbers is ${(+num1 + (+num2))}`);
    // console.log(`The diff of the two numbers is ${num1 - num2}`);
    // console.log(`The mul of the two numbers is ${num1 * num2}`);
    // console.log(`The div of the two numbers is ${num1 / num2}`);
    // console.log(`The result is ${result}`);
    r1.close();
    })
})

                
            






// let add = function(a, b) {
//     return a + b;
// }
// console.log(add(1, 1));

// let sub = function(a, b) {
//     return a - b;
// }
// console.log(sub(10, 5));

// let mul = function(a, b) {
//     return a * b;
// }
// console.log(mul(2, 3));

// let div = function(a, b) {
//     return a / b;
// }
// console.log(div(5, 5));
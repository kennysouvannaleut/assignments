// ESCAPE ROOM 

const readline = require("readline-sync");
let gameOver = false;
let hasKey = false;

const userName = readline.question('- What is your name? ');
console.log('Hello ' + userName + '!');

gameStart = readline.question(userName + ', your locked in a room and need a key to get out. Find the key! Enter key to start.');
option = ['Put your hand in the hole', 'Find the key', 'Open the door'];
choice = readline.keyInSelect(option, 'Which option?');
console.log('-- You said "' + option[choice] + '!" ');

while(!gameOver){
    if(choice === 0) {
        console.log('Sorry, your Dead!');
        gameOver = true;
        hasKey = false;
    } else if(choice === 1) {
        console.log('- The END!');
        hasKey = true;
        gameOver = true;
    } else if(choice === 2) {
        console.log('Still locked, you need a key!');
        hasKey = false;
        gameOver = true;
    } else {
        console.log('Sorry, thats invalid, try again!');
        hasKey = false;
        gameOver = true;
}
};

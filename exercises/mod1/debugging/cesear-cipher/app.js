// CAESAR CIPHER

var readline = require("readline-sync");
var input = readline.question('What phrase would you like to encrypt?').toLowerCase()
var shift = parseInt(readline.question('How many letters would you like to shift?'));


const result = ''
function cesearCipher (string, number) {

    for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt[i];

    if (code < 65 || code > 122 || (code > 90 && code < 97)) 
            { 
            result += string.charCodeAt
            } else {
            let newCharCode = code + Math.ceil(number % 26); 

            if (code >= 97 && newCharCode > 122) {
                let newCharCode = code + Math.ceil(number % 26)
                newCharCode = newCharCode - 122 + 96
                }
            if (code <= 90 && newCharCode > 90) {
                newCharCode = newCharCode - 90 + 64;
            }
            result += string(newCharCode);
        }
    }
        return result;
}
 console.log(result)



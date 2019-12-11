// CAESAR CIPHER

var readline = require("readline-sync");
var input = readline.question('What phrase would you like to encrypt?').toLowerCase()
var shift = parseInt(readline.question('How many letters would you like to shift?'));


let result = ''
function cesearCipher (string, num) {

    for (let i = 0; i < string.length; i++) {
    // const code = string.charCodeAt[i];
        if(string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)
    // if (code < 65 || code > 122 || (code > 90 && code < 97)) 
            { 
                let code = string.charCodeAt(i)
                code -= 97
                code = (code + num) % 26
                code += 97
                result += String.fromCharCode(code)
            } else {
                result += string[i]
            }
        }
            // result += string.charCodeAt
            // } else {
            // let newCharCode = code + Math.ceil(num % 26); 

    //         if (code >= 97 && newCharCode > 122) {
    //             let newCharCode = code + Math.ceil(num % 26)
    //             newCharCode = newCharCode - 122 + 96
    //             }
    //         if (code <= 90 && newCharCode > 90) {
    //             newCharCode = newCharCode - 90 + 64;
    //         }
    //         result += String(newCharCode);
    //     }
    // }
        return result;
}
 console.log(cesearCipher(input, shift));



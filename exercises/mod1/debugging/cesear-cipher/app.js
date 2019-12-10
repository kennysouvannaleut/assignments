// CAESAR CIPHER

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarCipher(str, k) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode < 65 || charCode > 122 ||
       (charCode > 90 && charCode < 97)
       ) { 
            result += str[i];
        } else {
            let newCharCode = charCode + Math.ceil(k % 26); 

            if (charCode >= 97 && newCharCode > 122) {
                newCharCode = newCharCode - 122 + 96;
            }
            if (charCode <= 90 && newCharCode > 90) {
                newCharCode = newCharCode - 90 + 64;
            }
            result += String.fromCharCode(newCharCode);
        }
    }
    console.log(result);
    return result
}

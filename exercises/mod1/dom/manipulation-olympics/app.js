// Qualifier: 
                                    
const h1 = document.createElement("h1"); 
h1.textContent = "JavaScript Made This!!";
document.getElementById("header").appendChild(h1);
h1.className = "header";
// console.log(h1)

const subTitle = document.createElement("subTitle")
subTitle.innerHTML = '<span class="name">Kenny</span> wrote the JavaScript';
document.getElementById("header").appendChild(subTitle);
name.className = "span";
console.log(subTitle)

// Bronze:
const myMessages = document.getElementById('messages')
// document.getElementsByClassName('messages').appendChild(div)
const messages = document.getElementsByClassName("message");
// console.log(messages) 
console.dir(messages)
console.log(messages[1]);


messages[0].textContent = "you're great";
messages[1].textContent = "thanks!";
messages[2].textContent = "you're welcome";

document.getElementById("theme-drop-down").classList.toggle("theme-two")
// for(let i = 0; i < messages.length; i++) {
    // messages[i].classList.toggle('theme-two')
// }

// messages.addEventListener('click', function() {
// })

// var clearButton = document.getElementById('clear-button')
// clearButton.appendChild(messages);

// clearButton.addEventListener('click', function(e){
//     e.preventDefault()
// });

function myFunction () {
    document.getElementById("theme-drop-down")[1].stye.backgroudColor = "blue";
}

console.log(myFunction)
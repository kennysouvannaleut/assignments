// function hover() {
//     var i = 0
//     if (i === "r") {
//         alert("red");
//     } else {
//         alert("fail");
//     }
// }
// // console.log(hover)

// var myNewBox = ""
// // console.log(myNewBox)

// var myCount = "5";
// // console.log(myCount)

// for(var i = 0; i < myCount; i++) {
//     var button = document.createElement("button")
//     button.className = "button"
//     button.id = "buttonID"
//     var buttonID = button.id
//     button.addEventListener('click', function(event) {
//         changeColor(event.target.id)


// function changeColor(button) {
//     var itemToChange = document.getElementById(button)
//     console.log('Fired')
//     itemToChange.style.backgroundColor = 'blue'
// }


// button.addEventListener("click", function(e) {
//     if (e.target.style.backgroundColor = "blue") { 
//         alert ("OK")
// }   else if 
//     (e.target.style.backgroundColor = "yellow") 
//     (e.target.style.backgroundColor = "red") 
//         alert ("NOT OKAY")
// })
// console.log(button)

// document.addEventListener("mouse", function(e) {
//     (e.target.style.backgroundColor = "blue")
// })


// document.getElementById("buttonID").e.target.style.backgroundColor = document.getElementById("colorID").value;


var myColors = document.getElementById("myColors")
var countOfBoxes = 1
for(var i = 0; i < countOfBoxes; i++) {
    var myBox = document.createElement("div")
    // myBox.classList.add("myBox")
    myBox.className = "myBox"
    myBox.id = "myBox" + i
    var iD = myBox.id
    myColors.appendChild(myBox)
    myBox.style.height = "50pt"}
    myBox.addEventListener("click", function(event) {
    var itemToChange = document.getElementById(changeColor)
    itemToChange.target.style.backgroundColor = 'black'
    changeColor(event.target)
})
console.log(itemToChange)

// function changeColor(myBox) {
//     var itemToChange = document.getElementById(changeColor)
//     console.log(changeColor)
//     itemToChange.target.style.backgroundColor = 'black'
// }
// console.log(iD)

// document.getElementById(itemToChange).e.target.backgroundColor = document.getElementById(itemToChange).value

myBox.addEventListener("mousemove", function(e) {
    (e.target.style.backgroundColor = "green") })
        // alert ("GREEN ")

myBox.addEventListener("mouseenter", function(e) {
    (e.target.style.backgroundColor = "yellow") })
    // alert ("GREEN ")

myBox.addEventListener("mouseover", function(e) {
    (e.target.style.backgroundColor = "red") })
    // alert ("RED ")

// myBox.addEventListener("mouseenter", function(e) {
//     (e.target.style.backgroundColor === "yellow") {
//     //    alert ("YELLOW") }
// myBox.addEventListener("mousemove", function(e) {
//     (e.target.style.backgroundColor === "red") {
//         // alert ("RED")
//     }})
// console.log(myBox)

// document.addEventListener("mouseover", function(e) {
//     (e.target.style.backgroundColor = "green")
// })
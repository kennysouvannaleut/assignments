// String Methods Exercise

// 1. Make a function that will return any given string into all caps followed by the same string all lowercase. || capilizeAndLowercase("Hello") // => "HELLOhello"

var text = "Hello"
// console.log(text.toUpperCase()+text.toLowerCase());
console.log('Hello' .toUpperCase());

const a = String.prototype.toUpperCase.call ({toString:function toString() {
// const b = String.prototype.toLowerCase.call ({toString:function toString() {
    return 'Hello';
}
})

const b = String.prototype.toUpperCase.call(true)

console.log(a, b)
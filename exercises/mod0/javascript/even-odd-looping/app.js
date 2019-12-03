// Create a for loop that iterates through 101 numbers (from 0 - 100). 
// If the current iteration is an Odd number, print "Odd" to the console, 
// otherwise print "Even".

for(var i = 0; i < 101; i++) 
{ if (i === 0) 
    {
    console.log(i + " Even")
} else if (i % 2 === 0) 
    { 
    console.log(i + " Even") 
} else {
    console.log(i + " Odd")
}
};

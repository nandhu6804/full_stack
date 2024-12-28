//program to find odd/even using bitwise operators
//const prompt = require('prompt-sync')();
//var a = prompt('Enter a: ');
var a=5
if ((a & 1) == (a + 1)) {
    console.log(a, " is even")
}
else {
    console.log(a, " is odd")
}
//1.variables
//var,let,const -> refer to declaration.js

//2.arrow function
arrowfun = (studentDept) => {
    console.log(studentDept)
}
arrowfun(["CSE", "IT", "AIML"])

arrowfun = (studentDept) => {
    return (studentDept[0])
}
//arrowfun(['CSE,IT,AIML',"CSE","IT","AIML"])
console.log(arrowfun(['CSE,IT,AIML', "CSE", "IT", "AIML"]))

//3.destructuring operators
var m = [90, 95, 98]
//var[m1,m2]=m
var [m1, m2, m3] = m
console.log(m1, m2, m3)

//4.ternary operator
var a = 10
out = (a % 2 == 0) ? "Even" : "Odd"
console.log(a, " is ", out)

//5.spread operator
a1 = ["one", "two", "three"]
a2 = ["four", "five", "six"]
//a2 = [...a1,"four", "five", "six"]
a = [...a1, ...a2]
console.log(a)

//6.rest operator
function restop(...arr1) {
    console.log(arr1);
}
restop('a', 'b', 'c')

//7.scope
var a = 5
const pi = 3.14
console.log("outside block", a)
console.log("outside block", pi)
{
    let c = 20
    var a = 10
    let b = 10.5
    console.log("inside", a)
    console.log("inside", b)
    console.log("inside", c)
}
//console.log("outside", c)//if c is var it will be printed outside block
console.log("outside", a)//if 'var a' then valueof 'a' inside block is printed else value of 'a' in outside block is printed
console.log("outside", pi)

//8.hoisting
console.log(x)
var x = 10
console.log(x)

console.log(y)//error:ReferenceError: Cannot access 'y' before initialization
let y = 10
console.log(y)

console.log(z)//error:ReferenceError: Cannot access 'z' before initialization
const z = 10
console.log(z)
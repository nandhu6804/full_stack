//Assignment Operator
a = 10
console.log("a=", a);

//Unary operator
a++;
console.log("\n", a);
--a;
console.log(a);
console.log("a=", a)

//arithmetic operators
a = a + 10;
console.log("\n", a);
a = a - 10;
console.log(a);
console.log("a=", a)

//Relational operators
b = 10
c = b < a;
console.log("\n", c);
console.log(b > a);
var d = 10
if (a == d) {
    console.log("\nboth values are same but not types so it's printing true\n== just checks values not datatypes")
    console.log(a == d)
}
if (a === d) {
    console.log("\nboth values are same but not same so it's printing false\n=== strictly checks values and datatypes")
    console.log(a === d)
}
else {
    console.log("\nnot equal")
}

var f = "20"
if (a === f) {
    console.log("\nboth values are same but not same so it's printing false\n=== strictly checks values and datatypes")
    console.log(a === f)
}
else {
    console.log("\nnot equal")
}
console.log("a=", a, " b=", b)

//Logical Operators
b = b + 5
console.log("\n", b && a)
console.log(b || a)
console.log("a=", a, " b=", b)

//Bitwise operators
console.log("\n", b | a)
console.log(b & a)
console.log(b ^ a)
console.log(b << a)
console.log(b >> a)
console.log("a=", a, " b=", b)

//Ternary Operators
console.log("\n", a < b ? a : b)
console.log("a=", a)

//spread operator(...)--to spread elements from iterable to individual elements[merging arrays,copying,passing multiple elements]
//merging arrays
var a = [1, 2, 3]
var b = [4, 5, 6]
var c = [...a, ...b]
console.log("Merging:", c)

//copying arrays
var m = [1, 2, 3]
var n = [...m]
console.log("Copying:", n)

//passing multiple elements
var numbers = [1, 2, 3, 4, 5, " students"]
add(...numbers)
function add(a, b, c, d, e, f) {
    sum = a + b + c + d + e + f
    console.log("Passing:", sum)
}

//rest operator(...)--to collect remaining elements to a function 
/*alpha = (x, y, ...restArguments) => {
    console.log(x + y + restArguments)
}*/
alpha(['a', 'b', 'c', 'd', 'e', 'f'])

function alpha(x, y, ...restArguments) {
    z = x + y + restArguments
    console.log(z)
}
//console.log(alpha(['a', 'b', 'c', 'd', 'e']))

const [first, ...last] = ['a', 'b', 'c', 'd', 'e']
console.log(first + "," + last)
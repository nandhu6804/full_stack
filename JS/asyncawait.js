//async & await
//sync->synchronous=coordinating with others follows
//async->asynchronous=works independent to each other
//await-removing promise in async


async function fun1() {
    //console.log("Hello")//Hello
    setTimeout(() => {
        return "Kec"//promise {'undefined'}
    }, 1000)
    //return "kec"//promise {'kec'}
}

fun2 = async () => {
    //console.log("Hello")//Hello
    setTimeout(() => {
        return "Kec arrow function"//promise {'undefined'}
    }, 1000)
    //return "kec arrow function"//promise {'kec arrow function'}
}

console.log(fun1())
console.log(fun2())

//removing undefined

//removing indirect decalaration of promise
//example1
async function fun5() {
    setTimeout(() => {
        console.log("Hello Kec")
    }, 5000)
    //return "kec"//promise {'kec'}
    console.log(await "kec")// to remove promise
}

fun6 = async () => {
    setTimeout(() => {
        console.log("Hello Kec arrow function")
    }, 4000)
    //return "Kec arrow function"
    console.log(await "Kec arrow function")//to remove promise
}

fun5()
fun6()

//example2
oddeven = async (number) => {
    if (typeof number != "number") {
        console.log("Input must be a number")
    }
    else if ((number % 2 == 0)) {
        console.log(await number, " is even number")
    }
    else {
        console.log(await number, " is odd number")
    }
}

var result1 = oddeven(5)
var result2 = oddeven("abc")
var result3 = oddeven(10)

//direct declaration of promise
//resolve-if condition satisfies it resolves
//rejects-if condition not satisfies then it rejects
fun7 = async () => {
    setTimeout(() => {
        console.log("Hello1")
    }, 1000)
    return "Hello2"
}
fun8 = async () => {
    setTimeout(() => {
        console.log("Kec1")
    }, 1000)
    return "Kec2"
}
fun7().then((a) => {
    console.log(a)
})
fun8().then((a) => {
    console.log(a)
})

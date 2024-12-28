//function with arguments without return type
mark = (m1, m2) => {
    sum = m1 + m2
    console.log("Total:", sum)
}
mark(81, 81)

word = (a, b) => {
    w = a + b
    console.log("Word:", w)
}
word("Kongu", " College")

//function without arguments without return type
number = () => {
    let m = 2
    let n = " Days"
    let c = ' training over'
    console.log(m + n + c)
}
number()

//function with parameters with return type
word = (a, b) => {
    w = a + b
    return w
}
ww = word("Kongu", " College")
console.log(ww)

//function without parameters with return type
number = () => {
    let m = 2
    let n = " Days"
    let c = ' training over'
    return m + n + c
}
n = number()
console.log(n)
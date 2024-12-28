arr = [10, 20, 30, [40.5, 50.6], "a", "KEC", true]
console.log(arr);

//1.for ... in loop
for (var a in arr) {
    console.log("element in index ", a, " is ", arr[a]);
}

//for ... of loop
for (var a of arr) {
    console.log(a);
}
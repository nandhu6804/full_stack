arr = [10, 20, 30, [40.5, 50.6], "a", "KEC", true]
console.log(arr);

//1.for ... in loop-directly access the first value
for (var a in arr) {
    console.log("element in index ", a, " is ", arr[a]);
}

//for ... of loop-directly access element
for (var a of arr) {
    console.log(a);
}

//foreach-directly access element
//example 1
/*arr.forEach((ele)=>{
    console.log(ele);
})*/
arr.forEach((element,index)=>{
    console.log("Element ",element," present in index ",index);
})
//while printing index folloewd by element it won't print like 0--10
//the output will be "index is 10 and it's element is 0"

//example 2
obj1={
    "firstname":"kongu",
    "lastname":"engineering",
    "place":"college"
}
console.log(obj1)
/*obj1.forEach((key,val)=>{//[key,val],{key,val}
    console.log(key,val);//error:obj1.forEach is not a function
})

for(const ele of obj1){
    console.log(ele)//error"obj1 is not iterable
}

for(const ele in obj1){
    console.log(ele)//works
}
//output:firstname
         lastname
         place

for(const {key,ele} of obj1){
    console.log(key,ele)//error"obj1 is not iterable
}
*/
for(key in obj1){
    val=obj1[key]
    console.log(key,val)
}
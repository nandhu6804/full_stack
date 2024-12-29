//print key,value pairs of object type using for each and for...of
obj1 = {
    "firstname": "kongu",
    "lastname": "engineering",
    "place": "college"
}
/*for(key in obj1){
    val=obj1[key]
    console.log(key,val)
}*/
//for...of
for (const key of Object.keys(obj1)) {
    console.log(key)
}

for (const value of Object.values(obj1)) {
    console.log(value)
}

for (const [key, value] of Object.entries(obj1)) {
    console.log(key, "-", value)
}

//forEach
//Object.entries(obj1).forEach(([key, value]) => {//key-- firstname Value-- kongu
Object.keys(obj1).forEach((key) => {
    console.log("Key--", key)
});

Object.values(obj1).forEach((value) => {
    console.log(" Value--", value)
});

Object.entries(obj1).forEach((key, value) => {//Key-- [ 'firstname', 'kongu' ]  Value-- 0
    console.log("Key--", key, " Value--", value)
});
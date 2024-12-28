//Array example
arr=[10,20,30,[40.5,50.6],"a","KEC",true]
console.log(arr);

//Object example Type 1
obj1={
    "firstname":"kongu",
    "lastname":"engineering",
    "place":"college"
}
console.log(obj1);

//Object example Type 2
obj2={}
obj2["movie"]="safsaha"
obj2["budget"]="100cr"
obj2["boxOffice"]="100cr"
obj2["release"]="Worldwide"
console.log(obj2);
console.log(obj2["boxOffice"]);//error if obj2[boxOffice] is given
console.log(obj2.budget);

//Object example Type 3
obj3=new Object()
obj3["phone"]="Redmi"
obj3["store"]="app store"
obj3["game1"]="candy crush"
obj3["game2"]="temple run"
console.log(obj3);
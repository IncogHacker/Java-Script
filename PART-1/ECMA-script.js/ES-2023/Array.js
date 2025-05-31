
//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)



let arr=[1,2,3,4,5,6,]

let last=arr.findLast((curr)=>{

   return curr;
})

console.log(last);

//another Way To write .
let arr2=[1,2,3,4,5,6]
console.log(arr2.findLast((curr)=> curr));


// -----------------------------------------
// Array.prototype.toReversed()
const rever=["mango","Banana","Guava","Orange"];

console.log(rever.reverse());//[ 'Orange', 'Guava', 'Banana', 'mango' ]

const storerever= rever.toReversed();
console.log(storerever);//this work in console


// Array.prototype.toSorted(compareFn)
//by alphabet A to B ot 1 To 9 

let nonsorted=[5,4,2,3,6,1]

console.log(nonsorted.toSorted());//[ 1, 2, 3, 4, 5, 6 ]


//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.

let withreplace=["rishabh","Riya","Nandani","Sunil Singh"]

console.log(withreplace.with(1,"Vishnu"));
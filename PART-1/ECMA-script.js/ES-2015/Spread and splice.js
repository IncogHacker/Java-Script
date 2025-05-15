

// Spread Operator (...)

let array=["apple","guava"]

console.log(...array);

//Copying An Array
 
let newarray=[...array] //all the data copied in new array
console.log(newarray);


//Concatenating Array /Combining Array

let arra1=[1,2,3,4];
let arra2=[4,6,7];

let newwarra=[...arra1,...arra2] //output is [
 // 1, 2, 3, 4,
 // 4, 6, 7
//         ]
console.log(newwarra);
console.log([new Set(newwarra)]); // set of 6 ..[ Set(6) { 1, 2, 3, 4, 6, 7 } ]


//Adding element to existing Array

let array2=["apple","guava","Melon"];

//? first Way to Add 
//array2.push("Banana","grapes");
// console.log(array2)

//? Second Way To Add
// array2.push(...["Banana","Guava"]);  //... show previous array 
// console.log(array2);


//?Third way to add using Splice Method 
array2.splice(1,0,"Addition of new Fruit");
console.log(array2);



// ---------------------------------------------------------------------------------------------
// In javscript when you use a spread then it convert the string into Array 

//? example

let x="INDIA";

console.log([...x]); //[ 'I', 'N', 'D', 'I', 'A' ]

//? New way of doing this using spli

let y=x.split("");
console.log(y);//[ 'I', 'N', 'D', 'I', 'A' ]

//?or
 console.log(x.split(""));//[ 'I', 'N', 'D', 'I', 'A' ]


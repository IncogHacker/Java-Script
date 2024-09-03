

let apple=('green,blue,red');

console.log(apple[11]);  //output is r

console.log(apple.at(-1));//output is d no need to use length-1 to print last variable

// ------------------------------------------------------------------------------

let arr0=[];
console.log(typeof arr0); //we get the output as an object ...

let arr1={};
console.log(typeof arr1);// we get also the object coz parenthesis also defined as ovject in java

// ---------------------------------------------------------------------------------------------


// Creating array 

//!  Using Array contructor 

let fruits0= new Array("apple" ,"orange", "guava");
console.log(fruits0);  


//! Using Array literal

let fruits1=['apple','orange','guava'];

console.log(fruits1);

console.log(fruits1[0]);//Accessing Elements

console.log(fruits1['apple']);//give undefined

//!Using empty element
// let arr=[];


// --------------------------------------------------
// Modifying Element

let fruits3=['apple', 'mango','vegetables'];

fruits3[1]='vegetables';

console.log(fruits3[1]);
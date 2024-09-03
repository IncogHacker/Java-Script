
// Adding String Using + or Concatenation 

const str ="Hello " + " World";
console.log(str);


//Adding Two Numbers

var _value1 = 5 + 20;
console.log(_value1);


//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of JavaScript and can be used to make code more readable and efficient.
//? There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.
//! It's worth noting that type coercion can lead to unexpected results, so it's essential to be aware of how JavaScript handles these situations.

let sum = "Vinod" - 5;
console.log(sum); //here the output is NaN which is Not a Number

let sums = "5" -5;
console.log(sums); //Here the coercion converts string 5 into numeric called Implicit coercion(automatically handled) so output is-- 0..

let value = "5" + 5;
console.log(value); // here the output is 55 coz here string add with number so concatenation take place and coercion no handling automatic here

console.log(10 + "20"); //output is here 1020 coz of concatenation no coercion take place..

//!when we talk about -(minus) the coercion take place means automatically handled 

console.log( 9 - "10");// here the output is -1

console.log("java " + "Script"); // here the output is java Script

console.log(" " + " ") ; //we get empty space output 

console.log(" " + 0);  //we get empty space with 0


console.log("Vinod" - "Thapa"); //we get output a Not a Number (NaN)

let values =  " " + 0;
console.log(typeof (values)); //we get output that values is string

console.log(true + true); //we get output as 2 (1+1=2)

console.log(false + false); //we get output as 0

console.log(false - true ); //we get -1


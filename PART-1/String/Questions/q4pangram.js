
//?write a javscript function isPangram that takes a string as input and returns true if the string is a Pangram (contains all letters of the alphabet) and false otherwise . The function should be case insensitive and ignore spaces. 

//?Constraints:

//? 1: The input string will consist of alphabetic characters and spaces.

//? 2: The function should handle both uppercase and lowercase letters.

//? 3: Consider the English alphabet with 26 letters.

//! -----------------------First method--------------------------------------------------------

// callfunction= (str) =>
// {

// let store= str.toLowerCase(); // Array.from(str) no used here directly 
// let alphabets="";
// for(let char=97; char<=122; char++)
// {
//      alphabets+=String.fromCharCode(char);
// }
// console.log(alphabets);


// let store1= store.includes(alphabets); // here if any space comes it give false evry word shoul match 

// console.log(store1);


// }


// console.log(callfunction("abcdefghijklmnopqrstuvwxyz"));

// **************************************This is not correct method****************************************************

//*  --------------Another Methods-------------


callingfunc=(str)=>{

let store= str.toLowerCase().split('');

let values= store.filter((current)=>{

return current.charCodeAt() >= "a".charCodeAt() && current.charCodeAt() <="z".charCodeAt();

});

console.log(values);

// console.log(new Set(values)); // this removes duplicate alphabets 

console.log([...new Set(values)]);// gives result in array after removing duplicate alphabets 

// now we have to check that total element length === 26 or not  coz duplicates alphabets are erased 

console.log([...new Set(values)].length);  //gives the length

console.log([...new Set(values)].length === 26); // output is true if all alphabet presents 


// we can also check like this 

    console.log(new Set(values).size===26); // we can also use like this 

};


console.log(callingfunc("The quick  @ brown fox jumps ove the lazy dog"));
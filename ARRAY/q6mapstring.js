

//! Using map to square each number and create a new array

// let number=[1,2,3,4,5,6,7,8];

// storefunc =number.map((current, index,arr)=>{

//     return current * current;

// });

// console.log(`${storefunc}`);


// ----------------------------------------------------------------------------------------------------

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.

// let array=[`rishabh`, `nandani`,`riya`];

// let storefunc =array.map((current,index,arr)=>{

//     return current.toUpperCase();

// });

    
// console.log(storefunc);  //output is [ 'RISHABH', 'NANDANI', 'RIYA' ]




//! only do uppercase of first letter in this array

let array2=[`rishabh`, `nandani`,`riya`];

 let storefunc= array2.map((current,index,arr)=>{


    return current.charAt(0).toUpperCase()+ current.slice(1);
   
    
 });

 console.log(storefunc);
 




 
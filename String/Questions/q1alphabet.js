

// Write a javscript function that prints the letters `a` through `z` in the console. you should use a loop to iterate through the letters and prints each one on a new line  


//!  -----------------first way-----------------------

// let string=`abcdefghijklmnopqrstuvwxyz`;

// string.split(``).map((current)=>{
    
//     console.log(current);
// });


//! ---------------------Second way to print lower case----------------------------------------

// using charcodeAt and String.from 

// for(let i=`a`.charCodeAt(0); i<=`z`.charCodeAt(0); i++)
// {
//    console.log(String.fromCharCode(i));
// }


//! -------------print upeer case alphabets-----------------------------------------------------------

//  for(let i=`A`.charCodeAt(0); i<=`Z`.charCodeAt(0);i++)
//  {
//         console.log(String.fromCharCode(i));
// }


// !  ---------------------------------------------------------------------


let string= "abcdesfghijklmnopqrstuvwxyz";

//   function sleep(ms){
    
//     return new Promise(resolve => setTimeout(resolve, ms));

//   }

//   also function return as 
 sleep = ms=> new Promise(resolve => setTimeout(resolve,ms));


 async function callingmain(str)
  {
       for(let item of str)
       {
        console.log(item);
        await sleep(100);
       }
  }


callingmain(string);
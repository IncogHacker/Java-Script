//? A promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly by providing a way to write asynchronous code that looks synchronous.

//? Pending: Initial state, neither fulfilled nor rejected.
//* Fulfilled(Resolved): The operation completed successfully.
//! Rejected: The operation failed or encountered an error.

//Promises have built-in methods like then and catch to handle the results of asynchronous operations when they complete or encounter errors, making it easier to write asynchronous code that is more readable and maintainable compared to traditional callback-based approaches.
 
//? Syntax 

//!using fat arrow function
// const prom =new Promise((resolve,reject)=>{

// });

//!first way to write traditional
// const proms= new Promise(function(resolve,reject){

// });

//? Promise.all is used when you want to wait for all promises to complete successfully. Reject state will throw an error.

//? Promise.allSettled is used when you want to wait for all promises to complete, regardless of success or failure, and get information about their outcomes.

//? Promise.race is used when you are interested in the result of the first promise that completes, regardless of success or failure.
//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This often results in code that is difficult to read, understand, and maintain due to its deeply nested structure.

//! here Settimeout is Callback function so many setTimeout thats is nested timeout forms call-back-hellfucntion
// let getnames = () => {

//     setTimeout(() => {
//         console.log("Hi My Name Is rishabh Singh")
//         setTimeout(() => {
//             console.log("Hi My Name is riya singh")
//             setTimeout(() => {
//                 console.log("My Name Is Riya Singh");
//                 setTimeout(() => {
//                     console.log("My name Is vishnu Singh")
//                     setTimeout(() => {
//                         console.log("My name is ram Singh")
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }


// getnames();

// Example 2 using nested fucntions

callingfucntion1 = (fn) => {
    console.log("Hi this First Function");
    fn();//anonymous arrow fucntion
}
callingfucntion2 = (fn) => {
    setTimeout(() => {
        console.log("Hi this second Function");

    }, 1000)

}


//nested Fucntions
callingfucntion1(() => {

    callingfucntion2(() => {


    })

});


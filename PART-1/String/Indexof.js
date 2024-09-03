

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
//! syntax
//! indexOf(searchString)
//! indexOf(searchString, position)

//? ------------------------------------------------------------------------------------


// const str="RishabhSingh";

// for(const item of str)
// {
//     console.log(str.indexOf(item));        // output is 0 1 2 3 4 5 3 7 1 9 10 3

// }

//?? ------------------------------------------------------------------------------------------------


// const str1="Nandani Singh";

// str1.split(``).map((current,index)=>{

//    console.log(index); /// gives the index not the index of output is  0 1 2 3 4 5 6 7 8 9 10 11 12 
// });

//? ---------------------------------------------------------------------------------------------

// const str="Rishabh";

//  store2 =str.split(``);

// store2.forEach((current)=>
// {
//    console.log(store2.indexOf(current));  //! output is  // 0
//                                                          // 1
//                                                          // 2
//                                                          // 3
//                                                          // 4
//                                                          // 5
//                                                          // 3

// });                                

//? ______________________________________________________________________________________________________________

const str="RishabhSingh";

console.log(str.indexOf("RishabhSingh"));   // give ouput of firts letter from where it starts like in this case 0

console.log(str.indexOf("Singh")); // give output is 7

// ------------------------------------------------------------------------------------------------


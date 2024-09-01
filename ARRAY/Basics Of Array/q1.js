
// write a program to multiply each element with 2

// let x=[1,2,3,4,5,6];

// callfunc=x.map((current,index,arr)=>{

//     return `${current*2}`;

//! Creates a new array with tranformed elements

// });

// console.log(callfunc);       //output is [ '2', '4', '6', '8', '10', '12' ]


// !!------------------------------

// using for-of-loop

// let number=[1,2,3,4,5,6];

// for(let item of number ) 
// {
//    console.log(item);                         //output is   
//                                                       //    2
//                                                       //    3
//                                                       //    4
//                                                       //    5
//                                                       //    6

// }

//!!-----------------------------------

//using forEach loop

let number=[1,2,3,4,5];

number.forEach((current,index,arr)=>{

    console.log(`${current*2}`);  //same output above for-of-loop

    //perform action on each element

});


// for-in-loop prints the index only


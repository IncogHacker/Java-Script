

//using the map method write a function that takes an array of numbers and returns a new array where each number is squared , but only if it is an even number ??



// ! ***************** first-method *****************************
// let array=[1,2,4,5,7,8,2];

// storefunc=array.map((current)=>{

//     if(current % 2==0)
//     {
//         return current *current;
//     }

//     else
//      return NaN;
// });

// let store2= storefunc.filter((current)=>{
 
//     return !isNaN(current);

// });

// console.log(store2);
//! ************************************************** */



// ! --------------------------Second method -----------------------------------

// let array=[1,2,3,4,5];
 
//  let storereturn =array.map((current)=>{

//     if(current % 2==0)
//     {
//         return current * current;
//     }



//  }).filter((current)=>{
         
//      if(current != undefined)
   
//         return current;

//  });

// console.log(storereturn);


//! --------------------------------------------------------

// ! +++++++++++++++++++++++++third method +++++++++++++++++++++++++++++++

// let array2=[1,2,3,4,5,6];

// let storefunc=array2.map((current)=>{
 
//     if(current % 2==0)
//     {
//         return current*current;
//     }

// }).filter((current)=> current !== undefined);

// console.log(storefunc);

// ! ^^^^^^^^^^^^^^^^^^^^^^fourth method^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let array2=[1,2,3,4,5,6];

let storefunc= array2
.map((current)=> current % 2 ==0 ? current* current : undefined)
.filter((current)=> current !== undefined );

console.log(storefunc);
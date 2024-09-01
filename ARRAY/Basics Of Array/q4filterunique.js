


//filter uniques values


// const numbers=[1,2,3,"rishabh",4,5,6,7,6,8,9,10,4,8];

// storefunc=numbers.filter((current,index,arr)=>{

//  return !isNaN(current);
    

// });
// console.log(storefunc);

// --------------------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, "rishabh", 4, 5, 6, 7, 6, 8, 9, 10, 4, 8];

// const storefunc = numbers.filter((current) => {
     // return typeof current === 'number' && !isNaN(current); // !isNan(6) means 6 is a number so it return the true value

//     return typeof current===`number`; // it also give the same output
// });

// console.log(storefunc);



// --------------------------------------------------------------------------------------------------------

// let number=[1,2,3,4,6,5,6,7,8,];

// number.filter((current,index,arr)=>{

//     console.log(current); //gives the array data

//     console.log(arr[index]);  //gives the array data
// });

    //!!  this is output

 //    1
   //  1
   //  2
   //  2
   //  3
   //  3
   //  4
   //  4
   //  6
   //  6
   //  5
   //  5           
   //  6
   //  6
   //  7
   //  7
   //  8
   //  8
// ---------------------------------------------------------------------------------------------------

//we want index

let numbers=[1,2,3,4,6,5,6,7,8];

// numbers.filter((current,index,arr)=>{

    // console.log(arr.indexOf(current)); 
    // console.log(numbers.indexOf(current));         //!! Both give the same output as Index 0 1 2 3 4(6) 5 4(6) 7 8

storefunc=numbers.filter((current,index,arr)=>{

    console.log(index); //actual index number

    console.log(arr.indexOf(current)); // current elements index numbers matlab agar element repeat hoga to index whi rhega jis index number pe wo  pehle aaya thha ..

    return arr.indexOf(current)===index;  //current index se actual index match kr rhaa to array ke elements print hojayaenge
});

console.log(storefunc);

// this is the output with other output with console [
//     1, 2, 3, 4,
//     6, 5, 7, 8
//   ]
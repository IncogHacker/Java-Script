

// const number=[1,2,3,4,5,6,7,8,9,0];

// number.set((current,index,arr)=>{

    // console.log([new Set(number)]);  //prints the total numbers of elements in the array...

    // console.log([...new Set(number)]); //mainly it spread the elemnts in array

// });


// !example 2nd of spread method 

const numbers=[1,2,3,4,5,6,7,8,0];
  const numbers2=[...numbers,4,3,4,5];   ///so it add the different array


  console.log(numbers2); // give output after mixing the array

//   [
//     1, 2, 3, 4, 5, 6,
//     7, 8, 0, 4, 3, 4,
//     5
//   ]  ---output
 
console.log([new Set(numbers2)]);// here array is not mixed

// [ Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 0 } ] -- output
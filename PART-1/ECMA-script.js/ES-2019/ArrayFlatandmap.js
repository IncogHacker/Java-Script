//*  Array.flat & Array.flatMap
//* ================================
//? flat() is a new array instance method that can create a one-dimensional array from a multidimensional array. (nested arrays into a single, flat array.) 

const nestedArray=[1,2,[3,4],5];//two arrays

console.log(nestedArray); //multidimension array or nested array
console.log(nestedArray.flat()); //flat convert it into single dimension array


const array2=[1,2,[3,[4,5],6]]
console.log(array2.flat(2));//remove two nested array we can give value


//? flatMap() is a new Array instance method that combines flat() with map(). It’s useful when calling a function that returns an array in the map() callback, but you want your resulted array to be flat:

const arr=["My Name","is","Rishabh","Singh"]

console.log(...arr);

const newArr=arr.flatMap((curr,index,arr)=>{

    return curr.split(" ");//giving individual data 

})
console.log(newArr);

// const newArr=arr.map((curr)=>{

//     return curr.split(" ");
// })

// console.log(newArr);// output is [ [ 'My', 'Name' ], [ 'is' ], [ 'Rishabh' ], [ 'Singh' ] ]


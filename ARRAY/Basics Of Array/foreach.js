
//! 1: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.(in this method fucntion call each element at a time)

// let fruits=['apple','orange', 'guava','pomogranate'];

// fruits.forEach((currentelem,index,arr)=>{

//      console.log(`${currentelem } ${index}`);

//     console.log(arr);
// });



// let fruits=['apple','orange','pineapple'];

// const callingfunc =fruits.forEach((currentelem,index,arr)=>{

//     return '${currentelem} ${index}'; //it cannot return so gives undefined

// });

// console.log(callingfunc); //Gives output as undefined







// ? 2:  function(map)
//* map() creates a new array from calling a function for every array element. map() does not change the original array.

// let fruit=['apple','orange','guava','pineapple'];

// fruit.map((currentelem,index,arr)=>{

//     console.log(`${currentelem} ${index} ${arr}`);
// });


let fruits=['apple','guava','pineapple','lemon'];

calfunc=fruits.map((current,index,arr)=>{
  
    return `My favourit fruit is ${current} ${index}`;

});

console.log(calfunc); //it return the value and also modify the array
// console.log(fruits);
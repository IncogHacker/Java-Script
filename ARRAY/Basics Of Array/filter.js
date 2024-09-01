

//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.

let  admin=[1,2,3,4,8,10,23,5,6];

// storefunc=admin.filter((current,index,arr)=>{

//    return current>4;


// });

// console.log(storefunc); // [ 8, 10, 23, 5, 6 ] it returns all the number which is greater then 4 


storefumc=admin.find((current,index,arr)=>{

       return current>4;
 
});


console.log(storefumc);   /// here when  it callback the array it started checking and when first element found which is greater then 4 it print that element only  output is -8
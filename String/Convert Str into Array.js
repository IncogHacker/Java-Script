

// const str="Full Stack Developer";

// const store2= str.split(``);

// console.log(store2);  // convert string into array 

//! [
//     'F', 'u', 'l', 'l', ' ',
//     'S', 't', 'a', 'c', 'k',
//     ' ', 'D', 'e', 'v', 'e',
//     'l', 'o', 'p', 'e', 'r' 
//   ]


// ----------------- This method also convert str into Array-----------------------------------


// let strArr="Full Stack Developer";
     
//    let store= Array.from(strArr);

//    console.log(store);


// !   [
//     'F', 'u', 'l', 'l', ' ',
//     'S', 't', 'a', 'c', 'k',
//     ' ', 'D', 'e', 'v', 'e',
//     'l', 'o', 'p', 'e', 'r' 
//   ]



// -------------------------------------------------------------------------------------------


let names="Rishabh Singh";

let store3= Array.from(names);

let mapstore= store3.map((current,index,arr)=>
{
   return `${current} - ${index}`;
   
});

console.log(mapstore);

//output   [
//     'R - 0',  'i - 1', 
//     's - 2',  'h - 3', 
//     'a - 4',  'b - 5', 
//     'h - 6',  '  - 7', 
//     'S - 8',  'i - 9', 
//     'n - 10', 'g - 11',
//     'h - 12'
//   ]



// ----------------------------------------------------------------------------------------



let names2="Riya singh";

let block=Array.from(names2);

let storefunc= block.map((current,index,arr)=>{

    if(current==`s`)
    {
        return index;
    }


});

let fil= storefunc.filter((current)=>{
  
    return current !== undefined;  //filter the undefined values...
    
});
console.log(fil);
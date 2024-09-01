// let names2="Riya singh";

// let block=Array.from(names2);

// let storefunc= block.map((current,index,arr)=>{

//     if(current==`s`)
//     {
//         return index;
//     }

//     // [
//     //     undefined, undefined,
//     //     undefined, undefined,
//     //     undefined, 5,        
//     //     undefined, undefined,
//     //     undefined, undefined 
//     //   ]

// });

// let fil= storefunc.filter((current)=>{
  
//     return current !== undefined;  //filter the undefined values and give ..[ 5 ]
    
// });
// console.log(fil);



// ---------------------------------------------------------------------------------------------------

// In other Way 


let name3= `Rishabh Singh`;
 
let nameStore= Array.from(name3);

let funcstore=nameStore.map((current,index)=> current ==`h` ? index : undefined).filter((current)=> current!==undefined);

console.log(funcstore);
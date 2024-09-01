
// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.

//! Ex. le'ts say user wants to delete value 6.

let value=6;
const number=[1,2,3,4,6,5,6,7,8,9];

storefunc=number.filter((current,index,arr)=>{
         
    return current!=6;//jo agar six se match nhi huien un element ko return kr doo
    });

  
    console.log(storefunc);
   
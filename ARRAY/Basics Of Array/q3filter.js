


const product=[{name:"laptop", price:1200},
    {name:"Phone", price:800},
    {name:"tablet",price:1000},
    {name:"Smartwatch",price:150},
];

// storefunc=product.filter((current,index,arr)=>
// {
//     return current.price<=500;
// });

// console.log(storefunc);




/// ? we only want price 

storefunc=product.filter((current)=>{
 
    // console.log(current.price); //! give output of all price

    console.log(current.price<=500); ///! it passes true and false



});




// Reverse a string


const rString = (name) =>{

    for(let i=name.length-1;  i>=0; i--)
    {
    
         let store= name[i]; 

         console.log(store);
        
    }
     
   
}

rString("RishabhSingh");




// -------------------------------------------------------------------------------------------


const secondreverse=(name)=>
{   
      let store=" ";
    for(let i=name.length-1; i>=0; i--)
    {
           store= store + name[i];
    }
        
    console.log(store);
}

secondreverse(`Rishabh Singh`);




// Palindrome 


// let palindrome = (name) =>
// {
//     let store="";

//      for(let i=name.length-1; i>=0; i--)
//      {
//         store= store + name[i];
//      }
          
//      console.log(store);

//      console.log(name);

//      if(store===name)
//      {
//         console.log(true);
//      }
//      else
//      console.log(false);
     

// }

// palindrome("Rishabh");


// --------------------------------------------


let palindrome =(name)=>


{

    let store="";
     for(let i=name.length-1; i>=0 ; i--)
     {
            store= store+ name[i];
     }

       return  name===store ? true:false; 

    }

console.log(palindrome("Rishabh"));

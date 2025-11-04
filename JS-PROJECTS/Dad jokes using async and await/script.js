
//when using only async and await we cannot give try and catch error
let Storejoke=document.querySelector(".Jokes");
 const ApiUrl="https://icanhazdadjoke.com/";


 //! first way using traditional method
async function callfunc() //first make the fucntion asynchronous
{
    const response= await fetch(ApiUrl,{
        headers: 
        {
            Accept : "application/json"
        }
    })
    console.log(response);

    const store= await response.json();
    console.log(store);
    console.log(store.joke)
    Storejoke.innerHTML=store.joke
    Storejoke.style.color="white"

}


// -------------------------------------------------------------------
// !second way using fatarrow function 

// let callfunc=async () =>{

//     const fetchdata= await fetch(ApiUrl,{  //await return promise

    
//         headers:{
//             Accept:"application/json"
//         }
//  });
//         const store=await fetchdata.json();
//         console.log(store);
 
        
// }

document.querySelector(".button").addEventListener("click",callfunc)


let Storejoke=document.querySelector(".Jokes");

let callfunc=(()=>{

    console.log("Working")
    const ApiUrl="https://icanhazdadjoke.com/";

  
    const fetchdata=fetch(ApiUrl,
        {
            headers: {
            Accept: 'application/json' // tells i want json format data
        },
    })

    .then((response)=>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data);
        console.log(data.joke)//gives only joke not others things

        Storejoke.innerHTML=data.joke;
        Storejoke.style.color="white"
      
    })
    .catch((error)=>{
        console.log(error);
    })



});

callfunc(); // whenever we reload the fucntion called automatically


document.querySelector(".button").addEventListener("click",callfunc)
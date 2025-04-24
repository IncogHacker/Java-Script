
let funcall=(givendate)=>{


    console.log(givendate);

     givendate.setDate(24);

    return givendate;
    
    }



const givendate= new Date("2024-02-10");

const calling= funcall(givendate);

console.log(calling.toString());


// --------------------------------------



let callfunc=(x,extradate)=>{


    console.log(x);
    console.log(x.setDate(x.getDate() + extradate));
    console.log(new Date(1746101501429));
  
}


const x= new Date();


const callings= callfunc(x,7);
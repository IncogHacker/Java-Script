
// Asynchronous Function 

// Here program not exceute line by line or we can say not any code of line wait for another to be completed



const func2 = () => {

    setTimeout(()=>{

      console.log("It Prints after the Function end Appear and End of running code");

    },2000);


};



const func1 = () => { 

    console.log("Function one Starts Here");

    func2();

    console.log("function ends Here");

    
}


func1();


// Synchronous -- In this operation the program run line by line and each code wait for previous one to finish

const func2=()=>{

    console.log("Now this is called by function 2");
}


const func1=()=>{

    console.log("Function One call");
    func2();

    console.log("Fun End After Completion Of func2")

   
}


func1();

// -----------------------------------------------------------------------





// Various Types Of Scope

  var globalvariable="I am A Global Scope which can Accesible anywhere in the code";
  //console.log(x);


function call(){


    //Function Scope or We can say it is local variable..
    let functionvariable="I am A Function Scope That Only Accessible in Function";
    // console.log(y);

    if(true)
    {
        //Block scope or This is Also local variable
        let blockvariable="I am block code that only Accesible in close brackets";

        // console.log(globalvariable);      // Global Scope variable  accessible 
        // console.log(functionvariable);    // Inside function it is accessible  Function scope
        // console.log(blockvariable);      // block Variable....

        }
      
    }


    console.log(blockvariable);// Gives Error Undefined or not defined coz of block variable
    console.log(functionvariable);// Gives Error coz variable defined inside function


call();

// console.log(y);//Not print Give Undefined

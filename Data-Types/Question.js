
// To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

var _value ="";

if(_value)
{
    console.log("This is truthy value");
}
else
{
console.log("This is falsy value");
}


// To check if a number is truthy or falsy in JavaScript, we can directly use if statement.

var _Number = 0;

if(_Number)
{
    console.log("This is truthy number");
}
else{console.log("This is falsy value")}


// To check if a null is truthy or falsy in JavaScript, we can directly use if statement.

var _value=null;

if(_value)
{
 console.log("This is true value");
}
else{
    console.log("This null is falsy value");

}


// To check if a undefined is truthy or falsy in JavaScript, we can directly use if statement.

var _value;
if(_value)
{
    console.log("This is true value");
}
else{
    console.log("Undefined is false value")
}



// To check Given input is Number or NOt

console.log(isNaN("Vinod")); //it give out put true coz isNot a Number vinod

console.log(isNaN("4567")); //it gives ouput that fals coz input is the number 



// //! NaN === NaN, Why is it false ❓


if(5==5) //this condition is true so it will print 5 
{
    console.log("Both are equal"); 
}
else{
    console.log("Both are Not equal")
}

// -------------------------------------------------------------------------

if(NaN == NaN)
{
    console.log("Both are equal------");
}
else{
    console.log("Both are no equal-----");
}


// ----------------------------------------------------------------

if("Vinod" == "Vinod")
{
    console.log("Both are Equal*****************");

}
else{
    console.log("Both are not equal+++++++++++++++++++++");
}
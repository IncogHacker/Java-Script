

// Anonymous Function Expression: The function does not have a name and is assigned to a variable.


let result=function(a,b) // this function has no name but assigned to a variable
{
     x=a+b;
    return x;
}
let x; //here also hoisiting is take place to move only declaration variable onm the top

result(5,5); // Output: "This is an anonymous function."
console.log(x);


let call=(x,y)=>{

    return x+y;
   
}

let a=7,b=8;

let add=()=>{ 

     ///Function add(){...};
 call(a,b);
    console.log(call(a,b));
  

   
add();//When add() is called, the code inside the add function is executed.
//This includes calling call(a, b) and logging its result to the console.
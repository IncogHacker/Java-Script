// !Example Two with callbackfunction



let highorderfunc=(name,callback)=>{

    // console.log(`${name}`);

    callback(name);//this is call back func coz it callfunction inside a fucntion


}

let callback=(name)=>{

console.log(`${name}`  +  "  singh");

}



highorderfunc("Rishabh",callback)//here is high order function coz it passes as a argument inside a function


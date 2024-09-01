
//! Generate Random number
//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)




console.log(Math.random()); // every time i run give random values 


console.log(Math.random()* 100) // give random value between 0 to 99

// not want deciaml 

console.log(Math.round(Math.random()*100)); //we can use anything here like floor round etc


// if we want after decimal limited so we use toFixed

console.log((Math.random() * 100).toFixed(3));  //91.598 decimal ke baad 3 digit degaa

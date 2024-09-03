

// write a function to count the number of vowels in a string 

// let functionvowel=(str)=>{


// let vowel = `a,e,i,o,u`;
// let count = 0;

// let store = str.split(``).filter((current) => {

//     let ispresent = vowel.includes(current);

//     count += ispresent ? 1 : 0;
         
// });

// return count;

// }

// let count = functionvowel("hey this is rishabh singh and i am here to perform the main level of programming");
// console.log(count);




// __________________________________________________________________________


let callingfunc=(str)=>{

    let isvowel="aeiou";

     let count=0;

for(let item of str)
{
    console.log(item); //loop of string one by one 
    
    if(isvowel.includes(item))
    {
        count ++;
    }

  

}

return count;
}

// let count=  callingfunc("hey my name is rishabh singh class nothing just try to learn a thesis");

// console.log(count);

console.log(callingfunc("hey my name is rishabh singh class nothing just try to learn a thesis"));
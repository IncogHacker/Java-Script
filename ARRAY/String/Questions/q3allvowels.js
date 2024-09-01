
//?  write a function top check if all the vowels presents in a string or not 

// let string="My name is rishabh singh You are best";

// let isvowel="aeiou";

// console.log(string.includes(`a`,`e`,`i`,`o`,`u`)); 

//! not valid to pass multiple arguments in include it will take only (`a`) to give the result

///! here first a found then it will not check further and give output is true 

//! ---------------------------------------------------------------------------------------------------

 


// function checkallvowels(){}

// ! we can also write like this to call a function 



// const checkallvowels =(str)=>{

// const isvowel="aeiou";

// for(let item of isvowel)
// {
       
//     console.log(str.includes(`${item}`));

     //output is  true
     // true
     // true
     // true
     // true
// }
// };

// checkallvowels("My name is rishabh singh You are best");




//! -----------------------------------------------------------------------

// let functioncall= (str) =>

//{
//     let isvowel="aeiou";

//     for(let item of isvowel)
//     {
//         if(!str.includes(item))
//         {
//             return false;
//         }
     
//     }
//    return true;
// };

// console.log(functioncall("my name is rishabh singh and here the full"));



//! -------------------------------------usig lower case and finding vowels--------------------------------------------



let functionvowel = (str)=> {

    let storesmall= str.toLowerCase();
    let isvowel="aeiou";

    for(let item of isvowel)
    {
        if(!storesmall.includes(item))
        {
            return false; 
        }
    }

return true;

};

console.log(functionvowel("hey my Name is rishabh Singh class Roll no what ABoUt you"));
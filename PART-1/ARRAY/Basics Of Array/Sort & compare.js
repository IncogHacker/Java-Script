
// const fruits=[`mango`,`banana`,`guava`,`pomogranate`,`lichi`];

// fruits.sort();
//  console.log(fruits); //aranging elements in array basis of alphabatical order





//  let number=[5,3,2,5,1,9,4];

//  number.sort(); ///print in ascending order

//  console.log(number);

//  [
//     1, 2, 3, 4,
//     5, 5, 9    
//  
 
// ! -------------------------------------------------------------------------------------------------------


//  number.sort((a,b)=> b-a);
//  console.log(number);  // descending order print the numbers in decscending orders (b-a)  for ascending only sort or do (a-b)more info in notes

//  [
//     9, 5, 5, 4,
//     3, 2, 1    
//   ]

// **************************************************************************************************************


// ! Compare method(custom sorting) for decsending order

//? compare callback function
// syntax
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if(a>b) return 1  => switch the order
//  if(b>a) return -1  => keep the order

const number2=[10,9,3,4,2,6,8,7,1,5];

number2.sort((a,b) =>{

    if(a>b)  return 1; // pehle b aajayega fir baad me a
    else if(b>a)  return -1; 
    });


console.log(number2);  ///ascending order


number2.sort((a,b)=>{

    if(a>b) return -1;  // isme a jahan hai whin rhegaaa
    if(b>a) return 1 ;
});


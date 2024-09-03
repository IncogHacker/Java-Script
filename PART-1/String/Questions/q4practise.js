


//Pangram

callingfunction = (str)=>{

    let values = str.toLowerCase().split('');

    let store= values.filter((current)=>{
              
     return current.charCodeAt() >= "a".charCodeAt() && current.charCodeAt() <="z".charCodeAt();


    });

    console.log(store);

    // remove duplicate alphabets in string 
        
// let removed= ([... new Set(store)]);

// console.log([... new Set(store)]);

// console.log(removed);

return new Set(store).size === 26; 


};

console.log(callingfunction("hey My name is rishabh singh and i want to be a very big man that everybody can recognize me as soon as possible"))
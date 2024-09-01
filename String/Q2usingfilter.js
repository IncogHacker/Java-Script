


// use filter to filter out character a e i o u

const str=`hey my name is rishabh singh`;

const store= str.split(``).filter((current)=>{
 
    return !['a', 'e', 'i', 'o', 'u'].includes(current);

});

const joined = store.join(``);

console.log(joined);
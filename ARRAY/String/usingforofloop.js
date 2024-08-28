

let string="hey My name is rishabh Singh and Javascript is ready for java script rishabh rishabh";

let store=string.matchAll("rishabh");

// for(let item of store)
// {
//     console.log(item[0]);//output 3 times rishabh coz it comes 3 times

// }

// for(let item of store)
// {
//     console.log(item.index); //out give index of rishabh where it comes
// }


for(let {index} of store)
{
    console.log(index);// we can also print index like this 
}
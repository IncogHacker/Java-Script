
// Calculator

// function calculator(a,b,Addition) {

// let store;
//     switch (Addition) 
//     {
//         case Addition:
//             store = a + b;
    
//             break;

//         case Multiplication:
//             store = a * b;
    
//             break;
    
//         case Divide:
    
//             store = a / b;
    
//             break;
    
//         case Subtraction:
//             store = a - b;
    
//             break;
            
    
//             default:
//                 return "NO operator is selected";
//     }

//     return store;
// }

// let  store =calculator(5,7,"Addition");


// console.log(store);



//! -------------------------------------------------------------------------

let calculator =(a  ,b ,operator) =>
{
   switch('-')
   {
    case '-':
    
    return a+b;

    case '+':

    return a*b;

    default:
        return "no operator"

   }
}
console.log(calculator(5,2,"-"));
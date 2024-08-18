
// Calculator

function calculator(a,b,Addition) {

let store=0;
    switch (Addition) 
    {
        case Addition:
            store = a + b;
    
            break;
        case MUltiplication:
            store = a * b;
    
            break;
    
        case Divide:
    
            store = a / b;
    
            break;
    
        case Subtraction:
            store = a - b;
    
            break;
            
    
            default:"NO operator is selected";
    }

    return store;
}

let  store =calculator(5,7,"Addition");


console.log(store);


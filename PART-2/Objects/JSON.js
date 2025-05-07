

let product={

    CarName:"Grand Vitara",
    CarPrice:"2.5lakh",
    CarLoan:"1.5lakh"
};

console.log(typeof product);

console.log(product);

let string= JSON.stringify(product);//here key also in double quotes

console.log(string);

console.log(JSON.parse(string));
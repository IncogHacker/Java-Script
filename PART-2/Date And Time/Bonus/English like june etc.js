


let store= new Date();

let MonthHindi= store.toLocaleString(`hi-in`,{month:`long`})
let MonthEng= store.toLocaleString(`en-us`,{month:`long`})

console.log(MonthEng)
console.log(MonthHindi)
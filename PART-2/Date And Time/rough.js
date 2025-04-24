


let getDaysDifference=(date1,date2)=>{

const diff= Math.abs(date1 - date2); // gives 950400000 milli second gap
 let oneday= 24*60*60*1000;

 return  Math.round(diff/oneday);




return diff;

}




const date1 = new Date("2024-02-19");
const date2 = new Date("2024-03-01");
console.log(getDaysDifference(date1, date2)); // Output: 11 (difference in days)











//* ==================================================
//* JavaScript Set Date Methods / Setting Components:
//* ===================================================

//? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.

const setYear= new Date();

console.log(setYear);

setYear.setFullYear(2025);

console.log(setYear); // After Customization the Date is ....

//? setMonth(monthValue[, dayValue]): Sets the month for a specified date according to local time.


const setMOnth= new Date();

console.log(setMOnth);

setMOnth.setMonth(2); //Month Start With 0

console.log(setMOnth); // Customized Month


//? setDate(dayValue): Sets the day of the month for a specified date according to local time.

let setDate= new Date();

console.log(setDate);

setDate.setDate(24);

console.log(setDate); // Customized Date



//* ==================================================
//* JavaScript Set Time Methods / Getting Components:
//* ===================================================


//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]): Sets the hours for a specified date according to local time.


let setHourstore= new Date();

console.log(`\n${setHourstore}`)

setHourstore.setHours(4);

console.log(`\n ${setHourstore}`);




//? setMinutes(minuteValue[, secondValue[, millisecondValue]]): Sets the minutes for a specified date according to local time.

//? setSeconds(secondValue[, millisecondValue]): Sets the seconds for a specified date according to local time.


//? setMilliseconds(millisecondValue): Sets the milliseconds for a specified date according to local time.

//? setTime(timeValue): Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

//! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.



let repeatedFunction=()=>{


    console.log("This function repeats every 1000 milliseconds (1 second)");
}

repeatedFunction();

const x= setInterval(repeatedFunction,1000);


setTimeout(()=>{

   clearInterval(x);

   console.log("-------------Interval is Over----------")
},5000);
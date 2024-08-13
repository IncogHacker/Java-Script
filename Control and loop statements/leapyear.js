

// using while loop
// var year=2007;

// if((year%4==0 && year%100!=0) || (year%400==0))
// {
//   console.log("It is leap year");
// }
// else{

//     console.log("It is not leap year");
// }


// -----------------------------------------------------------

const Y=1700;

let isleap= false;

let i=0;

while(i === 0)
{
    if(Y  % 4 === 0)
    {
        if(Y  % 400 === 0 || Y % 100 !==0 )
        {
           isleap = true;
           
        }
        i=1;
    }
    else {
       isleap=false;
       i=1;
    }
}
console.log(isleap);





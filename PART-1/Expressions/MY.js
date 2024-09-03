

// ! Assignment Operator

var _value = 15;
var _newstore = _value;
console.log(_newstore);


//!Arithmatic Operator

// Addition
let a=10, b=20;
let sum= a+b;
console.log("addition result  " +sum);

//subtraction
var x=14;
var y=25;
var _Sums= y-x;
console.log("Subtraction result " +_Sums);


//multiplication
var m=5;
var c=6;
var mul=5*6;
console.log("multiplication result " +mul);

//Division
 let d=20, f=5;
 var div= d/f;
 console.log("division result " +div);

 //modulus
 let l=15, j=2;
 var remain= l%j;
 console.log("remainder is " + remain);


 //! using toFixed (for decimal numbers)
 
//  var _x=0.1 , _y=0.2;
//  var results=0.1+0.2;
// console.log("decimal result without fixed " +results);  //output is 0.30000000000000004   

var _x=0.1 , _y=0.2;
var results=0.1+0.2;
console.log("decimal result " +results.toFixed(2)); //only give out till two digit after fixing the output

//! Comparison Operator (Only return True ot False value )

var _yourage=20;
let _myage = 25;

if(_yourage == _myage)
{
console.log("This is your age");

    } else{

        console.log("Your age is not matching");

    }


    // Strict equal to  use ( 3 equal to )
     
    console.log( "this is without triple equal to GIVES --- "+ (5 == "5") ); //gives true value here it only check nubmer not the Data-type(that is string) so...therefor we use strict equal to. To check data type with numbers.

    console.log("This is with triple equal to GIVES---"+ (5==="5")); //Gives output False ..most of the time use triple equal to..to check data-type with intgers

    // let u= 1;
    // y= "1";

    // if( u === "y")
    // {
    //     console.log("This is Equal");
    // }
    // else                                       //Gives Out Put is This is Not equal..
    // console.log("This is Not Equal");


   

    if( 1 == "1")
    {
        console.log("This is Equal");
    }
    else{                                       //Gives Out Put is This is Equal..
    console.log("This is Not Equal");
    }






    // Not Equal
     console.log("Using not.equalto Gives---"+(5 !=  5)); //Gives output is False coz both are equal 

    //Greater Then and Less Then etc equal to also involve ..
    console.log("Usig Gretaer then gives ----" +( 5 > 8)); //Gives the output is False .
    console.log("using Less Then Gives ----"+(5 < 10)); //Gives output is true
    console.log( 5 < "fnsfnfndsnklnss"); //Gives false coz here string is NaN so it will assume as 0 so give false .
    console.log( 5 < "5"); //here same string is not a number so it will 0 and give answer in false  


    


    
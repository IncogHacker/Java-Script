
// Temperature

// let _temp=26;

// if(_temp>35)
// {
//     console.log("Its A Summer Day--");
// }
// else if(_temp >25 && _temp < 30 )
// {
//     console.log("Its a Winter Day--");
// }
// else if(_temp=25)
//     console.log("Normal Day");



//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions


// let $iscitizenship= true;
// let $isRTV= false;
// let $_person=18;

// if($_person >= 18) {  //!Start of the outermost if statement
//     if($isRTV) {  // !Start of the second if statement
//         if($iscitizenship)
//              {  //! Start of the third if statement
//             console.log("Eligible for Voting All things Have");
//         }  // !End of the third if statement

//         else {
//             console.log("don't have citizenship");
//         }
//     }  //! End of the second if statement
//     else {
//         console.log("You Don't have RTV");
//     }
// }  //! End of the outermost if statement
// else {
//     console.log("Not Eligible for Voting");
// }


let _person=18;
let iscitizenship=true;
let isRtv = false;


if(_person>=18)
{
    if(iscitizenship)
    {
        if(isRtv)
        {
            console.log("Every thing is up to date Eligible for voting");
        }
        else{
            console.log("You are not eligible coz of Rtv")
        }
    }
    else{
        console.log("You are not eligible coz dont have citizen-ship");
    } 
    }
    else{
             console.log("You are not eligible coz you are younger");
    




 
     

      
    

   








// write A program to check number is odd or not 
  
// let 
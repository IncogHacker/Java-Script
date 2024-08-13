

var a=5;
var b=10;

var areaOfShapes = "Square";

switch(areaOfShapes)
{
  case "rectangle":
   
   var store= a*b;
   console.log("Area of Rectangle--"+store);

  break;

  case "circle":

  var r=a;
  var circle= 3.142*Math.sqrt(r);
  console.log("Area of Circle--"+ circle);

  break;

  case "Square":

  var square= a*a;
  console.log("Area of Square--" +square);

  break;

  default:
    console.log("NO Shape Matched");

}


// ____________________________________________________________________________________


// var day="wednesday";

// switch(day)
// {
//   case "monday":

//   console.log("Today is office day");

//   break;

//   case "Tuesday":

//   console.log("Today is Workout Day");

//   break;

//   case "wednesday":

//   console.log("Today is Film day");

//   break;

//   case "sunday":

//   console.log("Toda is Holiday");

//   break;

//   default:
//     console.log("No-Condition Match");
// }




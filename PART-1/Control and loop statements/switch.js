

var a=5;
var b=10;

var areaOfShapes = "circle";

switch(areaOfShapes)
{
  case "rectangle":
   
   var store= a*b;
   console.log("Area of Rectangle--"+store);

  break;

  case "circle":

  var r=a;
  var circle= Math.PI*Math.pow(r,2);
    
  var store = Math.round(circle);
  console.log("Area of Circle--"+ store);

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




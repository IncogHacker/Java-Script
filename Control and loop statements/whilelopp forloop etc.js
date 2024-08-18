
// While Loop: A while loop in JavaScript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminates when the condition becomes false.

// var i=1;

// while(i<=10)
// {
//     console.log(i);
//     i++;
// }


// Do...While Loop: A do...while loop in JavaScript is similar to a while loop, but it guarantees that the loop body will be executed at least once before checking the loop condition. The loop continues to execute while the specified condition is true, and it terminates when the condition becomes false.

// var i=1;
// do{

//     console.log(i);
//     i++;

// }while(i<=10);




// for loop

// for(var i=1 ; i<=10; i++)
// {
//     console.log(i);
// }



// _________________________________________________________________________

// for table 

// var _table = 5;
// var i = 1;
// while (i <= 10) {
//     var store = i * _table;

//     // console.log(_table + " * " + i + " = " + store);

//     // we can also write like this 

//     // console.log(`${_table} * ${i} = ${store}`);

//     console.log(`5 * ${i} = ${store}`);

  

//     i++;

// }

// ----------------------------------------------------------------------

// ! Generating a table using for loop

var num=5;

for(let i=0; i<=10; i++)
{
    let store=num*i;
    console.log(`${num} *${i} = ${store}`);
}
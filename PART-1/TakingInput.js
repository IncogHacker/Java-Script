


// NOTE____
// if we go on website and open inspect then console there paste the code and run it also when you want to clear the console use (clear())..



//!!! Using prompt (for Browser Environments)

// let userinput;
// let positivenumber;
// do{
// userinput=prompt("Enter any Positive Number");
// positivenumber=parseInt(userinput);
// }
// while((positivenumber!=2) || positivenumber<0);
//  means jab positivenumber 2 hoga to loop stop hojayega agar 2 ke alawaa koi number diyein to wo run kregaa...
// console.log(`You Enter a Valid Positive Number ${positivenumber}`);


let input;
 input=prompt("Enter the input"+input); //way of taking input in browsing environment




//!  Using prompt (for Browser Environments)

// The prompt function displays a dialog box that prompts the user to input some text.

// Example:

// javascript
// Copy code

//  Prompt the user for their name

// var name = prompt("Enter your name:");
// console.log("Hello, " + name + "!");






//!!  2. Using HTML Forms (for Web Applications)

// You can create an HTML form to take user input and use JavaScript to process it.

// Example HTML:

// html
// Copy code
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Input Example</title>
// </head>
// <body>
//     <form id="myForm">
//         <label for="userInput">Enter something:</label>
//         <input type="text" id="userInput">
//         <button type="button" onclick="processInput()">Submit</button>
//     </form>

//     <script>
//         function processInput() {
//             var input = document.getElementById("userInput").value;
//             console.log("User entered: " + input);
//         }
//     </script>
// </body>
// </html>



// !! 3. Using readline Module (for Node.js)

// If you're working in a Node.js environment, you can use the readline module to read input from the command line.

// Example:

// javascript
// Copy code
// const readline = require('readline');

// // Create an interface for input and output
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Prompt the user for input
// rl.question('Enter your name: ', (name) => {
//     console.log('Hello, ' + name + '!');
//     rl.close(); // Close the readline interface
// });
// Summary:
// Browser environments: Use prompt for simple input dialogs, or HTML forms with JavaScript for more complex interactions.
// Node.js environments: Use the readline module to handle command-line input.
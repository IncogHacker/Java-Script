
// Regular expression use in code 

const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emails = [`rishabhsinghsos123@gmail.com`, `riya123@.com`, "invalid@domain",
    "another.invalid@domain.",
    "correct@example.co"];

    emails.forEach((current)=>{

           console.log(`${current} : ${emailpattern.test(emails)}`)

    });




// ?   Part	Meaning
//   ^	--------  Start of string
//   [^\s@]+---  One or more characters that are not whitespace (\s) or @
//   @	Literal-- @ symbol
//   [^\s@]+---- One or more characters that are not whitespace or @ (for domain name)
//   \.--------- A literal dot . (escaped with \ because . is a special regex symbol)
//   [^\s@]+---- One or more characters (for domain suffix like .com)
//   $---------- End of string


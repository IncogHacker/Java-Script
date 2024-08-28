
// Regular expression use in code 

const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emails = [`rishabhsinghsos123@gmail.com`, `riya123@.com`, "invalid@domain",
    "another.invalid@domain.",
    "correct@example.co"];

    emails.forEach((current)=>{

           console.log(`${current} : ${emailpattern.test(emails)}`)

    });
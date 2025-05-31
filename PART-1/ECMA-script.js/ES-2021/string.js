

//* ==========================================
//*  String.prototype.replaceAll()
//* =========================================
//? replaceAll in JavaScript is a function that replaces all occurrences of a specified value with another value in a given string.

const Oldstring="Rishabh Singh";
const Newstring= Oldstring.replaceAll("Singh","Rajput");///in place of Singh needs Rajput

console.log(Newstring);


//Replace Multiple Spaces With Single Space in between Words

const text="Hi    my Name is     Rishab Singh";

const aftercorrectSpace= text.replaceAll(/\s+/g," ");//remove all space between words

console.log(aftercorrectSpace);
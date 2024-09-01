
//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)



let names="hello my name is rihsah singh and i am a developer";

 let store= names.substring(0,5);

 let store1= names.substring(10);

 console.log(store);// output is hello
 console.log(store1); // output is ame is rihsah singh and i am a developer


 //* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

 let names2="hello my names is rishabh names singh";

 let store2= names2.slice(-7);//h singh



 let store3=names.substring(-7); //hello my name is rihsah singh and i am a developer (0 index maan lega)

 console.log(store2);
 console.log(store3);

 console.log(`0` +names2.substring(0));
 console.log(`1` + names2.substring(1));

 console.log(`2` +names2.replaceAll(`names`,`naming`));

 console.log(`3` +names2.replace(`h`,` `));// only replace first h letter with space
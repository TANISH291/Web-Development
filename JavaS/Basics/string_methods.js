// str.trim() trims white spaces from both ends string & return a new one 

let msg="   Tanish Hangloo  ";
console.log(msg.trim());
console.log(msg);

//toUpperCase() and toLowerCase()
console.log(msg.toLowerCase());
console.log(msg.toLocaleUpperCase());

//string method with arguements
console.log(msg.indexOf("a"));
console.log(msg.indexOf("han"));
console.log(msg.indexOf("Han"));
console.log(msg.indexOf("an"));

//string method with index
console.log(msg.charAt(4));
console.log(msg.charAt(12));

//method chaining 
let new_msg=msg.trim().toUpperCase();
console.log(new_msg);

//slicing
console.log(new_msg.slice(0,5));
console.log(new_msg.slice(5));

//str.slice(-num)= str.slice(str.length-num)
console.log(new_msg.slice(-3));

//replace (always first occourance will get replaced)
let str="IloveCoding "
console.log(str.replace("love","do"))

//repeat
console.log(str.repeat(3))


let a=12;

console.log(`my age is ${a}`)


//string is immutable

//String 
let name='tanish'
let age='21'
let st=`tanish hangloo 
is the bets guy in this world ${age}` //multi lines string we can use by using ``
let height=186
console.log(st);

console.log(name+age+"and"+height);

console.log(`hello my name is ${name} ,my age is ${age} and my height is ${height}`)

const gameName=new String("tanish")
console.log(gameName);

//accessing string char
console.log(name[1]);
//console.log(gameName.__proto__.) -> lsit of methods 



//String Methods 

// str.trim() trims white spaces from both ends string & return a new one 

let msg="   Tanish-Hangloo-is-a-good-boy  ";
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

//split
console.log(msg.split('-'));




let a=12;

console.log(`my age is ${a}`)


//string is immutable

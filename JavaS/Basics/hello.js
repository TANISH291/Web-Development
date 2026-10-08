//this is comment
console.log("Hello World")
console.log("Tanish")
console.log(822);


//variables 
const accId=1718
let accEmail="tanishhang@gmail.com"
var accPass="12345"
accountCity="Mumbai"
let accState; //undefined value
//accId=2 TypeError: Assignment to constant variable

console.log(accId);

accEmail="dhshd@gmail.com"
accPass="98765"
accountCity="Pune"

console.table([accId,accEmail,accPass,accountCity,accState])
/*let is block-scoped, so it is safer and avoids accidental variable access outside its block.
var is function-scoped and can cause bugs due to hoisting and unintended redeclarations.*/

//Datatypes Primitive
let age = 25; //number
let price = 99.99;//decimal or float
let name = "John" //string
let isStudent = true //boolean
let data = null //null 
let bigNumber = 1234567890123456789012345670n; //big int
let ud; //undefined
let symbol=symbol()//symbol-> to make a value unique by wrapping

//non primitive (refrence)
//objects,arrays,Functions
const heros=["tanish","hangloo","king"]
let my_obj={
    name:"tanish",
    age:"21",
    height:186
}
const myFun=function(){
    console.log("Hello wORLD");
    
}

//finding type of variable 
console.log(typeof 'tanish')
console.log(typeof 42434343);
console.log(typeof true);
console.log(typeof ud);
console.log(typeof null); // gives us object

//type conversion to string 
let numm = 100;
let strr = String(numm);

console.log(strr);          // "100"
console.log(typeof str);   // string

let num = 123;
let str = num.toString();

console.log(str);          // "123"

console.log(String(true));   // "true"
console.log(String(false));  // "false"

let arr = [1, 2, 3];
console.log(String(arr));    // "1,2,3"


//type conversion to number
console.log(Number("100"));     // 100
console.log(Number("10.5"));    // 10.5
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number("abc"));  //NaN


//code for adding two numbers 
let a=12; 
let b=15;
console.log(a+b);
console.log("The price is "+(a+b)+" of 30 pens");


console.log(`The price is ${a+b} of 30 pens`);

//ArithMetic Operators 
console.log((a+b));
console.log((a-b));
console.log((a*b));
console.log((a/b));
console.log((a**b));

//Unary Operator
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//asignment operator 
//console.log(a=b);

//comparison operator
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a<b);
console.log(a!=b);
console.log(a==b);
console.log(0>-1);
let c=1112;
let d="1112"
console.log(c==d); // == it will not see the type and return true 

console.log(c===d); // === it will see the type and return false 


//comparison of non-numer value it compares unicode values
console.log('a'>'B');
console.log('a'=='A');
console.log('a'<'b');

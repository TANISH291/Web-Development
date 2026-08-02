//The spread operator (...) is used to expand (spread) elements of: Arrays Objects Strings

let arr=[1,2,3,4,5,6,7,8,9];
console.log(...arr);
console.log(Math.max(arr)); //gives not a number 
console.log(Math.max(...arr));
console.log(Math.min(...arr));

let str="tanish hangloo";
console.log(...str);

//with array  literal 
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);  // Creates a shallow copy

let str1="tanish hangloo";
let str2=[...str];
console.log(str2);

let odd =[1,3,5,7,9]
let even =[0,2,4,6,8]
let odd_even=[...odd,...even]
console.log(odd_even)


//with object literals 
let user = {name: "A", age: 20};
let copy = {...user};
console.log(copy); //Copy Object

let obj1 = {a: 1};
let obj2 = {b: 2};

let merged = {...obj1, ...obj2}; //Merge Objects
console.log(merged);


let obj = {a: 1, b: 2};
let updated = {...obj, b: 10}; //Overriding Values
console.log(updated);


//with functions
function sum(a, b, c) {
    return a*b*c;
}
let nums = [9, 2, 3];
console.log(sum(...nums));


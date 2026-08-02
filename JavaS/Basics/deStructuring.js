//Destructuring is a way to extract values from arrays or objects and store them into variables easily.

let arr = [10, 20, 30];
let [a, b, c] = arr;
console.log(a, b, c);

let name=["tony","bruce","steve","peter"];
let [winner,runnerup]=name;
console.log(winner,runnerup);  //"tony" "bruce"

//Skip Values
let brr = [1, 2, 3, 4];

let [x,,y,d] = brr;

console.log(x,y,d);

//Swap Variables
let p = 1;
let q = 2;

[p, q] = [q, p];

console.log(p, q);


//with objects 

let student={
    name:"tanish",
    branch:"EXTC",
    age:21,
    subjects:["AI","Machine Learning","Webdev"],
    username:"tanish1143",
    password:877
}
let {branch:stream,password:pass,city="mumbai",...rest }=student;
console.log(rest);








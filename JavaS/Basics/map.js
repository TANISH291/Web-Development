// map() is an array method used to transform each element of an array and return a new array. It does NOT modify the original array

let num=[1,2,3,4,5];
let new_numDouble=num.map( elm =>{
    return (elm*elm);
});
console.log(new_numDouble);

let res = [1,2,3].map(x => {
    x * 2; // ❌ if no return
});

console.log(res); // then [undefined, undefined, undefined]


//for objects in java map function 
let student=[{
    name:"tanish",
    marks:95
},
{
    name:"simran",
    marks:93
},
{
    name:"tanishaa",
    marks:98
}];
let change_marks_to_Gpa=student.map( elm => {
    return elm.marks/10;
})
console.log(change_marks_to_Gpa);

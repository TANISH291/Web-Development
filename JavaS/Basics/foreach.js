let arr=[1,2,3,4,5,6];

// using normal function
arr.forEach(function print(elem){
    console.log(elem);
});

//using arrow function 
arr.forEach((elm) => {
    console.log(elm);
})


// foreach function for objects in arrays 
let array=[{
    name:"tanish",
    age:21
},
{
    name:"simran",
    age:22
},
{
    name:"tanishaa",
    age:19
}];

array.forEach( elm =>{
    console.log(elm.name);
})
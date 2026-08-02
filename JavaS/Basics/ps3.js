//Q1
arr=[1,2,3,4,5,6,7];
let square=arr.map( elm => elm*elm);
 let sum=square.reduce((acc , elm) => acc+elm,0)
 let avg=sum/arr.length
console.log(square);
console.log(sum);
console.log(avg)

//Q2
let addUp_five=arr.map( elm => elm+5);
console.log(addUp_five);

//Q3
function doubleAndReturnArgs(arr,...args){
    let a =[...arr,...args.map( v => v*2)] ;
    return a ;
}
let b=doubleAndReturnArgs([1,2,3],1,2,3)
console.log(b)

//Q4
let mergeObjects=(obj1,obj2) => {
    return {...obj1,...obj2};
}
obj1={
    name:"tanish",
    branch:"EXTC"
    
}
obj2={
    age:21,
    cgpa:9.45
    
}
let merge=mergeObjects(obj1,obj2);
console.log(merge);


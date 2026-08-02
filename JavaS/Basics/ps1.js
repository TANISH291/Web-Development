// Qs1.Write a JS program to delete all occurrences of element‘num’in a given array.Example:if arr=[1,2,3,4,5,6,2,3]&num=2 Resultshouldbearr=[1,3,4,5,6,3]

let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(num==arr[i]){
        arr.splice(i,1);
    }
    console.log(arr[i])
}

//Qs3.Write a JavaScript program to check whether a string is blank or not.
let s="   ";

if(s.length==0){
    console.log("Empty string")
}
else{
    console.log("Non empty")
}


let brr=[1,2,3,4,5,6];
let elm=6;
for(let i=0;i<arr.length;i++){
    if(brr[i]==elm){
        console.log("exist");
        break;
    }
}
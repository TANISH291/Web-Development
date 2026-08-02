let a=[7,9,0,-2];
console.log(a.slice(0,3));

console.log(a.splice(1));

let s="aaA";
if(s.length==0){
    console.log("Empty");
}
else{
    console.log("Not empty")
}

let n=2;
if(s[n]===s[n].toLowerCase()){
    console.log("Yes its lowercase");
}
else{
    console.log("No its not lowercase")
}

let as=[1,2,3,4,56];
if(128 in as){
    console.log("its not ");
}
else{
    console.log("false");
}

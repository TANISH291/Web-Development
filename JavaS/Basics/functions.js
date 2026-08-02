let odd_even_Factory=function(req){
    if(req=="odd"){
        return function odd(n){
            console.log(!(n%2==0));
        }
    }
    else if(req=="even"){
        return function even(n){
            console.log((n%2==0))
        }
    }
    else{
        console.log("Wrong discription ")
    }
}

let func=odd_even_Factory("odd");
console.log(func(3));



let arrr=[11,12,534,2,16,9];
let max=arrr[0];
let min=arrr[0];

let largest_smallest_Factory=function(req){
     if(req=="largest"){
        return function largest(arr){
            for(let i=0;i<arr.length;i++){
                if(max<arr[i]){
                max=arr[i];
                }
            }
        return max;
        }
    } 
    if(req=="smallest"){
        return function smallest(arr){
            for(let i=0;i<arr.length;i++){
                if(min>arr[i]){
                min=arr[i];
                }
            }
        return min;
        }
    }

}

let number=largest_smallest_Factory("smallest");
console.log(number(arrr));




let str="abcdabcdefgggh";
//function to get string with all unique elements 

function getUinque(str){
    let ans="";
    for(let i=0;i<str.length;i++){
        let curr_char=str[i];
        if(ans.indexOf(curr_char)==-1){
            ans=ans+curr_char;
        }
    }
    return ans;
}
let ans=getUinque(str);
for(let i=0;i<ans.length;i++){
    console.log(ans[i]);
}



let country=["Australia","Germanysssssssssssssssssssss","UnitedStatesofAmerica","Italy","Cuba",];
function longestCountryName(country){
    let max=country[0].length;
    let largest_county="";
    for(let i=0;i<country.length;i++){
        if(max<country[i].length){
            max=country[i].length;
            largest_county+=country[i];
        }
    }
    return largest_county;
}
let a=longestCountryName(country);
console.log(a);


function random_StartToEnd(start,end){
    let diff=end-start;
    let a=Math.floor(Math.random()*diff)+start;
    return a;
}
let b=random_StartToEnd(50,100);
console.log(b);
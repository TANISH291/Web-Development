/*reduce() is used to reduce an array into a single value.
That value can be: number object array string */

let arr = [112, -2, 30, 84];

let max = arr.reduce((max, elm)  => {
    if(elm>max){
        return elm;
    }
    else{
        return max;
    }
});

console.log(max);
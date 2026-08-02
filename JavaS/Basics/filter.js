//filter() is used to select elements from an array based on a condition and return a new array. Only elements that pass the condition are included.

let nums=[1,2,3,4,5,6,7,8,9,10];

let even_nums=nums.filter( elm => (elm%2==0) ) 
console.log(even_nums);
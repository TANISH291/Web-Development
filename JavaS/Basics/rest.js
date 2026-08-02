//The rest operator collects multiple elements and packs them into a single array (or object). Opposite of spread

//Collect Arguments
function print(...numbers) {
    
    console.log(numbers);
}
print(1, 2, 3, 4);

function sum(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); 
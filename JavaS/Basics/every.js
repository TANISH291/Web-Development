/* every() checks whether ALL elements in an array satisfy a condition. Returns:
true → if ALL elements pass
false → if ANY element fails */

let numbers = [0, 232334, 6123122, 121120];

let result = numbers.every(num => num % 2 === 0);

console.log(result);
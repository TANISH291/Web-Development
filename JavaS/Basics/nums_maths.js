const score =400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber=123.8966

console.log(otherNumber.toPrecision(3))// .toPrecision(n) k baad round off krega

const hundreds=1000000
console.log(hundreds.toLocaleString()); //add commas ->ind style

console.log(Number.MAX_VALUE);

//___________________________MATH____________________________

console.log(Math);
console.log(Math.abs(-423));
console.log(Math.round(-423.743));
console.log(Math.ceil(-423.743));
console.log(Math.floor(-43.743));
console.log(Math.sqrt(81));

console.log(Math.random());

console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);



//NUmber 
let a=10;
let b=312.31313;
let c=b.toFixed(3);//to Fixed decimal place
let d=b.toPrecision(3)
let e=b.toString()
console.log(c);
console.log(typeof c);
console.log(d);
console.log(typeof d);
console.log(e);
console.log(typeof e);


let x=new Number(20);
let y =20;
let z=new Number(20);
console.log(x==y)
console.log(x==z)

console.log(Boolean({}));
console.log(Boolean([]));

//NON Primitive -> refrences bases pe compare 
//Primitive -> Copy by value 


//Math 

// ============================================================
// JAVASCRIPT MATH OBJECT — ALL FUNCTIONS & CONSTANTS
// ============================================================


// ============================================================
// 1. MATH CONSTANTS
// ============================================================

console.log("PI:", Math.PI);
console.log("E:", Math.E);
console.log("SQRT2:", Math.SQRT2);
console.log("SQRT1_2:", Math.SQRT1_2);
console.log("LN2:", Math.LN2);
console.log("LN10:", Math.LN10);
console.log("LOG2E:", Math.LOG2E);
console.log("LOG10E:", Math.LOG10E);


// ============================================================
// 2. Math.abs()
// Absolute value
// ============================================================

console.log("\n--- Math.abs() ---");

console.log(Math.abs(-10));       // 10
console.log(Math.abs(10));        // 10
console.log(Math.abs(-25.5));     // 25.5


// ============================================================
// 3. Math.round()
// Rounds to nearest integer
// ============================================================

console.log("\n--- Math.round() ---");

console.log(Math.round(4.4));     // 4
console.log(Math.round(4.5));     // 5
console.log(Math.round(4.9));     // 5
console.log(Math.round(-4.5));    // -4


// ============================================================
// 4. Math.floor()
// Rounds downward
// ============================================================

console.log("\n--- Math.floor() ---");

console.log(Math.floor(4.9));     // 4
console.log(Math.floor(4.1));     // 4
console.log(Math.floor(-4.1));    // -5


// ============================================================
// 5. Math.ceil()
// Rounds upward
// ============================================================

console.log("\n--- Math.ceil() ---");

console.log(Math.ceil(4.1));      // 5
console.log(Math.ceil(4.9));      // 5
console.log(Math.ceil(-4.1));     // -4


// ============================================================
// 6. Math.trunc()
// Removes decimal part
// ============================================================

console.log("\n--- Math.trunc() ---");

console.log(Math.trunc(4.9));     // 4
console.log(Math.trunc(4.1));     // 4
console.log(Math.trunc(-4.9));    // -4


// ============================================================
// 7. Math.sign()
// Returns sign of number
// ============================================================

console.log("\n--- Math.sign() ---");

console.log(Math.sign(10));       // 1
console.log(Math.sign(-10));      // -1
console.log(Math.sign(0));        // 0
console.log(Math.sign(-0));       // -0


// ============================================================
// 8. Math.max()
// Largest number
// ============================================================

console.log("\n--- Math.max() ---");

console.log(Math.max(10, 20, 30));       // 30
console.log(Math.max(5, 100, 25, 50));  // 100


// ============================================================
// 9. Math.min()
// Smallest number
// ============================================================

console.log("\n--- Math.min() ---");

console.log(Math.min(10, 20, 30));       // 10
console.log(Math.min(5, 100, 25, 50));  // 5


// ============================================================
// 10. Math.pow()
// Power
// ============================================================

console.log("\n--- Math.pow() ---");

console.log(Math.pow(2, 3));       // 8
console.log(Math.pow(5, 2));       // 25
console.log(Math.pow(10, 3));      // 1000


// ============================================================
// 11. Math.sqrt()
// Square root
// ============================================================

console.log("\n--- Math.sqrt() ---");

console.log(Math.sqrt(25));        // 5
console.log(Math.sqrt(64));        // 8
console.log(Math.sqrt(100));       // 10


// ============================================================
// 12. Math.cbrt()
// Cube root
// ============================================================

console.log("\n--- Math.cbrt() ---");

console.log(Math.cbrt(8));         // 2
console.log(Math.cbrt(27));        // 3
console.log(Math.cbrt(125));       // 5


// ============================================================
// 13. Math.hypot()
// Square root of sum of squares
// ============================================================

console.log("\n--- Math.hypot() ---");

console.log(Math.hypot(3, 4));     // 5
console.log(Math.hypot(5, 12));    // 13
console.log(Math.hypot(3, 4, 12)); // 13


// ============================================================
// 14. Math.random()
// Random number between 0 and 1
// ============================================================

console.log("\n--- Math.random() ---");

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());


// ============================================================
// 15. Random integer 0 - 9
// ============================================================

console.log("\n--- Random 0-9 ---");

let random0to9 = Math.floor(Math.random() * 10);

console.log(random0to9);


// ============================================================
// 16. Random integer 1 - 10
// ============================================================

console.log("\n--- Random 1-10 ---");

let random1to10 = Math.floor(Math.random() * 10) + 1;

console.log(random1to10);


// ============================================================
// 17. Random integer between MIN and MAX
// ============================================================

console.log("\n--- Random MIN-MAX ---");

let min = 10;
let max = 20;

let randomNumber =
    Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumber);


// ============================================================
// 18. Math.sin()
// ============================================================

console.log("\n--- Math.sin() ---");

console.log(Math.sin(0));              // 0
console.log(Math.sin(Math.PI / 2));   // 1
console.log(Math.sin(Math.PI));       // ~0


// ============================================================
// 19. Math.cos()
// ============================================================

console.log("\n--- Math.cos() ---");

console.log(Math.cos(0));              // 1
console.log(Math.cos(Math.PI / 2));   // ~0
console.log(Math.cos(Math.PI));       // -1


// ============================================================
// 20. Math.tan()
// ============================================================

console.log("\n--- Math.tan() ---");

console.log(Math.tan(0));              // 0
console.log(Math.tan(Math.PI / 4));   // ~1



function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000);
}

console.log(generateOTP());
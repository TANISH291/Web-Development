let firstName='Tanish'
let lastName='Hangloo'
let age =21
let isHappy=true

firstName='Akash' //overwriting or reassigning a variable

let userIntro=
        'Hi my name is '
        + firstName + ' '
        + lastName + '. I am ' + age +
        ' '+'years old.'


let a;

const c="sdhhsd"
// c=123 we cannot re-assign a variable c 

//block
{
    var t="tanish";
} // The primary difference between var and let in JavaScript is scope: var is function-scoped, meaning it is available throughout the entire function it is declared in, while let is block-scoped, meaning it is only available inside the immediate pair of curly braces {} where it is defined 
{
    let ta="tanish";
}

//var->Hoisted to the top and initialized as undefined
//let->Hoisted but uninitialized (stays in the Temporal Dead Zone)
console.log(g); //undefined
var g=32;
console.log(h); //error coz h is not defined 
let h=223;
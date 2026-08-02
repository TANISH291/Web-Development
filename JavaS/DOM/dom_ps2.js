const body = document.body;

const input = document.createElement("input");
const button = document.createElement("button");
const h1= document.createElement("h1");
const para= document.createElement("p");

button.textContent = "Click me";
h1.textContent="DOM Practise";
para.innerHTML= "Apna College <b>Hello</b> Bacho"

input.placeholder = "username";
button.id = "btn";
h1.style.textDecoration="underline"
h1.style.color="purple"

body.append(input);
body.append(button);
body.append(h1);
body.append(para);

const btn = document.querySelector("#btn");

btn.style.backgroundColor = "blue";
btn.style.color = "white";



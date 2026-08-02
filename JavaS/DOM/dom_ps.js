let body=document.querySelector("body")

let para1=document.createElement("p");
para1.innerText="Hey I am Red!!!";
para1.style.color="red";

body.appendChild(para1);

let h3=document.createElement("h3");
h3.innerText="Hey I am Blue!";
h3.style.color="blue";
body.appendChild(h3)


let div = document.createElement("div");
div.style.backgroundColor="pink"
div.style.border="solid black 1px"
body.appendChild(div)

let h1=document.createElement("h1");
h1.innerText="I AM DIV !";

let para2=document.createElement("p");
para2.innerText="I AM DIV TOO!!";

div.appendChild(h1)
div.appendChild(para2)
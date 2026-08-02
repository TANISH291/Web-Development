/* 
The DOM (Document Object Model) is a programming interface that represents an HTML document as a tree structure.

JavaScript uses DOM to:
1.Access elements
2.Modify content
3.Handle events
4.Change styles dynamically
*/ 

//Selecting Elements

// By ID ( document.getElementById() )
let objId = document.getElementById("mainImg");
console.dir(elm);

//By Class  ( document.getElementsByClassName() )
let smallImages = document.getElementsByClassName("oldImg");

//3. By Tag ( document.getElementsByTagName() )
let divs = document.getElementsByTagName("div");


//4. Query Selector ( document.querySelector() )  [Only Important]
document.querySelector("h1"); //Selects first p element 
document.querySelector("#description"); //Selects first element with id = myId
document.querySelector(".oldImg"); //Selects first element with class = myClass

document.querySelectorAll("p") //select all p elements 


//Modify content

// Change Content
let para=document.querySelector('p')
para.innerText="Tanish"; //shows the visible text contained in the node 
para.innerHTML = "<b>Hello</b>"; //shows the full markup
para.textContent = "Hello"; //shows all the full text which is written in original html file


//Change Attributes
// getters setters and delete
para.getAttribute("attribute");
para.setAttribute("attribute", "new_attribute");
para.removeAttribute("attribute");


//Change Styles
para.style.color = "red";
para.style.backgroundColor = "black";


let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color="red";
}

let fist_link=document.querySelector("a");
fist_link.style.backgroundColor="black"

// Add/Remove Classes
let img=document.querySelector("img");
img.classList.add();
img.classList.remove();
img.classList.contains()
img.classList.toggle();  // yes<->Toggle<->No Can do both add and remove 


//Navigations 
let box=document.querySelector(".box")
box.children()

let ul=document.querySelector("ul");
ul.parentElement()

box.nextElementSibling()
box.previousElementSibling()



//Create Element
let newDiv = document.createElement("div");
newDiv.innerText = "New Element";

let newP = document.createElement("p");
newP.innerText = "New Element";

let btn = document.createElement("button");
btn.innerText = "CLICK ME!";
//It is used to append any elem as a nested element 
let body=document.querySelector("body");
body.appendChild(newDiv);

box.append(newDiv); //append in box

box.prepend(newP);

//insertAdjacentElement(position, element);
/*
POSITION
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.
*/
box.insertAdjacentElement("beforebegin",btn );
box.insertAdjacentElement("afterbegin",btn );
box.insertAdjacentElement("beforeend",btn );
box.insertAdjacentElement("afterend",btn );

box.removeChild(btn);
body.remove(newDiv);



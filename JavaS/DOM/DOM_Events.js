let btns=document.querySelector("button");
let h1=document.querySelector("h1");
let h3=document.querySelector("h3");
let p=document.querySelector("p");



// attribute.onclick  and attribute.onmouseenter

// function like(){
//     alert("Liked")
// }
// for(btn of btns){
    
//     btn.onclick=like;
    
//     btn.onmouseenter=function(){
//         console.log("You entered a button")
//     };
    
// }
//this onclick and onmouseenter can only work for single function so we have to use event listners 


//add EventListner
//element.addEventListner(event,callback)


// function like(){
//     alert("Liked Added");
// }
// function comment(){
//     alert("Comment Added");
// }

//  for(btn of btns){
//     btn.addEventListener("click" ,like );
//     btn.addEventListener("click",comment);
//     btn.addEventListener("dblclick",function(){
//         console.log("Double Clicked ");
//      });

// }

// this in Event Listners
//When this is used in a call back of event handler of something it refers to that something

// "this" indicates the attribute in this example "this" indicating to btns


btns.addEventListener("click",change_color);
h1.addEventListener("click",change_color);
h3.addEventListener("click",change_color);
p.addEventListener("click",change_color);

function change_color(){
    console.log(this.innerText);
    this.style.backgroundColor="blue"
}


//KeyBoard Events 








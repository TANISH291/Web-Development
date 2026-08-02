let btn=document.querySelector("button");

let input=document.querySelector("input");



// btn.addEventListener("dblclick", function(e){
//     console.log(e);
//     console.log("button clicked");
// });

// input.addEventListener("keyup",function(e){
//     console.log(e);
//     console.log("key was released");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
    
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);

//     let user= this.elements[0];  //form.element[0]
//     let pass=this.elements[1];
//     let button=this.elements[2];

//     console.log(user.value);
//     console.log(pass.value);

// });


//change events 
//the change events occurs when the value of an element has been changed (only works on <input> <textarea>, <select> elements)'

//input events 
// the input fires when the value of an <input> <textarea>, <select> element has been changed.

let user = document.querySelector("#user");

// user.addEventListener("change",function(event){
//     event.preventDefault();
//     console.log("input changed")
//     console.log("finalvalue= ",this.value)
// }); 

user.addEventListener("input",function(event){
    event.preventDefault();
    console.log("input changed")
    console.log("finalvalue= ",this.value)
}); 
 



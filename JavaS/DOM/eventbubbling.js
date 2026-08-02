let div= document.querySelector("div");
let ul= document.querySelector("ul");
let lis=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("Div waas clicked")
})
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("Ul waas clicked")
})

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("Li waas clicked")
    });
};

//Event Bubling 
//Event goes from: child → parent → document
// if we trigger nested element eventlistner it automatically triggers its all parents also







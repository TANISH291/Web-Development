let inp=document.querySelector("input");
let submit_btn=document.querySelector("#submit");
let ul=document.querySelector("ul");

submit_btn.addEventListener("click",function(){
    let list_item=document.createElement("li")
    let listdelete_button=document.createElement("button")

    listdelete_button.innerText="Delete"
    listdelete_button.classList.add("button")
    list_item.innerText=inp.value;

    ul.appendChild(list_item);
    list_item.appendChild(listdelete_button)
    
    inp.value="";
});

// let delete_btns=document.querySelectorAll(".delete_button")

// for(del_btn of delete_btns){
//     del_btn.addEventListener("click",function(){
//         let parent=this.parentElement;
//         parent.remove();
//     })
// }

//if we create new element in our page of the same type and we have created a event lister for the same then we use 
//event delegation

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let list=event.target.parentElement
        list.remove()
    }
})

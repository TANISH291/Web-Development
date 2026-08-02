let h2=document.querySelector("h2");
let inp=document.querySelector("input");

inp.addEventListener("input",function(){
    let filtervalue=this.value.replace(/[^a-zA-Z ]/g, "");
    this.value=filtervalue;
    h2.innerText=this.value;  
       
})
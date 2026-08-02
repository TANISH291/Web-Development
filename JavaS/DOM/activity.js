let button = document.querySelector("button");

function change_color(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    return (`rgb(${red}, ${green} ,${blue})`);
}
function change_text(){
    let h2=document.querySelector("h2");
    let div=document.querySelector("div");

    h2.textContent=change_color();
    div.style.backgroundColor=change_color();
}
button.addEventListener("click",change_text);
let todo=[];

let req= prompt("Enter the Request: ");

while(true){
    if(req=="quit_app"){
        console.log("Quiting App");
        break;
    }

    if(req=="show_list"){
        console.log("---------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("---------------");
    }
    else if(req=="add_task"){
        let task = prompt("Enter the task: ");
        todo.push(task);
        console.log("Task Added")
    }

    else if(req=="delete_task"){
        let idx=prompt("Enter the task index: ");
        todo.splice(idx,1);
        console.log("Tak Deleted")
    }
    else{
        console.log("Wrong req")
    }
    
    req= prompt("Enter the Request: ");
}
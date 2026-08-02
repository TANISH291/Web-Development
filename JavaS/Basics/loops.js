// let fruits=[["apple","mango"],["grapes","papaya"],["banana","peach"]];
// for(let i=0;i<fruits.length;i++){
//     console.log(`#${i}`);
//     for(let j=0;j<fruits[i].length;j++){
//         console.log(`${fruits[i][j]}`)
//     }
// }

// console.log();
// //for of loop
// let fru=["apple","mango","grapes","papaya","banana","peach"]; 
// for(f of fru){
//     console.log(f);
// }

// let str="tanish$hangloo";
// for(s of str){
//     console.log(s)
// }


//to do logic using js
//list- to show all todo's
//add - to add a todo
//delete - to delete a task from todo
//quit- to exit from todo

let task = ["Exercise","Study","Meditation","Drink 5L H2O","Journal Writing"];
let add_task=prompt("Add ur task");
while(add_task!="quit"){
    if (add_task=="removetask"){
        let del=prompt("Remove Task");
        let remove_task=task.indexOf(del);
        if(remove_task!=-1){
            task.splice(remove_task,1);
        }
        else{
            console.log("That task is not in the list")
        }
    }
    else{
        task.push(add_task);
        console.log("Task added");
    }
    add_task=prompt("Add ur task");
  }
for(t of task){
    console.log(t);
}


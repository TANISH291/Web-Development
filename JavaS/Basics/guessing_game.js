let max_num=prompt("Enter the max number: ");
let random_num=Math.floor(Math.random()*max_num)+1;
let guess_num=prompt("Enter the guessed number: ")
let count=1;
while(true){
    if(guess_num=="quit"){
        console.log("user quit");
        break;
    }
    if(guess_num==random_num){
        console.log("U guessed it Right");
        break;
    }
    else if(guess_num>random_num){
        guess_num=prompt("The random number is less than this number go for the smaller one");
    }
    else{
        guess_num=prompt("The random number is greater than this number go for the larger one");
    }
    count=count+1;
    
}

console.log(`U guessed it in ${count}th chance!!!`)

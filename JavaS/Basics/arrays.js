let arr=["tanish",1,3.14,true,null]; //we can use any type of datatype element in javas array
console.log(arr);

let nums=[1,2,3,4,5];
console.log(nums);

console.log(nums[1]);

console.log(nums[5]); //index out of bond so undefined 

console.log(typeof nums); //array is an object 

let empty = []; //empty array
console.log(empty.length);  //arr.length
console.log([1,2,3,4].length);

//string array accessing chaining 
let srr=["abc","def","ghi","ijk"];
console.log(srr[3][2]);

let fruits = ["mango","apple","litchi"];

fruits[1]="grapes";
console.log(fruits);
fruits[3]="litchieee";
console.log(fruits);

//array is mutable

//array methods
cars=["audi","bmw","lambo","supra"]
cars.push("ferrari"); //adds a elem at the last
console.log(cars);

cars.pop(); //delets a elm at the last
console.log(cars);

cars.unshift("toyata");  //adds a elem at the start
console.log(cars);

cars.shift(); //delets a elm at the start
console.log(cars);

//significance of shift and unshift 
let followers=["a","b","c"]
let blocked= followers.shift();

console.log(followers);
console.log(blocked);


let primary=["red","yellow","green"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("green"));
console.log(primary.indexOf("blue"));// -1 not in array
console.log(primary.includes("yellow"));
console.log(primary.includes("green"));

let secondary=["blue","black","white"];

console.log(primary.concat(secondary));//concatination of two arrays 

primary.reverse();//reverse of array
console.log(primary);

let a=[1,2,3,4,5,,6,7,8,9];
console.log(a.slice(0,4)); //make a copy of array
console.log(a.slice(-5));

 
let color=["blue","black","white","red","yellow","green"];
// splice(start_index,delete_count,item0...itemN)

console.log(color.splice(4));  //change in original array
console.log(color);

console.log(color.splice(1,2))
console.log(color);

color.splice(0,0,"pink","orange","purple") //adding (0th place,0-add 1 remove,add krne wale elm....)
console.log(color);

color.splice(1,0,"voilet","cream","bagian")
console.log(color);


color.sort();
console.log(color);//in string there is direct sorting

let b=[100,42,86,67,99];//int number first sort function make it string then do sorting 
b.sort();
console.log(b);


//refrence variable concept 
let ar=["a","b","c","d","e"];
let ar_copy=ar; //refrence== adress of ar is same as copy_ar therefore if we make change is ar it will reflect in ar_copy and vice versa
ar_copy.push("e");
console.log(ar);
console.log(ar==ar_copy);

console.log([1]==[1]);  // 1st [1] has diff adress and 2nd has diff adress 

//const array

const crrr=[1,2,34,5];
crrr.pop();
console.log(crrr)
// crrr=[1,2]; error assignment to constant variable 
crrr.push("a")
console.log(crrr); 

let multidim_arr=[[1,2,3],[4,5,6],[7,8,9]];
console.log(multidim_arr); 

let tictactoe= [["X"," ","O"],
                [" ","X"," "],
                ["O"," ","X"]]
console.log(tictactoe)
tictactoe[0][1]="O";
console.log(tictactoe)






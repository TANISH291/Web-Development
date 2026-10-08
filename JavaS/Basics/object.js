//object 
const user={
    name:"tanish",
    age:21,
    emailId:"tan@gmail.com",
    salary:"29Lpa",
    "home address":"jammu"

}
console.log(user);
console.log(typeof user);

//value access
console.log(user.age);

//CRUD operation -> Create read update delete
user.mobile_no="12345"; //create

user.salary="38Lpa"; //update

console.log(user); //read

delete user.mobile_no; //delete
console.log(user);

/*behind the scene all keys are 
store and interpret as string in object*/

console.log(user["age"]);
//console.log(user.home address); this cannot work
console.log(user["home address"]);



const user2=user;//copy by refrence 
user2.age=22;

console.log(user);

//all key and value as o/p
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(let keys in user){
   console.log(keys,user[keys]); //user.keys wrong 
}

//not a good method
const namee=user.name;
const agee=user.age;
console.log(namee,agee);

//destructuring of object 
const {name,age}=user;
console.log(name,age);

//destructuring of array
const arr=[1,2,3,4,5,6];
const [first,sec]=arr;
console.log(first,sec);

//iteration on keys
for(let keys of Object.keys(user)){
    console.log(keys);
}

//iteration on values
for(let val of Object.values(user)){
    console.log(val);
}

//iteration on values
for(let [keys,val]  of Object.entries(user)){
    console.log(keys,val);
}

//function in object 
const fun={
    name:"Tanish Hangloo",
    intro: function(){
        console.log(`My name is ${this.name}`);
        return 20;
    }
}
const user3={
    name:"tanish",
    age:"22"
}
user3.intro=fun.intro;
user3.intro();



//this is reffering fun object means both has the same refrence to a memory address 
const va=fun.intro();
console.log(va);

//nested object 
const user4={
    name:"tanish",
    age:21,
    emailId:"tan@gmail.com",
    salary:"29Lpa",
    adress: {
        city:"mumbai",
        pincode:"400056",
        area:"irla"
    }
}
console.log(user4.adress);

//independent copy
const userr={...user4} //shallow copy 
userr.name="Mohan";
console.log(user4);
console.log(userr);
//but doesnt make independent copy for nested attributes 
userr.adress.city="udduppi";

//we can use keys as numbers 
const num={
    1:"Tanish Hangloo",
    2:"is going to",
    3:"earn",
    4:"100M $"
}//behind the scene its going to interpret as a string only 

let arrr=[1,2,3,4,5];
/*{
    1:1,
    2:2,
    3:3,
    4:4
}*/ //behind the scene array is storing like this as an object 


//key can be string or symbol

const sym=Symbol("sym");
const us={
    name:"tanish",
    age:21,
    emailId:"tan@gmail.com",
    salary:"29Lpa",
    [sym]:"Hello"
}
console.log(us[sym]);


















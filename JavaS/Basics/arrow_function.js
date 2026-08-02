const sum=(a,b) => {
    console.log(a+b);
};
sum(9,6);
sum(91,26);
sum(39,16);


//implicite return 
// const func=(arg1,arg2...) =>(value)

const mul=(a,b) =>(
    a*b
);
const cube=n => n*n*n;
let m=mul(22,45);
let c=cube(3);
console.log(m);
console.log(c);


//this with arrow function 
const student ={
    name:"tanish",
    age:21,
    prop: this, //global scope

    //normal function sees
    getName: function(){
        console.log(this)  //this=> parent is object 
        return this.name;
    },

    //arrow function sees parent object scope
    getage: () => {
        console.log(this)   //parent's object scope i.e window
        return this.age; 
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this) //student object
        },2000);
    },
    getInfo2: function(){
        setTimeout(function (){
            console.log(this) //window object
        },2000);
    }
};
student.getName();
student.getage();
student.getInfo1();
student.getInfo2();

//singleton 
const user_acc=new Object()
const x =Object.create
console.log(user_acc)
console.log(x)


//object literals
const item={
    price: 100,
    discount:10,
    color:["red","blue","green"]
}
console.log(item);

const my_sym=Symbol("key1")
const post={
    username:"@tanish.hangloo",
    content:"This is my first post",
    likes:220,
    repost:5,
    [my_sym]:"key1", //if u have to use my_sym as a symbol u have enclose it with square brackets 
    tags:["@apnacollege","@delta"]
}

console.log(post);
console.log(post[my_sym]);
console.log(typeof post[my_sym]);


//GET VALUE object["key"] or object.key
console.log(post["username"])
//or
console.log(post.username)


const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser);

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)//u cannot change any key's value after using freez
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


//2
const obj={
    1:"a",
    2:"b",
    null:"c",
    if:"d",
    undefined:"e"
};

//ADD UPDATE Delete Value

const student={
    name:"tanish",
    age:21,
    cgpa:9.62,
    city:"mumbai"
};
//update
console.log(student);
student.city="pune";
console.log(student);

//add
student.gender="male"
student.iq=1999;
console.log(student);

//delete
delete student.iq;
console.log(student);




//OBJECT OF OBJECT (NESTED OBJECTS )

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "tanish",
            lastname: "hangloo"
        }
    }
}
console.log(regularUser.fullname?.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj7 = { obj1, obj2 }
console.log(obj7);

const obj6 = Object.assign({},obj1, obj2, obj4) //{}-> target ->to assign all those obj in empty obj 
console.log(obj6);

const obj11 = {...obj1, ...obj2}
console.log(obj11);


// ARRAY Of Object
const classInfo=[
    {
        name:"tanish",
        grade:"A+",
        city:"Mumbai"
    },
    {
        name:"Krupa",
        grade:"0+",
        city:"Nagpur"
    },
    {
        name:"tanishaa",
        grade:"o+",
        city:"pune"
    }
]
console.log(classInfo)

//acess
console.log(classInfo[1].city)
//and same like add update and delete 


//MATHS Objects
//properties 
console.log(Math.PI);
console.log(Math.E);
//inbuild methods
console.log(Math.abs(-12.6)) //modulus
console.log(Math.pow(2,10)) //power
console.log(Math.floor(-9.8)) // gives integer part of any decimal and nerarest smallest integer value
console.log(Math.ceil(8.8))

// return random value form 0 to 1 and 1 is exluded
console.log(Math.random())

//object methods
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('name'))


//destructuring
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor);

const {courseInstructor :ins} = course
//we can directly use this with object 
console.log(ins);




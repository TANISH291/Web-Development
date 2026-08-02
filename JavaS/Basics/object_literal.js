
//student is a refrence variable for a address

const item={
    price: 100,
    discount:10,
    color:["red","blue","green"]
}

const post={
    username:"@tanish.hangloo",
    content:"This is my first post",
    likes:220,
    repost:5,
    tags:["@apnacollege","@delta"]
}

console.log(post);


//GET VALUE object["key"] or object.key
console.log(post["username"])
//or
console.log(post.username)


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




//OBJEXT OF OBJECT (NESTED OBJECTS )

const class_info = {
    tanish: {
        grade:"A+",
        city:"mumbai"
    },
    krupa: {
        grade:"O",
        city:"nagpur"
    },
    tanishaa:{
        grade:"O",
        city:"Pune"
    }
}
console.log(class_info)



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
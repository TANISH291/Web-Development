const obj={
    name:"tanish",
    age:21,
    hobby:"coding",
    webdev:9.9,
    ai:9.8,
    devOps:9.3,
    //this keyword refers to an object that is executing the current piece of code
    get_Avg(){
        let avg=( this.webdev + this.ai + this.devOps )/3 ;
        console.log(this);
        console.log(`my name is ${this.name}`);
        console.log(`avg marks: ${avg}`);
    }

};

obj.get_Avg();

// function avg(){
//     console.log(this);
// }
// avg(); Universal object is window which is linked to our html page


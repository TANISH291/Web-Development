let mydate= new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());

console.log(typeof mydate);

let myCreatedate=new Date(2026,0,23,5,4) //month starts from 0
console.log(myCreatedate.toDateString());

let myCreatedate_=new Date("2026-01-13")
console.log(myCreatedate_.toDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedate.getTime());
console.log(Math.floor(myTimeStamp/1000));

let mydatee= new Date()
console.log(mydatee);
console.log(mydatee.getMonth()+1);
console.log(mydatee.getDay());


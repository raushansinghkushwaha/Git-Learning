// //globalobject :Object
// //chrome browser :window
// //Nodejs :global
console.log("hello world")
console.log(Math.random())
// //setiInterval();
// //new Object();
// //new string("rohit")

// let obj ={
//     name:"rohit",
//     age:12

// }
// console.log(obj.name)

//console.log(globalThis.Math.random())

"use strict"
a=10;
console.log(a);

let obj ={
    name:10
}

Object.freeze(obj)
obj.name= 30  
console.log(obj)

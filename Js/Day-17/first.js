//The this keyword in javascript is a special keyword that refer to
//the context in which the current code is being executed.
//its value dependd on how the function where this is used  is called.

//1:Global context (outside any function)
//in browsers:window
//In Node.js:module's exports object

// console.log(this);

//2:inside a function
//i:(Non-strict Mode)
//when this is used inside a regular function, it refers to the global object
//ii:strict mode
//this will be undefined inside a function

// "use strict" //isme rule kaphi height ho jate hai
// function greet(){
//     console.log(this)
// }
// greet()
//********************************* 

//3/inside a method (object context)
//when this is used inside an object's method, it refers to the object that owns the method.

// const obj ={
//     name:"ram",
//     age:20,
//     greet:function(){
//         console.log(this);
//     }
// }
// obj.greet();

//arroe function don't have their own this.
//instead , they inherit this from the surrounding (lexical)scope.

// let obj={
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this)
//     }
// }


// obj.greet();

//inside a constructor or class
//in contructors and classes , this refers to the instance of the object being created

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Object("rohit",10)
// console.log(a)

let greet =()=>{
    console.log(this);
}
greet();

let meet = function(){
    console.log(this);
}
meet();
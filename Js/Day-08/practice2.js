// //function
// console.log("Hello coder army");
// console.log("mai badhiya hu");
// console.log("aur kaya hal hai")

//add program
// function sum(number1,number2){
//     console.log(number1+number2)
// }
// //function call:argument
// sum(3,4);
// sum(10,15);

// //mutliplication :function
// function multiply(number1,number2){
//     console.log(number1*number2)
// }
// multiply(2,3)
// multiply(2,2)

// const fun=function(){
//     console.log("Hello coder army");
//     console.log("Mai badiya hu");

// }
// console.log(fun());

//Arrow function
// const sum=(number1,number2)=>number1 +number2;
// console.log(sum(3,4));

// const minus=(number1,number2)=>number1-number2;
// console.log(minus(5,2));

// const multiply=(number1,number2)=>number1*number2;
// console.log(multiply(2,5));

// const divide=(number1,number2)=>number1/number2;
// console.log(divide(25,2))

// //cube
// const cube=number=>number*number*number;
// console.log(cube(2))

// //square
// const square=number=>number*number;
// console.log(square(3))

//spread operator or root operator
// let arr=[2,3,4,5]
// let arr2=[...arr];

// const sum=function(...number){
//     //for loop sum nikal sakta hu
//     console.log(number);
// }
// sum(2,3,4)
// sum(4,6,1,10,13)
// sum(2,3,6,8,3,45,24)


// let obj={
//     name:"ram",
//     age:20,
//     amount:435,
// }
// const {name, amount,age}=obj;
// console.log(name,amount,age);
// console.log(obj)

// function love(obj1){
//     console.log(obj1)
// }


// let obj1={
//     a:1,
//     b:2,
// }
// love(obj1);
// let obj2={
//     c:1,
//     d:2
// }
// obj2=Object.create(obj1);
// // console.log(obj2);
// // console.log(obj2.a);

// obj2._proto_=obj1;
// console.log(obj2._proto_)


//if else
//     let age =27;
// if(age>=18){
//     console.log("Eligible for vote")
// }
// else{
//     console.log("Not eligible for vote")
// }

//if else if else
 //let age=6
// if(age<18){
//     console.log("child")
// }
// else if(age>45){
//     console.log("old")
// }
// else{
//     console.log("young")
// }


//muitiple condition
// switch(9){
//     case 0:
//         console.log("sunday")
//         break;
//     case 1:
//         console.log("monday")
//         break;

//     case 2:
//         console.log("tuesday")
//         break;
//     case 3:
//         console.log("wednesday")
//         break;
//     case 4:
//         console.log("thursday")
//         break;
//     case 5:
//         console.log("friday")
//         break;
//     case 6:
//         console.log("saturday")
//         break;
//     default:
//         console.log("Not a valid day")
// }

//loop
// for(let i=0;i<=20;i++){
//     console.log("Hello coder army")
// }

//sum of first n number:10 number
// let sum =0;
// for(let i=1;i<=10;i++){
//     sum+=i;
// }
// console.log(sum)

//20 print karna hai
//nested for loop:loop ke andar loop
// for(let j=0;j<=6;j++){
//     for(let i=1;i<=5;i++){
//         console.log(i);
//     }
// }
// for(let i=0;i<=20;i++){
//     console.log(i)
// }

//scope ke bare me
//var
// for(let i=1;i<6;i++){
//     let i=1;
//     while(i<6){
//         console.log(i)
//         i++;
//     }
// }

// do-while loop
// let arr=[10,20,30,40]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// const obj={
//     name:"rohit",
//     age:30,
//     amount:435,
//     city:"patna"
// }

// const key=Object.keys(obj);
// console.log(obj)

//scope ke bare me
//Global scope , local scope (functional scope ),block scope

// let a=10;
// var b=20;
// const c=30;
// console.log("Hello function");
// console.log(a,b,c)

// greet();
// console.log(c)

// var amount=400;
// var amount = 20;
// var amount=10;

// if(true){
//     let a=10;
//     var amount =20;
//     const c=30;
// }
// console.log(amount)
// for(let i=0;i<5;i++){
//     console.log(i)
// }

// let obj={
//     name:"rohan",
//     age:23,
//     gender:"male",
//     city:"patna"

// }
// obj.toString()
// for(let key in obj)
//     console.log(key);
// //for in loop , i can iterate over keys is an object
// for(let key in obj){
//     console.log(key,obj[key]);
// }
// Object.keys(obj)
// console.log(Object.keys(obj));

// let obj2=Object.create(obj);
// obj2.money=420;
// obj2.id="rohit";
// console.log(obj2);
// console.log(Object.keys(obj2))

// for(let key in obj2){
//     console.log(key)
// }

//let obj={};
// obj.name ="Rohit",
// obj.age="20"
// //key value writable enumerable configurable 
// console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// Writable=false,
// obj.name="Mohit"
// configurable=false



let obj={}

objectdefineproperty(obj,'name',{
    value:"rohit",
    writable:true,
    enumerable:true,
    configurable:true
})
objectdefineproperty(obj,"name",{
    writable:false
})
obj.name="mohit";
console.log(obj);


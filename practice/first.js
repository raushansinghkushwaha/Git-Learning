// //call back function
// let user={
//     name:"rohit",
//     age:30
// }
// Object.defineProperty(user,'name',{
//     writable:false,

const { useCallback } = require("react");

// const { useCallback } = require("react");

// });

// user.name="mohit";
// //Hacking as bachane ke liye humenine ye sab kiya hai
// console.log(Object.getOwnPropertyDescriptor(user,"name"))


//for of loop
// const arr=[10,20,30,40];
// for(let value of arr)
// {
//     console.log(value);
// }


// let str="Rohit is good boy";
// for(let value of str)
// {
//     console.log(value)
// }



//don't use for of loop in object
// const obj={
//     name:"manav",
//     age:22,
//     gender:"famale"

// };
// console.log(obj)

// for(let value of obj)
// {
//     console.log(value)
// }

// for(let value of Object.keys(obj));
// console.log(value,obj[value]);


//for Each

// let arr=[10,30,40,50];    //iska output nahi aaya hai
// //single argument:number
// //second index
// //third:array ko bhi pass

// arr.forEach((Callbackfunction))
// const greet = function(num){
//     console.log(num);
// }
// arr.forEach(function(num){
//     console.log(num)

// });

// arr.forEach((num,index,a)=>{
//     a[index]=num*2;
// });
// console.log(arr);


//filter
// let arr =[10,22,33,41,50];
// const evenNumbers = arr.filter((num)=>num%2==0);

// console.log(evenNumbers);

// const students =[
//     {name:"Raushn",age:22,marks:70},
//     {name:"ramu",age:33,marks:43},
//     {name:"subhas",age:32,marks:32},
//     {name:"rohit",age:31,marks:53},
//     {name:"vikash",age:34,marks:34}
// ]
// const result1 = students.filter((value)=>value.marks>50);
// const result2 = students.filter(({marks})=>marks>50);

// console.log(result1);
// console.log(result2);
    
//map
// const arr=[1,2,3,4]
// const re=arr.forEach((num)=>{
//     return num;
// })//wrong, no return

// console.log(re)
// const result=arr.map((num,index)=>num*index);

// console.log(result);



// const arr=[1,2,3,4,5,6]

// const result=arr.filter((num)=>num%2==0).map((num)=>num*num).map((num)=>num/2);
// console.log(result);



//call back function
// function names(fun){
//     console.log("Hello i am name");
//     fun();
// }
// const greet=function(){
//     console.log("I am call back function")
// }
// names(greet);

// names(()=>{
//     console.log(" I am call Back function")
// });
// names(()=>{
//     console.log("I am call back function")
// })

// function fetchData(){
//     //bhut sara
//     console.log(" I am fetching data")
// }

// setInterval(fetchData,5000)


//Reduce ,set and Maps
// let obj ={
//     name:"rohit",
//     age:10,
//     orange:1,
// }
// let curr="apple";
// obj.apple=1;
// obj["apple"]=1;
// obj[curr]=1;

// if(obj.hasOwnProperty(curr))
//     obj[curr]++;
// else 
//     obj[curr]=1;
// console.log(obj);

//reduce
// const arr=[10,20,30,40,50];

// //const result =arr.reduce(Callback function,initialization)
// const result =arr.reduce((acc,curr)=> acc+curr,0)
console.log(result);

let arr=["orange","apple","banana","ornage","grapes"];
//final result ek object ke form
//orange:3
//apple:2
//acc={
//orange:2,
//apple:2,
//banana:1}

const result =arr.reduce((acc,curr)=>{   
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;

    return acc;
},{})

const result = arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr)?acc[curr]++:acc[curr]=1;
    return acc;
},{})

console.log(result)
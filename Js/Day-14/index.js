// let user ={
//     name:"rohit",
//     age:30,
    
// }
// //Object.defineProperty(user,"name")
// Object.defineProperty(user,'name',{
//     writable:false,
// });
// user.name ="mohit";
// //hacking se bachne ke liye humeine ye sab kiya hai 
// console.log(Object.getOwnPropertyDescriptor(user,"name"))

//for of loop
//for of loop operation ke sahi rahta hai
// const arr = [10,20,11,18,13]
// for(let value of arr)
// {
//     console.log(value)
// }
// let str="ram is good boy"
// for(let value of str)
// {
//     console.log(value)
// }

//don't use for of loop in object
// const obj = {
//     name:"ram",
//     age:22,
//     gender:"male",
// };
// console.log(obj);

// // for(let value of obj){
// //     console.log(value)
// // }

// for(let value of Object.keys(obj))
//     console.log(value, obj[value])

// let arr = [10,20,30,40,50];
// //single argument:number
// //second index
// //third:array ko bhi pass

// //arr.forEach(callBackfunction)
// function greet(num){
//     console.log(num);
// }
// arr.forEach(greet) 

//filter
// let arr = [10,22,30,41,59]

// const result = arr.filter((num)=> num%2==0)
// console.log(result)

// const students =[
//     {name:"rohan",age:22, marks:70},
//     {name:"mohan",age:22, marks:40},
//     {name:"sohan",age:22, marks:10},
//     {name:"khirmohan",age:22, marks:70},
//     {name:"pohan",age:22, marks:20},
// ]
// const result =students.filter(({marks})=> marks>50)
// console.log(result)

//map
// const arr =[10,20,30,40,50]
// const result = arr.map((num)=> num*num)
// console.log(result)

const arr =[1,2,3,4,5,6]
const result = arr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2)
console.log(result);


//for each return nahi leta hai -undefined

//homework reduce
//let obj = {};

//obj.name ="rohit"
//obj.age=20;
//key value writable enumerable configurable
//console.log(Object.getOwnPropertyDescriptor(obj,'name'))
//writable = true , value ko kaya main change kar sakta hu
//obj.name ="mohit"
//configurable = true

// let obj ={}
// Object.defineProperty(obj, 'name',{
//     value:"rohit",
//     writable:true,
//     enumerable:true,
//     configurable:true,
// })

// Object.defineProperty(obj,"name",{
//     writable:false,
// })
// obj.name="mohit"
// console.log(obj)

// const obj1={
//     name:"rohit",
//     age:23,
//     account_number:30002
// };
// Object.defineProperty(obj1, 'account_number',{
//     writable:false
// })

// obj1.account_number =2001;
// console.log(obj1.account_number)

// const customer ={
//     name:"rohit",
//     age:23,
//     account_number:123,
//     balance:2000,
// }

// //name , account_number , change nahi hone chahiye
// Object.defineProperty(customer, "name",{
//     writable:false
// })
// //customer.name = "mohit";
// //custom-er.account_number =1001;
// console.log(customer)


//Object.prototype
const customer ={
    name:"rohit",
    age:23,
    account_number:123,
    balance:2000,
}
let customer2 = Object.create(customer)
customer2.city ="haridwar",
customer2.place ="delhi";

Object.defineProperty(customer,"name",{
    enumerable:false,  //jis bhi key ka enumerable true hoga un sabka access hoga ya print hoga
     //inherit hoke bhi koi property or key aati hai, uska enumarable true hoga

})
for(let key in customer2)
    console.log(key)
//console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
})
for(let key in customer)
    console.log(key) 
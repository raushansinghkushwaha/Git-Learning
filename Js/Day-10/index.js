// let obj1 = {
//     a:1,
//     b:2
// }
// let obj2 = obj1;
//shallow copy  
//shallow copy me value ko assign kar sakte hai
//isme value change hota hai ek ka value change karne par dusra automatic badal jata hai
// obj2.a=10;
// console.log(obj2 , obj1);

//deep copy
//deep copy me value ko assign nahi kar sakte hai
//deep copy me  value change nahi hota hai ye khud pe depend hota hai 
// let obj3 = structuredClone(obj1)
// obj3.a = 20;
// console.log(obj3, obj1)

//nested object
//Jab ek object ke andar dusra object ho, use nested object bolte hain.

//const user ={    //isme ka value assign nahi kar sakte hai
//     name:"Rohit",
//     balance:420,
//     address:{    //isme ka value assign kar sakte hai
//         pincode:854506,
//         city:'patna'
//     }

// }

// //structuredclone
// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 324356;
// console.log(user.address.pincode);

//destrucutring of an object
let obj = {
    name: "Rohit",
    money:430,
    balance:30,
    age:20,
};
const {name, balance , age} = obj;
console.log(name,balance , age);

const arr = [3,2,1,5,10]
//const [first,second,third]=arr;
const [first,second,...third] = arr;
console.log(first,second,third);

// let obj = {
//     name: "Rohit",
//     money:430,
//     balance:30,
//     age:20,
//     arr:[90,43,345,3],
//     address:{
//         pincode:433465,
//         city:"patna",
//         state:" bihar"
//     }
// };
//const {address:adds} =obj;
// const {arr:[first]} =obj;
//console.log(first);


// let user = {
//     name:"rohit",
//     amount:345,
//     greet:function(){
//         console.log( "hello coder army")
//     },
//     meet: function(){
//         return 20;
//     }
// }
// user.greet();
// console.log(user.meet());

//prototype
// let obj ={
//     name:"rohit",
//     amount:420,
//     greet:function(){
//         return 10;
//     }
// }
// console.log(obj.toString())
// //array is an object
// let arr = [2,3,4,1]
// arr.push(10);
//object 
// key:value
//how to create object
// const obj = {
//     0:20,
//     1:67,
//     name:"ram",
//     account_balance:324,
//     gender:"Male",
//     age:30,
//     insta_id:8742872,
//     undefined:30,
//     null:"mohan"
// }

// console.log(obj.gender)  
// console.log(obj["gender"])
// console.log(obj.insta_id)
// console.log(obj["0"])
// console.log(obj)
// console.log(obj[1])


// const arr=[205,50,70]
// console.log(arr.length, obj.name)
// console.log(obj.undefined)
// console.log(obj["null"])

// // //second method to crate object
// const person = new Object();
// //property add
// person.name="rohit"
// person.age=80;
// person.gender="male";
// console.log(person);
// //delete
// delete person.age;
// console.log(person)
// //modify or update
// person.name = "raushan";
// console.log(person);

//third method

// class People{
//     constructor(name,age,gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;

//     }
// }
// // per1.name="Rohit";
// let per1 = new People("Rohit", 20, "male")
// let per2 = new People("Mohit",30,"female")
// let per3 = new People("aman",40 , "male" )
// console.log(per1, per2 , per3);

let obj = {
    name: "rohit",
    age: 30,
    account_balance: 420,
    gender:"male"
}
//keys , value
const arr= Object.values(obj);
console.log(arr)

// //key:value
const arr2 = Object.entries(obj);
console.log(arr2)

// //assign use case
// let obj1 = {a:1,b:2}
// let obj2 = {c:3,d:4}
// let obj4 = {e:5,f:6}

// const obj3 =Object.assign({},obj1+obj2,obj4)
// obj3.a=10;
// console.log(obj3 , obj1, obj4)

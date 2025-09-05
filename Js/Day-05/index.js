let a=10;
let b=a;
b=30;
console.log(b)
console.log(a)
//primitive data type vs non primitive data type
//primitive data type:immnutable
//non primitive data type:mutable

//object example
let obj1={
    id:20,
    naming:"rohit"
}
let obj2=obj1;
console.log(obj1)
console.log(obj2)
obj2.id=30;

console.log(obj1)
console.log(obj2)

//primitive data type stack anadr memory locate hoti hai     stack-memory location
//Non primitive data type heap andar memory locate hoti hai  heap- data store
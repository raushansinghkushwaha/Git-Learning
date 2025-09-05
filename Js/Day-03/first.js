//Non primitive data type
//Array, Object, Function

// let n=10;
// let n2=20;
// let n3=50;

//Array
let arr=[10,20,30,'rohit'];
console.log( arr);  //isks typeof object hota hai

//Object
//key:value

//let user_name="rohit"
//let account_number:76542735;
//let balance:420;
let obj={
    user_name:"Rohit",
    account_number:652735473,
    balance:420

}
console.log(obj)  


//function
let fun=function(){
    console.log("Hello coder army")
    return 10;
}
console.log( fun())

//type conversion
let account_balance="100"
let num=Number(account_balance)

console.log(typeof account_balance)
console.log(typeof num)

//Boolean convert to number
let x=false
console.log(Number(x))

let account="100xs"
let bal="200s"
console.log(Number(account))
console.log(Number(bal))

//null
let x1 =null
console.log(Number(x1)) //output 0

//undefined
let x2;
console.log(Number(x2)) //output NaN(not a number)

//string ke andar conver
let ab = 20;
console.log(String(ab));

let ax =true;
//console.log(typeof true)
console.log(String(ax));
//console.log(typeof String(ax))

//Boolean
let abc="acsd "
console.log(Boolean(abc))



//operators
//Arithmetic operator
console.log(4+4*30/2-5)

//modulous give remainder
console.log(20%3)

// increment operator ++, decrement operator --
let sum=20;

//sum++ post increment , sum-- post decrement
//++sum pre increment , --sum pre decrement
let total=sum++
console.log(total)
console.log(sum)

//Assignment operator
let y = 20;
y=y+10;
console.log(y)
y-=10;
console.log(y)




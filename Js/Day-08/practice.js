// console.log("Hello coder army")

// let num=10.5;
// console.log(num)
// console.log(typeof num)//num

// let ar="mahesh"
// ar="ram"
// console.log(ar)
// console.log(typeof ar)//string

// const ids=20;
// // ids=10;  //isme value reassign nahi hota hai
// console.log(ids)
// console.log(typeof ids) //number

// var x=10;
// x=40
// console.log(x)

//declare the variable
// let num=10;
// console.log(num)

// //primitive date type
// //number
// let account_balance=20;
// console.log(account_balance)
// console.log(typeof account_balance)

// //string
// let str="ram"
// console.log(str)
// let comment = 'hello raushan'
// console.log(comment)

// //boolean
// //true or false
// let statement=false
// console.log(statement)
// console.log( typeof statement)

// let account
// console.log(account) //undefined

// let bal=null
// console.log(bal)
// console.log( typeof bal)  //object

// //bigint
// let a=67458365n
// console.log(a)

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER)

// //non primitive data type
// //Array
// let arr=[10,34,54,33,"true" ,'ram']
// console.log(arr)
// console.log(typeof arr)

// //object
// //key:value
// let obj={
//     username:"rohit",
//     account_number:3748746,
//     balance:420
// }
// console.log(obj)

// //function
// let fun=function(){
//     console.log("hello sare kaise")
//     return 10;
// }
// console.log(fun())

//type conversion
// let account_balance="100"
// let num=Number(account_balance)
// console.log(account_balance)
// console.log( typeof account_balance)
// console.log( typeof num)

// //Boolean convert to number
// let x=false;
// console.log(Number(x))

// let account="100xs"
// let bal="200s"
// console.log(Number(account)) //NaN
// console.log(Number(bal))   //NaN

// //null
// let x1=null;
// console.log(Number(x1))  //0

// //undefined
// let x2;
// console.log(Number(x2)) //NaN

// //string ke andar conversion
// let ab=20;
// console.log(String(ab))

// let ax=false;
// console.log(typeof false)
// console.log(String(ax))

//Boolean
// let abc=" "
// console.log(Boolean(abc))

//operator
//arithmetic operator
// console.log(4+4*30/2-5)

// //modulous give remainder
// console.log(20%3)

// //increment operator , decrement operator
// let sum=20;
// let total=sum++;
// console.log(total)
// console.log(sum)

// //Assignment operator
// let y=20;
// y=y+10;
// console.log(y)
// y-=10;
// console.log(y)

// //comparision operator
// //number to number
// let a1=1;
// let a2=2;
// console.log(a1<=a2)

// let num=10;
// let str=10;
// console.log(num==str) //type conversion hoga string to number

// let a3=10;
// let str1="10"
// console.log(a3<=str1) //type check , then compare the value
// console.log(a3===str1)

// let a5=30;
// let a4=40;
// console.log(a5===a4)

// console.log(null==undefined)
// console.log(null===undefined)

// console.log(null==0)
// console.log(null<0)
// console.log(null>0)
// console.log(null<=0)
// console.log(null>=0)

//undefined comparision
// console.log(undefined==0)
// console.log(undefined<0)
// console.log(undefined>0)
// console.log(undefined<=0)
// console.log(undefined>=0)

// console.log(NaN==NaN)
// let str3="rohit"
// let str4="mohit"
// console.log(Number(str3))

// let abc1=123
// let abc2="123"
// let abc3=123
// console.log(abc1=abc2== abc3)
// console.log(undefined!=null)

// //logical operator
// let age=18;
// let money=420;
// console.log(age>=12&&money >200)
// console.log(age>=10 || money >200)
// console.log(!(age>=12))

// //bitwise operator
// console.log(4&5)
// console.log(11&14)
// console.log(11 | 14)
// console.log(5^6)
// console.log(5<<3)
// console.log(20>>2)

// let a=10;
// let b=a;
// b=30;
// console.log(b)
// console.log(a)

//object
// let obj1={
//     id:20,
//     name:"ram",
// }
// let obj2=obj1
// console.log(obj1)
// console.log(obj2)
// obj2.id=30;
// obj2.name="raushan"
// console.log(obj1)
// console.log(obj2)

//priitive data type stack ke andar memory locate karta hai -stack memory locate
//non-primitive data type heap ke andar memory locate hota hai - heap data store

// let num1 =321;
// let num2 = new Number(321)
// let num3 = new Number(321)

// console.log(num1 ==num2)
// console.log(num2==num3)
// console.log(num2)
// console.log(typeof num2)

// let num =231.68
// console.log(num.toFixed(4)) // iskka matlab decimal ke baad kitne digit chahiye
// console.log(num.toPrecision(2)) // iska matlab total output kitne digit me chahiye

// console.log(num.toExponential(2))
// console.log(typeof num.toString())
// console.log(num.valueOf())

//math
// console.log(Math.E)
// console.log(Math.LN10S)
// console.log(Math.PI)
// console.log(Math.LOG10E)

//floor and ceil
// let num1 =34.5;
// console.log(Math.floor(num1))
// console.log(Math.ceil(num1))
// console.log(Math.floor(Math.random()*10)+1)

// //11-20
// console.log(Math.floor(Math.random()*10)+11)

// let min=40;
// let max =10;
// console.log(Math.floor(Math.random()*(max-min+1)+min));

//0-9
// console.timeLog(Math.floor(Math.random()*10))

// //0-10
// console.log(Math.floor(Math.random()*11+2))

// //30-40
// console.log(Math.floor(Math.random()*(40-30+1)+30))

// //ludo
// console.log(Math.floor(Math.random()*(6-1+1)))

// const arr = [2,3,54,6,"rohit","true",5]
// console.log(arr[1])
// console.log(arr.at(-2)) 
// console.log(arr.length);
//length
//helpful
// const newarr = structuredClone(arr);     ye wala run nahi hua hai
// console.log(newarr = arr);

//push me element add hota hai last me
// arr.push(30)
// arr.push(50)
// console.log(arr)
// //pop me element delete hota hai last me
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr)

// //unshift add element at start
// arr.unshift(10)
// arr.unshift(40)
// console.log(arr)

// //shift delete element from start
// arr.shift()
// console.log(arr)

// //delete opearation
// delete arr[0]
// delete arr[0]
// console.log(arr)

// console.log(arr.indexOf(8))
// console.log(arr.lastIndexOf(8))
// console.log(arr.includes(2))

// //slices
// console.log(arr)
// console.log(arr.slice(2,6))
// console.log(arr)
// //slice karne ke baad phir se same array ka element print hota hai

// //splice
// console.log(arr)
// console.log(arr.splice(2,5))
// console.log(arr)
// //splice karne ke baad phir se same array ke element print nahi hota hai

// console.log(arr)
// let newsplice = arr.splice(2,5)
// console.log(newsplice)
// console.log(arr)

// //splice (starting_index, total_element_delete,and value)
// arr.splice(2,0,"money",90,40,50)
// console.log(arr)

// console.log(arr.toString())
// console.log(arr.join(" "))

//concat
// let arr1 = [2,43,5,23]
// let arr2 =[32,5,32,5]
// let arr4 =[32,45,67,2]
// let arr3 = arr1.concat(arr2,arr1)
// console.log(arr3)

//2D Array
// let arr1 = [1,2,3,4,5,6,7,8,9]
// let arr2 = [[4,44,2],[1,2,30],[4,5,6],11,12,14]
// //flat ka use to convert into 1d array
// let newarr = arr2.flat(Infinity)
// console.log(newarr)
// let abc =[2,1,4,5]
// console.log(Array.isArray(abc))

// const d= new Date();
// console.log(d.toDateString());
// console.log(d.toDateString())
// console.log(d.toISOString())
// console.log(d.getDate())

// console.log(d.getMonth())
// console.log(d.getFullYear())
// console.log(d.getMilliseconds())
// console.log(d.getMinutes())
// console.log(d.getTime())
// const now = Date.now();
// console.log(now)
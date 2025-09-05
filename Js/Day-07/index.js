  const arr=[2,4,54,8,3,"mohit",true,8];
// console.log(arr[1]);
// console.log(arr.at(-2));
// //at is latest , negative index le leta hai
// console.log(arr.length);
// //length
// //helpful
// const newarr = structuredClone(arr); //iska output nahi aaya hai
// console.log(newarr=arr);

//push    push me element add hota hai last me
// arr.push(30);
// arr.push(50);
// console.log(arr);

//pop, pop  the last element from array,    pop me element delete hota hai last se
// arr.pop();
// arr.pop();
// arr.pop()
// console.log(arr)

//unshit , add element at start
// arr.unshift(10);
// arr.unshift(40)
// console.log(arr)

//shift, delete element from start
// arr.shift()
// console.log(arr)

//delete operation
// delete arr[0]
// delete arr[0];
// console.log(arr)

// console.log(arr.indexOf(8))
// console.log(arr.lastIndexOf(8))
// console.log(arr.includes(2))

//slice
// console.log(arr)
// console.log(arr.slice(2,6))
// console.log(arr)            //slice karne ke bad phir se same array ka element print hota hai

//splice
// console.log(arr)
// console.log(arr.splice(2,5)) 
// console.log(arr)              //splice karne ke bad phir se same array ka element print nahi  hota hai , jo splice karne ke bad element bach jata hai wahi print hota hai
 
// splice
// console.log(arr)
// let newsplice=arr.splice(2,5);
// console.log(newsplice)
// console.log(arr)

//splice(starting_index,total_element_delete,add value)
// arr.splice(2,0,"money",90,30,70);
// console.log(arr);

// console.log(arr.toString())
// console.log(arr.join(" "));

//concat
// let arr1=[2,54,5,22]
// let arr2=[4,44,2,66]
// let arr4=[23,432,1113,32]
// let arr3=arr1.concat(arr2,arr4)
// console.log(arr3)

//2D Array
// let arr1 = [1,2,3,4,5,6,7,8,9];
// let arr2d = [[1,2,3],[4,5,6],[7,8,9],11,12,13];
// //flat ka use to convert into 1d array
// let newarr=arr2d.flat(Infinity);
// console.log(newarr);

// let abc =[2,1,4,5]
// console.log(Array.isArray (abc))

// let ac=new Array(2)
// console.log(ac.length)
//for in loop: isko array ke sath nahi lete
//arr is an object
// 0 10  //output
// 1 20
// 2 30
// 3 12
// 4 40
// name rohit
// age 20

const arr = [10,20,30,12,40];
arr.name ="rohit";
arr.age=20
for(let index=0;index<arr.length;index++)
    console.log(index, arr[index])
// for(let key in arr){
//     console.log(key,arr[key]);
// }

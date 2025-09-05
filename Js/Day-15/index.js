// //reduce
//  const arr = [10,20,30,40,50];

//  const result = arr.reduce((acc,curr)=>{
//    console.log(acc,curr)
//     acc = acc+curr;
//     return acc;
//  }, 0)
//  console.log(result);

let arr = ["orange","appple","banana","grapes","orange","appple","banana","grapes"]
//final result ek object ke form
//orange :3
//apple:2 
//acc ={
// orange:1}

const result = arr.reduce((acc,curr)=>{
   if(acc.hasOwnProperty(curr))
   acc[curr]++;
else
   acc[curr]=1;
   return acc;

},{})
console.log(result)
// //let arr =[20, 30,40]
// //set:unique value
// const set1 =new Set([10,20,30,40])
// console.log( set1)

// const set1 = new Set();
// set1.add(4);
// set1.add(5)
// set1.add("ram")
// set1.add(30)

// //delete
// set1.delete(5)
// console.log(set1.size)

//instragram :id
// const user_id =new Set(["rohit_negi9","mohit_04","ram_94"])
// let new_user ="rohit_negi9"
// console.log(user_id.has(new_user))

// user_id.clear();
// console.log(user_id)

// let arr = [10,20,30,10,40,50,30]
// const set1 =new Set(arr);
// arr = [...set1]
// console.log(arr)


//union
// let set1 =new Set([10,20,30,40,70])
// let set2 =new Set([10,70,80,90])

//let set3 = new Set([...set1,...set2])
//console.log(set3)

//intersection
// let set1 =new Set([10,20,30,40,70])
// let set2 =new Set([10,70,80,90])
// //filter:array
// const result =new Set( [...set1].filter((num)=>set2.has(num)))
// console.log(result)

// //iterate over set
// //for of
// for(let value of set1)
//     console.log(value)

set1.forEach((value)=>console.log(value))
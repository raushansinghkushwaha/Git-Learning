let obj ={
    name:"rohit",
    age:10,
    orange:1,
}
let curr ="orange";
obj["orange"]++;
if(obj.hasOwnProperty(curr))
    obj[curr]++;
console.log(obj);
//console.log(obj.hasOwnProperty("name"))
//call back hell

//callback function
function fetchuser1(callback){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
    console.log("Data fetched successfully");
    const name ="Rohit";
    //Data fetched frm backend
    callback(name);
    },2000)
}

function fetchuser2(callback){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
    console.log("Data fetched successfully");
    const name ="Rohit";
    //Data fetched frm backend
    meet(name);
    },2000)
}

function fetchuser(callback){
    console.log("fetching the user Detail....");
    setTimeout(()=>{
    console.log("Data fetched successfully");
    const name ="Rohit";
    //Data fetched frm backend
    callback(name);
    },2000)
}
function greet(name){
    console.log(`Hello ${name}`);
}
function meet(name){
    console.log(`Hello ${name}, I will meet you in Delhi`); 
}

function edit(name){
    console.log(`Hello ${name}, of the user`)
}
// fetchuser(greet);
// fetchuser(meet)
// fetchuser(greet);
fetchuser(edit);


function fetchuser(){
    console.log("Fetching the user Detail....")
    setTimeout(()=>{
        console.log("Data fetched successfully");
        const obj ={
            name:"Rohit",
            age:20,
            city:"Delhi",
        }
        //data fetched from backend
        greet(obj);

    },2000)
}
function greet(obj){
    console.log(`Hello ${obj.name}`);
}
fetchuser();

//1:greet
//2:meet
//3:edit
//4:age

function fetchdata(callback){
    console.log("fetched info of user");

    setTimeout(()=>{
        console.log("User detail fetched successfully") ;
        const obj ={
            name:"Rohit",
            age:34,
            city:"Delhi"
        }
        callback(obj);
    },2000)
}
fetchdata(edit)
//ye pe greet , meet , edit print kar sakte hai
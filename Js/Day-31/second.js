function test1(){

    const p1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise resolved");
    },5000)
})

return p1;
}

function test2(){

    const p2 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("second Promise resolved")
    },5000)
})
return p2;

}




// p1.then(value=>console.log(value))
// p2.then(value=>console.log(value))


async function greet(parents){

    try{
    const order=await placeOrder(cart);
    const foodDetails=await preparingOrder(order);
    const droplocation=await pickupOrder(foodDetails);
    DeliveryOrder(droplocation);
    }
    catch(error){
        console.log(error)
    }
    greet()
}
async function greet(){

    console.log("Hello I greet you")
    const [data1,data2] = await Promise.all ([test1(),test2()]);
    console.log(data1);
    console.log(data2);
}
greet();
// console.log("Hello coder army")
// console.log("kaise ho sare log")
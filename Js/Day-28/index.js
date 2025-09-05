//call back hell

//fetchuser(greet)


cart=["Piza","coke","sandwich"]
//Domino's pizza order kar rahe ho:
// function placeOrder(cart, callback){
//     console.log("Talking with Domino's ")

//     setTimeout(()=>{
//         console.log("Order placed successfully");
//         const order ={orderId:221 , food:cart , restaurant:"Dominos",location:"Dwarka"}
//         callback(order);
//     },2000)
// }
// //placeOrder();

// function preparingOrder(order, callback){
//     console.log("Pizza preparation started...")

//     setTimeout(()=>{
//         console.log("Pizza prepared Done")
//         const foodDetails= {token:12 , restaurant:order.restaurant, location:order.location}
//         callback(foodDetails);
//     },5000)
// }
// //preparingOrder()

// function pickupOrder(foodDetails , callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Picked up the order by Delivery Boy")
//         const droplocation =foodDetails.location
//         callback(droplocation);
//     },3000)
// }
// //pickupOrder();
 
// function DeliveryOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Ordered delivered successfully")
//     },5000)

// }


//callback hell
// placeOrder(cart, callback);
// preparingOrder(order , callback)
// pickupOrder(foodDetails,callback)
// DeliveryOrder(droplocation)

 
//placeOrder(preparingOrder);
// placeOrder(cart,(order)=>{
//      preparingOrder(order , (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             DeliveryOrder(droplocation);
//         });
//      });
     
// });


function placeOrder(cart){
    console.log("Talking with Domino's ")

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{

            const food_available =true;
            if(food_available){

        console.log("Order placed successfully");
        const order ={orderId:221 , food:cart , restaurant:"Dominos",location:"Dwarka"}
        resolve(order);
         }
         else{
            reject("items out of stacks")

         }
    },2000)

    })

    return pr;
}
//placeOrder();

function preparingOrder(order){
    console.log("Pizza preparation started...")

    const pr = new Promise(function(resolve,reject){

            setTimeout(()=>{
        console.log("Pizza prepared Done")
        const foodDetails= {token:12 , restaurant:order.restaurant, location:order.location}
        resolve(foodDetails);
    },5000)

    })
    return pr;

}
//preparingOrder()

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
        console.log("Order Picked up  by Delivery Boy")
        const droplocation =foodDetails.location
        resolve(droplocation);
    },3000)

    })
    return pr

    
}
//pickupOrder();
 
function DeliveryOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Ordered delivered successfully")
    },5000)

}


placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>DeliveryOrder(droplocation))
.catch(error=>console.log(error));


const pr = new Promise(function(resolve,reject){

})
return pr 

//callback hell

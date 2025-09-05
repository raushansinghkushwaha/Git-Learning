// const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const orange = document.getElementById('orange');
// const green = document.getElementById('green');
// const purple = document.getElementById('purple');
// const body = document.body;
// //document.querySelector('body');

// red.addEventListener('click',()=>{
//     body.style.backgroundColor ='red';

// })
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor ='blue';

// })
// orange.addEventListener('click',()=>{
//     body.style.backgroundColor ='orange';

// })
// green.addEventListener('click',()=>{
//     body.style.backgroundColor ='green';

// })
// purple.addEventListener('click',()=>{
//     body.style.backgroundColor ='purple';

// })


//short way 
// const buttons = document.querySelectorAll('button')
// const body =document.body;
// //console.log(buttons);

// buttons.forEach((button)=>{
//    button.addEventListener('click',()=>{

//     //console.log(button.id);
//     body.style.backgroundColor =button.id;

//    })
// })

const root = document.getElementById('root');

root.addEventListener('click',(event)=>{

    if(event.target.tagName ==='button')
    document.body.style.backgroundColor = event.target.id;
})
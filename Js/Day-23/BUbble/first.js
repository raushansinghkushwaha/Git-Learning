const grandparent = document.getElementById('grandparent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

//event bubbling and even capturing

child.addEventListener('click',()=>{
    console.log("child Clicked")
},false)

parent.addEventListener('click',()=>{
    console.log("parent Clicked")
},false)

grandparent.addEventListener('click',(event)=>{
    console.log("grandparent Clicked")
    
    //ye propagation ko stop karne ke liye lagaya gaya hai
    event.stopPropagation();
},false)


//addEventListener(first_event,useCallback,capture)


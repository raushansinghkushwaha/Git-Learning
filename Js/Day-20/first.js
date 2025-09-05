/* <li>TS</li> */

//create an element
// function attach(content){
// const element = document.createElement('li');
// element.innerHTML = content;

// const element2 = document.CreateElement('li');

// const parent = document.getElementById("root")
//parent.appendChild(element);
//parent.append(element,element2)
//};
// attach("TS")  
// attach("React")

//***********Text Node********* 
// const element = document.createTextNode("Hello coder army")
//  const parent = document.getElementById("root")
//  parent.append(element);

//***********Attribute Node********* 
// const element = document.createAttribute("id");
// element.value ="first";

//access to first list
// const curr_list = document.querySelector('li')
// curr_list.setAttributeNode(element);

//access to second list
// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);

//const element = document.getElementById("root");
//console.log(element.getAttribute("id"));

// element.setAttribute("custom","30")
// element.setAttribute("class","rohan")
// element.removeAttribute("class")


//*****Add node to the DOM******

//const parent = document.getElementById("root")
//array

// const element = document.createElement('li')
// element.innerHTML ="Ts"
//data

// parent.prepend(element)   //element starting me add hoga
// parent.append(element)    //last me add hoga

 //const child2 = parent.children[1];
// parent.insertBefore(element,child2);

//replace child
//parent.replaceChild(element,child2)  

//const parent = document.getElementById("root")
// //parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML ="Hello coder army"

// parent.insertAdjacentElement("beforebegin",element)

//delete node or element
const element = document.querySelector('li')
element.remove();
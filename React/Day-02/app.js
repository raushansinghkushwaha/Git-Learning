const element = React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"blue",fontSize:"30px",color:"pink"}},"Hello coder army");
const element2= React.createElement("h2",{id:"second",className:"Rahul",style:{backgroundColor:"black",fontSize:"30px",color:"pink"}},"or san kaisa hai ");

//ReactDOM.render(element,document.getElementById('root'));
//elememt :50 card  
const div1 = React.createElement('div',{},[element,element2])
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
//React root container: is
// Reactroot.render(element);
// Reactroot.render(element2);
Reactroot.render(div1);



//<div>
 //   <h1>Hello coder army</h1>
//    <h2>sabhi log kaise ho</h2>
//</div>

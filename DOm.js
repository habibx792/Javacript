// let myclass=document.querySelector("h1");
// console.log(myclass.getAttribute("class"));
// myclass.setAttribute("class","123");
let div =document.querySelector("h1");
div.style.background='green';
div.style.fontSize='40px';
div.style.height="100px"
// div.style.visibility="hidden"
let newButton=document.createElement("Button");
console.log(newButton);
newButton.innerText="Click me";
// div.append(newButton);
div.prepend(newButton);
let para=document.querySelector("p");
let addPara=document.createElement("p");
addPara.innerText="I am fucking Ghulam Habib";
para.append(addPara);
para.innerHTML="<i>helo habib</i>";
document.querySelector("body").prepend(para);

// div.after(newButton);
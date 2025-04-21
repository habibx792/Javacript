let changeColor=document.querySelector("button");
let changeColorbody=document.querySelector("body");
changeColor.addEventListener("click",change);
let navColor=document.querySelector("nav");
let anchors=document.querySelectorAll(".nav a");
changeColor.innerText="mode";
changeColor.style.borderRadius="50%";
let myIntor=document.getElementById("userInto");
function UpdateText(){
    let userFiled=document.querySelector("input");
    let userInput=userFiled.value;
    let myIntor=document.getElementById("userInto");
    myIntor.innerText=userInput;
    userInput.value="";

}

function change(){
    if(changeColor.style.background!=="red"&&changeColorbody.style.background!=='black'){
        changeColor.style.background="red";
        changeColorbody.style.background='black';
        navColor.style.background='yellow';
        anchors.forEach(function(anchor){
            anchor.style.color="black";
            myIntor.style.background="white";
        })
    }
    else{
        changeColor.style.background="green";
        changeColorbody.style.background='white';
        navColor.style.background='black';
        anchors.forEach(function(anchor){
            anchor.style.color="white";

        })
    
    }
   
}
// let mypara=document.querySelector(".myText");
// let text=prompt("Intoduce Your self : ");
// mypara.innerText=text;


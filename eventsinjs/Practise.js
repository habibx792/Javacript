let modebtn=document.querySelector("button");
let bodyColor=document.querySelector("body");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode='dark';
        bodyColor.classList.add("dark")
        bodyColor.classList.remove("light");
        // bodyColor.style.background='black';
    }
    else{
        currMode="light";
        bodyColor.classList.remov("dark")
        bodyColor.classList.add("light");
        bodyColor.style.background='white';
    }
    console.log(currMode);
});
let button=document.querySelector("#btn");
button.onclick=(evt)=>{
    let a=26
    console.log(evt.type);
    console.log("clicked time ",a);
    a++;
}
let btn1=document.querySelector("#btn");
const hander2=()=>{
    console.log("hello");
}
btn1.addEventListener("click",hander2);{
    console.log("Buttom 1 is click")
}

btn1.removeEventListener("click",hander2);{
    console.log("Hello");
}
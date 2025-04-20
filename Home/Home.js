function ChageBodyColor(){
    const bodyColor=document.getElementsByTagName("body")[0];
    const headColor=document.getElementsByTagName("div")[0];   
    if(bodyColor.style.background==="black"){
        bodyColor.style.background = "white";
        headColor.style.background = "black";        
    }else{
        bodyColor.style.background = "black";
        headColor.style.background = "white";
    }   
}
function BackgrondColor(){
    const navColor=document.getElementById("NavBar");  
    if(navColor.style.background==='salmon'){
        navColor.style.background='limegreen';
    }else{
        navColor.style.background='salmon';
    }
}
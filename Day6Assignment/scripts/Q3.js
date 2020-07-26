var name=prompt("Enter Name of the user");
document.write(`<br>${name}, Welcome to our webpage.. `)
function ChangeColor(){
    var element = document.body;
    element.classList.toggle("dark");
}
const clocktime=document.getElementById("time");
function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    clocktime.innerText=time;
}
setInterval(clock,1000);
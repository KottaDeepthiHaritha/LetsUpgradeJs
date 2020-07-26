let arraycolors= ["skyblue", "yellowgreen", "wheat"];
var i = 0;
function changeColor(){
    let color = arraycolors[i++];
    document.body.style.backgroundColor = `${color}`;
}
setInterval(changeColor,5000);
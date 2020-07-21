console.log("Question 1: Higher order function example program");
var n=prompt("Enter a number(Q1)");
var arr = [];
function display(n) {
    for (var i = 1; i <=n; i++ ) {
        arr.push(i);
    }
}
display(n);
console.log(`Array arr: ${arr}`)
let odd=arr.filter(od=>(od%2!=0));
console.log(`Odd Numbers of array: ${odd}`);
let oddcubes=odd.map(odc=>odc**3);
console.log(`Cubes of odd Numbers of array: ${oddcubes}`);
console.log("--------------------------------------------");

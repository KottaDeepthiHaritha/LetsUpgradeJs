console.log("Question 4:");
console.log("Calculator:");
var a=prompt("Enter a value:");
var b=prompt("Enter b value:");
let Addition=(a,b)=>a+b;
console.log("Addition of a and b:"+Addition(a,b));
let Subtraction=(a,b)=>a-b;
console.log("Subtraction of a and b:"+Subtraction(a,b));
let Multiplication=(a,b)=>a*b;
console.log("Multiplication of a and b:"+Multiplication(a,b));
let Division=(a,b)=>a/b;
console.log("Division of a and b:"+Math.round(Division(a,b),2));
let sqrt=a=>Math.sqrt(a);
console.log(`Square root of a:${sqrt(9)}`);
let n=prompt("Enter num(%):");
let per=prompt("Enter percent:");
let percentage=a=>a*n/100;
console.log(`Percentage of a:${percentage(per)}`);
console.log("-------------------------------------------------------------------------");
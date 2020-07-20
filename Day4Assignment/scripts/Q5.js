console.log("Question 5:");
var sales=prompt("Enter sales");
var commision;
if(sales>=0 && sales<=5000)
    commision=sales*0.02;
else if(sales>5000 && sales<=10000)
    commision=sales*0.05;
else if(sales>10000 && sales<=20000)
    commision=sales*0.07;
else if(sales>20000)
    commision=sales*0.10;
else
    console.log("Invalid Sale.");
console.log(`The total commision earned for sales ${sales} is ${commision}`);
console.log("-------------------------------------------------------------------------");
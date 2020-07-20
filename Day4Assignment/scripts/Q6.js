console.log("Question 6:");
let p;
let bool = true
while(bool){
    p= prompt("Enter number to '||' or '?':")
    bool = (p== "" || p> 100) ? false : true;  
}
console.log(`Number is ${p}`);
console.log("-------------------------------------------------------------------------");
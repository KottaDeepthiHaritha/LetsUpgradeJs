var num=prompt("Enter a number to display its multiplication table..");
document.write(`Multiplication Table of  ${num}<br><br>`)
for(let i=1;i<=10;i++){
    document.write(`${num} x ${i} = ${num*i}<br><br>`);
}
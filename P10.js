// write a js program to find sum of first n +ve nos  using for loop
// 5->1+2+3+4+5=15
const ps=require("prompt-sync");
const prompt=ps();
let num=parseInt(prompt("Enter a +ve nos : "));
if(num>0){
let sum=0;
for(let i=1;i<=num;i++){
sum=sum+i;
}

console.log("sum : "+sum);
}
else{
console.log("Invalid Input");
}
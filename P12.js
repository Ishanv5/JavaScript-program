//write a js program to find factorial
const ps=require("prompt-sync");
const prompt=ps();
let num=parseInt(prompt("Enter a nos : "));
if(num>0){
let fact=BigInt(1);
let i=BigInt(1);
do{
  fact=fact*i;
i=i+BigInt(1);
}while(i<=num);
console.log("Factorial : "+fact);
}else{
  console.log("Invalid");
}
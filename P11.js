// write a js program to find sum of first n +ve nos  using do while loop
// 5->1+2+3+4+5=15
const ps=require("prompt-sync");
const prompt=ps();
let num=parseInt(prompt("Enter a +ve nos : "));
if(num>0){
let i=1;
let sum=0;
do{
sum=sum+i;
i=i+1;
}while(i<=num);
console.log("sum : "+sum);
}else{
console.log("Invalid..");
}
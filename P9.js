// write a js program to find sum of first n +ve nos 
// 5->1+2+3+4+5=15
const ps=require("prompt-sync");
const prompt=ps();
let num=parseInt(prompt("Enter a +ve nos : "));
if(num>0){
let i=1,sum=0;
while(i<=num){
 sum=sum+i++;

}
console.log("sum : "+sum);
}
else{
console.log("Invalid Input");
}
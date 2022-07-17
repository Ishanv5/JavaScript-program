// write  js program to print odd and even using if else
const ps=require("prompt-sync");
const prompt=ps();
let s1=prompt("Enter a nos ");
let n1=parseInt(s1);
if(n1%2==0){
   console.log("Even");
}
else{
  console.log("Odd");
}

let ans="";
if(n1%2==0)
ans="even";
else
ans="odd";
console.log(ans);
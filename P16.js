// write  js program to print odd and even using conditional operator
const ps=require("prompt-sync");
const prompt=ps();
let s1=prompt("Enter a nos ");
let n1=parseInt(s1);
(n1%2==0)?console.log("Even"):console.log("Odd");
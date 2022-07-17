// write a js program  to add two integer from user
const ps=require("prompt-sync");
const prompt=ps();
try
{
let s1=prompt("Enter First integer : ");
if(! s1.match(/^[-0-9]+$/))   // Regular expression
throw "Invalid  first integer... ";
let n1=parseInt(s1);
let s2=prompt("Enter Second integer : ");
if(! s2.match(/^[-0-9]+$/))  //Regular expression
throw "Invalid  Second integer... ";
let n2=parseInt(s2);
let res=n1+n2;
console.log("res="+res);
}
catch(err){
console.log(err);
}
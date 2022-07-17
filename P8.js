// Write a js program to swap nos from user using another way
const ps=require("prompt-sync");
const prompt=ps();
try{
let s1=prompt("Enter a nos :");
if(! s1.match(/^[-0-9]+$/))   // Regular expression
throw "Invalid  first integer... ";
let n1=parseInt(s1);
let s2=prompt("Enter a nos :");
if(! s2.match(/^[-0-9]+$/))   // Regular expression
throw "Invalid  Second integer... ";
let n2=parseInt(s2);
n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log("n1="+n1);
console.log("n2="+n2);
}
catch(err){
console.log(err)
}

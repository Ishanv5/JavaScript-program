// write  js program to read radius from user to calculate 
const ps=require("prompt-sync");
const prompt=ps();
try{
let s1=prompt("Enter radius :");
if(! s1.match(/^[0-9.]+$/))   // Regular expression
throw "Invalid  radius... ";
let n1=parseFloat(s1);

let c=2*Math.PI*n1;
let a=Math.PI*Math.pow(n1,2);
console.log("Circumference="+c.toFixed(2));
console.log("Area="+a.toFixed(2));
}
catch(err){
console.log(err)
}

// write  js program to read 2 nos  and find min nos
const ps=require("prompt-sync");
const prompt=ps();
let s1=prompt("Enter a nos ");
let n1=parseInt(s1);
let s2=prompt("Enter a nos ");
let n2=parseInt(s2);
console.log(Math.min(n1,n2));
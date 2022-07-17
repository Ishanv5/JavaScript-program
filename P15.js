// write  js program to read 3 nos  and find max nos
const ps=require("prompt-sync");
const prompt=ps();
let s1=prompt("Enter a nos ");
let n1=parseFloat(s1);
let s2=prompt("Enter a nos ");
let n2=parseFloat(s2);
let s3=prompt("Enter a nos ");
let n3=parseFloat(s3);
console.log(Math.max(n1,n2,n3));
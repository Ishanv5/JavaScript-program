//write a js program to ask the name and then welcome 
const ps=require("prompt-sync");
const prompt=ps();
let name=prompt("Enter ur name : ");
console.log("Welcome"+name);
console.log("Welcome",name);
console.log(`Welcome ${name}`);
//write a js program to welcome the user provided in alphabet
const ps=require("prompt-sync"); 
const prompt=ps();
let name=prompt("Enter ur name : ");
if(name.match(/^[A-Za-z ]+$/)){
   console.log("Welcome "+name);
}else{
   console.log("Invalid name..");
}
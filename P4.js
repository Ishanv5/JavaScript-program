//write a js program to welcome the user provided in alphabet using try catch
const ps=require("prompt-sync"); 
const prompt=ps();
let name=prompt("Enter ur name : ");
try{
if(name.match(/^[A-Za-z ]+$/)){
   console.log("Welcome "+name);
}else{
   throw "Invalid name..";
}
}catch(err){
console.log(err);
}
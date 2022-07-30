//write a js program to welcome the user provided in alphabet
const ps=require("prompt-sync"); 
const prompt=ps();
let name=prompt("Enter ur name : ");
if(name.match(/^[A-Za-z ]+$/)){
   console.log("Welcome "+name);
 let d=new Date();
  let hr=d.getHours();
let msg="";
if(hr<12) msg="Good morning";
else if(hr<16) msg="Good Afternoon";
else msg="Good evening";
console.log(msg);
}else{
   console.log("Invalid name..");
}
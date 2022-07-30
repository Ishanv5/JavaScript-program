//write a js program to read rating between  1 to 5 using switch case
// 5/4->excellent... 3/2->good.... 1->okay
const ps=require("prompt-sync");
const prompt=ps();
let rating= parseInt(prompt("Enter rating between 1-5 : "));
switch(rating){
  case 5:
  case 4: console.log("Excellent");break;
  case 3:
  case 2: console.log("Good");break;
  case 1: console.log("Okay");break;
 default:console.log("Invalid rating");break;
}
//  write a js program to read rating between  1 to 5
// 5/4->excellent 3/2->good 1->okay
const ps=require("prompt-sync");
const prompt=ps();
let rating= parseInt(prompt("Enter rating between 1-5 : "));
if((rating<1) || (rating>5))
console.log("Invalid rating..");
else if((rating==5) || (rating==4))
console.log("Excellent");
else if((rating==3) || (rating==2))
console.log("Good");
else
console.log("Okay");
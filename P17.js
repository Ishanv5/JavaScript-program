//write a js program to read marks of student and find low and high marks
const ps=require("prompt-sync");
const prompt=ps();
let marks=[];
res=prompt("Do u want to enter marks y/n :");
while(res=="y"){
let m=parseInt(prompt("Enter ur marks : "));
marks.push(m);
res=prompt("Do u want to enter marks y/n :");
}
console.log(marks);
console.log(Math.max(...marks));
console.log(Math.min(...marks));// spreadout operator
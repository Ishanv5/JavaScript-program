//write a js program to read marks of student and find total and avg
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
let sum=0;
for(let i=0;i<marks.length;i++){
 sum=sum+marks[i];
}
let avg=sum/marks.length;
console.log("sum : "+sum);
console.log("avg : "+avg);
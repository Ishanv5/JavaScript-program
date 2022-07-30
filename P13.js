//write a js program to track ordered food by Ks and Iv
const ps=require("prompt-sync");
const prompt=ps();
let order=[];
let res=prompt("Do u want to place some order y/n : ");
while(res=="y"){
let name =prompt("Enter food name : ");
order.push(name);
res=prompt("Do u want to place some order y/n : ");
}
console.log(order);
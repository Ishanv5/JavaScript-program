// write  js program to print odd and even using conditional operator
const ps=require("prompt-sync");
const prompt=ps();
let s1=prompt("Enter a nos ");
let n1=parseInt(s1);
let ch=prompt("Enter choice 1 & 2 : ");
let n2=parseInt(ch);

switch(n2){
case 1: if(n1%2==0)
        console.log("Even");
        else
        console.log("ODD");
        break;
case 2:if(n1%2!=0)
       console.log("ODD");
       else
       console.log("Even");
       break;
default:console.log("Invalid input");
        break;
}
switch(n1%2){

case 0:console.log("Even");
case 1:
case -1:console.log("Odd");
}

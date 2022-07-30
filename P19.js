// write a menu driven js program  to track on team participart in IPL
const prompt=require("prompt-sync")();
let team_names=[];
while(true){
let op=parseInt(prompt("1 new, 2 view, 3 remove, 4 exit"));
if(op==1){
  let name=prompt("Enter team name :" );
if(team_names.indexOf(name)==-1){
team_names.push(name);
console.log(name + "added");
}else{
 console.log(name + "already exists");
}
}
else if(op==2){
console.log(team_names);
}else if(op==3){
let name=prompt("Enter team name :" );
 if(team_names.indexOf(name)==-1){
  console.log(name + "already exists");
}
else{
  team_names.splice(team_names.indexOf(name),1);
console.log(name + "removed");
}
}
else if(op==4){
break;
}
else{
console.log("sryy i don,t understand");
}
}
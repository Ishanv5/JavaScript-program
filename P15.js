// write a js program to display array
let data=["mark","elon","azim","bill"];
console.log(data);
for(let i=0;i<data.length;i++)
process.stdout.write(data[i] + "\t");
console.log();
for(let i in data)
process.stdout.write(data[i] + "\t");
console.log();
for(let d of data )
process.stdout.write(d + "\t");
console.log();
a=10;
console.log(a);
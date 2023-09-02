let str = ["gaurav","saurav","nitin","abhishek",'vicky-rajput',"raju","kushal"];

let filter = str.filter((str)=>{
   return str.toLowerCase().includes("vicky");
});
console.log(filter);
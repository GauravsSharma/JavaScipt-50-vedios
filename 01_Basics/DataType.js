// Premitive
// 7 types:- String, Boolean, BigInt, Number, undefined, null. Symbol

// Non-Premitive
// 3 type:- Arrays, Objects, Functions


// ********************************************************
// Stack[Primitive] aur Heap[Non-Pre]

let Email = "gauravSharma2312@gmail.com"; //String is premitive so it will store in stack
let Email2 = Email; // it will copy Email to Email2 if change Email2 then change will be only reflact to Email2 Because it stores the copy value of Email;
Email2 = "gauravSharma222@gmail.com";

// For non-premitives 

let user1 = {
    name:"Gaurav",
    marks:92         //user1 is object hence it store in heap but user1 is store in 
                     //stack and actual object store in heap and user1 will point to object wil store in heap
}
let user2 = user1; 
user2.name = "hitesh"  // changing the value of user2 hence it is pointing to object which is store is heap so user1' s name will also change
 
////////////////////////////////////////////////////////////////////


const number = 100 // although it is a number but if we highly  want a want number  
                   //then this must be not correct way; 

const num = new Number(1200); //this is 100% sure that num is number;
console.log(Math.random());  
console.log((Math.random()*10)+1);  
console.log(Math.floor((Math.random()*10))+1);

let min =10;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);// it will give value always 10 to 20





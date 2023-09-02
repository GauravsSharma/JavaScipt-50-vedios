//Immediate Invoked Function Expression;

// this funtion is used to save from our data from global scop
//..or this function is used to immediatly call a function; sometimes we make
// database file and we want that our file loads immediatly when ever our page
// is load.

(function chai (){
    console.log("IIFE-1");
})();//<---- this semicolon is important for anathor IIFE call in the same file

//if we don't use semicolon here it will block to run another IIFE function. 
(()=>{
    console.log("IIFE-2");
})()
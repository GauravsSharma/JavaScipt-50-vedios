const arr = new Array(1,4,3,1,44,5);
// slice method
const newarr = arr.slice(1,3);
console.log(newarr); // it will make the copy of 1 till 2 and copy into neewarr but 
                    //manipulate the orignal array
const newarr2 = arr.splice(1,3); // it will slice the arr 1 to 3 inclusive and store value in newarr2 but it will mamipulate the array, it delete the index value of 1,2,3 in orignal array


// output 
// 1- newarr = 4,3 | arr = same
// 2- newarr2 = 4,3,1 | arr = 1,44,5 

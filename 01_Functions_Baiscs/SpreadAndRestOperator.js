// ... is a spread and rest operator in javaS it is used to spread the value and it is 
    //also used for rest the values means wrap the values in a bundle

function restOperator(...num){
   return num;
}
restOperator(200,3000,1000,4000); // output :- [200,3000,1000,4000]
function restOperatorTypeTwo(val1 , val2,...num){
    return num; 
}
restOperator(2,4,1,5,5,2) // output:- [num:- 1,5,5,2]; 2 and 4 will assign to val1 and val2
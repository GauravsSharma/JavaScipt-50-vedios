let data = [
    {
        course: "Js course",
        price:2999,
    },
    {
        course: "react course",
        price:3002,
    },
    {
        course: "Java course",
        price:1900,
    },
    {
        course: "Py course",
        price:2500,
    }
]

let sum = data.reduce((acc,item)=>{
    return item.price+acc; 
},0)
console.log(sum);
const price=[3,45,65,66,23,12,78,90];
// const total=price.reduce(sum);
// console.log(total);
// function sum(a,b){
//     return a+b;
// }
let sum=price.reduce(function(total,price){
    return total+price;
},0)
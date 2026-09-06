// function greet(){
//     console.log("hello");
// }
// function welcome(cb){
//     cb();
// }
// welcome(greet);

//High order function

// function calculate(a, b, operation){
//     return operation(a, b);
// }
// function add(x, y){
//     return x + y;
// }
// console.log(calculate(10,20,add));

// forEach

// let num = [1, 2, 3, 4];
// num.forEach((val, idx, arr) => {
//   console.log(val);
// });

// map

// let num = [1, 2, 3, 4];
// num.map(function (val, idx, arr) {
//   console.log(idx);
// });

// filter

// let num = [1,2,3,4];
// const a =num.filter((val,idx,arr) => {
//     return val % 2 === 0;
// })
// console.log(a);

// reduce

// let num = [1, 2, 3, 4];
// num.reduce((accumulator, currentvalue) => {

// }, initialValue);

// const reduceMethod = num.reduce((prev, curr) => {
//   return prev + curr;
// }, 0);
// console.log(reduceMethod);
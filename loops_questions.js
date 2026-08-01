// Q.5

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// Q.6

// str = "string";
// for (let i = 0; i <= str.length - 1; i++) {
//   console.log(str[i]);
// }

// Q.7

// for (let i = 1; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// Q.8

// mul = 1;
// for (let i = 5; i >= 1; i--) {
//   mul *= i;
// }
// console.log(mul);

// Q.9

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 !== 0) {
//     console.log(i);
//   }
// }

// Q.10

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fizz-Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// Q.11

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr.unshift(i * i);
// }
// console.log(arr);

// Q.12

// let str = "Mayank";
// let reversed = "";

// for (i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }
// console.log(reversed);

// Q.13a.

// let sum_even = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 === 0) {
//     sum_even += i;
//   }
// }
// console.log(sum_even);

// // Q.13b.

// let sum_odd = 0;
// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     sum_odd += i;
//   }
// }
// console.log(sum_odd);

// Q.14

// for (let i = 1; i <= 10; i++) {
//   mul = 7 * i;
//   console.log("7 *", i, "=", mul);
// }

// Q.18

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     arr.unshift(i);
//   }
// }
// console.log(arr);

// Q.19

// let arr = [12, 23, 4, 56, 99];
// let max = arr[0];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log("Maximum value:", max);

// Q.19a.

// let arr = [12, 23, 4, 56, 99];
// let min = arr[0];
// for (let i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log("Minimum value:", min);

// Q.19b.

// let arr = [2,9,-10,20,-6,19];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > 0){
//         sum += arr[i];
//     }
// }
// console.log(sum);

// Q.19c.

// let name = "level";
// rev = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   rev += name[i];
// }
// if (name == rev) {
//   console.log("PALINDROME");
// } else {
//   console.log("NOT A PALINDROME");
// }

// Q.20

// let arr = [2, 3, 4, 56, 67];
// let even = [];
// let odd = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     even.push(arr[i]);
//   } else {
//     odd.push(arr[i]);
//   }
// }
// console.log("Even:", even);
// console.log("Odd:", odd);

// Q.21

// let arr = [2,9,-10,20,-6,19];
// let count_pos = 0;
// let count_neg = 0;

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){
//         count_neg++;
//     }else if (arr[i] > 0){
//         count_pos++;
//     }
// }
// console.log("Negative values:",count_neg);
// console.log("Positive values:",count_pos);

// Q.22
// Find length of array without using length function

// let arr = [1, 2, 3, 4, 5];
// let length = 0;

// for (let i = 0; i < arr.length; i++) {
//   length++;
// }
// console.log("Length of array:", length);
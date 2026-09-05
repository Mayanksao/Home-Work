// Q.1

// function atm(balance, amount) {
//   if (balance >= amount && amount % 100 === 0) {
//     console.log("Updated balance:", balance - amount);
//   } else {
//     console.log("Conditions not met!!");
//   }
// }

// atm(5000, 300);

// Q.2

// function longestWord(sentence) {
//   let count = sentence.split(" ");
//   let largest_word = "";
//   let vow_count = 0;

//   for (let i = 0; i < count.length; i++) {
//     if (count[i].length > largest_word.length) {
//       largest_word = count[i];
//     }
//   }

//   for (let j = 0; j < sentence.length; j++) {
//     if (
//       sentence[j] === "a" ||
//       sentence[j] === "e" ||
//       sentence[j] === "i" ||
//       sentence[j] === "o" ||
//       sentence[j] === "u" ||
//       sentence[j] === "A" ||
//       sentence[j] === "E" ||
//       sentence[j] === "I" ||
//       sentence[j] === "O" ||
//       sentence[j] === "U"
//     ) {
//       vow_count++;
//     }
//   }

//   console.log("Longest_word:", largest_word);
//   console.log("No. of words:", count.length);
//   console.log("No. of vowels:", vow_count);
// }

// longestWord("I am the longest word in the sentence");

// Q.3

// function stats(arr) {
//   let sum = 0;
//   let avg = 0;
//   let even_count = 0;
//   let odd_count = 0;
//   let sec_max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     avg = sum / arr.length;

//     if (arr[i] % 2 === 0) {
//       even_count++;
//     }

//     if (arr[i] % 2 !== 0) {
//       odd_count++;
//     }
//   }

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] > sec_max) {
//       arr.pop(arr[j]);
//       sec_max = arr[j];
//     }
//   }

//   console.log("Sum:", sum);
//   console.log("Average:", avg);
//   console.log("Even count:", even_count);
//   console.log("Odd count:", odd_count);
//   console.log("Second maximun value:", sec_max);
// }
// stats([12, 5, 18, 7, 25, 10, 30, 3]);
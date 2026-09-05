// Q.1

// function noRemainder(num, mod) {
//   if (num % mod === 0) {
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// }

// noRemainder(10,3);

// Q.2

// function duplicate(arr) {
//   let arr_new = [];
//   arr_new.push(arr[0]);

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[2 * i - 1]) {
//       arr_new.slice[arr[i]];
//     } else {
//       arr_new.push(arr[i]);
//     }
//   }
//   console.log(arr_new);
// }
// duplicate([1, 1, 2, 2, 5, 3, 4, 5]);

// Q.3

// function length(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     count++;
//   }
//   console.log(count);
// }
// length([1, 2, 10, 50, 3, 4, 5]);

// Q.4

// function common(arr1, arr2) {
//   let common_arr = [];

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       common_arr.push(arr1[i]);
//     }
//   }

//   console.log(common_arr);
// }
// common([1, 3, 5, 7, 9], [1, 2, 4, 6, 7, 9]);

// Q.5

// function count(arr, num) {
//   let cout = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       cout++;
//     }
//   }
//   console.log(cout);
// }
// count([1, 2, 1, 3, 1, 5, 6, 5], 1);

// Q.6

// function same(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.length === str.length) {
//       arr.push(str);
//     }
//   }
//   console.log(arr);
// }
// same([1, 2, 3, 4, 5], "Table");

// Q.7

// function longestWord(sentence) {
//   let count = sentence.split(" ");
//   let largest_word = "";

//   for (let i = 0; i < count.length; i++) {
//     if (count[i].length > largest_word.length) {
//       largest_word = count[i];
//     }
//   }

//   console.log("Longest_word:",largest_word);
// }
// longestWord("I am the longest word in the sentence");

// Q.8

// function capitalizeWords(sentence) {
//   console.log(sentence[0].toUpperCase() + sentence.slice(1));
// }
// capitalizeWords("mayank");

// Q.9

// function sumDigits(num) {
//   let count = 0;

//   for (let i = 0; i < num.length; i++) {
//     count += Number(num[i]);
//   }

//   console.log(count);
// }
// sumDigits("123454");

// Q.10

// function isAnagram(str1, str2) {
//   let count = 0;

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = 0; j < str2.length; j++) {
//       if (str1[i] === str2[j]) {
//         count++;
//       }
//     }
//   }

//   if (count === str1.length) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isAnagram("listen", "silent");
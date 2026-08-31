// Q.1

// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.2

// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.3

// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let j = 1; j <= i - 1; j++) {
//     str += "  ";
//   }

//   for (let k = 5; k >= i; k--) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.4

// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let k = 4; k >= i; k--) {
//     str += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }

//   console.log(str);
// }

// Q.5

// for (let i = 5; i >= 1; i--) {
//   let str = "";

//   for (let k = 4; k >= i; k--) {
//     str += " ";
//   }

//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.6

// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let j = 1; j <= i - 1; j++) {
//     str += "* ";
//   }

//   for (let m = 1; m <= 1; m++) {
//     str += "* ";
//   }

//   for (let l = 1; l <= i - 1; l++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.7

// for (let i = 5; i >= 1; i--) {
//   let str = "";

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let j = 1; j <= i - 1; j++) {
//     str += "* ";
//   }

//   for (let m = 1; m <= 1; m++) {
//     str += "* ";
//   }

//   for (let l = 1; l <= i - 1; l++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.8

// for (let i = 1; i <= 5; i++) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let l = 1; l <= i; l++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.9

// for (let i = 5; i >= 1; i--) {
//   let str = "";

//   for (let j = 1; j <= i; j++) {
//     str += "* ";
//   }

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let k = 4; k >= i; k--) {
//     str += "  ";
//   }

//   for (let l = 1; l <= i; l++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// Q.10

// function hollow_square(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let str = "";

//     for (let j = 1; j <= rows; j++) {
//       if (
//         i === 1 ||
//         j === 1 ||
//         i === rows ||
//         j === rows ||
//         i === j ||
//         (i === i && j === rows + 1 - i)
//       ) {
//         str += "* ";
//       } else {
//         str += "  ";
//       }
//     }
//     console.log(str);
//   }
// }
// hollow_square(7);

// Q.11

// function same_num_pattern(num) {
//   console.log("12");

//   for (let i = 1; i <= num; i++) {
//     let str = "";

//     for (let j = 1; j <= i; j++) {
//       str += `${i} ${""}`;
//     }
//     console.log(str);
//   }
// }
// same_num_pattern(5);

// Q.12

// function num_pattern(num) {
//     console.log("11");

//   for (let i = 1; i <= num; i++) {
//     let str = "";

//     for (let j = 1; j <= i; j++) {
//       str += `${j} ${""}`;
//     }
//     console.log(str);
//   }
// }
// num_pattern(5);
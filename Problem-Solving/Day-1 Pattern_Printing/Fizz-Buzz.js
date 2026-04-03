
for (let i=1; i<=100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i, " -->  FizzBuzz");
    }  
    else if (i % 3 === 0) {
        console.log(i, " -->  Fizz");
    }
    else if (i % 5 === 0) {
        console.log(i, " -->  Buzz");
    }
    
}


















// chat-------------------------------------------------------------------------------------------------------------------------
// Shivani Vishwakarma
// 12:11
// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 2, 220];

// let maxNo = input[0]; // 1
// let secondMaxNo = "";
// let thirdMaxNo = "";

// for (let i = 0; i < input.length; i++) {
//   const currVal = input[i];
//   if (currVal > maxNo) {
//     thirdMaxNo = secondMaxNo;
//     secondMaxNo = maxNo;
//     maxNo = currVal;
//   } else if (currVal > secondMaxNo) {
//     thirdMaxNo = secondMaxNo;
//     secondMaxNo = currVal;
//   } else if (currVal > thirdMaxNo) {
//     thirdMaxNo = currVal;
//   }
// }

// console.log({ maxNo, secondMaxNo, thirdMaxNo });
// C12 |

// Vidhya Skill School
// 12:23
// } else if (currVal > secondMaxNo && currVal < maxNo) {

// Pranav Khare
// 12:29
// 3

// Vidhya Skill School
// 12:36
// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220];

// let maxNo = input[0]; // 1
// let secondMaxNo = "";
// let thirdMaxNo = "";

// for (let i = 1; i < input.length; i++) {
//   const currVal = input[i]; // 1 , 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220
//   if (currVal > maxNo) {
//     // 4 > 1, 6 > 4, 10 > 6, 3>10, 10>10, 11 > 10, 222 > 11, 220 > 222
//     thirdMaxNo = secondMaxNo; // "", 1, 4, 6, 10
//     secondMaxNo = maxNo; // 1, 4, 6, 10, 11
//     maxNo = currVal; // 4, 6, 10, 11, 222
//   } else if (currVal > secondMaxNo && currVal < maxNo) {
//     // 1 < "" = false, 3>6, (10 > 6 && 10 < 10 ), (222 > 11 && 222 < 222), (220 > 11 && 220 < 222)
//     thirdMaxNo = secondMaxNo; // "", 11
//     secondMaxNo = currVal; // 1, 220
//   } else if (currVal > thirdMaxNo && currVal < secondMaxNo) {
//     // 1 < "" = false, 3>4, (10 > 4 && 10 < 6), (222 > 10 && 222 < 11)
//     thirdMaxNo = currVal;
//   }
// }

// console.log({ maxNo, secondMaxNo, thirdMaxNo }); // 222, 220, 11 || 222, 222, 220

// Vidhya Skill School
// 12:39
// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220];

// let maxNo = input[0];
// let secondMaxNo = "";
// let thirdMaxNo = "";

// for (let i = 1; i < input.length; i++) {
//   const currVal = input[i];
//   if (currVal > maxNo) {
//     thirdMaxNo = secondMaxNo;
//     secondMaxNo = maxNo;
//     maxNo = currVal; 
//   } else if (currVal > secondMaxNo) {
//     thirdMaxNo = secondMaxNo;
//     secondMaxNo = currVal;
//   } else if (currVal > thirdMaxNo) {
//     thirdMaxNo = currVal;
//   }
// }

// console.log({ maxNo, secondMaxNo, thirdMaxNo }); // 222, 220, 11 || 222, 222, 220
// FizzBuzz from 1 to 100
// Output:

// Multiples of 3 → "Fizz"
// Multiples of 5 → "Buzz"
// Multiples of both → "FizzBuzz"

// Aviral Jain
// 12:44
// fiz

// Pranav Khare
// 12:45
// 15 %3                    => fizz
// 15 %5                    => buzz
// 15 %3  && 15%5  => fizzbuzz
// 15 %3  && 15%5  => fizzbuzz
// 15 %3                    => fizz
// 15 %5                    => buzz

// Vidhya Skill School
// 12:47
// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220];

// let maxNo = input[0]; // 1
// let secondMaxNo = "";
// let thirdMaxNo = "";

// for (let i = 1; i < input.length; i++) {
//   const currVal = input[i];
//   if (currVal > maxNo) {
//     thirdMaxNo = secondMaxNo;
//     secondMaxNo = maxNo;
//     maxNo = currVal;
//   } else if (currVal > secondMaxNo && currVal < maxNo) {
//     thirdMaxNo = secondMaxNo;
//     secondMaxNo = currVal;
//   } else if (currVal > thirdMaxNo && currVal < secondMaxNo) {
//     thirdMaxNo = currVal;
//   }
// }

// console.log({ maxNo, secondMaxNo, thirdMaxNo }); // 222, 220, 11 || 222, 222, 220

// Vidhya Skill School
// 12:49
// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220,
//  57, 13, 89, 301, 76, 45, 199, 8, 64, 150,
//  23, 91, 7, 312, 54, 28, 140, 67, 5, 88,
//  210, 33, 72, 16, 99, 260]
// 11th largest no

// Vidhya Skill School
// 12:50
// const findLargestNo = (arr, k) => {
// // Write logic here
// }

// const input = [1, 4, 6, 10, 3, 10, 11, 2, 4, 2, 222, 222, 2, 220,
//  57, 13, 89, 301, 76, 45, 199, 8, 64, 150,
//  23, 91, 7, 312, 54, 28, 140, 67, 5, 88,
//  210, 33, 72, 16, 99, 260]
// const result = findLargestNo(input, 11);

// Aviral Jain
// 12:56
// EODR sytem kr le whats app pr ?
// C12 | Software Engineering | I'm an engineer


// review eachother work with better efficiency 


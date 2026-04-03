
// for (let i=1; i<=5; i++) {
//     let row = "";
//     for (let j=5; j>=i; j-=2) {
//             row += j;
//     }
//     console.log(row);
// }



// let num = 5;
// let result3 = 0;
//     for (let i = 1; i <= num; i++) {
//         result3 = result3 * 10 + i;
//     }
//     for (let i = num; i >= 1; i--) {
//         console.log(result3);
//         result3 = Math.floor(result3 / 10);
//     }



let num = 5;
let result3 = 0;
    for (let i = 1; i <= num; i++) {
        result3 = result3 * 10 + i;
    }
    for (let i = num; i >= 1; i--) {
        console.log(result3);
        result3 = Math.floor(result3 / 10);
    }
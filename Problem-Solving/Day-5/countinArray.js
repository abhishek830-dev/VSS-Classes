// Cout the occurences of the element in the array and return the count in the form of object

// input - [1,5,10,4,22,345,3,1,2,5,6,7]

// output - {
//   1: 2,
//   5: 2,
//   10: 1,
//   4: 1,
//   22: 1,
//   345: 1,
//   3: 1,
//   2: 1,
//   6: 1,
//   7: 1
// }

const arr = [1,5,10,4,22,345,3,1,2,5,6,7];
function countInArray(arr) {
    const count = {};
    for (let i=0; i<arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
        } else {
            count[arr[i]] = 1;
        }
    }
    return count;
}
console.log(countInArray(arr));
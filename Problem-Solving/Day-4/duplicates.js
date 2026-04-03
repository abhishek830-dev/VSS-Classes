// remove duplicates from the array
const input = [10,5,4,3,2,4,1, 2, 2, 3, 4, 4, 5,5,5,5,5,5,5,5,5];
function removeDuplicates(input) {
    const unique = [];
    for (let i=0; i<input.length; i++) {
        if (unique.indexOf(input[i])=== -1) {
            unique.push(input[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(input));
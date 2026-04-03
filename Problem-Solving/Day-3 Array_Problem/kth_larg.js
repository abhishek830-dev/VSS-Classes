const input = [5,4,13,13,10,3,2,1]

// Write your Code here

const result = findkthlargest(input, 3);

function findkthlargest(input, k) {
  input.sort((a, b) => b-a);
  return input[k-1];
}
console.log(result);
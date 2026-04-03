// Now we solve this using object without using loop

const str = "ankita jain";
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const count = {};
  for (const char of str) {
    if (vowels.includes(char)) {
        count[char] = (count[char] || 0) + 1;
    }
}
return count;
}
console.log(countVowels(str));




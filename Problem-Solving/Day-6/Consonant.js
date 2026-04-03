// Find consonant in the string

const str = "Ankita jain";
function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const count = {};
  str = str.toLowerCase();
  for (const char of str) {
    if (char === " ") continue;
    if (!vowels.includes(char)) {
      count[char] = (count[char] || 0) + 1;
    }
  }
  return count;
}
console.log(countConsonants(str));

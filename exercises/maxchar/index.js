// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
// function maxChar(str) {
//   const chars = {};
//   // const keys = Object.keys(chars)
//   // let max = chars[str[0]];
//   for (let i = 0; i < str.length; i++) {
//     if (!chars[str[i]]) {
//       chars[str[i]] = 1;
//     } else {
//       chars[str[i]]++;
//     }
//   }

//   const max = Object.keys(chars).sort((a, b) => chars[b] - chars[a])[0];
//   // let arr = Object.values(chars);
//   // let max = Math.max(...arr);
//   return max
// }


// presented solution
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

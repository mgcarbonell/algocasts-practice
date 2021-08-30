// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let nString = n.toString();
//   let isNegative = Math.sign(n);
//   // console.log(nString);
//   let reversedStr = nString.split('').reverse();
//   let reversedInt = parseInt(reversedStr.join(''));
//   if (isNegative === -1) {
//     return reversedInt * -1;
//   }
//   else return reversedInt
// }

// function reverseInt(n) {
//   let reversed = n.toString().split('').reverse().join('');
//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   }
//   return parseInt(reversed);
// }
function reverseInt(n) {
  let reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

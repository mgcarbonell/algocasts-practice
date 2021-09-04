// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
Attempting Solution 1
*/
// function vowels(str) {
//   const dictionary = {
//     a: 0,
//     e: 0,
//     i: 0,
//     o: 0,
//     u: 0
//   };
//   const input = str.toLowerCase();

//   for (let i = 0; i < input.length; i++) {
//     // console.log(input[i])
//     if (dictionary[input[i]] == input[i]) {
//       dictionary[input[i]]++;
//     }
//   }

//   console.log(dictionary)
//   const sum = Object.values(dictionary).reduce((a, b) => a + b);

//   return sum;
// }

/*
Presented Solution 1
*/
// function vowels(str) {
//   const vowelList = ['a', 'e', 'i', 'o', 'u'];
//   let count = 0;

//   for (let char of str.toLowerCase()) {
//     if (vowelList.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

/*
Presented Solution 2: RegExp
g = global, does not stop when it reaches the first
i = insensitive, case does not matter
*/
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);

  return matches ? matches.length : 0;
}

module.exports = vowels;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// first attempt
// function anagrams(stringA, stringB) {
//   const map = {};
//   let firstString = stringA.toLowerCase().split('');
//   let secondString = stringB.toLowerCase().split('');

//   for (let char of firstString) {
//     map[char] = (map[char] || 0) + 1
//   }
//   // console.log(map)
//   if (Object.keys(firstString) === Object.keys(secondString)) {
//     return true
//   } else {
//     return false
//   }

// }

/**
 * Solution 1
 */
function anagrams(stringA, stringB) {
  const mapA = constructCharMap(stringA);
  const mapB = constructCharMap(stringB);

  if (Object.keys(mapA).length !== Object.keys(mapB).length) {
    return false;
  }

  for (let char in mapA) {
    if (mapA[char] !== mapB[char]) {
      return false;
    }
  }

  return true;
}

function constructCharMap(str) {
  // will return a character map of a string
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

/**
 * Solution #2
 */

// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('')
// }

module.exports = anagrams;


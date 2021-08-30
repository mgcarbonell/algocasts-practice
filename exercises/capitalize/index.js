// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/**
 * Self made solution
 */

function capitalize(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
}

/**
 * Presented solution 1
 */

// function capitalize(str) {
//   // make empty array of 'words'
//   // split input by spaces to get array
//   // For each word in the array
//   //  uppercase the first letter 
//   //  join first letter w/ the rest of the string
//   //  push results into words array
//   // join words into a string & return
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

/**
 * Presented Solution 2
 */

// function capitalize(str) {
//   // create a result string w/ first char of input capitalized
//   // for each char in the string
//   //    IF char to the left is a space
//   //        Capitalize it and add to result
//   //    ELSE
//   //        add to result
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }


module.exports = capitalize;

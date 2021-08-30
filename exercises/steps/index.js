// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


/**
 * My Solution
 */

// function steps(n) {
//   let result = new Array(n).fill(' ');
//   result[0] = '#';
//   // console.log(result)

//   for (let i = 0; i < n; i++) {
//     console.log(result.join(''));
//     result[i + 1] = '#';
//   }

//   // return result.join()
// }

/**
 * Presented Solution 1
 */

// function steps(n) {
//   // From 0 to n
//   //  Create an empty string (stair)
//   //  From o to n
//   //    IF the cur col is equal to or less than the cur row
//   //      Add '#' to stair
//   //    ELSE
//   //      Add ' ' to stair
//   //  console.log 'stair'

//   for (let row = 0; row < n; row++) {

//     let stair = '';

//     for (let col = 0; col < n; col++) {

//       if (col <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair)

//   }
// }

/**
 * Recursive Solution 2
 */

function steps(n, row = 0, stair = '') {
  // base case
  if (n === row) return;

  // recursive case
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // recursive case
  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

module.exports = steps;

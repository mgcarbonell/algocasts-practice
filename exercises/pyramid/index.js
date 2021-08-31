// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// Some pseudo code
// From 0 to n (iterate through the rows)
//    Create an empty string
//    From 0 to ??? (columns)
//        IF the column should have a #
//            Add "#" to our empty string
//        ELSE
//            Add a space (' ') to our empty string
//    console.log empty string
// n * 2 - 1 = our base level
/**
 * n = 2
 * n * 2 = 4 - 1 = 3
 *  #
 * ###
 * 
 * So the other way to say that (n * 2) - 1 = base our level
 * (n * 2) - 1 = to our total col
 * n = rows
 * for placement of the # we can do something like: Math.floor((2 * n - 1) / 2)
 */

function pyramid(n) {
  // n = row
  // (n * 2) - 1 = col
  const mid = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid - row <= col && mid + row >= col) {
        level += '#';
      } else {
        level += ' ';
      }
    }
    console.log(level)
  }
}

// recursive function
// function pyramid(n, row = 0, level = '') {
//   // base case
//   if (row === n) {
//     return;
//   }

//   // recursive
//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   // state variables
//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;

//   // add ' ' or '#' to level
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }

//   return pyramid(n, row, level + add);
// }

module.exports = pyramid;


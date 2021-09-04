// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//      [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//      [8, 9, 4],
//      [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
We have an n * n square so it needs to run n times veritcally and n times horizontally.

Also it needs to spiral clockwise. 

That also means that our max number is going to be n ** 2. 
if we do 4 we know we need row length = 4, col length = 4
*/
/*
n = 3

[start col    end col
       '     '
      [1, 2, 3], <= start row
      [8, 9, 4],
      [7, 6, 5]  <= end row
]

next iteration...

[start col    end rol
       '     '
      [1, 2, 3], 
      [8, 9, 4], <= start row
      [7, 6, 5]  <= end row
]


Pseudo behind the algo
Create an empty array of arrays called 'results'
Create a counter variable, starting at int 1
Create vars to track start/end row/col
  start col & start row will always be 0
  end col & end row are dependent on n
    end col/row = n - 1
As long as (start col <= end col) && (start row <= end row)
  Loop from the start column a to end column
    At results[start_row][i] assign counter variable
    Increment counter
  Increment start row
  Loop from start row to end row
    At results[i][end_column] assign counter variable
    Increment counter
  Decrement end col
  ...repeat for other two sides

For example, we start at row 0
*/
function matrix(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let startCol = 0;
  let endCol = n - 1;
  let endRow = n - 1;

  while (startRow <= endRow && startCol <= endCol) {

  }

  return result;
}

module.exports = matrix;

// const result = []

// for (let i = 0; i < n; i++) {
//   result.push([]);
// }

// // state
// let counter = 1;
// let startCol = 0;
// let startRow = 0;
// let endCol = n - 1;
// let endRow = n - 1;

// while (startCol <= endCol && startRow <= endRow) {
//   // Assemble Top Row
//   for (let i = startCol; i <= endCol; i++) {
//     result[startRow][i] = counter;
//     counter++
//   }
//   startRow++;

//   // Assemble Right Column
//   for (let i = startRow; i <= endRow; i++) {
//     result[i][endCol] = counter;
//     counter++
//   }
//   endCol--;

//   // Assemble Bottom Row
//   for (let i = endCol; i >= startCol; i--) {
//     result[endRow][i] = counter;
//     counter++;
//   }
//   endRow--;

//   // Assemble Left Column (start col)
//   for (let i = endRow; i >= startRow; i--) {
//     result[i][startCol] = counter;
//     counter++;
//   }
//   startCol++;
// }

// return result;
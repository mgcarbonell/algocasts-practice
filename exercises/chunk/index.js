// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   // create an empty array to store chunks
//   // for each elem in unchunked array:
//   //    retrieve the last elem in 'chunked'
//   //    if last elem does not exist or if it's len == chunk size
//   //        push a new chunk into chunked with curr elem
//   //    else add cur elem into chunk
//   if (array.length === 0) return;

//   const chunked = [];
//   for (let elem of array) {
//     const prev = chunked[chunked.length - 1];
//     if (!prev || prev.length === size) {
//       chunked.push([elem]);
//     } else {
//       prev.push(elem);
//     }
//   }
//   return chunked;
// }
function chunk(array, size) {
  // create an empty array to store chunks
  // create 'index' & start @ 0
  // while index < array.length
  //  push slice of length "size" from array into chunked
  //  add 'size' to 'index'
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;

}

module.exports = chunk;

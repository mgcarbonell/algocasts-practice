// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
/*
loop through the array
  set up an inner loop to go from 0-> arr.length - i
    if current elem is larger than elem + 1
      swap
*/
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/*
From i = 0 < arr.length;
  Assume elem @ i is the smallest of the array (indexOfMin)
  For j from i + 1 -> end of arr.length
    See if there is an elem with lower value
      If there is, assign indexOfMin
  If idx of cur and idx of indexOfMine
    swap
*/
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

/*
Merge sort is usually done via recursive solution that uses two functions: merge and mergeSort. Each of these functions have a different purpose.

Within mergeSort is where the recursion will happen. Within the merge function there will be no recursion. 

in our merge function:
This will take in two sorted arrays (left and right)
Create a 'results' array
While there are still elements in /both/ arrays
  If the first elem of the left half < first in right half
    'shift' elem from left to results
  else
    'shift' elem from right into results arr
Take everything from the array that still has stuff in it and put it into results
this will look like: return [...results, ...left, ...right];

mergeSort function:
split the array into the smallest possible elem (arr.length = 1);
*/
function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

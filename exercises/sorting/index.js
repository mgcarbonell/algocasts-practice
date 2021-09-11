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

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

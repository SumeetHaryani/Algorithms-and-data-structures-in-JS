/**
 * Bubble sort
 * Worst and Average Case Time Complexity: O(n*n). Worst case occurs when array is reverse sorted.
 *  Best Case Time Complexity: O(n). Best case occurs when array is already sorted.
 */
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
// Optimized implementation of Bubble sort, if arr is already sorted
function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let swaps = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swaps = true;
      }
    }
    if (swaps === false) break;
  }
  return arr;
}
const result = bubbleSort2([7, 8, 9, 1, 2]);
console.log('result', result);

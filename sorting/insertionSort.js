/**
 * Insertion Sort
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    return arr;
  }
}

const result = insertionSort([5, 6, 8, 10, 7]);
console.log('result', result);

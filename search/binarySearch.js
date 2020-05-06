/**
 * Input:- a sorted array of integers
 * Output:-return the index where the value passed to the function is located. If the value is not found, return -1
 * eg:-binarySearch([1,2,3,4,5,6],4) // 3
       binarySearch([1,2,3,4,5,6],6) // 5
 * T(n)=O(log(n))
 */
function binarySearch(arr, val) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    const mid = Math.floor((i + j) / 2);
    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] > val) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return -1;
}
const result = binarySearch([1, 2, 3, 4, 5, 6], 6);
console.log('result', result);

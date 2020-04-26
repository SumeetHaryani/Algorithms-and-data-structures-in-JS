/**
 * Input:Sorted array of integers/
 * Output: first pair where sum is zero
 * eg:- sumZero([-3,-2,-1,0,1,2,3])-> [-3,3]
 * T(n)=O(n)
 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return [];
}
const result = sumZero([-3, -2, -1, 0, 1, 2]);
console.log('result', result);

/**
 * Input:-an array of integers and a number called n.
 * Output:-the maximum sum of n consecutive elements in the array.
 * eg:-maxSubarraySum([1,2,5,2,8,1,5],2) // 10
       maxSubarraySum([1,2,5,2,8,1,5],4) // 17
 * T(n)=O(n)
 */
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length ; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
const result = maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4);
console.log('result', result);

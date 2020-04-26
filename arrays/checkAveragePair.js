/**
 * Input:-Given a sorted array of integers and a target average
 * Output:-determine if there is a pair of values in the array where the average of the pair equals the target average
 * eg:- checkAveragePair([1,2,3], 2.5) ->true
 * T(n)=O(n)
 */
function checkAveragePair(arr, avg) {
  if (arr.length === 0) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    const calcAvg = (arr[i] + arr[j]) / 2;
    if (calcAvg === avg) {
      return true;
    }
    if (calcAvg < avg) {
      i++;
    } else {
      j--;
    }
  }
  return false;
}
const result = checkAveragePair([1,3,3,5,6,7,10,12,19], 8);
console.log('result', result);

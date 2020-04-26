/**
 * Input:- a sorted array
 * Output:- Count unique values in the array.
 * eg:-countUniqueValues([1,1,1,1,1,2]) -> 2
       countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) -> 7
 */
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let count = 0;
  let i = 0;
  let j = 0;
  while (j !== arr.length + 1) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      console.log(arr[i]);
      count++;
      i = j;
    }
  }
  return count;
}
// alternate usage of ptrs where unique values are present in begning of arr
function countUniqueValues1(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }
  return i + 1;
}
const result = countUniqueValues1([1,2,3,4,4,4,7,7,12,12,13]);
console.log('Count-', result);

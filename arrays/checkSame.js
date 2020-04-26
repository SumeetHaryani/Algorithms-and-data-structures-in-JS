/**
 * Check if every value in arr1 has its corresponding value squared in arr2.
 * The frequency of values must be the same.
 */

function checkSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const i of arr1) {
    const index = arr2.indexOf(i ** 2);
    if (index === -1) {
      return false;
    }
    arr2.splice(index, 1);
  }
  return true;
}

const result = checkSame([1, 2, 3], [4, 9, 1]);
console.log('result->', result);

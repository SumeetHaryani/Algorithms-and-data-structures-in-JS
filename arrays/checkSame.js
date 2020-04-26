/**
 * Check if every value in arr1 has its corresponding value squared in arr2.
 * The frequency of values must be the same.
 */
/**
 * Solution1
 * T(n)=O(n^2)
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
// const result = checkSame([1, 2, 3], [4, 9, 1]);
// console.log('result->', result);
/**
 * Solution2-using objects
 * T(n)=O(n)
 */
function checkSame1(arr1, arr2) {
  const counter1 = {};
  const counter2 = {};
  for (const i of arr1) {
    counter1[i] = (counter1[i] || 0) + 1;
  }
  for (const i of arr2) {
    counter2[i] = (counter2[i] || 0 )+ 1;
  }

  for (const key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key ** 2]) {
      return false;
    }
  }
  return true;
}
const result = checkSame1([1, 2, 3], [4, 9, 1]);
console.log('result->', result);

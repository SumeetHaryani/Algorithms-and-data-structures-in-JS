/**
 * Input:-accepts an array of arrays
 * Output:-returns a new array with all values flattened.
 * eg:-flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
 * T(n)=O()
 */
function flatten(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultArr = resultArr.concat(flatten(arr[i]));
    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}
const result = flatten([1, 2, 3, [4, 5]]);
console.log('result->', result);
// add  solution

/**
 * Input:- accepts an array and a callback function
 * Output:-returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
 * eg:-someRecursive([1, 2, 3, 4], val => val % 2 !== 0) // true
 * T(n)=O()
 */
function someRecursive(arr, cb) {
  if (!arr.length) return false;
  return cb(arr[0]) || someRecursive(arr.slice(1), cb);
}
const result = someRecursive([1, 2, 3, 4], (val) => val % 2 !== 0);
console.log('result->', result);
// add  solution

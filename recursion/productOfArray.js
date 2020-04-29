/**
 * Input:-takes in an array of numbers
 * Output:-eturns the product of them all

 * eg:-productOfArray([1,2,3]) // 6
 * T(n)=O()
 */
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
const result = productOfArray([1, 2, 3]);
console.log('result->', result);

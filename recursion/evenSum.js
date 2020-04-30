/**
 * Input:-object
 * Output:- sum of all even numbers in an object which may contain nested objects
 * eg:-nestedEvenSum(obj1); // 6
 * T(n)=O()
 */
function nestedEvenSum(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}
const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};
const result = nestedEvenSum(obj1);
console.log('result->', result);
// add  solution

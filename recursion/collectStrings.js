/**
 * Input:-accepts an object
 * Output:- returns an array of all the values in the object that have a typeof string.
 * eg:-
 * T(n)=O()
 */
function collectStrings(obj) {
  let result = [];
  for (key in obj) {
    if (typeof obj[key] === 'string') {
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(collectStrings(obj[key]));
    }
  }
  return result;
}
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};
const result = collectStrings(obj);
console.log('result->', result);

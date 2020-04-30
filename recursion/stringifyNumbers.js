/**
 * Input:- takes in an object and finds all of the values which are numbers and converts them to strings.
 * Output:-object
 * T(n)=O()
 */
function stringifyNumbers(obj) {
  const newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

const obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
const result = stringifyNumbers(obj);
console.log('result->', result);
// add  solution

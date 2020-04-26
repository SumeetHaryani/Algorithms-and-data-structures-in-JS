/**
 * Input:-accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in
 * Output:- return true if duplicates are there
 * eg:-checkDuplicates(1,2,3)->false
 * T(n)=O(n)
 */
function checkDuplicates(...args) {
  const counter = {};
  for (const i of args) {
    counter[i] = (counter[i] || 0 )+ 1;
  }

  for (const key in counter) {
    if (counter[key] !== 1) {
      return true;
    }
    return false;
  }
}
const result = checkDuplicates(1, 2, 2);
console.log('result-', result);

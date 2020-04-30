/**
 * Input:-an array of words
 * Output:-return a new array containing each word capitalized.
 * eg:-capitalizeWords(['i', 'am', 'learning', 'recursion']) // ['I', 'AM', 'LEARNING', 'RECURSION']
 * T(n)=O()
 */
function capitalizeWords(arr) {
  const result = [];
  if (!arr.length) return result;

  result.push(arr[0].toUpperCase());
  return result.concat(capitalizeWords(arr.slice(1)));
}
const result = capitalizeWords(['i', 'am', 'learning', 'recursion']);
console.log('result->', result);

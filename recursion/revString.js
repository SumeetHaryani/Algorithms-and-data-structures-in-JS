/**
 * Input:-accepts a string
 * Output:- returns a new string in reverse
 * eg:- strReverse('awesome') // 'emosewa'
 * T(n)=O()
 */
function strReverse(str) {
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + strReverse(str.slice(0, str.length - 1));
}
const result = strReverse('abcde');
console.log('result->', result);

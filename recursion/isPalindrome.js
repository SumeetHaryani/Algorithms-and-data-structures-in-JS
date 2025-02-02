/**
 * Input:-string
 * Output:-returns true if the string passed to it is a palindrome. Otherwise it returns false
 * eg:-isPalindrome('tacocat') // true
 * T(n)=O()
 */
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  else{
  return false;
  }
}
const result = isPalindrome('tacocat');
console.log('result->', result);

/**
 * Input:- takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * Output:- true if str is subsequence
 * eg:-isSubsequence('hello', 'by hecatl in lo world')->true
 * T(n)=O(n)
 */
function isSubsequence(str1, str2) {
  let j = 0;
  for (const char of str2) {
    if (char === str1[j]) {
      j++;
    }
    if (j === str1.length) {
      return true;
    }
  }
  return false;
}
const result = isSubsequence('hello', 'by hecatl in lo world');
console.log('result', result);

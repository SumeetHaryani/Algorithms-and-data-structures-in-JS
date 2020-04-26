/**
 *  check whether two given strings are anagram of each other or not.
 *  An anagram is a word, phrase, or name that is formed from the letters of another word.
 * checkAnagram('man','amn')->true
 */

// Solution-1 Using Objects
// T(n)=O(n)
function checkAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const lookup = {};
  for (const i of word1) {
    lookup[i] = lookup[i] || 0 + 1;
  }
  for (const i of word2) {
    if (!lookup[i]) {
      return false;
    }
    lookup[i]--;
  }
  return true;
}
const result = checkAnagram('ike', 'kei');
console.log('result->', result);

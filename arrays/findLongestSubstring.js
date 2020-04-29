function findLongestSubstring(str) {
  let longest = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // Store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

const result = findLongestSubstring('rithmschool');
console.log(result);

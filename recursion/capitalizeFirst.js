/**
 * Input:-an array of strings
 * Output:-capitalize the first letter of each string in the array
 * eg:-capitalizeFirst(['car', 'taco', 'banana']) // ['Car','Taco','Banana']
 * T(n)=O()
 */

function capitalizeFirst(arr) {
  const result = [];
  if (!arr.length) {
    return result;
  }
  result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
  return result.concat(capitalizeFirst(arr.slice(1)));
}
const result = capitalizeFirst(['car', 'taco', 'banana']);
console.log('result->', result);
// add  solution

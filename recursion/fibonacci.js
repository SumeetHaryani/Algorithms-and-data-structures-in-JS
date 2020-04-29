/**
 * Input:-accepts a number
 * Output:- returns the nth number in the Fibonacci sequence.
 * eg:-fibonacci(4) //3
 * T(n)=O()
 */
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const result = fibonacci(4);

console.log('result->', result);

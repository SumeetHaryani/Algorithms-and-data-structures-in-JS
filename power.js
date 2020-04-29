/**
 * Input:-accepts a base and an exponent
 * Output:-return the power of the base to the exponent
 * eg:- power(2,4) // 16
 * T(n)=O()
 */
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, --exp);
}
const result = power(2, 4);
console.log('result->', result);
// add  solution

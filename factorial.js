/**
 * Input:-accepts a number
 * Output:-returns the factorial of that number.
 * eg:- factorial(4)->24
 * T(n)=O()
 */

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

const result=factorial(4)
console.log('result->',result)
//add  solution
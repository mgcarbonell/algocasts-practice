// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// time complexity: O(2**n)
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return (fib(n - 1) + fib(n - 2))
// }

// memoized
// how do improve the recursive solution from being exponential?
// store arguments of each function along with the result
// if the function is called again with the same arguments, return the
// precomputed result instead of running the function again

// let's write a generic memoize function that we can use AGAIN OVER AND OVER
// our memoize function will take in a function (fn) and RETURN A FUNCTION
// our memoize function will use a CACHE (an object O(1) look up)
// we will also use a spread args on our function because we don't "know"
// how many arguments our function will take, but it will take some
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) { // check cache
      return cache[args]; // if it exists, return it
    }
    // if it passes, we've never called it before and need to cache
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  if (n < 2) return n;

  return (fib(n - 1) + fib(n - 2));
}

fib = memoize(fib);


// iterative solution presented in class
// there's a trick: the first two numbers cannot be generated (0, 1) so we add
// them to our result array straight off
// run time = O(n)
// function fib(n) {
//   const result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//     result.push(a + b);
//   }

//   return result[n];
// }


module.exports = fib;

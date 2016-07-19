/** Defines utilities for working with primes */

/**
 * Determine if a number is an integer.
 * Implementation from kennebec's answer to a StackOverflow question:
 * http://stackoverflow.com/questions/3885817/how-do-i-check-that-a-number-is-float-or-integer
 *
 * @param x the number we are curious about
 * @return true if x is an integer. Otherwise, false.
 */
function isInteger(x) {
  return x % 1 === 0;
}

function isPrime(x) {
  // base cases
  if(x === 1 || x === 2 || x === 3) {
    return true;
  }
  // x is even
  else if(x % 2 === 0) {
    return false;
  }
  else {
    // check if x is divisible by odd numbers less than or equal to it's square root
    var sqrt = Math.sqrt(x);
    for(var i = 3; i <= sqrt; i += 2) {
        if(isInteger(x / i)) {
          return false; // We found a divisor. Not prime!
        }
    }
    return true; // We made it through the loop without finding a divisor. Prime!
  }
}

/**
 * List all prime numbers up to and including the passed in variable.
 * This function and it's helpers is a re-implementation of a college Lisp project.
 */
function listPrimesUpTo(upperBound) {
  var primes = [];
  for(var i = 1; i <= upperBound; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

exports.listUpTo = listPrimesUpTo;
exports.isPrime = isPrime;

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
  return n % 1 === 0;
}

/**
 * Determines whether any of the divisors divide x.
 *
 * @param potentialDivisors we will attempt to divide x by each of these
 * @param x we are checking if the potential divisors divide this
 * @return true if at least one of the prime divisors divides x
 */
function doesDivide(potentialDivisors, x) {
  for(var i = 0; i < primeDivisors.length; i++){
    var divisor = potentialDivisors[i];
    if(divisor != 1 && divisor != x) {
      var quotient = x / divisor;
      if(isInteger(quotient)){
        return true; // we found a divisor!
      }
    }
  }

  return false; // we made it through the loop without finding a divisor
}

function isPrime(x) {
  // base cases
  if(x === 1 || x === 2 || x ===3) {
    return true;
  }
  // x is even
  else if(x % 2 === 0) {
    return true;
  }
  else {
    // check if x is divisible by odd numbers less than or equal to it's square root
    var sqrt = Math.sqrt(x);
    for(var i = 3; i <= sqrt; i += 2) {
        if(isInteger(x / i)) {
          return true; // we found a divisor!
        }
    }
    return false; // we made it through the loop without finding a divisor
  }
}

/**
 * List all prime numbers up to and including the passed in variable.
 * This function and it's helpers is a re-implementation of a college Lisp project.
 */
function listPrimesUpTo(upperBound) {
    return [1, 2, 3, 5, 7, 9, 11, 13];
}

exports.listUpTo = listPrimesUpTo;
exports.isPrime = isPrime;

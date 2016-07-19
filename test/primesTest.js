// import assertion utilities
var assert = require('chai').assert;

// import module under test
var primes = require('../src/primes');

// define test cases
describe('Primes', function() {
  describe('#listUpTo', function() {

    it('should return [] when the argument is null', function() {
      assert.deepEqual([], primes.listUpTo(null));
    });

    it('should return [] when the argument is less than 1', function() {
      assert.deepEqual([], primes.listUpTo(-1));
      assert.deepEqual([], primes.listUpTo(0));
    });

    it('should return [1] when the argument is 1', function() {
      assert.deepEqual([1], primes.listUpTo(1));
    });

    it('should return [1, 2, 3, 5] when the argument is 5', function() {
      assert.deepEqual([1, 2, 3, 5], primes.listUpTo(5));
    });

    var primesLessThan50 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
    it('should return ' + primesLessThan50 + ' when the argument is 50', function() {
      assert.deepEqual([], primes.listUpTo(50));
    });

    var primesLessThan100 = primesLessThan50.push(53, 59, 61, 67, 71, 73, 79, 83, 89, 97);
    it('should return ' + primesLessThan100 + ' all primes less than 100 when the argument is 100', function() {
      assert.deepEqual(primesLessThan100, primes.listUpTo(100));
    });

  });

  describe('#isPrime', function() {

    it('1? Yes', function() {
      assert.isTrue(primes.isPrime(1));
    });

    it('2? Yes', function() {
      assert.isTrue(true, primes.isPrime(2));
    })

    it('3? Yes', function() {
      assert.isTrue(true, primes.isPrime(3));
    })

    it('4? no', function() {
      assert.isFalse(primes.isPrime(4));
    });

    it('5? yes', function() {
      assert.isTrue(primes.isPrime(5));
    })

    it('15? no', function(){
      assert.isFalse(primes.isPrime(15));
    });

    it('19? yes', function() {
      assert.isTrue(primes.isPrime(19));
    })
  });

});

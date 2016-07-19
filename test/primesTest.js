// import assertion utilities
var assert = require('chai').assert;

// import module under test
const primes = require('../src/primes');

describe('Primes', function() {
  describe('#listUpTo', function() {
    it('should return [] when the argument is null', function() {
      assert.equal([], primes.listUpTo(null));
    });
  });
});

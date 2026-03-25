/**
 * BIT MANIPULATION PATTERN TEMPLATE
 *
 * Mental model:
 * → Work at binary level to optimize space and operations
 *
 * Common uses:
 * 1) XOR cancellation (find unique element)
 *    a ^ a = 0
 *    a ^ 0 = a
 *
 * 2) Check if number is even/odd
 *    n & 1 === 0 → even
 *
 * 3) Check / set / remove bits
 *    n & (1 << i) → check bit
 *    n | (1 << i) → set bit
 *    n & ~(1 << i) → remove bit
 *
 * 4) Toggle bits
 *    n ^ (1 << i)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */


/** XOR - Find single number */
function singleNumber(nums) {
  let result = 0;

  for (let num of nums) {
    result = result ^ num;
  }

  return result;
}


/** Check if number is even */
function isEven(n) {
  return (n & 1) === 0;
}


/** Check if ith bit is set */
function isBitSet(n, i) {
  return (n & (1 << i)) !== 0;
}


/** Set ith bit */
function setBit(n, i) {
  return n | (1 << i);
}


/** Remove (clear) ith bit */
function clearBit(n, i) {
  return n & ~(1 << i);
}


/** Toggle ith bit */
function toggleBit(n, i) {
  return n ^ (1 << i);
}


/** Count number of 1 bits (Hamming Weight) */
function countBits(n) {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n = n >> 1;
  }

  return count;
}


/** Check if number is power of 2 */
function isPowerOfTwo(n) {
  if (n <= 0) return false;
  return (n & (n - 1)) === 0;
}
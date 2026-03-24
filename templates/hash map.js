/**
 * Hash Map Pattern Template
 *
 * Use this pattern when:
 * - You need fast lookups (O(1))
 * - You are checking for complements (e.g. target - current)
 * - You need to detect duplicates
 * - You need to count frequency
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function exampleHashMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    // 1. Define what you're looking for (problem-specific)
    const complement = target - current;

    // 2. Check if you've already seen it
    if (map.has(complement)) {
      // 3. If yes → you found the answer
      return [map.get(complement), i];
    }

    // 4. Store current value for future iterations
    map.set(current, i);
  }

  return [];
}
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

function exampleHashMap(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    // 1. Define key
    const key = current;

    // 2. QUERY
    if (map.has(key)) {
      // do something
    }

    // 3. UPDATE
    map.set(key, (map.get(key) || 0) + 1); // example: frequency
  }

  return map;
}

/** Frequency counter */
function frequencyCounter(nums) {
  const map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1); // Add 1 to the num counter, if it doesn't exist, start at 0.
  }

  return map;
}

/** Detect duplicates */
function hasDuplicate(nums){
  const map = new Map();

  for (let num of nums) {
    if (map.has(num)) return true;
    map.set(num, true);
  }

  return false;
}

/** Detect duplicates using set */
function hasDuplicateSet(nums){
  const set = new Set(nums);
  return set.size !== nums.length;
}

/** Grouping */
function groupByKey(strings) {
  const map = new Map();

  for (let str of strings) {
    const key = str.split('').sort().join('');

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(str);
  }

  return Array.from(map.values());
}
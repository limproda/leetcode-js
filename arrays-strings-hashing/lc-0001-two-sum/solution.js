// Hash Map Approach
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {} // not a real map, but an object

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if(map.hasOwnProperty(complement)){
            return [map[complement], i];
        }
        map[nums[i]] = i;
    }
    return [];
};

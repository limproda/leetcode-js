/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {};
    const total = Math.floor(nums.length/2);
    if(nums.length == 1)
    {
        return nums[0];
    }
    for (let i = 0; i < nums.length; i++){
        if(map.hasOwnProperty(nums[i])){
            map[nums[i]] ++;
            if(map[nums[i]]>total)
            {
                return nums[i];
            }
        }
        else
        {
            map[nums[i]] = 1;
        }
    }
    return 0;
};
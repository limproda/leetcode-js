# LC 88 - Merge Sorted Array

## Pattern
Two Pointers / Reverse Merge

## Difficulty
Easy

## What the problem asks
Merge `nums2` into `nums1` as one sorted array, modifying `nums1` in-place.

## First idea
Append all elements from `nums2` into `nums1` and sort the result.

## Why the first idea is not optimal
It works, but it does not take advantage of the fact that both arrays are already sorted.
Its time complexity is O((m + n) log(m + n)) because of the final sort.

## Final approach
Start from the end of both arrays and place the largest remaining value into the last available position in `nums1`.
Use three pointers:
- one for the last valid element in `nums1`
- one for the last element in `nums2`
- one for the write position in `nums1`

At each step, place the larger value at the write position and move the corresponding pointer left.

## Complexity
- Time: O(m + n)
- Space: O(1)

## Mistakes I made
- My first solution used `.sort()`, which is valid but not optimal.
- I initially forgot that JavaScript sorts numbers as strings unless a comparator is provided.
- I tried to think about inserting from the front, but that makes the solution much harder.

## What to remember
When the input is already sorted, look for a way to merge instead of sorting again.
If the destination array has free space at the end, working from right to left can avoid shifting elements.
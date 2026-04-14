# LC 35 - Search Insert Position

## Pattern
Binary Search

## Difficulty
Easy

## What the problem asks
Given a sorted array of distinct integers, return the index of `target` if it exists.
If it does not exist, return the index where it should be inserted to keep the array sorted.

The required runtime is `O(log n)`, so the intended solution is binary search.

## Approach
Use binary search with two boundaries:

- `left` starts at the beginning of the array
- `right` starts at the end of the array
- on each iteration, compute `mid`
- if `nums[mid] === target`, return `mid`
- if `nums[mid] < target`, move `left` to `mid + 1`
- if `nums[mid] > target`, move `right` to `mid - 1`

If the loop ends without finding the target, `left` will be exactly the position where the target should be inserted.

## Complexity
- Time: O(log n)
- Space: O(1)

## Mistakes I made
- I correctly identified that this was a binary search problem, but I tried to solve it by slicing the array instead of moving boundaries.
- I was modifying the array itself, when the correct approach is to keep the array unchanged and move `left` and `right`.

## What to remember
In binary search, do not shrink the array itself.
Keep the array unchanged and move the search boundaries instead.

The key idea is:
- `left` and `right` define the current search range
- `mid` must be recalculated every iteration
- if the target is not found, `left` ends up at the correct insertion position
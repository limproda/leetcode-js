# LC 1 - Two Sum

## Pattern
Arrays / Hash Map

## Difficulty
Easy

## What the problem asks
Find two indices such that their values add up to the target.

## First idea - Brute force
Try all possible pairs using two nested loops.

## Better idea - Hash map
Store previously seen numbers in a hash map and look for the complement.

## Final approach
Iterate through the array once:
- compute `target - nums[i]`
- check if it already exists in the map
- if it does, return the indices
- if not, store the current value

## Complexity
- Time: O(n)
- Space: O(n)

## Mistakes I made
- Started with nested loops
- Didn’t initially think about the “complement seen before” approach

## What to remember
When you need to find pairs, complements, or perform fast lookups, think about using a hash map.
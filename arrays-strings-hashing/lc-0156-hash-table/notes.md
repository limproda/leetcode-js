# LC 169 - Majority Element

## Pattern
Boyer-Moore Voting Algorithm / Array

## Difficulty
Easy

## What the problem asks
Given an array `nums`, return the element that appears more than `⌊n / 2⌋` times.
The problem guarantees that a majority element always exists.

## First idea
Use a hash map to count how many times each number appears.
As soon as one number appears more than `Math.floor(nums.length / 2)`, return it.
This works well, but it uses extra space.

## Final approach
Use the Boyer-Moore Voting Algorithm.

- Keep a `candidate`
- Keep a `count`
- If `count` becomes 0, choose the current number as the new candidate
- If the current number is equal to the candidate, increase `count`
- Otherwise, decrease `count`
- At the end, the candidate is the majority element

Why it works:
every time we match the majority element with a different element, they "cancel out".
Since the majority element appears more than half of the time, it survives all cancellations.

## Complexity
- Time: O(n)
- Space: O(1)

## Mistakes I made
- I wrote `O(1)` complexity when my hash map solution actually uses extra memory
- I focused first on counting frequencies and did not spot the Boyer-Moore pattern
- I added unnecessary code like the special case for `nums.length === 1`
- I returned `0` at the end even though the problem guarantees a valid answer
- I used a plain object instead of thinking about whether `Map` would be cleaner in JavaScript

## What to remember
- If a problem says one element appears more than `n / 2` times, think of Boyer-Moore
- Boyer-Moore is often the optimal solution when a majority is guaranteed
- Hash map is a valid first solution, but not the best in space
- Always double-check the stated constraints and guarantees
- Be careful with complexity: hash map counting is O(n) time and O(n) space
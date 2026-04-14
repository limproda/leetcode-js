# LC 136 - Single Number

## Pattern
Bit Manipulation (XOR)

## Difficulty
Easy

## What the problem asks
Find the element that appears only once, while all others appear exactly twice.

## First idea - Brute force
For each number, count how many times it appears.

## Better idea - Hash map
Store frequency of each number and return the one with count = 1.

## Final approach
Use XOR to cancel out duplicate numbers:

- initialize a variable `result = 0`
- iterate through the array
- for each number: `result = result ^ num`
- duplicates cancel out (`a ^ a = 0`)
- only the unique number remains

## Complexity
- Time: O(n)
- Space: O(1)

## Mistakes I made
- Tried using Set and Map (extra space not allowed)
- Thought about removing duplicates manually with an array (O(n²))
- Tried using sum/division instead of thinking about cancellation

## What to remember
When:
- every element appears twice except one
- space is constrained to O(1)

→ think about XOR

Key properties:
- `a ^ a = 0`
- `a ^ 0 = a`

Duplicates cancel each other out automatically.
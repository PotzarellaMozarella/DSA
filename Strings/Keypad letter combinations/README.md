
# Letter Combinations of a Phone Number

## Problem Description

You are given a string containing digits from 2-9 inclusive. Your task is to return all possible letter combinations that the number could represent. The result should be returned in any order.

A mapping of digits to letters (similar to a telephone keypad) is given below. Note that the digit '1' does not map to any letters.

```
2: "abc"
3: "def"
4: "ghi"
5: "jkl"
6: "mno"
7: "pqrs"
8: "tuv"
9: "wxyz"
```

**Example 1:**

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

**Example 2:**

Input: digits = ""
Output: []

**Example 3:**

Input: digits = "2"
Output: ["a","b","c"]

**Constraints:**

- 0 <= digits.length <= 4
- digits[i] is a digit in the range ['2', '9'].

## Function Signature

```javascript
/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    // Your code here
}
```

## Explanation

The problem requires generating all possible letter combinations based on the given digits-to-letters mapping. This can be solved using a recursive approach where we append letters corresponding to each digit one by one.

## LeetCode Link

[Letter Combinations of a Phone Number on LeetCode](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## Submission

When you have successfully implemented the `letterCombinations` function, you can submit your solution on LeetCode.

Happy coding!
```

I've added the LeetCode link to the problem statement. You can save this updated content in a file named `README.md` for your reference.
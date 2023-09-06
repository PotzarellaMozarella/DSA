# Remove Duplicates in a String

## Problem Statement

You are given a string, and your task is to write a JavaScript function that removes all duplicate characters from the string. The result should be a string where each character appears only once, maintaining the original order.

## Function Signature

```javascript
function removeDuplicates(str) {
  // Your code here
}
```

## Input
str (string): The input string containing characters. The length of the string can range from 0 to 10^5.
Output: A new string with duplicates removed, maintaining the original order of characters.

## Example
Here's how you can use the removeDuplicates function:
```
const inputString = "hello";
const result = removeDuplicates(inputString);
console.log(result); // Expected output: "helo"
```

## Constraints
The characters in the input string can be any valid Unicode characters.
The function should be case-sensitive, meaning that uppercase and lowercase letters are considered different characters.

## Note
The order of characters in the result string should match the order of the first occurrence of each character in the input string.
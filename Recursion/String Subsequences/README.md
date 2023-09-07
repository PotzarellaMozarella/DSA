# Print All Subsequences of a String

## Problem Statement

You are given a string, and your task is to write a JavaScript function that prints all the subsequences of the given string. A subsequence is a sequence of characters that appears in the same order as in the original string, but not necessarily consecutively.

## Function Signature

```javascript
function printAllSubsequences(str) {
  // Your code here
}
```
## Input
str (string): The input string containing characters. The length of the string can range from 0 to 10.
Output: Print all the subsequences of the input string.

## Example
Here's how you can use the printAllSubsequences function:
```
const inputString = "abc";
console.log("Subsequences of 'abc':");
printAllSubsequences(inputString);
```

Expected output:
Subsequences of 'abc':
a
b
ab
c
ac
bc
abc

## Constraints
The input string contains only lowercase English letters.

## Note
A subsequence is a sequence of characters that appears in the same order as in the original string, but not necessarily consecutively.
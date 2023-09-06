# Check If an Array is Sorted in Strictly Descending Order

## Problem Statement

You are given an array of integers. Your task is to write a JavaScript function that determines whether the array is sorted in strictly descending order. In other words, the elements in the array should be in decreasing order from left to right, with no equal elements allowed.

## Input
arr (array of integers): An array of integers. The length of the array can range from 0 to 10^5.

## Output
true if the array is sorted in strictly descending order.
false otherwise.

## Example
Here's how you can use the isStrictlyDescending function:

```javascript
const descendingArray = [5, 4, 3, 2, 1];
const ascendingArray = [1, 2, 3, 4, 5];

console.log(isStrictlyDescending(descendingArray)); // Expected output: true
console.log(isStrictlyDescending(ascendingArray)); // Expected output: false
```

## Function Signature

```javascript
function isStrictlyDescending(arr) {
  // Your code here
}

## Constraints
The elements in the array are integers within the range of a 32-bit signed integer.
Note
The array is considered sorted in strictly descending order if every element is less than the one that follows it.


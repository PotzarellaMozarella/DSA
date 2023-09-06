# Move 'x' to the End of the String

## Problem Description

You are given a string containing various characters, including the character 'x'. Your task is to write a program or function to move all occurrences of 'x' to the end of the string while maintaining the relative order of other characters.

## Example

Input: "axbxccxdxe"

Output: "abcdexxxx"


## Instructions

You are required to create a program or function that takes a string as input and returns a new string with all 'x' characters moved to the end of the string. The order of other characters should remain unchanged.

Here are the steps to follow:

1. Traverse the input string character by character.

2. Maintain two strings: one for characters other than 'x' and one for 'x' characters.

3. While traversing, if the current character is 'x', append it to the 'x' string; otherwise, append it to the string for other characters.

4. After the traversal is complete, concatenate the two strings, with the 'x' string followed by the other characters string.

5. Return the resulting string as the output.

## Example Usage

```javascript
const inputString = "axbxccxdxe";
const result = moveXToEnd(inputString);
console.log(result); // Output: "abcdexxxx"
````
## Constraints
The input string may contain both lowercase and uppercase letters.
The input string may contain spaces and special characters.
The solution should work efficiently for large input strings.
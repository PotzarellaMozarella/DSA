function moveXToEnd(str, newStr = "", xStr = "", idx = 0) {
    // Base case: If we've reached the end of the input string, concatenate newStr and xStr and return the result
    if (idx == str.length) {
      return newStr + xStr;
    }
    
    // Check if the current character is "x" or not
    if (str[idx] === "x") {
      // If it's "x", append it to xStr
      xStr += "x";
    } else {
      // If it's not "x", append it to newStr
      newStr += str[idx];
    }
  
    // Make a recursive call to process the next character in the string
    return moveXToEnd(str, newStr, xStr, idx + 1);
  }
const inputString = "axbxccxdxe";
const result = moveXToEnd(inputString);
console.log(result); // Output: "abcdexxxx"

// TC: O(N)
// SC: O(N)
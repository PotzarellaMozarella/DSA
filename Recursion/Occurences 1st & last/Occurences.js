function findFirstAndLastOccurrence(str, target, index = 0, first = -1, last = -1) {
    // Base case: If we reach the end of the string, return the first and last occurrences
    if (index === str.length) {
      return [first, last];
    }
  
    // If the current character matches the target, update the first and last indices
    if (str[index] === target) {
      if (first === -1) {
        first = index;
      }
      last = index;
    }
  
    // Recursively check the next character
    return findFirstAndLastOccurrence(str, target, index + 1, first, last);
  }
  
  // Test the function
  const inputString = "Hello, World!";
  const targetChar = "o";
  const [firstOccurrence, lastOccurrence] = findFirstAndLastOccurrence(inputString, targetChar);
  console.log(`First Occurrence: ${firstOccurrence}`);
  console.log(`Last Occurrence: ${lastOccurrence}`);
  
// TC: O(N) 
// SC: O(1)- constant 
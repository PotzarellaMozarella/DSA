function reverseString(str) {
    // Base case: If the string has only one character or is empty, return it
    if (str.length <= 1) {
      return str;
    }
  
    // Recursive case: Reverse the substring excluding the first character
    // and then append the first character at the end
    console.log(str)
    console.log(str.length)
    return reverseString(str.slice(1)) + str[0];
  }
  
  // Test the function
  const inputString = "Hello, World!";
  const reversedString = reverseString(inputString);
  console.log(reversedString);
  
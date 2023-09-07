// Approach 1
function getAllSubstrings1(str) {
    // Create an empty array to store the result (substrings)
    let result = [];

    // Define a recursive function to generate substrings
    function recurse(startIndex, endIndex) {
        // Base case: If endIndex reaches the length of the input string, stop recursion
        if (endIndex === str.length) {
            return;
        }

        // Recursive case: If startIndex is greater than endIndex, reset startIndex and increment endIndex
        if (startIndex > endIndex) {
            recurse(0, endIndex + 1);
        } else {
            // If not, slice the substring from startIndex to endIndex and add it to the result array
            result.push(str.slice(startIndex, endIndex + 1));

            // Recursively call the function with the next startIndex and the same endIndex
            recurse(startIndex + 1, endIndex);
        }
    }

    // Start the recursion with initial values (both startIndex and endIndex are 0)
    recurse(0, 0);

    // Return the array containing all the generated substrings
    return result;
}
// TC: O(N^2)
// SC: O(N)

// Approach 2 
function getAllSubstrings2(str) {
    // Create an empty array to store the result (substrings)
    let result = [];

    // Loop through the string starting from the first character (start index)
    for (let start = 0; start < str.length; start++) {
        // Initialize an empty string to store the current substring
        let subStr = "";

        // Nested loop to iterate through the string from the current start index
        for (let end = start; end < str.length; end++) {
            // Append the current character to the substring
            subStr += str[end];

            // Add the current substring to the result array
            result.push(subStr);
        }
    }

    // Return the array containing all the generated substrings
    return result;
}
// TC: O(N^2)
// SC: O(N)

// Test the function
const inputStr = "wxyz";
console.log(getAllSubstrings1(inputStr));
console.log(getAllSubstrings2(inputStr));
function getAllSubstrings(str) {
    // Create an empty array to store the result (substrings)
    let result = new Set([]);

    // Loop through the string starting from the first character (start index)
    for (let start = 0; start < str.length; start++) {
        // Initialize an empty string to store the current substring
        let subStr = "";

        // Nested loop to iterate through the string from the current start index
        for (let end = start; end < str.length; end++) {
            // Append the current character to the substring
            subStr += str[end];

            // Add the current substring to the result array
            result.add(subStr);
        }
    }

    // Return the array containing all the generated substrings
    return result;
}
// TC: O(N^2)
// SC: O(N)

// Test the function
console.log(getAllSubstrings("wxyz"));
console.log(getAllSubstrings("aaaa"));

// Approach 1
function removeDuplicates1(str, idx = 0, newStr = "") {
    // Base case: If we've reached the end of the string, return the new string with duplicates removed
    if (idx == str.length) {
        return newStr;
    }

    // Check if the current character is already in the new string
    if (newStr.includes(str[idx])) {
        // If it's a duplicate, skip it and continue to the next character
        return removeDuplicates1(str, idx + 1, newStr);
    } else {
        // If it's not a duplicate, append it to the new string
        newStr += str[idx];
    }

    // Recursively process the next character in the string
    return removeDuplicates1(str, idx + 1, newStr);
}
// TC: O(N)
// SC: O(N)

//approach 2
function removeDuplicates2(str) {
    // Base case: If the string is empty or has only one character, return it
    if (str.length <= 1) return str
    // Check if the first character is found later in the string
    // If found, recursively call removeDuplicates on the rest of the string
    if (str.slice(1).includes(str[0])) return removeDuplicates2(str.slice(1))
    // If not found, concatenate the first character with the result of
    // recursively calling removeDuplicates on the rest of the string
    else return str[0] + removeDuplicates2(str.slice(1))
}
// TC: O(N)
// SC: O(1)
const inputString = "hello";
console.log(removeDuplicates1(inputString)); // Expected output: "helo"
console.log(removeDuplicates2(inputString)); // Expected output: "helo"
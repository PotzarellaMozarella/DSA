function letterCombinations(digits) {
    let result = [];
    if (digits === "") return result;

    // Create an object for keypad combinations
    const keypadCombinations = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    };

    // Define a recursive function to print letter combinations
    function printComb(digits, index, combination) {
        // Base case: If we've processed all digits, push the combination to the result array
        if (index === digits.length) {
            result.push(combination);
            return;
        }

        // Get the current digit
        let currChar = digits[index];

        // Get the corresponding letters for the current digit from the object
        let mapping = keypadCombinations[currChar];

        // Iterate through the letters for the current digit
        for (let i = 0; i < mapping.length; i++) {
            // Recursively call the function with the next digit and updated combination
            printComb(digits, index + 1, combination + mapping[i]);
        }
    }

    // Call the printComb function with the initial values
    printComb(digits, 0, "");

    return result;
}
// TC: O(3^N * 4^M)
// SC: O(N + M)

// Test the function with input digits "23"
console.log(letterCombinations("236"));

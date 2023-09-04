function fibonacciRecursive(n) {
    if (n <= 1) {
        return n; // Fibonacci of 0 is 0, and Fibonacci of 1 is 1
    }
    return fibonacciRecursive(n-1)+fibonacciRecursive(n-2)
}
// TC: O(N^2)
// SC: O(N)

function fibonacciIterative(n) {
    if (n <= 1) {
        return n; // Fibonacci of 0 is 0, and Fibonacci of 1 is 1
    }
    let prev = 0;
    let curr = 1;
    // Start the loop from index 2 since we've already set prev and curr for the first two Fibonacci numbers.
    for (let index = 2; index <= n; index++) {
        // Update curr to the next Fibonacci number and shift prev to the previous Fibonacci number.
        [curr, prev] = [prev + curr, curr];
    }
    return curr; // Return the nth Fibonacci number.
}
// TC: O(N)
// SC: O(C)

console.log(fibonacciIterative(5));   // Expected Output: 3
console.log(fibonacciRecursive(5));   // Expected Output: 3

console.log(fibonacciIterative(8));   // Expected Output: 13
console.log(fibonacciRecursive(8));   // Expected Output: 13

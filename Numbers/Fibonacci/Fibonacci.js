function fibonacciIterative(n) {
    if (n <= 1) {
        return n
    }
    let prev = 0;
    let curr = 1;

    for (let index = 2; index < n; index++) {
        [curr, prev] = [prev + curr, curr]
    }
    return curr;
}

console.log(fibonacciIterative(5));   // Expected Output: 5
// console.log(fibonacciRecursive(5));   // Expected Output: 5

console.log(fibonacciIterative(8));   // Expected Output: 21
// console.log(fibonacciRecursive(8));   // Expected Output: 21

// 'arr' is the input array, and 'idx' is the current index being checked (defaulted to 0).
function isStrictlyDescending(arr, idx = 0) {
    // Base case: If the current index is the last element in the array, return true,
    // as a single element array is always considered strictly descending.
    if (idx == arr.length - 1) return true;

    // Check if the current element is greater than or equal to the next element.
    // If true, return false, as it violates the strictly descending order.
    if (arr[idx] >= arr[idx + 1]) return false;
    // If the current element is less than the next element, continue checking the next pair.
    else return isStrictlyDescending(arr, idx + 1);
}

const descendingArray = [5, 4, 3, 2, 1];
const ascendingArray = [1, 2, 3, 4, 5];
console.log(isStrictlyDescending(descendingArray)); // Expected output: true
console.log(isStrictlyDescending(ascendingArray)); // Expected output: false

// TC: O(N)
// SC: O(N)
// with 'n' disks, moving them from 'src' to 'dest' using 'helper' as an auxiliary tower.
function towersOfHanoi(n, src, helper, dest) {
    
    // Base case: If there's only one disk to move, simply move it from 'src' to 'dest'.
    if (n == 1) {
        console.log(`Transfer disk ${n} from ${src} to ${dest}`);
        return;
    }

    // Recursive step:
    // Move 'n-1' disks from 'src' to 'helper' using 'dest' as an auxiliary tower, leaving the biggest disk
    towersOfHanoi(n - 1, src, dest, helper);

    // Move the largest disk 'n' from 'src' to 'dest'.
    console.log(`Transfer disk ${n} from ${src} to ${dest}`);

    // Recursive step:
    // Move the 'n-1' disks from 'helper' to 'dest' using 'src' as an auxiliary tower.
    towersOfHanoi(n - 1, helper, src, dest);
}

towersOfHanoi(3, "source", "helper", "destination");

// TC: O(2^N) - Exponential time complexity as the number of moves grows exponentially with the number of disks.
// SC: O(N) - Space complexity is linear as it depends on the depth of the recursive call stack.
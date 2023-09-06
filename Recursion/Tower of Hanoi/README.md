# Towers of Hanoi

## Assignment Description

This assignment focuses on solving the classic problem of the Towers of Hanoi using JavaScript. In this problem, you are presented with three towers and a varying number of disks with different sizes. The disks are initially sorted in ascending order of size on the first tower. The goal is to move all the disks from the first tower to the last tower while adhering to specific constraints:

1. Only one disk can be moved at a time.
2. A disk can be slid off the top of one tower onto another tower.
3. A disk cannot be placed on top of a smaller disk.

Your task is to write a JavaScript program that effectively solves the Towers of Hanoi problem using an appropriate data structure.

## Program Structure

The program you write should be structured to meet the following requirements:

- Implement a function, e.g., `towersOfHanoi(n)`, to calculate the sequence of moves required to solve the problem for `n` disks.

- The function should take the number of disks as input and return the sequence of moves or print them to the console.

- Implement a user-friendly interface for taking the number of disks as input and displaying the sequence of moves to solve the problem.

## Getting Started

You can get started with this assignment by:

1. Creating a new JavaScript file for your program, e.g., `towersOfHanoi.js`.

2. Designing the `towersOfHanoi` function to solve the problem.

3. Writing code to take user input for the number of disks and displaying the sequence of moves.

4. Documenting your code effectively, including comments for clarity.

5. Testing your program with different numbers of disks to ensure it works correctly.

## Example Usage

Here's an example of how your program should be used:

```javascript
console.log(towersOfHanoi(3));

// Expected Output:
// Move disk 1 from Tower 1 to Tower 3
// Move disk 2 from Tower 1 to Tower 2
// Move disk 1 from Tower 3 to Tower 2
// Move disk 3 from Tower 1 to Tower 3
// Move disk 1 from Tower 2 to Tower 1
// Move disk 2 from Tower 2 to Tower 3
// Move disk 1 from Tower 1 to Tower 3

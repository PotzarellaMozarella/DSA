# Towers of Hanoi

## Assignment Description

This assignment focuses on solving the classic problem of the Towers of Hanoi using stacks. In this problem, you are presented with three towers and a varying number of disks with different sizes. The disks are initially sorted in ascending order of size on the first tower. The goal is to move all the disks from the first tower to the last tower while adhering to specific constraints:

1. Only one disk can be moved at a time.
2. A disk can be slid off the top of one tower onto another tower.
3. A disk cannot be placed on top of a smaller disk.

Your task is to write a program that effectively solves the Towers of Hanoi problem using the stack data structure.

## Program Structure

The program you write should be structured to meet the following requirements:

- Implement a class, e.g., `TowerOfHanoi`, to represent the problem.

- The class should contain methods for initializing the problem, moving disks, and solving the problem.

- Implement a user-friendly interface for taking the number of disks as input and displaying the sequence of moves to solve the problem.


## Example Usage

Here's an example of how your program should be used:

```bash
Enter the number of disks: 3

Move disk 1 from Tower 1 to Tower 3
Move disk 2 from Tower 1 to Tower 2
Move disk 1 from Tower 3 to Tower 2
Move disk 3 from Tower 1 to Tower 3
Move disk 1 from Tower 2 to Tower 1
Move disk 2 from Tower 2 to Tower 3
Move disk 1 from Tower 1 to Tower 3

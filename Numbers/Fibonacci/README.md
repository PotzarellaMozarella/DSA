# Fibonacci Number Calculation

## Question

Write a program to calculate the nth Fibonacci number using both an iterative and a recursive approach.

## What is Fibonacci Number Calculation?

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. In mathematical terms, it can be defined as follows:

- F(0) = 0
- F(1) = 1
- F(n) = F(n-1) + F(n-2), for n > 1

The Fibonacci sequence starts as follows:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

The goal of this program is to calculate the nth Fibonacci number using two different methods: an iterative approach and a recursive approach.

## Instructions

1. Implement the `fibonacciIterative(n)` function that calculates the nth Fibonacci number using an iterative method.

2. Implement the `fibonacciRecursive(n)` function that calculates the nth Fibonacci number using a recursive method.

3. Test the functions with the provided examples:

   ```javascript
   console.log(fibonacciIterative(5));   // Expected Output: 5
   console.log(fibonacciRecursive(5));   // Expected Output: 5

   console.log(fibonacciIterative(8));   // Expected Output: 21
   console.log(fibonacciRecursive(8));   // Expected Output: 21


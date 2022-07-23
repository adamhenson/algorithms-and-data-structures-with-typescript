# Algorithms and Data Structures with TypeScript

The goal of this project is to help bridge the gap between textbook computer science concepts and the world of modern programming. It provides examples implementing fundamental algorithms and data structures in TypeScript.

- [How to Use this Project](#how-to-use-this-project)
  - [Install](#install)
  - [Build](#build)
  - [Test](#test)
  - [Contributing](#contributing)

---

# Table of Contents

This is a work in progress. All items that aren't linked are coming soon. PRs are welcomed!

- [Asymptotic runtime](./src/asymptotic-runtime/README.md#asymptotic-runtime)
  - [Time and Space Complexity](./src/asymptotic-runtime/time-and-space-complexity/README.md#time-and-space-complexity)
    - [Difference between Time and Space Complexity](./src/asymptotic-runtime/time-and-space-complexity/README.md#difference-between-time-and-space-complexity)
    - [Time Complexity](./src/asymptotic-runtime/time-and-space-complexity/README.md#time-complexity)
    - [Space Complexity](./src/asymptotic-runtime/time-and-space-complexity/README.md#space-complexity)
  - [Big O Notation](./src/asymptotic-runtime/big-o-notation/README.md#big-o-notation)
    - [How Does Big O Notation Work?](./src/asymptotic-runtime/big-o-notation/README.md#how-does-big-o-notation-work)
    - [Constant Time Complexity](./src/asymptotic-runtime/big-o-notation/constant-time-complexity/README.md#constant-time-complexity)
      - [Example](./src/asymptotic-runtime/big-o-notation/constant-time-complexity/README.md#example)
    - [Linear Time Complexity](./src/asymptotic-runtime/big-o-notation/linear-time-complexity/README.md#linear-time-complexity)
      - [Big O & Upper Bound](./src/asymptotic-runtime/big-o-notation/linear-time-complexity/README.md#big-o--upper-bound)
      - [Example](./src/asymptotic-runtime/big-o-notation/linear-time-complexity/README.md#example)
      - [Big O & Successive Iterations](./src/asymptotic-runtime/big-o-notation/linear-time-complexity/README.md#big-o--successive-iterations)
    - [Quadratic Time Complexity](./src/asymptotic-runtime/big-o-notation/quadratic-time-complexity/README.md#quadratic-time-complexity)
      - [Example](./src/asymptotic-runtime/big-o-notation/quadratic-time-complexity/README.md#example)
      - [Drop Non-Dominant Terms](./src/asymptotic-runtime/big-o-notation/quadratic-time-complexity/README.md#drop-non-dominant-terms)
      - [Iteration with Offset](./src/asymptotic-runtime/big-o-notation/quadratic-time-complexity/README.md#iteration-with-offset)
      - [Two Inputs](./src/asymptotic-runtime/big-o-notation/quadratic-time-complexity/README.md#two-inputs)
    - Polynomial Time Complexity
    - Logarithmic Time Complexity
    - Exponential Time Complexity
    - FactorialTime Complexity
- Data Structures
  - Difference between Linear and Non-linear Data Structures
  - Linear Data Structures
    - Array
    - [Linked List (Singly Linked List)](./src/data-structures/linear-data-structures/singly-linked-list/README.md)
    - Queue
    - [Stack](./src/data-structures/linear-data-structures/stack/README.md)
  - Non-Linear Data Structures
    - Heap
    - Sets and Posets
    - Hash Table
    - Tree
    - Graph
    - Binary Tree
    - Binary Search Tree (coming soon from @adamhenson)
    - Matrix
- Algorithms
  - Sorting Algorithms
    - Sorts for small sets
      - Bubble sort
      - Insertion sort
    - Sorts for large sets
      - Heap sort
      - Merge sort
      - Quick sort
    - Non-comparison sorts
      - Counting sort
      - Radix sort
      - Bucket sort
  - Searching Algorithms
    - Linear Search
    - Binary Search (coming soon from @adamhenson)
    - Ternary Search
    - Interpolation Search
    - Exponential Search
    - Fibonacci Search
    - Sublist Search
  - Greedy Algorithms
  - Dynamic Programming
  - Divide and Conquer

# How to Use this Project

This project itself is a "tree" directory structure based on the table of contents. Each directory within the `src` directory provides source code, tests and brief documentation explaining the concept, and how its implemented. The build outputs files in ES module format (otherwise known as "ESM" or "ECMAScript modules" or "JavaScript modules" or "JS modules"). Examples are documented to an extent that illustrates implementation of the concept but not necessarily proper API documentation as this is not a published project meant to be consumed.

#### Install

```bash
npm run install
```

#### Build

```bash
npm run build
```

#### Test

```bash
npm run test
```

# Contributing

Contributions are welcome. If you'd like to contribute, please open 2 PRs (1 before you've started to identify which part/s you'll be doing and the 2nd PR with your final changes to be reviewed).

**Example 1st PR**

``` diff
-    - Binary Search Tree
+    - Binary Search Tree (coming soon from @adamhenson)
```

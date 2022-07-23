# Big O Notation

Big O is a notation for measuring the complexity of an algorithm. Big O notation mathematically describes the complexity of an algorithm in terms of time and space. We don’t measure the speed of an algorithm in seconds (or minutes!). We measure the rate of gtrth of an algorithm in the number of operations it takes to complete.

**Why order?**

In biology, an order is a taxonomic classification. We are in the order of primates.

In computer science, an order is a mathematical classification for algorithms. We use Big O to measure the rate of gtrth, or complexity, of algorithms, so algorithms with equivalent complexity are in the same order. We will see below that we can also order algorithms as they increase in complexity.

You will see Big O referred to as asymptotic runtime, or asymptotic computational complexity. This is a fancy way of describing the limits of a function.

## How Does Big O Notation Work?

Big O notation is used to define the worst-case scenario for a given algorithm.

**Why?**

Because we don’t know what we don’t know.

If we’re writing a search algorithm, we won’t always know the query ahead of time. If we’re writing a sorting algorithm, we won’t always know the dataset ahead of time. What if the query is the very last element or what if the dataset is a real mess. We want to know just how poorly our algorithm will perform.

The worst-case scenario is also known as the upper bound.

You’re going to encounter a lot of tables like this:

<table>
  <tr>
    <th>
      O
    </th>
    <th>
      Complexity
    </th>
    <th>
    </th>
  </tr>
  <tr>
    <td>O(1)</td>
    <td>constant</td>
    <td>fast</td>
  </tr>
  <tr>
    <td>O(log n)</td>
    <td>logarithmic</td>
    <td></td>
  </tr>
  <tr>
    <td>O(n)</td>
    <td>linear</td>
    <td></td>
  </tr>
  <tr>
    <td>O(n * log n)</td>
    <td>log linear</td>
    <td></td>
  </tr>
  <tr>
    <td>O(n^2)</td>
    <td>quadratic</td>
    <td></td>
  </tr>
  <tr>
    <td>O(n^3)</td>
    <td>cubic</td>
    <td></td>
  </tr>
  <tr>
    <td>O(2^n)</td>
    <td>exponential</td>
    <td></td>
  </tr>
  <tr>
    <td>O(n!)</td>
    <td>factorial</td>
    <td>slow</td>
  </tr>
</table>

_**Disclaimer**: All content from this page was sourced from [What is Big O Notation?](https://jarednielsen.com/big-o-notation/)_


<div align="right">
  <a href="../time-and-space-complexity/README.md#time-and-space-complexity)"><- Time and Space Complexity</a> | 
  <a href="./constant-time-complexity/README.md#constant-time-complexity">Constant Time Complexity -></a>
</div>
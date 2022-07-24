# Big O Notation

> Big O is a notation for measuring the complexity of an algorithm. Big O notation mathematically describes the complexity of an algorithm in terms of time and space. We don’t measure the speed of an algorithm in seconds (or minutes!). We measure the rate of gtrth of an algorithm in the number of operations it takes to complete.

**Why order?**

In biology, an order is a taxonomic classification. We are in the order of primates.

In computer science, an order is a mathematical classification for algorithms. We use Big O to measure the rate of gtrth, or complexity, of algorithms, so algorithms with equivalent complexity are in the same order. We will see below that we can also order algorithms as they increase in complexity.

You will see Big O referred to as asymptotic runtime, or asymptotic computational complexity. This is a fancy way of describing the limits of a function.

<img alt="Big O Comparison" src="./big-o-comparison.png" />

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
    <td><a href="./constant-time-complexity/README.md">constant</a></td>
    <td>fast</td>
  </tr>
  <tr>
    <td>O(log <i>n</i>)</td>
    <td><a href="./logarithmic-time-complexity/README.md">logarithmic</a></td>
    <td></td>
  </tr>
  <tr>
    <td>O(<i>n</i>)</td>
    <td><a href="./linear-time-complexity/README.md">linear</a></td>
    <td></td>
  </tr>
  <tr>
    <td>O(<i>n</i> log <i>n</i>)</td>
    <td><a href="./linearithmic-time-complexity/README.md">linearithmic (or log linear)</a></td>
    <td></td>
  </tr>
  <tr>
    <td>O(<i>n</i><sup>2</sup>)</td>
    <td><a href="./quadratic-time-complexity/README.md">quadratic</a></td>
    <td></td>
  </tr>
  <tr>
    <td>O(<i>n</i><sup>3</sup>)</td>
    <td>cubic</td>
    <td></td>
  </tr>
  <tr>
    <td>O(2<sup><i>n</i></sup>)</td>
    <td><a href="./exponential-time-complexity/README.md">exponential</a></td>
    <td></td>
  </tr>
  <tr>
    <td>O(<i>n</i>!)</td>
    <td><a href="./factorial-time-complexity/README.md">factorial</a></td>
    <td>slow</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">
      Content from this page was sourced from <a href="https://jarednielsen.com/big-o-notation/">What is Big O Notation? | jarednielsen.com</a>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="../time-and-space-complexity/README.md#time-and-space-complexity)"><- Time and Space Complexity</a>
    </td>
    <td width="50%" align="right"> 
      <a href="./constant-time-complexity/README.md#constant-time-complexity">Constant Time Complexity -></a>
    </td>
  </tr>
</table>

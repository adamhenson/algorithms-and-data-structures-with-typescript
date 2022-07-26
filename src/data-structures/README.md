# Data Structures

> Data structures are one of the foundational parts of computer science. When we discuss the runtime of various algorithms, we assume the data is stored in an appropriate structure that allows it to be handled efficiently. Which structure is best depends on the type of data and how it will be accessed.

- Do we need random access, or is sequential access suffient?
- Will we always append data when writing, or do we need to be able to insert values as well?
- Are duplicate values allowed?
- Do we prefer the lowest possible access time or a strict upper bound on how long a given operation can take?

The answers to each of these questions play a role in how the data should be stored.

## Difference between Linear and Non-linear Data Structures

<img src="./data-structures-diagram.png" alt="Data structures diagram">

_Image from [GeeksForGeeks](https://www.geeksforgeeks.org/difference-between-linear-and-non-linear-data-structures/)_

<table>
  <tr>
    <th>Linear Data Structure</th>
    <th>Non-Linear Data Structure</th>
  </tr>
  <tr>
    <td>In a linear data structure, data elements are arranged in a linear order where each and every element is attached to its previous and next adjacent.</td>
    <td>In a non-linear data structure, data elements are attached in hierarchically manner.</td>
  </tr>
  <tr>
    <td>In linear data structure, single level is involved.</td>
    <td>Whereas in non-linear data structure, multiple levels are involved.</td>
  </tr>
  <tr>
    <td>Its implementation is easy in comparison to non-linear data structure.</td>
    <td>While its implementation is complex in comparison to linear data structure.</td>
  </tr>
  <tr>
    <td>In linear data structure, data elements can be traversed in a single run only.</td>
    <td>While in non-linear data structure, data elements can’t be traversed in a single run only.</td>
  </tr>
  <tr>
    <td>In a linear data structure, memory is not utilized in an efficient way.</td>
    <td>While in a non-linear data structure, memory is utilized in an efficient way.</td>
  </tr>
  <tr>
    <td>Its examples are: array, stack, queue, linked list, etc.</td>
    <td>While its examples are: trees and graphs.</td>
  </tr>
  <tr>
    <td>Applications of linear data structures are mainly in application software development.</td>
    <td>Applications of non-linear data structures are in Artificial Intelligence and image processing.</td>
  </tr>
</table>

<table>
  <tr>
    <td colspan="2">
      Content from this page was sourced from:
      <ul>
        <li><a href="https://www.geeksforgeeks.org/difference-between-linear-and-non-linear-data-structures/">Difference between Linear and Non-linear Data Structures | GeeksForGeeks</a></li>
        <li>A Programmer's Guide to Computer Science (Volume 1), by William M. Springer II, PhD</li>
      </ul> 
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="../asymptotic-runtime/README.md#asymptotic-runtime"><- Asymptotic Runtime</a>
    </td>
    <td width="50%" align="right">
      <a href="./linear-data-structures/README.md#linear-data-structures">Linear Data Structures -></a>
    </td>
  </tr>
</table>

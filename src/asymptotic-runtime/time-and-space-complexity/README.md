# Time and Space Complexity

> There are multiple ways to design an algorithm, or considering which one to implement in an application. When thinking through this, it’s crucial to consider the algorithm’s time complexity and space complexity.

## Difference Between Time and Space Complexity

#### Time Complexity

The time complexity of an algorithm is the amount of time taken by the algorithm to complete its process as a function of its input length, n. The time complexity of an algorithm is commonly expressed using asymptotic notations:

- Big O: O(_n_),
- Big Theta: Theta Θ(_n_)
- Big Omega: Omega Ω(_n_)

#### Space complexity

The space complexity of an algorithm is the amount of space (or memory) taken by the algorithm to run as a function of its input length, n. Space complexity includes both auxiliary space and space used by the input.

**Auxiliary space** is the temporary or extra space used by the algorithm while it is being executed. Space complexity of an algorithm is commonly expressed using Big O (O(n)) notation.

Many algorithms have inputs that can vary in size, e.g., an array. In such cases, the space complexity will depend on the size of the input and hence, cannot be less that O(n) for an input of size n. For fixed-size inputs, the complexity will be a constant O(1).

It's valuable for a programmer to learn how to compare performances of different algorithms and choose the best time-space complexity to solve a particular problem in the most efficient way possible.

~ All content from this page was sourced from [Time complexity vs. space complexity | educative](https://www.educative.io/answers/time-complexity-vs-space-complexity)

<a href="../README.md"><- Asymptotic Runtime</a> | 
<a href="../big-o-notation/README.md">Big O Notation -></a>

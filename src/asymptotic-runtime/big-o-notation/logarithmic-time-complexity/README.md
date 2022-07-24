# Logarithmic Time Complexity

**Syntax:** O(log _n_)

> An algorithm is said to run in logarithmic time if its time execution is proportional to the logarithm of the input size, and we mark it as O(log _n_). O(log _n_) algorithms never look at all the elements in the input. logarithmic time complexities usually apply to algorithms that eliminate large amounts of input elements in each step.

## Example: Binary Search

The classic example used to illustrate O(log _n_) is binary search. Binary search is an algorithm that finds the location of an argument in a sorted series by dividing the input in half with each iteration.

Let’s say we are given the following array and asked to find the position of the number `512`:

```typescript
const powers = [1, 2, 4, 8 ,16, 32, 64, 128, 256, 512];
 
const binarySearch = (arr: number[], num: number): string => {
  let startIndex = 0;
  let endIndex = (arr.length) - 1;

  while (startIndex <= endIndex) {
    const pivot = Math.floor((startIndex + endIndex) / 2);

    if (arr[pivot] === num) {
      return `Found ${num} at ${pivot}`;
    } else if (arr[pivot] < num) {
      startIndex = pivot + 1;
    } else {
      endIndex = pivot - 1;
    }
  }
  return `${num} not found`;
}

binarySearch(powers, 512);
```

In the first iteration of our while loop, we create a `pivot` at the median of our array. We then check `num` against the value at the array indexed by `pivot`.

- If `pivot` is equal to `num`, we return.
- If `pivot` is less than `num`, we change the value of our `startIndex` to the value of our `pivot` plus one.

**Why?**

If the value of `arr[pivot]` is less than `num`, we don’t need to check any of the elements below our `pivot` in the next iteration.

We just halved our input!

```
n / 2
```

- If `pivot` is greater than `num`, we change the value of our `endIndex` to the value of our `pivot` minus one.
- If the value of `array[pivot]` is greater than `num`, we don’t need to check any of the elements above our `pivot` in the next iteration.

In the next iteration, we create a new `pivot` at the median between our adjusted `startIndex` and `endIndex`, and again check the value of `arr[pivot]` against the value of `num`.

In the example above, we again halve our input. What’s half of half? A quarter.

```
n / 4
```

- In the third iteration, we halve the input again: `n / 8`
- In the final iteration, we find our number. There’s also nothing left to halve at that point.

By dividing our input with each iteration, we are inversing an exponent.

> When you see this pattern where the input is divided with each iteration, it’s O(log _n_).

<table>
  <tr>
    <td colspan="2">
      Content from this page was sourced from <a href="https://jarednielsen.com/big-o-logarithmic-time-complexity/">Big O Logarithmic Time Complexity | jarednielsen.com</a> and [Big O Notation — Time Complexity in Javascript | medium.com](https://medium.com/analytics-vidhya/big-o-notation-time-complexity-in-javascript-f97f356de2c4) 
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="../linear-time-complexity#linear-time-complexity"><- Quadratic Time Complexity</a>
    </td>
    <td width="50%" align="right"> 
      <a href="../linearithmic-time-complexity/README.md#linearithmic-time-complexity">Linearithmic Time Complexity -></a>
    </td>
  </tr>
</table>

# Constant Time Complexity

**Syntax:** O(1)

> No matter how many times you run your 'algorithm', it only needs to perform one operation to return the desired value. That's O(1), or constant time.

## Example

```typescript
const isPrime = (num: number): boolean | string => {
  if (num <= 1) {
    return true;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  return 'Who cares?';
}
```

What is our best-case scenario for this algorithm?

If `num` is less than or equal to `1`, we will only perform one operation and return.

That would be O(1).

What if `num` is not less than or equal to `1`? What if `num` does not match any of our conditions? What is our worst-case scenario?

It’s still O(1).

**Why?**

Even though we check multiple conditions before returning indifference, the order of, or rate of growth, is constant. The size of the input does not affect the number of operations performed. We know the upper bound, or worst-case scenario, in advance, and we know it will not change.

_**Disclaimer**: Some content from this page was sourced from [What is Big O Notation?](https://jarednielsen.com/big-o-notation/)_

<div align="right">
  <a href="../README.md"><- Big O Notation</a> | 
  <a href="./constant-time-complexity/README.md#linear-time-complexity">Linear Time Complexity -></a>
</div>

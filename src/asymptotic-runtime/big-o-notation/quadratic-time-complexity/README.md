# Quadratic Time Complexity

**Syntax:** O(_n_<sup>2</sup>)

> The number of operations it performs scales in proportion to the _square_ of the input.

## Example

What’s happening in this example?

```typescript
const fruit = [
  '🍓',
  '🍐',
  '🍊',
  '🍌',
  '🍍',
  '🍑',
  '🍎',
  '🍈',
  '🍊',
  '🍇',
];
 
const matcher = (array: string[]): string => {
   for (let i = 0; i < array.length; i++){
      for (let j = 0; j < array.length; j++){
        if (i !==j && array[i] === array[j]){
          return `Match found at ${i} and ${j}`;
        }
      }
   }
   return 'No matches found 😞'; 
}
```

We declare an array of fruit and pass it to our `matcher()` function. Our `matcher()` function then iterates over our array. For each element in the array, we then iterate over the array again. If the array indices are not the same and the elements at the indices are the same, then we return the locations of the matched fruit. If no matches are found, we return disappointment.

How many operations are performed?

Our outer loop is performing _n_ iterations. Our inner loop also performs _n_ iterations. But it performs _n_ iterations for every iteration of the outer loop.

When `i` is 0, we iterate `j` 10 times.

When `i` is 1, we iterate `j` 10 times.

Etc.

Rather than O(_n_) or O(_n_ + _n_), this is O(_n_ * _n_), or O(_n_<sup>2</sup>).

At this point, we are familiar with the following: O(1), O(_n_), and O(_n_<sup>2</sup>). For comparison, this table outlines their growth by number of inputs:

<table>
  <tr>
    <th>
      Big O
    </th>
    <th>
      # operations for 10 elements
    </th>
    <th>
      # operations for 100 elements
    </th>
    <th>
      # operations for 1000 elements
    </th>
  </tr>
  <tr>
    <td>O(1)</td>
    <td>1</td>
    <td>1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>O(<i>n</i>)</td>
    <td>10</td>
    <td>100</td>
    <td>1000</td>
  </tr>
  <tr>
    <td>O(<i>n</i><sup>2</sup>)</td>
    <td>100</td>
    <td>10000</td>
    <td>1000000</td>
  </tr>
</table>

As we can see, O(_n_<sup>2</sup>) isn't great to begin with and only gets worse as the size of the input increases.

## Drop Non-Dominant Terms

What's happening in this contrived example?

```typescript
const summer = (num: number, t = false) => {
  let sum = 0;

  if (t === 'quadratic'){
    for (i = 0; i <= num; i++) {
      for (j = 0; j < num; j++) {
        sum += j;
      }
    }
  } else if (t === 'linear') {
    for (i = 0; i <= num; i++) {
      sum += i;
    }
  } else {
    return num * (num + 1) / 2;
  }
  return sum;
}
```

- If our first condition is met, we run the nested iterations and the order of our function is O(_n_<sup>2</sup>).
- If our second condition is met, we run one iteration and the order of our function is O(_n_).
- If neither of the conditions are met, our function is O(1).

What is the actual order of our function? We could calculate this as O(_n_<sup>2</sup> + n + 1). Why would we not do this? When using Big O to measure the rate of growth of our algorithms, what do we really want to know?

We want to know the worst-case scenario. Here, it's _n_<sup>2</sup>. This is the dominant term. We learned earlier that we drop constant terms. We also drop _n_, the non-dominant term, because it doesn’t provide any meaningful additional information. Whether or not _n_ influences the rate of growth of our algorithm is irrelevant. With or without it, our algorithm is still quadratic.

What we really want to know is the order of our function, not the details of its specific implementation. So the example above is O(_n_<sup>2</sup>).

## Iteration with Offset

What happens if we make a small optimization to our `matcher()` algorithm?

```typescript
const fruit = [
  '🍓',
  '🍐',
  '🍊',
  '🍌',
  '🍍',
  '🍑',
  '🍎',
  '🍈',
  '🍊',
  '🍇',
];

const matcher = (array: string[]): string => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]){
        return `Match found at ${i} and ${j}`;
      }
    }
  }
  return 'No matches found 😞'; 
}
```

If we’re checking for a match, we know that it will never be in the same index in the array. We can initialize the inner loop with `let j = i + 1`, so the iterator of the inner loop will always be one element ahead of the outer loop. This allows us to remove the `i !== j` operation in the `if` statement.

Here’s the catch: how many times will the inner loop, `j`, run? Let's make a table!

<table>
  <tr>
    <th>
      <code>i</code>
    </th>
    <th>
      <code>j</code>
    </th>
    <th>
      number of iterations of <code>j</code>
    </th>
  </tr>
  <tr>
    <td>0</td>
    <td>0 + 1</td>
    <td>5 - 1 = 4</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1 + 1</td>
    <td>5 - 2 = 3</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2 + 1</td>
    <td>5 - 3 = 2</td>
  </tr>
  <tr>
    <td>3</td>
    <td>3 + 1</td>
    <td>5 - 4 = 1</td>
  </tr>
  <tr>
    <td>4</td>
    <td>4 + 1</td>
    <td>5 - 5 = 0</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>Total: 10</td>
  </tr>
</table>

Let's say we have an array with five elements. When the value of the iterator in our outer loop, `i`, is `0`, the value of the iterator in our inner loop, `j`, is the value of `i` plus `1`. As the value of `i` increases, the number of iterations performed by `j` decreases correspondingly.

What if our array length is variable, or, unknown? How would we calculate the number of iterations of our inner loop?

<table>
  <tr>
    <th>
      <code>i</code>
    </th>
    <th>
      <code>j</code>
    </th>
    <th>
      number of iterations of <code>j</code>
    </th>
  </tr>
  <tr>
    <td>0</td>
    <td>0 + 1</td>
    <td>n - 1</td>
  </tr>
  <tr>
    <td>1</td>
    <td>1 + 1</td>
    <td>n - 2</td>
  </tr>
  <tr>
    <td>2</td>
    <td>2 + 1</td>
    <td>n - 3</td>
  </tr>
  <tr>
    <td>...</td>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>n - 3</td>
    <td>n - 3 + 1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>n - 2</td>
    <td>n - 2 + 1</td>
    <td>1</td>
  </tr>
  <tr>
    <td>n - 1</td>
    <td>n - 1 + 1</td>
    <td>0</td>
  </tr>
</table>

- The first time our outer loop runs, our inner loop runs `n - 1`.
- The second time our outer loop runs, our inner loop runs `n - 2`.
- The third time, `n - 3`.

We can calculate this with the following equation:

```
n * ( n - 1 ) / 2
```

We can simplify this mathemagically. While it’s not exactly square, recall that in Big O, we're not interested in the details. So we drop the constants and multiply the terms with a result of _n_<sup>2</sup>.

Let’s visualize it: imagine a function that logs the pairs of `i` and `j`, with an output of the following:

```
[
      [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 0, 4 ] ],
                [ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ] ],
                          [ [ 2, 3 ], [ 2, 4 ] ],
                                    [ [ 3, 4 ] ]
]
```

See a pattern? It’s half a square matrix.

We could write that as:

```
( n * n ) / 2
```

If we drop the constant, the divisor, it’s just _n_<sup>2</sup>. Our function is comparing pairs, `i` and `j`. The total number of pairs to compare is `i * j`, or, because we are using the same input, `n * n`, or _n_<sup>2</sup>.

But! We are only comparing pairs where `j` is greater than `i`, which is approximately half of the total number of pairs.

We will never compare pairs where `j` is less than `i`.

Again, we can write this as:

```
( n * n ) / 2
```

And again, if we abstract away the details, it’s O(_n_<sup>2</sup>).

## Two Inputs

What if our function accepts two inputs of varying, indeterminate length?

```typescript
const matcher = (arr1: string[], arr2: string[]) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return `Match found at arr1[${i}] and arr2[${j}]`;
      }
    }
  }
  return 'No matches found 😞'; 
}
```

Is this O(_n_<sup>2</sup>)? Only if both arrays are equal in length, or `n`. Because we don't know what we don't know, we need to treat each value separately.

So this is O(n * m).

In mathematics, this is known as a multilinear function. Bust that out in your next technical interview!

<table>
  <tr>
    <td width="50%">
      Content from this page was sourced from <a href="https://jarednielsen.com/big-o-quadratic-time-complexity/">Big O Quadratic Time Complexity | jarednielsen.com</a>
    </td>
    <td width="50%">
      <div align="right">
        <a href="../linear-time-complexity#linear-time-complexity"><- Linear Time Complexity</a> | 
        <a href="../polynomial-time-complexity/README.md#polynomial-time-complexity">Polynomial Time Complexity -></a>
      </div>
    </td>
  </tr>
</table>

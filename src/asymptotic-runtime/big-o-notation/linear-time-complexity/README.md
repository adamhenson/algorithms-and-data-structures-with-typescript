# Linear Time Complexity

**Syntax:** O(_n_)

> The rate of growth scales in direct proportion to the number (_n_) of inputs.

For _n_ inputs, our algorithm might perform n operations. It might also perform fewer than _n_ operations, but we don't know what we don't know so we calculate its upper bound, or worst-case scenario.

We want to think about our algorithms in the abstract, not in terms of a specific implementation.

**Why?**

We want to know the order of a function so we can determine whether or not our algorithm is a sufficient solution for our problem or if we need to find a more efficient alternative.

We're not interested in the details. So we drop the constant terms. They don’t provide any meaningful additional information, whether we chart `2n + 1` or just `n`, we still get a linear rate of growth.

## Big O & Upper Bound

What if our algorithm, say a search function, returns its parameter after one operation? Would that be O(1)?

No. It’s still O(_n_).

**Why?**

Remember, with Big O, we measure the worst case scenario. Because we don’t know what we don’t know, our assumption for any algorithm is its upper bound. In a worst case scenario, an O(_n_) algorithm needs to perform its specified operations on every value in the input. When making our time complexity calculation, we want to know just how poorly an algorithm is going to perform.

## Example

We have an array of animals:

```typescript
const animals = [
  'ocelot',
  'octopus',
  'opossum',
  'orangutan',
  'orca',
  'oriole',
  'oryx',
  'osprey',
];
```

And let's say our task is to find the location of a specific animal in the array based on user input:

```typescript
for (const animal of animals) {
  if (animal === userInput) {
    return `Found ${userInput}`;
  };
};
```

If our user searches for "ocelot", how many operations are performed?

One. It’s the first item in our array, so our program will return after one operation.

That specific operation would be O(1).

But, if our user searches for "osprey", how many operations are performed?

Eight. That’s our upper bound and worst case scenario. For eight inputs, our algorithm will perform eight operations.

What if our array contained 100 animals?

The worst-case scenario would be 100 operations.

What about 1,000?

10,000?

100,000?

1,000,000?

All O(_n_).

You can see how linear complexity is fine for small inputs, but becomes a consideration when the size of the input increases.

## Big O & Successive Iterations

What if our algorithm performed multiple, successive iterations?

```typescript
const forwardBack = (num: number) => {
  for(let i = 0; i <= num; i += 1){
    console.log(i);
  }

  for(let i = num; i >= 0; i -= 1){
    console.log(i);
  }
}
```

What is the order of this? It's still O(_n_). Were you tempted to calculate it as O(2n)? Because O(_n_) + O(_n_) = O(2n)? What is 2? A constant. So we drop it.

> We only want to know the order of our function.

_**Disclaimer**: Some content from this page was sourced from [Big O Linear Time Complexity | jarednielsen.com](https://jarednielsen.com/big-o-linear-time-complexity/)_

<div align="right">
  <a href="../constant-time-complexity#constant-time-complexity"><- Constant Time Complexity</a> | 
  <a href="./quadratic-time-complexity/README.md#quadratic-time-complexity">Quadratic Time Complexity -></a>
</div>

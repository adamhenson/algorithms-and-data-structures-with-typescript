# Exponential Time Complexity

**Syntax:** O(2<sup><i>n</i></sup>)

> In exponential time algorithms, the growth rate doubles with each addition to the input (_n_), often iterating through all subsets of the input elements. Any time an input unit increases by 1, it causes you to double the number of operations performed.

Algorithms with this time complexity are usually used in situations where you don’t know that much about the best solution, and you have to try every possible combination or permutation on the data.

Exponential time complexity is usually seen in <strong>Brute-Force algorithms</strong>. These algorithms blindly iterate an entire domain of possible solutions in search of one or more solutions which satisfy a condition. They try to find the correct solution by simply trying every possible solution until they happen to find the correct one. This is obviously a not optimal way of performing a task, since it will affect the time complexity. Brute-Force algorithms are used in cryptography as attacking methods to defeat password protection by trying random strings until they find the correct password that unlocks the system.

## Example: Power Set

To understand the power set, let’s imagine you are buying a pizza. The store has many toppings that you can choose from, like pepperoni, mushrooms, bacon, and pineapple. Let’s call each topping A, B, C, D. What are your choices? You can select no topping (you are on a diet ;), you can choose one topping, or two or three or all of them, and so on. The power set gives you all the possibilities (BTW, there 16 with four toppings, as you will see later)

Finding all distinct subsets of a given set. For instance, let’s do some examples to try to come up with an algorithm to solve it:

```typescript
powerset('') // =>  ['']
powerset('a') // => ['', 'a']
powerset('ab') // => ['', 'a', 'b', 'ab']
```

Did you notice any pattern?

- The first returns an empty element.
- The second case returns the empty element + the 1st element.
- The 3rd case returns precisely the results of the 2nd case + the same array with the 2nd element b appended to it.

What if you want to find the subsets of abc? Well, it would be precisely the subsets of `ab` and again the subsets of ab with `c` appended at the end of each element.

As you noticed, every time the input gets longer, the output is twice as long as the previous one.

```typescript
function powerset(n = '') {
  const array = Array.from(n);
  const base = [''];

  const results = array.reduce((previous, element) => {
    const previousPlusElement = previous.map(el => {
      return `${el}${element}`;
    });
    return previous.concat(previousPlusElement);
  }, base);

  return results;
}
```

If we run that function for a couple of cases we will get:

```typescript
powerset('') // ...
// n = 0, f(n) = 1;
powerset('a') // , a...
// n = 1, f(n) = 2;
powerset('ab') // , a, b, ab...
// n = 2, f(n) = 4;
powerset('abc') // , a, b, ab, c, ac, bc, abc...
// n = 3, f(n) = 8;
powerset('abcd') // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 4, f(n) = 16;
powerset('abcde') // , a, b, ab, c, ac, bc, abc, d, ad, bd, abd, cd, acd, bcd...
// n = 5, f(n) = 32;
```

<table>
  <tr>
    <td colspan="2">
      Content from this page was sourced from:
      <ul>
        <li><a href="https://towardsdatascience.com/essential-programming-time-complexity-a95bb2608cac">Essential Programming | Time Complexity | Towards Data Science by Diego Lopez Yse</a></li>
        <li><a href="https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/">8 time complexities that every programmer should know | Adrian Mejia</a></li>
      </ul> 
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="../polynomial-time-complexity/README.md#polynomial-time-complexity"><- Polynomial Time Complexity</a>
    </td>
    <td width="50%" align="right"> 
      <a href="../factorial-time-complexity/README.md#factorial-time-complexity">Factorial Time Complexity -></a>
    </td>
  </tr>
</table>

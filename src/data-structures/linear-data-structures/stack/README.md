# Stack

> The stack data structure follows the rule of LIFO (Last In-First Out) where the data last added element is removed first. Push operation is used for adding an element of data on a stack and the pop operation is used for deleting the data from the stack. This can be explained by the example of books stacked together. In order to access the last book, all the books placed on top of the last book have to be safely removed.

~ [Overview of Data Structures | Set 1 (Linear Data Structures) | GeeksforGeeks](https://www.geeksforgeeks.org/overview-of-data-structures-set-1-linear-data-structures/)

<img src="./stack.png" alt="Stack" width="800" />
<em>Image from <a href="https://www.programiz.com/dsa/stack">Programiz</a></em>

# Characteristics

- Is a [linear data structure](https://www.geeksforgeeks.org/overview-of-data-structures-set-1-linear-data-structures/).
- Uses the LIFO (Last In-First Out) method of data processing.
- Supports basic operations:
  - `push` adds an item.
  - `pop` removes an item.
  - `isEmpty` checks whether the stack is empty.
  - `peek` reads the top item of the stack.
  - `size` gets the number of items of the stack.
- Other common operations:
  - `isFull` helps to determine whether the stack is filled or not.
  - `change` is used to change the element at the given position.
  - `display` is used to print all the elements available in the stack

# Advantages

- **Efficient data management**: Stack helps you manage the data in a LIFO (last in, first out) method, which is not possible with a Linked list and array.
- **Efficient management of functions**: When a function is called, the local variables are stored in a stack, and it is automatically destroyed once returned.
- **Control over memory**: Stack allows you to control how memory is allocated and deallocated.
- **Smart memory management**: Stack automatically cleans up the object.
- **Not easily corrupted**: Stack does not get corrupted easily; hence it is more secure and reliable.
- **Does not allow resizing of variables**: Variables cannot be resized.

# Disadvantages

- **Limited memory size:** Stack memory is very limited.
- **Chances of stack overflow**: Creating too many objects on the stack can increase the risk of stack overflow.
- **Random access is not possible**: In a stack, random accessing the data is not possible.
- **Unreliable**: When variable storage will get overwritten, it will sometimes leads to undefined behaviour of the function or program.
- **Undesired termination**: The stack will fall outside of the memory area, which might lead to an abnormal termination.

<em>Content of the above sections "advantages" and "disadvantages" was sourced from <a href="https://learningmadesimple360.blogspot.com/2021/08/advantages-and-disadvantages-of-stack.html">Advantages and Disadvantages of Stack | Learning Made Simple 360</a></em>

# Example Implementation

In [this example](./index.ts) we have a class `Stack` that optionally accepts an initial list and options upon instantiation. It implements a basic stack data structure, using the LIFO method of data processing. It enforces a max size limit if `options.limit` is set upon instantiation. If a push is attempted on a full stack, then it will throw an overflow error (specifically a JavaScript `RangeError`). Conversely, if a pop is attempted on an empty stack - it will throw an underflow error (specifically a JavaScript `RangeError`).

## Methods

- `Stack.isEmpty`
- `Stack.isFull`
- `Stack.peek`
- `Stack.push`
- `Stack.pop`
- `Stack.pop`

## Full Example

See [source code](./index.ts) and [tests](./index.test.ts) for complete implementation.

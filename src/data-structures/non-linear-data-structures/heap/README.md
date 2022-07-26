# Heap

> The name _queue_ comes from the analogy to a queue of customers at a bank. The customer who comes first will be served first, and the one who comes later is queued at the end of the queue and will be served later.

<img src="./queue-at-a-bank.png" alt="Queue at a bank" />

_Image from [JavaScript Tutorial](https://www.javascripttutorial.net/javascript-queue/)_

A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.

A queue works based on the first-in, first-out (FIFO) principle, which is different from a [stack](../stack/README.md#stack), which works based on the last-in, first-out (LIFO) principle.

A queue has two main operations:

- Insert a new element at the end of the queue, which is called enqueue.
- Remove an element from the front of the queue, which is called dequeue.

The following picture illustrates a queue:

<img src="./queue.png" alt="Queue at a bank" />

Another important operation of a queue is getting the element at the front called _peek_. Different from the _dequeue_ operation, the peek operation returns the element at the front without modifying the queue.

## Types of Queues

- **Simple Queue**: Simple queue also known as a linear queue is the most basic version of a queue. Here, insertion of an element i.e. the Enqueue operation takes place at the rear end and removal of an element i.e. the Dequeue operation takes place at the front end.
- **Circular Queue**:  In a circular queue, the element of the queue act as a circular ring. The working of a circular queue is similar to the linear queue except for the fact that the last element is connected to the first element. Its advantage is that the memory is utilized in a better way. This is because if there is an empty space i.e. if no element is present at a certain position in the queue, then an element can be easily added at that position.
- **Priority Queue**: This queue is a special type of queue. Its specialty is that it arranges the elements in a queue based on some priority. The priority can be something where the element with the highest value has the priority so it creates a queue with decreasing order of values. The priority can also be such that the element with the lowest value gets the highest priority so in turn it creates a queue with increasing order of values.
- **Dequeue**: Dequeue is also known as Double Ended Queue. As the name suggests double ended, it means that an element can be inserted or removed from both the ends of the queue unlike the other queues in which it can be done only from one end. Because of this property it may not obey the First In First Out property. 

# Advantages

- A large amount of data can be managed efficiently with ease.
Operations such as insertion and deletion can be performed with ease as it follows the first in first out rule.
- Queues are useful when a particular service is used by multiple consumers.
- Queues are fast in speed for data inter-process communication.
- Queues can be used in the implementation of other data structures.

# Disadvantages

- The operations such as insertion and deletion of elements from the middle are time consuming.
- Limited Space.
- In a classical queue, a new element can only be inserted when the existing elements are deleted from the queue.
- Searching an element takes [O(_n_)](../../../asymptotic-runtime/big-o-notation/linear-time-complexity/README.md#linear-time-complexity) time.
- Maximum size of a queue must be defined prior.

# Example Implementation

In [this example](./index.ts) we have the following methods to support the basic behavior of a queue as described in this document.

## Methods

- `Queue.dequeue`
- `Queue.enqueue`
- `Queue.isEmpty`
- `Queue.peek`
- `Queue.size`

## Full Example

See [source code](./index.ts) and [tests](./index.test.ts) for complete implementation.

<table>
  <tr>
    <td colspan="2">
      Content from this page was sourced from:
      <ul>
        <li><a href="https://www.javascripttutorial.net/javascript-queue/">JavaScript Queue | JavaScript Tutorial</a></li>
        <li><a href="https://www.geeksforgeeks.org/applications-advantages-and-disadvantages-of-queue/">Applications, Advantages and Disadvantages of Queue | GeeksForGeeks</a></li>
      </ul> 
    </td>
  </tr>
  <tr>
    <td width="50%">
      <a href="../stack/README.md#stack"><- Stack</a>
    </td>
    <td width="50%" align="right">
      <a href="../../non-linear-data-structures/README.md#non-linear-data-structures">Non-Linear Data Structures -></a>
    </td>
  </tr>
</table>

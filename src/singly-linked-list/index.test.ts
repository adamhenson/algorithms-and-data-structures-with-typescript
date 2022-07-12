import SinglyLinkedList, { LinkedListNode } from '.';

describe('SinglyLinkedList', () => {
  it('should instantiate with head node (undefined "next" as `null`)', () => {
    const headNode = new LinkedListNode('a');
    const list = new SinglyLinkedList(headNode);
    expect(list.head.data).toEqual('a');
    expect(list.head.next).toEqual(null);
  });

  it('should instantiate with head node (predefined "next")', () => {
    const headNode = new LinkedListNode('a');
    const nextNode = new LinkedListNode('b');
    headNode.next = nextNode;
    const list = new SinglyLinkedList(headNode);
    expect(list.head.data).toEqual('a');
    expect(list.head.next.data).toEqual('b');
  });

  it('should allow nodes to update outside of the list context', () => {
    const headNode = new LinkedListNode('a');
    const nextNode = new LinkedListNode('b');
    headNode.next = nextNode;
    const list = new SinglyLinkedList(headNode);
    expect(list.head.next.data).toEqual('b');
    nextNode.data = 'b-version-2';
    expect(list.head.next.data).toEqual('b-version-2');
  });

  describe('SinglyLinkedList.find', () => {
    it('should find a node by matching predicate', () => {
      const headNode = new LinkedListNode('a');
      const nextNode = new LinkedListNode('b');
      headNode.next = nextNode;
      const list = new SinglyLinkedList(headNode);
      const matchedNode = list.find((node) => node.data === 'b');
      expect(matchedNode.data).toEqual('b');
    });

    it(
      `should find a node by matching predicate ` +
        `after a node has been updated outside of the list context`,
      () => {
        const headNode = new LinkedListNode('a');
        const nextNode = new LinkedListNode('b');
        headNode.next = nextNode;
        const list = new SinglyLinkedList(headNode);
        nextNode.data = 'b-version-2';
        const matchedNode = list.find((node) => node.data === 'b-version-2');
        expect(matchedNode.data).toEqual('b-version-2');
      },
    );
  });

  describe('SinglyLinkedList.insert', () => {
    it('should insert a node', () => {
      const headNode = new LinkedListNode('a');
      const nextNode = new LinkedListNode('b');
      headNode.next = nextNode;
      const list = new SinglyLinkedList(headNode);
      list.insert(new LinkedListNode('c'));
      expect(list.head.data).toEqual('c');
      expect(list.head.next.data).toEqual('a');
      expect(list.head.next.next.data).toEqual('b');
    });
  });

  describe('SinglyLinkedList.removeFirst', () => {
    it('should remove the first node', () => {
      const headNode = new LinkedListNode('a');
      const nextNode = new LinkedListNode('b');
      const nextNextNode = new LinkedListNode('c');
      nextNode.next = nextNextNode;
      headNode.next = nextNode;
      const list = new SinglyLinkedList(headNode);
      list.removeFirst();
      expect(list.head.data).toEqual('b');
    });
  });

  describe('SinglyLinkedList.removeLast', () => {
    it('should remove the last node', () => {
      const headNode = new LinkedListNode('a');
      const nextNode = new LinkedListNode('b');
      const nextNextNode = new LinkedListNode('c');
      nextNode.next = nextNextNode;
      headNode.next = nextNode;
      const list = new SinglyLinkedList(headNode);
      list.removeLast();
      expect(list.head.next.data).toEqual('b');
      expect(list.head.next.next).toEqual(null);
    });
  });

  describe('SinglyLinkedList.remove', () => {
    it('should remove a node by matching predicate', () => {
      const headNode = new LinkedListNode('a');
      const nextNode = new LinkedListNode('b');
      const nextNextNode = new LinkedListNode('c');
      nextNode.next = nextNextNode;
      headNode.next = nextNode;
      const list = new SinglyLinkedList(headNode);
      list.remove((node) => node.data === 'b');
      expect(list.head.next.data).toEqual('c');
    });
  });
});

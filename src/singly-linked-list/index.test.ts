import SinglyLinkedList, { LinkedListNode } from '.';

describe('SinglyLinkedList', () => {
  let mockNode: LinkedListNode;

  beforeEach(() => {
    mockNode = {
      data: 'a',
      next: {
        data: 'b',
        next: null,
      },
    };
  });

  it('should instantiate with nodes', () => {
    const list = new SinglyLinkedList(mockNode);
    expect(list.head.data).toEqual('a');
    expect(list.head.next.data).toEqual('b');
  });

  describe('SinglyLinkedList.find', () => {
    it('should find a node by matching predicate', () => {
      const list = new SinglyLinkedList(mockNode);
      const bNode = list.find((node) => node.data === 'b');
      expect(bNode.data).toEqual('b');
    });
  });

  describe('SinglyLinkedList.insert', () => {
    it('should insert a node', () => {
      const list = new SinglyLinkedList(mockNode);
      list.insert({
        data: 'c',
        next: null,
      });
      expect(list.head.next.next.data).toEqual('c');
    });
  });

  describe('SinglyLinkedList.remove', () => {
    it('should remove a node by matching predicate', () => {
      const list = new SinglyLinkedList({
        ...mockNode,
        next: {
          ...mockNode.next,
          next: {
            data: 'c',
            next: null,
          },
        },
      });
      list.remove((node) => node.data === 'b');
      expect(list.head.next.data).toEqual('c');
    });
  });
});

export interface LinkedListNode {
  data: any;
  next: LinkedListNode | null;
}

export default class SinglyLinkedList {
  constructor(public head: LinkedListNode = null) {}

  find(
    predicate: (node: LinkedListNode, nextNode?: LinkedListNode) => boolean,
  ): LinkedListNode | null {
    let node = this.head;
    while (node !== null) {
      if (predicate(node, node.next)) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  insert(node: LinkedListNode) {
    const lastNode = this.find((node) => node.next === null);
    lastNode.next = node;
  }

  remove(predicate: (node: LinkedListNode) => boolean): LinkedListNode | null {
    const nodeBefore = this.find((_node, nextNode) => predicate(nextNode));
    if (!nodeBefore) {
      return null;
    }
    const { next: removedNode } = nodeBefore;
    nodeBefore.next = removedNode.next;
    return removedNode;
  }
}

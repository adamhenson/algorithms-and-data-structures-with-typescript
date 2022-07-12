export class LinkedListNode {
  constructor(
    private _data: any = null,
    private _next: LinkedListNode | null = null,
  ) {}

  get data(): any {
    return this._data;
  }

  set data(data: any) {
    this._data = data;
  }

  get next(): LinkedListNode | null {
    return this._next;
  }

  set next(node: LinkedListNode) {
    this._next = node;
  }
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

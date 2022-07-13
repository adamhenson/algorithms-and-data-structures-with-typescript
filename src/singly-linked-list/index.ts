export class LinkedListNode {
  constructor(
    protected _data: any = null,
    protected _next: LinkedListNode | null = null,
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

  find(predicate: (node: LinkedListNode) => boolean): LinkedListNode | null {
    let node = this.head;
    while (node !== null) {
      if (predicate(node)) {
        return node;
      }
      node = node.next;
    }
    return null;
  }

  insert(node: LinkedListNode) {
    node.next = this.head;
    this.head = node;
  }

  removeFirst(): LinkedListNode | null {
    const removed = this.head;
    this.head = this.head.next;
    return removed;
  }

  removeLast(): LinkedListNode | null {
    const removed = this.remove((node) => node.next === null);
    return removed;
  }

  remove(predicate: (node: LinkedListNode) => boolean): LinkedListNode | null {
    const nodeBefore = this.find((node) => predicate(node.next));
    if (!nodeBefore) {
      return null;
    }
    const { next: removedNode } = nodeBefore;
    nodeBefore.next = removedNode.next;
    return removedNode;
  }
}

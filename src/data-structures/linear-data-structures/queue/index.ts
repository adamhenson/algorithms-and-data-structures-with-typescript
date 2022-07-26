export default class Queue {
  constructor(
    protected _elements: Record<number, any> = {},
    protected _head = 0,
    protected _tail = 0,
  ) {}

  enqueue(element: any) {
    this._elements[this._tail] = element;
    this._tail++;
  }

  dequeue() {
    const item = this._elements[this._head];
    delete this._elements[this._head];
    this._head++;
    return item;
  }

  isEmpty(): boolean {
    return !this.size();
  }

  peek(): any {
    return this._elements[this._head];
  }

  size(): number {
    return this._tail - this._head;
  }
}

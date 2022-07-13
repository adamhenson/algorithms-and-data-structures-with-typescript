export const MESSAGE_ERROR_UNDERFLOW = 'Underflow error: the stack is empty';
export const MESSAGE_ERROR_OVERFLOW = 'Overflow error: the stack is full';

export default class Stack {
  protected _list: any[] = [];
  public limit = Infinity;

  constructor(
    list: any[] = [],
    options: {
      limit?: number;
    } = {},
  ) {
    if (list.length > options.limit) {
      throw new RangeError(MESSAGE_ERROR_OVERFLOW);
    }

    if (typeof options.limit === 'number') {
      this.limit = options.limit;
    }

    this._list = list;
  }

  isEmpty(): boolean {
    return !this.size();
  }

  isFull(): boolean {
    return this.size() >= this.limit;
  }

  peek(): any {
    return this._list[0];
  }

  pop(): void {
    if (this.isEmpty()) {
      throw new RangeError(MESSAGE_ERROR_UNDERFLOW);
    }
    this._list.shift();
  }

  push(element: any): void {
    if (this.isFull()) {
      throw new RangeError(MESSAGE_ERROR_OVERFLOW);
    }
    this._list.unshift(element);
  }

  size(): number {
    return this._list.length;
  }
}

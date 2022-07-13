import Stack from '.';

describe('Stack', () => {
  it('should instantiate with predefined list', () => {
    const stack = new Stack([0, 1, 2, 3], {
      limit: 4,
    });
    expect(stack.limit).toEqual(4);
    expect(stack.size()).toEqual(4);
  });

  it('should throw an error when predefined list is larger than set limit', () => {
    expect(() => {
      new Stack([1, 2, 3, 4], {
        limit: 3,
      });
    }).toThrow(RangeError);
  });

  describe('Stack.isEmpty', () => {
    it('should return true when stack is empty', () => {
      const stack = new Stack([]);
      expect(stack.isEmpty()).toBe(true);
    });

    it('should return false when stack is empty', () => {
      const stack = new Stack([1, 2, 3]);
      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe('Stack.isFull', () => {
    it('should return true when stack is full', () => {
      const stack = new Stack([1, 2, 3], { limit: 3 });
      expect(stack.isFull()).toBe(true);
    });

    it('should return false when stack is not full', () => {
      const stack = new Stack([1, 2, 3], { limit: 10 });
      expect(stack.isFull()).toBe(false);
    });
  });

  describe('Stack.peek', () => {
    it('should return the item at the top of the stack', () => {
      const stack = new Stack([1, 2, 3]);
      expect(stack.peek()).toBe(1);
    });
  });

  describe('Stack.pop', () => {
    it('should remove item from the top of the stack', () => {
      const stack = new Stack([1, 2, 3]);
      stack.pop();
      expect(stack.peek()).toBe(2);
    });
  });

  describe('Stack.push', () => {
    it('should add item at the top of the stack', () => {
      const stack = new Stack([1, 2, 3]);
      stack.push(0);
      expect(stack.peek()).toBe(0);
    });
  });

  describe('Stack.size', () => {
    it('should return number of items in the stack', () => {
      const stack = new Stack([1, 2, 3]);
      expect(stack.size()).toBe(3);
    });
  });
});

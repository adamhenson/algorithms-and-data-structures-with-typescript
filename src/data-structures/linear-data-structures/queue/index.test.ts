import Queue from '.';

describe('Queue', () => {
  describe('Queue.enqueue and Queue.peek', () => {
    it('should enqueue elements and return element at the front with peek', () => {
      const queue = new Queue();
      queue.enqueue('first in');
      queue.enqueue('another one');
      queue.enqueue('last in');
      expect(queue.peek()).toEqual('first in');
    });
  });

  describe('Queue.dequeue', () => {
    it('should dequeue elements and return element at the front with peek', () => {
      const queue = new Queue();
      queue.enqueue('first in');
      queue.enqueue('another one');
      queue.enqueue('last in');
      queue.dequeue();
      queue.dequeue();
      expect(queue.peek()).toEqual('last in');
    });
  });

  describe('Queue.isEmpty', () => {
    it('should return true when queue is empty', () => {
      const queue = new Queue();
      queue.enqueue('first in');
      queue.enqueue('another one');
      queue.enqueue('last in');
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).toBe(true);
    });

    it('should return false when queue is not empty', () => {
      const queue = new Queue();
      queue.enqueue('first in');
      queue.enqueue('another one');
      queue.enqueue('last in');
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe('Queue.size', () => {
    it('should return number of elements', () => {
      const queue = new Queue();
      queue.enqueue('first in');
      queue.enqueue('another one');
      queue.enqueue('last in');
      expect(queue.size()).toEqual(3);
    });
  });
});

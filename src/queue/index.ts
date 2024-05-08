class Queue<T> {
  items: T[] = [];

  enqueue(element: T): void {
    this.items.push(element);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  front(): T | undefined {
    return this.items[0];
  }
  size(): number {
    return this.items.length;
  }
}
const queue = new Queue<string>();

queue.enqueue("Hedwig");
queue.enqueue("Crookshanks");
queue.enqueue("Scabbers");

console.log(queue.front()); // Output: Hedwig
console.log(queue.dequeue()); // Output: Hedwig
console.log(queue.size()); // Output: 2

// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(value) {
    this.first.push(value);
  }

  remove() {
    while (this.first.peek()) {
      const temp = this.first.pop();
      this.second.push(temp);
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      const temp = this.second.pop();
      this.first.push(temp);
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      const temp = this.first.pop();
      this.second.push(temp);
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      const temp = this.second.pop();
      this.first.push(temp);
    }

    return record;
  }
}

module.exports = Queue;

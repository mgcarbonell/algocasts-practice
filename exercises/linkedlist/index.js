// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;


    while (node) {
      counter++;
      node = node.next
    }

    return counter;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    return this.getAt(this.size() - 1);
    // if (!this.head) return null;

    // let node = this.head;

    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }
    //   node = node.next
    // }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(int) {
    let index = 0;
    let node = this.head;

    while (node) {
      if (index === int) {
        return node;
      }
      index++;
      node = node.next;
    }

    return null;
  }

  removeAt(int) {
    if (!this.head) return;

    if (int === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(int - 1);

    if (!previous || !previous.next) return;
    previous.next = previous.next.next;
  }

  insertAt(data, int) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (int === 0) {
      // let newNode = new Node(data)
      // newNode.next = this.head;
      // this.head = newNode;
      // return
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(int - 1) || this.getLast();
    const node = new Node(data, previous.next)
    previous.next = node;
  }

  forEach(fn) {
    // if (!this.head) return;

    // let node = this.head;

    // while (node) {
    //   fn(node)
    //   node = node.next;
    // }
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // allows for...of to be used on LinkedList
  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList };

// insertLast(data) {
//   const newNode = new Node(data);

//   if (!this.head) {
//     this.head = newNode;
//   }

//   const last = this.getLast();

//   last.next = newNode;
// }
// if (this.head === null) {
  //   this.head = new Node(data, this.head);
    // } else {
    //   let temp;
    //   let newNode = new Node(data, this.head);
    //   temp = this.head;
    //   this.head = newNode;
    // }

  // removeLast() {
  //   if (!this.head) return;
  //   if (!this.head.next) return this.clear();

  //   let last = this.getLast();
  //   let node = this.head

  //   while (node) {
  //     if (node.next === last) {
  //       node.next = null;
  //     }
  //     node = node.next;
  //   }
  //   return last;
  // }
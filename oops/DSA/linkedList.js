class LinkedList {
  constructor(data) {
    this.node = {
      data: data,
      next: null,
    };
    this.head = this.node;
    this.tail = this.node;
  }
  addNode(data) {
    let newNode = {
      data: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
  }
  print() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + "->";
      current = current.next;
    }
    console.log(result);
  }
  deleteNode(data) {
    let current = this.head;
    let prev = null;

    while (current !== null && current.data !== data) {
      prev = current;
      current = current.next;
    }
    if (current === null) return;

    prev.next = current.next;
  }
  lengthOfNode() {
    let current = this.head;
    let len = 0;
    while (current !== null) {
      len++;
      current = current.next;
    }
    return len;
  }
  insertAtPostion(pos, data) {
    const len = this.lengthOfNode();
    if (len <= pos) {
      console.log("can't insert at this position");
      return;
    }
    // insert at the position if the head;
    const newNode = {
      data: data,
      next: null,
    };
    let current = this.head;
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let prev = null;
    while (pos !== 0 && current !== null) {
      prev = current;
      current = current.next;
      pos--;
    }
    prev.next = newNode;
    newNode.next = current;
  }
  reverseLinkedList() {
    let prev = null;
    let current = this.head;

    this.tail = current;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const node = new LinkedList(10);
node.addNode(20);
node.addNode(30);
node.addNode(40);
node.addNode(50);
node.addNode(60);
node.addNode(70);

// console.log(node);

// node.deleteNode(20);
node.insertAtPostion(0, 5);
node.reverseLinkedList();
node.print();
const len = node.lengthOfNode();
// console.log(node.tail.next);

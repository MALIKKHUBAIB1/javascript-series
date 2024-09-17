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
    let current = this.node;
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
  lengthOfNode(){
     let current = this.head;
     
  }
}

const node = new LinkedList(50);
node.addNode(10);
node.addNode(20);
node.addNode(30);
console.log(node);

// node.deleteNode(20);
node.print();

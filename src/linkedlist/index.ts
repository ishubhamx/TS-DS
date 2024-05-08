class ItemNode<T> {
  data: T;
  next: ItemNode<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ItemNode<T> | null;
  constructor() {
    this.head = null;
  }

  append(item: T) {
    const newNode = new ItemNode(item);

    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head || null;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  printList(){
    let current = this.head;
    while(current){
        console.log(current.data);
        current = current.next
    }
  }
}

const ll = new LinkedList<number>();
ll.append(1)
ll.append(2)
ll.append(3)
ll.printList()
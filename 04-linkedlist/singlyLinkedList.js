class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }
  findByValue(item) {
    let curNode = this.head.next;
    while (curNode && curNode.element !== item) {
      curNode = curNode.next;
    }
    if (!curNode) return -1;
    return curNode;
  }
  append(item) {
    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = new Node(item);
  }
  // 在指定节点的后面插入新节点
  insert(item, newItem) {
    const newElement = new Node(newItem);
    newElement.next = item.next;
    item.next = newElement;
  }
  findPrev(item) {
    let curNode = this.head;
    while (curNode.next && curNode.next !== item) {
      curNode = curNode.next;
    }
    if (!curNode.next) return -1;
    return curNode;
  }
  remove(item) {
    const preNode = this.findPrev(item);
    preNode.next = item.next;
  }
  display() {
    let curNode = this.head.next;
    let ret = "";
    while (curNode) {
      ret += "," + curNode.element;
      curNode = curNode.next;
    }
    console.log("ret:" + ret);
  }
}

const testLinkedList = new LinkedList();
testLinkedList.append("num1");
testLinkedList.append("num2");
testLinkedList.append("num3");
testLinkedList.append("num4");
testLinkedList.append("num5");

const testNode3 = testLinkedList.head.next.next.next;
// testLinkedList.remove(testNode3);
testLinkedList.insert(testNode3, "num3.5");
testLinkedList.display();
// console.log(testLinkedList.findByValue("num4"));
// console.log(testLinkedList.findByValue("num3"));

class Node {
  constructor(v) {
    this.value = v;
    this.next = null;
  }
}
class LinkedQueue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  /**
   * 尾部添加
   * 注意为空的情况
   */
  enqueue(v) {
    if (this.head === null) {
      this.head = new Node(v);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(v);
      this.tail = this.tail.next;
    }
  }
  /**
   * 头部删除
   */
  dequeue() {
    if (this.head === null) return -1;
    const tempNodeV = this.head.value;
    this.head = this.head.next;
    return tempNodeV;
  }
}

export default LinkedQueue;

// // Test
// const newQueue = new LinkedQueue();
// // 插入元素
// newQueue.enqueue(1);
// newQueue.enqueue(2);
// newQueue.enqueue(3);
// // 获取元素
// let res = 0;
// // console.log("-------获取dequeue元素------");
// while (res !== -1) {
//   res = newQueue.dequeue();
//   console.log(res);
// }

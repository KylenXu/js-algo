class CircularQueue {
  constructor(n) {
    this.len = n;
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }
  enqueue(v) {
    if ((this.tail + 1) % this.len === this.head) return false;
    this.queue[this.tail] = v;
    this.tail = ++this.tail % this.len;
    return true;
  }
  dequeue() {
    if (this.head === this.tail) return -1;
    const tempV = this.queue[this.head];
    this.head = ++this.head % this.len;
    return tempV;
  }
  display() {
    let i = this.head;
    let end = this.head > this.tail ? this.tail + this.len : this.tail;
    while (i < end) {
      console.log(this.queue[i]);
      i++;
      i = i % this.len;
    }
  }
}

export default CircularQueue;
// // Test
// const newCircularQueue = new CircularQueue(10);
// // 插入元素
// newCircularQueue.enqueue(1);
// newCircularQueue.enqueue(2);
// newCircularQueue.enqueue(3);
// newCircularQueue.dequeue();
// // 获取元素
// // console.log(newCircularQueue.queue)
// // newCircularQueue.display();
// newCircularQueue.enqueue(1);
// newCircularQueue.display();

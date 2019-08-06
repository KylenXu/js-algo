class ArrayQueue {
  constructor() {
    this.array = [];
  }
  enqueue(v) {
    // javascript中的数组支持扩容，不考虑超出长度的情况
    this.array.push(v);
  }
  dequeue() {
    const tempV = this.array.shift();
    if (tempV === undefined) return -1;
    return tempV;
  }
}

// Test
const newQueue = new ArrayQueue();
// 插入元素
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
// 获取元素
let res = 0;
// console.log("-------获取dequeue元素------");
while (res !== -1) {
  res = newQueue.dequeue();
  console.log(res);
}

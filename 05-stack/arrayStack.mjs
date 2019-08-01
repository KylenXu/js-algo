
// 数组模拟栈
export default class ArrayStack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop(item) {
    return this.items.pop(item);
  }
  clear() {
    this.items = [];
  }
  display() {
    return this.items;
  }
}